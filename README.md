🌐 KeniLand – Day-1 Backend Test (InfiniGods)
Procedural Land Generator + Blockchain-Integrated Metadata API

🚀 Built with love, speed, and clean Web3 architecture.

📌 Overview

This is my Day-1 backend submission for the InfiniGods technical test.

The goal of this project:

Create a new backend API that integrates with blockchain smart contracts and returns console-visible results.

I extended this slightly to showcase a game-ready workflow, while still keeping everything simple.

✨ What this API does

When you call:

GET /api/keni/land/:id


It generates:

✔ Procedural game traits

Based on the land ID — similar to how real Web3 games generate rarity.

✔ Blockchain-integrated metadataHash

Generated using:

keccak256(metadataJSON)

✔ Backend signature (WOW factor)

The metadataHash is signed by a backend wallet using:

signMessage(arrayify(metadataHash))


This can be used for:

Lazy minting

Secure reveal

Server-verified assets

✔ Optional: Reads from any ERC-721 contract

If you set EXAMPLE_ERC721 in .env.

🧪 Example API Output
{
  "metadata": {
    "landId": 42,
    "traits": {
      "biome": "Forest",
      "rarity": 29,
      "power": 3
    },
    "tokenURI": null,
    "generatedAt": "2025-11-18T04:17:45.664Z",
    "game": "KeniLand-Day1"
  },
  "metadataHash": "0x99287d88bbb49c956fe62edf8dac085e4e24c6229f63f221578fb35c9a50b3e0",
  "signature": "0x182a65929fabe...",
  "owner": null
}


Clean. Useful. Game-ready.

🗂 Project Structure
infinigods-test/
│
└── backend/
    ├── server.js
    ├── .env
    ├── package.json
    └── routes/
        └── KeniApiTest.js


Simple, clear, and exactly what was needed.

⚙️ Setup Instructions
1️⃣ Install dependencies
cd backend
npm install

2️⃣ Create .env file
RPC_URL=https://rpc.ankr.com/eth_sepolia
BACKEND_PK=0xYOUR_TEST_PRIVATE_KEY   # empty wallet for signing only
EXAMPLE_ERC721=                      # leave blank (optional)
PORT=3000

3️⃣ Start the server
npm start

4️⃣ Test the API

Open in browser:

http://localhost:3000/api/keni/land/42

🎮 Why This Fits InfiniGods

InfiniGods deals with:

Web3 game logic

Dynamic assets

Server-assisted metadata

Secure reveal systems

Smart contract-linked gameplay

This Day-1 backend showcases:

⭐ Procedural generation
⭐ Hash-verified metadata
⭐ Signed output for on-chain minting
⭐ Clean and scalable code
⭐ Exactly what a Web3 game backend does
🎥 Video Demo (to be attached)

Demonstrates:

Running the backend

Calling the /land/:id endpoint

Viewing traits, hash, and signature

Clean console & JSON output