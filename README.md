# 🌐 KeniLand – Procedural Land Generator + Blockchain Metadata API

### 🏔️ A lightweight Web3-ready backend that generates procedural land traits, hashes metadata, and signs it for secure on-chain usage.

---

## ⚡ Overview

**KeniLand** is a backend API designed for Web3 games that need:

- Procedurally generated land attributes  
- Signed metadata for secure reveal / lazy minting  
- Blockchain-connected endpoints  
- A clean, modular API structure  

The system is intentionally simple, fast, and production-inspired.

---

## ✨ Features

### 🧬 Procedural Land Generation  
Each land ID produces unique but deterministic traits such as:  
- biome  
- rarity  
- power score  

This mimics real game asset generation logic.

---

### 🔗 Blockchain-Integrated Metadata Hash  
Every land object is converted into a hash using keccak256.  
This ensures data integrity and allows smart contracts to verify metadata.

---

### 🔐 Backend Signature (Web3 WOW Factor)  
The backend wallet signs the `metadataHash` using `signMessage(arrayify(metadataHash))`.

This enables advanced features like:  
- Lazy minting  
- Server-verified claims  
- Off-chain metadata reveal with on-chain validation

---

### 🧱 ERC-721 Compatibility (Optional)  
Set `EXAMPLE_ERC721` in `.env` to fetch:  
- `ownerOf(tokenId)`  
- `tokenURI(tokenId)`

---

## 🧪 API Example

### Endpoint
GET /api/keni/land/:id

csharp
Copy code

### Example Output
```json
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
    "game": "KeniLand"
  },
  "metadataHash": "0x99287d88bbb49c956fe62edf8dac085e4e24c6229f63f221578fb35c9a50b3e0",
  "signature": "0x182a65929fabe...",
  "owner": null
}


