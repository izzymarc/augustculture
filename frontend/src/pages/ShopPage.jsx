import React, { useState, useEffect } from 'react';
import ProductItem from '../components/ProductItem';
import Cart from '../components/Cart';

function ShopPage() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="shop-page">
      <h2>Browse Our Collection</h2>
      <p style={{textAlign: 'center', fontSize: '1.1em', color: '#777', marginBottom: '50px', letterSpacing: '0.04em'}}>Explore the artistry of August Culture. Each piece is designed with meticulous attention to detail, ensuring both timeless style and exceptional quality.</p>
      <div className="products-grid">
        {products.map(product => (
          <ProductItem key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      <Cart cart={cart} />
    </div>
  );
}

export default ShopPage;
