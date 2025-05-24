const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// File paths
const TSHIRT_FILE = './data/mens-tshirt.json';
const PANT_FILE = './data/mens-pant.json';

/** === MEN'S T-SHIRTS ROUTES === */
app.get('/api/mens/tshirt', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(TSHIRT_FILE, 'utf-8'));
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to read T-shirt data' });
  }
});

app.post('/api/mens/tshirt', (req, res) => {
  try {
    const products = JSON.parse(fs.readFileSync(TSHIRT_FILE));
    products.push(req.body);
    fs.writeFileSync(TSHIRT_FILE, JSON.stringify(products, null, 2));
    res.status(201).json({ message: 'T-shirt added' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to write T-shirt data' });
  }
});

/** === MEN'S PANTS ROUTES === */
app.get('/api/mens/pant', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(PANT_FILE, 'utf-8'));
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to read Pant data' });
  }
});

app.post('/api/mens/pant', (req, res) => {
  try {
    const products = JSON.parse(fs.readFileSync(PANT_FILE));
    products.push(req.body);
    fs.writeFileSync(PANT_FILE, JSON.stringify(products, null, 2));
    res.status(201).json({ message: 'Pant added' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to write Pant data' });
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
