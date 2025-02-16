import React, { useState, useEffect } from 'react';

function ShopPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="shop-page">
      <h2>Browse Our Collection (DEBUGGING)</h2>
      <p style={{textAlign: 'center', fontSize: '1.1em', color: '#777', marginBottom: '30px', letterSpacing: '0.04em'}}>This is a simplified Shop Page for debugging.</p>

      <div className="products-grid">
        {products.length > 0 ? (
          <ul>
            {products.map(product => (
              <li key={product.id}>{product.name} - ${product.price}</li>
            ))}
          </ul>
        ) : (
          <p>No products loaded.</p>
        )}
      </div>

      <h3>**IMPORTANT: CHECK BROWSER DEVELOPER CONSOLE FOR ERRORS!**</h3>
    </div>
  );
}

export default ShopPage;
