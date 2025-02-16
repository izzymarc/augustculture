import React from 'react';

function CartDrawer({ cart, onClose, isOpen }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="cart-drawer">
      <div className="cart-drawer-header">
        <h3>Shopping Cart</h3>
        <button className="cart-drawer-close-button" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <div className="cart-drawer-content">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map(item => (
              <li key={item.id} className="cart-item">
                <div className="item-info">
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">${item.price}</span>
                </div>
                {/* Add quantity adjust and remove later */}
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
    </div>
  );
}

export default CartDrawer;
