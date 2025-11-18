require('dotenv').config();
const express = require('express');
const app = express();

const keniRoute = require('./routes/KeniApiTest');

app.use('/api', keniRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
