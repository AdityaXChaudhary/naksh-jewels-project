import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <div className="image-container">
        <img 
          src={product.image} 
          alt={product.name} 
          // Fallback image if yours aren't loading yet
          onError={(e) => { e.target.src = 'https://via.placeholder.com/250?text=Jewelry+Item'; }} 
        />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        {/* Formatting price to Indian Numbering System */}
        <p className="product-price">₹{product.price.toLocaleString('en-IN')}</p>
        
        <button 
          className="add-btn" 
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;