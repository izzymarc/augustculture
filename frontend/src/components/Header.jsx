import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartDrawer from './CartDrawer'; // Import CartDrawer

function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]); // Ideally cart state should be managed globally

  const toggleCartDrawer = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCartDrawer = () => {
    setIsCartOpen(false);
  };


  return (
    <header>
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}><h1>August Culture</h1></Link>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/lookbook">Lookbook</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>
            <button onClick={toggleCartDrawer} className="cart-icon-link header-cart-button"> {/* Use button to toggle */}
              Cart
              <span className="cart-icon"></span>
            </button>
          </li>
        </ul>
      </nav>
      <CartDrawer cart={cart} isOpen={isCartOpen} onClose={closeCartDrawer} /> {/* Render CartDrawer */}
    </header>
  );
}

export default Header;
