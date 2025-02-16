import React, { useState, useEffect } from 'react';

function ShopPage() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]); // State to manage cart items

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]); // Add product to cart array
    alert(`${product.name} added to cart!`); // Basic feedback for now
  };

  return (
    <div className="shop-page">
      <h2>Browse Our Collection</h2>
      <p style={{textAlign: 'center', fontSize: '1.1em', color: '#777', marginBottom: '50px', letterSpacing: '0.04em'}}>Explore the artistry of August Culture. Each piece is designed with meticulous attention to detail, ensuring both timeless style and exceptional quality.</p>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} style={{ maxWidth: '100%', height: 'auto' }} />
            <h3>{product.name}</h3>
            <div className="product-details">
              <p className="description">{product.description}</p>
              <p className="price">${product.price}</p>
              <button className="add-to-cart-button" onClick={() => addToCart(product)}>Add to Cart</button>
              <div className="product-meta">
                <span className="size">Sizes: S, M, L</span> | <span className="materials">Materials: Silk, Crepe</span> | <span className="care">Care: Dry Clean Only</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Basic Cart Display - For testing purposes, can be moved to a separate Cart component later */}
      <div className="cart-preview">
        <h3>Shopping Cart Preview</h3>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ShopPage;
