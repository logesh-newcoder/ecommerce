const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const DATA_FILE = './boys.json';

app.get('/api/boys', (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
  res.json(data);
});

app.post('/api/boys', (req, res) => {
  const products = JSON.parse(fs.readFileSync(DATA_FILE));
  products.push(req.body);
  fs.writeFileSync(DATA_FILE, JSON.stringify(products, null, 2));
  res.status(201).json({ message: "Product added" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
