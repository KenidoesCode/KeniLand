const express = require('express');
const router = express.Router();
const { ethers } = require('ethers');
const crypto = require('crypto');

// connect to Sepolia
const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);

// optional ERC721 read
const EXAMPLE_ERC721 = process.env.EXAMPLE_ERC721 || null;
let nft = null;
if (EXAMPLE_ERC721) {
  const abi = [
    "function ownerOf(uint256 tokenId) view returns (address)",
    "function tokenURI(uint256 tokenId) view returns (string)"
  ];
  nft = new ethers.Contract(EXAMPLE_ERC721, abi, provider);
}

// backend signer
const backendWallet = new ethers.Wallet(process.env.BACKEND_PK, provider);

// simple deterministic game traits
function generateTraits(landId) {
  const seed = crypto.createHash('sha256').update(String(landId)).digest('hex');
  const rand = parseInt(seed.slice(0, 8), 16);

  const biomes = ["Plains", "Desert", "Forest", "Swamp", "Mountain", "Coast"];
  const biome = biomes[rand % biomes.length];
  const rarity = (rand % 100) + 1;

  return {
    biome,
    rarity,
    power: Math.floor(rarity / 10) + 1
  };
}

router.get('/keni/land/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    let owner = null;
    let tokenURI = null;

    if (nft) {
      try { owner = await nft.ownerOf(id); } catch (e) {}
      try { tokenURI = await nft.tokenURI(id); } catch (e) {}
    }

    const traits = generateTraits(id);

    const metadata = {
      landId: id,
      traits,
      tokenURI,
      generatedAt: new Date().toISOString(),
      game: "KeniLand-Day1"
    };

    const metadataHash = ethers.utils.keccak256(
      ethers.utils.toUtf8Bytes(JSON.stringify(metadata))
    );

    // sign metadata hash
    const signature = await backendWallet.signMessage(
      ethers.utils.arrayify(metadataHash)
    );

    return res.json({
      metadata,
      metadataHash,
      signature,
      owner
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

module.exports = router;
