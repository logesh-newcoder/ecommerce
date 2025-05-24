const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Correct file paths based on your directory structure
const TSHIRT_FILE = './mens/t-shirt/0-100.json';
const PANT_FILE = './mens/pant/0-100.json';

/** === MEN'S T-SHIRTS ROUTES === **/

// GET T-shirt data
app.get('/api/mens/tshirt', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(TSHIRT_FILE, 'utf-8'));
    res.json(data);
  } catch (err) {
    console.error("Error reading T-shirt file:", err);
    res.status(500).json({ error: 'Failed to read T-shirt data' });
  }
});

// POST T-shirt data
app.post('/api/mens/tshirt', (req, res) => {
  try {
    const products = JSON.parse(fs.readFileSync(TSHIRT_FILE, 'utf-8'));
    products.push(req.body);
    fs.writeFileSync(TSHIRT_FILE, JSON.stringify(products, null, 2));
    res.status(201).json({ message: 'T-shirt added' });
  } catch (err) {
    console.error("Error writing to T-shirt file:", err);
    res.status(500).json({ error: 'Failed to write T-shirt data' });
  }
});


/** === MEN'S PANTS ROUTES === **/

// GET Pant data
app.get('/api/mens/pant', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(PANT_FILE, 'utf-8'));
    res.json(data);
  } catch (err) {
    console.error("Error reading Pant file:", err);
    res.status(500).json({ error: 'Failed to read Pant data' });
  }
});

// POST Pant data
app.post('/api/mens/pant', (req, res) => {
  try {
    const products = JSON.parse(fs.readFileSync(PANT_FILE, 'utf-8'));
    products.push(req.body);
    fs.writeFileSync(PANT_FILE, JSON.stringify(products, null, 2));
    res.status(201).json({ message: 'Pant added' });
  } catch (err) {
    console.error("Error writing to Pant file:", err);
    res.status(500).json({ error: 'Failed to write Pant data' });
  }
});

// Start server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
