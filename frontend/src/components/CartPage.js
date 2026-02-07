import React from 'react';
const CartPage = ({ cartItems, removeFromCart, updateQuantity }) => {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  return (
    <div className="cart-view">
      <h2>Shopping Bag</h2>
      {cartItems.length === 0 ? (
        <p>Your bag is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} style={{width: '60px', borderRadius: '5px'}} />
              <div>
                <strong>{item.name}</strong><br/>
                <button className="remove-link" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
              <div className="qty-controls">
                <button className="qty-btn" onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button className="qty-btn" onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>
              <strong>₹{(item.price * item.quantity).toLocaleString('en-IN')}</strong>
            </div>
          ))}
          <div className="cart-total" style={{textAlign: 'right', marginTop: '30px', borderTop: '2px solid #eee', paddingTop: '20px'}}>
            <h3>Grand Total: ₹{total.toLocaleString('en-IN')}</h3>
            <button className="add-btn" style={{width: 'auto', padding: '15px 40px'}}>Checkout Now</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;