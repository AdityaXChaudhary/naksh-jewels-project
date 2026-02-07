import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import CartPage from './components/CartPage';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const isItemInCart = prevItems.find(item => item.id === product.id);
      if (isItemInCart) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
  const updateQuantity = (id, amount) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
      )
    );
  };
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <div className="App">
      {/* --- navbar --- */}
      <nav className="navbar">
        <div className="logo-container" onClick={() => setShowCart(false)}>
          <img 
            src="/images/logo.jpg" 
            alt="Naksh Jewels Logo" 
            className="navbar-logo" 
          />
          <h2 className="logo-text">NAKSH JEWELS</h2>
        </div>

        <button className="cart-button" onClick={() => setShowCart(!showCart)}>
          <span className="cart-icon">{showCart ? '🏠' : '🛒'}</span>
          <span className="cart-text">{showCart ? 'Shop' : 'Bag'}</span>
          {totalItems > 0 && (
            <span className="cart-count animate-pop">
              {totalItems}
            </span>
          )}
        </button>
      </nav>

      {/* --- main content --- */}
      <main className="container">
        {showCart ? (
          <div className="fade-in">
            <CartPage 
              cartItems={cartItems} 
              removeFromCart={removeFromCart} 
              updateQuantity={updateQuantity} 
            />
          </div>
        ) : (
          <div className="fade-in">
            <header className="hero-section">
              <h1>Timeless Elegance</h1>
              <p>Discover our curated collection of fine jewelry</p>
            </header>
            <ProductList addToCart={addToCart} />
          </div>
        )}
      </main>

      {/* --- footer --- */}
      <footer className="footer">
        <p>© 2026 Naksh Jewels. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;