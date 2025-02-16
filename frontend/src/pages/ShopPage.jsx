import React, { useState, useEffect } from 'react';
import ProductItem from '../components/ProductItem';
import CartDrawer from '../components/CartDrawer';

function ShopPage() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [sortOrder, setSortOrder] = useState('default'); // 'default', 'price-low-high', 'price-high-low'
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  const getSortedProducts = () => {
    let sortedProducts = [...products];
    if (sortOrder === 'price-low-high') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'price-high-low') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    return sortedProducts;
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    setIsCartOpen(true); // Open cart drawer when item is added
    alert(`${product.name} added to cart!`); // Keep basic alert for now
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const toggleCartDrawer = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCartDrawer = () => {
    setIsCartOpen(false);
  };


  return (
    <div className="shop-page">
      <h2>Browse Our Collection</h2>
      <p style={{textAlign: 'center', fontSize: '1.1em', color: '#777', marginBottom: '30px', letterSpacing: '0.04em'}}>Explore the artistry of August Culture. Each piece is designed with meticulous attention to detail, ensuring both timeless style and exceptional quality.</p>

      <div className="shop-controls">
        <div className="sort-control">
          <label htmlFor="sort-by">Sort By:</label>
          <select id="sort-by" value={sortOrder} onChange={handleSortChange}>
            <option value="default">Default Sorting</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="products-grid">
        {getSortedProducts().map(product => (
          <ProductItem key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      <CartDrawer cart={cart} isOpen={isCartOpen} onClose={closeCartDrawer} />
    </div>
  );
}

export default ShopPage;
