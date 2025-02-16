import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

function CartDrawer({ cart, onClose, isOpen, setCart }) {

  if (!isOpen) {
    return null;
  }

  const incrementQuantity = (item) => {
    const updatedCart = cart.map(cartItem => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: (cartItem.quantity || 1) + 1 };
      }
      return cartItem;
    });
    setCart(updatedCart);
  };

  const decrementQuantity = (item) => {
    const updatedCart = cart.map(cartItem => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: Math.max(1, (cartItem.quantity || 1) - 1) };
      }
      return cartItem;
    });
    setCart(updatedCart);
  };

  const removeItem = (itemToRemove) => {
    const updatedCart = cart.filter(item => item.id !== itemToRemove.id);
    setCart(updatedCart);
  };


  return (
    <div className="cart-drawer open"> {/* Added "open" class directly for now for easier testing */}
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
                <div className="item-quantity-controls">
                  <button className="quantity-button" onClick={() => decrementQuantity(item)}>-</button>
                  <span className="item-quantity">{(item.quantity || 1)}</span>
                  <button className="quantity-button" onClick={() => incrementQuantity(item)}>+</button>
                </div>
                <button className="remove-item-button" onClick={() => removeItem(item)}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.5 5.25a.75.75 0 000 1.5h9a.75.75 0 000-1.5h-9z" clipRule="evenodd" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        )}
        {cart.length > 0 && (
          <div className="cart-total">
            <strong>Total: ${cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0)}</strong>
          </div>
        )}
      </div>
      {cart.length > 0 && (
        <div className="cart-drawer-footer"> {/* Cart Drawer Footer */}
          <Link to="/cart" className="view-cart-button">View Full Cart</Link> {/* "View Cart" Button */}
        </div>
      )}
    </div>
  );
}

export default CartDrawer;
