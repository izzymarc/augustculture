import React, { useState } from 'react';
import ProductQuickView from './ProductQuickView';
import { Link } from 'react-router-dom';

function ProductItem({ product, addToCart }) {
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const [addToCartFeedback, setAddToCartFeedback] = useState(false); // State for feedback

  const openQuickView = () => {
    setQuickViewOpen(true);
  };

  const closeQuickView = () => {
    setQuickViewOpen(false);
  };

  const handleAddToCartClick = (e) => {
    e.preventDefault(); // Prevent default link behavior if ProductItem is wrapped in Link later
    addToCart(product);
    setAddToCartFeedback(true); // Show feedback
    setTimeout(() => {
      setAddToCartFeedback(false); // Hide feedback after delay
    }, 1500); // 1.5 seconds feedback duration
  };


  return (
    <div className="product-item">
      <Link to={`/shop/products/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <img src={product.image} alt={product.name} style={{cursor: 'pointer'}} />
      </Link>
      <div className="product-details">
        <h3><Link to={`/shop/products/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>{product.name}</Link></h3>
        <div className="product-meta">
          <span className="size">Sizes: S, M, L</span> | <span className="materials">Materials: Silk, Crepe</span>
        </div>
        <p className="price">${product.price}</p>
        <button className="add-to-cart-button" onClick={handleAddToCartClick}> {/* Call handleAddToCartClick */}
          Add to Cart
          {addToCartFeedback && <span className="add-to-cart-feedback-icon">✓</span>} {/* Checkmark icon */}
        </button>
      </div>

      {quickViewOpen && (
        <ProductQuickView product={product} onClose={closeQuickView} addToCart={addToCart} />
      )}
    </div>
  );
}

export default ProductItem;
