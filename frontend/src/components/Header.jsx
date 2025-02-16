import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import CartDrawer from './CartDrawer'; // Import CartDrawer

function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [categories, setCategories] = useState([]); // State for categories in header nav
  const navigate = useNavigate(); // Hook for navigation


  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        // Extract unique categories from products
        const uniqueCategories = [...new Set(data.map(product => product.category))];
        setCategories(uniqueCategories);
      })
      .catch(error => console.error("Error fetching categories for header:", error));
  }, []);


  const toggleCartDrawer = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCartDrawer = () => {
    setIsCartOpen(false);
  };

  const getCartItemCount = () => {
    return cart.reduce((count, item) => count + (item.quantity || 1), 0);
  };

  const handleCategoryNavigation = (category) => {
    navigate(`/shop${category ? `?category=${category}` : ''}`); // Navigate to Shop with category param
  };


  return (
    <header>
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}><h1>August Culture</h1></Link>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li className="nav-item-dropdown"> {/* Dropdown for Shop */}
            <Link to="/shop">Shop</Link>
            <ul className="dropdown">
              {categories.map(category => (
                <li key={category}><button onClick={() => handleCategoryNavigation(category)}>{category}</button></li>
              ))}
            </ul>
          </li>
          <li><Link to="/lookbook">Lookbook</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>
            <button onClick={toggleCartDrawer} className="cart-icon-link header-cart-button"> {/* Use button to toggle */}
              Cart
              <span className="cart-icon"></span>
              {getCartItemCount() > 0 && <span className="cart-count">{getCartItemCount()}</span>} {/* Cart count */}
            </button>
          </li>
        </ul>
      </nav>
      <CartDrawer
        cart={cart}
        isOpen={isCartOpen}
        onClose={closeCartDrawer}
        setCart={setCart} // Pass setCart to CartDrawer
      /> {/* Render CartDrawer and pass setCart */}
    </header>
  );
}

export default Header;
