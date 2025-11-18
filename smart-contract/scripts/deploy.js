import pkg from "hardhat";
const { ethers } = pkg;

async function main() {
  const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");
  
  const wallet = new ethers.Wallet(process.env.DEPLOYER_PK, provider);

  console.log("Deploying with account:", wallet.address);

  const KeniContractFactory = await ethers.getContractFactory("KeniContract", wallet);

  // Pass SIGNER argument (constructor expects 1 parameter)
  const contract = await KeniContractFactory.deploy(wallet.address);

  await contract.deployed();

  console.log("Contract deployed at:", contract.address);
  console.log("Signer set as:", wallet.address);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
