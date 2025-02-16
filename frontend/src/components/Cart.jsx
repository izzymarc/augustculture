import React from 'react';

// This Cart component is now replaced by CartDrawer
// Keeping it for reference or potential future use, but it's not used in ShopPage anymore

function Cart({ cart }) {
  return (
    <div className="cart-preview">
      <h3>Shopping Cart Preview</h3>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              <span>{item.name}</span>
              <span>${item.price}</span>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <div className="cart-total">
          <strong>Total: ${cart.reduce((total, item) => total + item.price, 0)}</strong>
        </div>
      )}
    </div>
  );
}

export default Cart;
