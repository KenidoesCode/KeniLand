require('dotenv').config();
const express = require('express');
const app = express();

const keniRoute = require('./routes/KeniApiTest');
const contractAPI = require('./routes/KeniContractAPI');
app.use('/api', contractAPI);

app.use('/api', keniRoute);
import ContractTest from "./routes/ContractTest.js";
app.use("/api/keni", ContractTest);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
