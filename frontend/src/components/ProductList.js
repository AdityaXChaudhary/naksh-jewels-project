import React from 'react';
import ProductCard from './ProductCard';
const ProductList = ({ addToCart }) => {
  const products = [
    { id: 1, name: "Gold Diamond Ring", price: 45000, image: "/images/ring.jpg" },
    { id: 2, name: "Emerald Necklace", price: 82000, image: "/images/necklace.jpg" },
    { id: 3, name: "Pearl Earrings", price: 12500, image: "/images/earrings.jpg" },
    { id: 4, name: "Luxury Bangle", price: 55000, image: "/images/bangle.jpg" },
  ];
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          addToCart={addToCart} 
        />
      ))}
    </div>
  );
};

export default ProductList;