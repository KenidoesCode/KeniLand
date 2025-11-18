const express = require('express');
const router = express.Router();
const { ethers } = require('ethers');

require('dotenv').config();

const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.RELAY_PK, provider); // relayer wallet

const contractAddress = process.env.KENI_CONTRACT_ADDR;
const abi = [
  "function setDataWithSignature(string _data, bytes32 metaHash, bytes sig) public",
  "function getData() public view returns(string)"
];

const contract = new ethers.Contract(contractAddress, abi, wallet);

router.post('/keni/write', express.json(), async (req, res) => {
  try {
    const { data, metaHash, signature } = req.body;

    const tx = await contract.setDataWithSignature(data, metaHash, signature);
    await tx.wait();

    res.json({ status: "updated", txHash: tx.hash });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.get('/keni/read', async (req, res) => {
  const result = await contract.getData();
  res.json({ storedData: result });
});

module.exports = router;
