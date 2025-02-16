import React from 'react';

function ProductQuickView({ product, onClose, addToCart }) {
  if (!product) {
    return null;
  }

  return (
    <div className="quick-view-modal">
      <div className="quick-view-content">
        <button className="quick-view-close" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
          </svg>
        </button>
        <div className="quick-view-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="quick-view-details">
          <h3>{product.name}</h3>
          <p className="quick-view-price">${product.price}</p>
          <p className="quick-view-description">{product.description}</p>
          <div className="product-meta">
            <span className="size">Sizes: S, M, L</span> | <span className="materials">Materials: Silk, Crepe</span> | <span className="care">Care: Dry Clean Only</span>
          </div>
          <button className="add-to-cart-button" onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductQuickView;
