import React from 'react';

function ProductItem({ product, addToCart }) {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} />
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
  );
}

export default ProductItem;
