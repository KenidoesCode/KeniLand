# 🌐 KeniLand — Web3 Procedural Land + Smart Contract Integration

### A clean, fast, production-inspired Web3 backend + smart contract system designed for game assets, metadata integrity, and signature-verified updates.

---

## 🚀 Overview

KeniLand is a **Web3-ready land metadata system** that generates game assets, hashes metadata, and securely validates updates through a **smart contract signature verification workflow**.

This project includes:

- 🟢 **Backend API**  
- 🟢 **Smart Contract (Solidity)**  
- 🟢 **Local Hardhat blockchain**  
- 🟢 **Deployment + Integration**  
- 🟢 **Signature-based data validation**  

Built for:  
✔ Web3 Games  
✔ Dynamic metadata  
✔ Server-verified asset logic  
✔ Secure off-chain → on-chain flows  

---


## 🔐 Smart Contract Summary (Solidity)

`KeniContract.sol` includes:

### ✔ Constructor with signer address  
Ensures only server-approved updates are accepted.

### ✔ Signature-verified data update  
Uses `ecrecover()` to validate backend signatures.

### ✔ Stored metadata fields  
- `storedData`  
- `lastHash`  
- `lastUpdatedBy`

### ✔ Helper for signature splitting  
Standard 65-byte signature handler.

---
## 🎮 Why This Matters

KeniLand demonstrates core Web3 game backend concepts:

Procedural metadata

Hash-verified payloads

Secure signature validation

Smart contract integration

Clean architecture

Local blockchain development

This architecture is the same pattern used in:

✔ Web3 games
✔ On-chain items
✔ NFT reveals
✔ Backend-verified mints
✔ Dynamic game metadata

## ⚙️ Local Development (Hardhat)

### 1️⃣ Start local blockchain

```bash
npx hardhat node


You will receive 10 accounts, each with 10,000 ETH, perfect for development.

2️⃣ Deploy the smart contract locally
npx hardhat run scripts/deploy.js --network localhost


You will see:

Deploying with account: 0x...
Contract deployed at: 0x...
Signer set as: 0x...


Copy the deployed address.

3️⃣ Update backend .env
RPC_URL=http://127.0.0.1:8545
PRIVATE_KEY=0x<local_private_key>
CONTRACT_ADDRESS=0x<deployed_local_contract>
PORT=3000


(Your .env is git-ignored → safe)

🧩 API Endpoints (Backend)
▶ Get stored metadata
GET /api/keni/get

▶ Write new data (signature-based or demo-mode)
POST /api/keni/set
Body:
{
  "text": "HelloKeni"
}

🧪 Example Output
{
  "storedData": "HelloKeni"
}

