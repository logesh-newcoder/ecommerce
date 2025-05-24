const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const DATA_FILE_1 = './mens/t-shirt/0-100.json';
const DATA_FILE_2 = './mens/t-shirt/101-200.json';

// First JSON file
app.get('/api/mens/0-100', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(DATA_FILE_1, 'utf-8'));
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to read data from 0-100 file' });
  }
});

app.post('/api/mens/0-100', (req, res) => {
  try {
    const products = JSON.parse(fs.readFileSync(DATA_FILE_1));
    products.push(req.body);
    fs.writeFileSync(DATA_FILE_1, JSON.stringify(products, null, 2));
    res.status(201).json({ message: "Product added to 0-100" });
  } catch (err) {
    res.status(500).json({ error: 'Failed to write to 0-100 file' });
  }
});

// Second JSON file
app.get('/api/mens/101-200', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(DATA_FILE_2, 'utf-8'));
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to read data from 101-200 file' });
  }
});

app.post('/api/mens/101-200', (req, res) => {
  try {
    const products = JSON.parse(fs.readFileSync(DATA_FILE_2));
    products.push(req.body);
    fs.writeFileSync(DATA_FILE_2, JSON.stringify(products, null, 2));
    res.status(201).json({ message: "Product added to 101-200" });
  } catch (err) {
    res.status(500).json({ error: 'Failed to write to 101-200 file' });
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
