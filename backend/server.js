const express = require('express');
const cors = require('cors');
const { body, validationResult } = require('express-validator');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
const products = [
  { id: 1, name: "Gold Diamond Ring", price: 499, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Silver Bracelet", price: 250, image: "https://via.placeholder.com/150" }
];

app.get('/api/products', (req, res) => res.json(products));

app.post('/api/cart', 
  body('productId').isInt(),
  body('quantity').isInt({ min: 1 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    res.status(201).json({ message: "Item added to cart" });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));