import express from "express";
import { ethers } from "ethers";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

import contractJSON from "../artifacts/contracts/KeniContract.sol/KeniContract.json" assert { type: "json" };

const contract = new ethers.Contract(
  process.env.CONTRACT_ADDRESS,
  contractJSON.abi,
  wallet
);

// GET stored data
router.get("/get", async (req, res) => {
  const data = await contract.getData();
  res.json({ storedData: data });
});

// SET stored data (unsigned simple write)
router.post("/set", async (req, res) => {
  const { text } = req.body;
  const tx = await contract.setDataWithSignature(
    text,
    ethers.utils.formatBytes32String(text),
    "0x" + "00".repeat(65) // dummy sig for local demo
  );

  await tx.wait();
  res.json({ success: true, tx: tx.hash });
});

export default router;
