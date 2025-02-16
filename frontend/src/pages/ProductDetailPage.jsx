import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function ProductDetailPage() {
  const { productId } = useParams();
  const [product, setProduct] = React.useState(null); // Changed useState import to React.useState
  const navigate = useNavigate();

  React.useEffect(() => { // Changed useEffect import to React.useEffect
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        const foundProduct = data.find(p => p.id === parseInt(productId));
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          navigate('/shop');
        }
      })
      .catch(error => {
        console.error("Error fetching products:", error);
        navigate('/shop');
      });
  }, [productId, navigate]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="product-detail-page">
      <div className="product-detail-image">
        <div className="image-zoom-container"> {/* Container for zoom */}
          <img src={product.image} alt={product.name} className="zoomable-image" /> {/* Added zoomable-image class */}
        </div>
      </div>
      <div className="product-detail-info">
        <h2>{product.name}</h2>
        <p className="product-detail-price">${product.price}</p>
        <p className="product-detail-description">{product.description}</p>
        <div className="product-meta">
          <span className="size">Sizes: S, M, L</span> | <span className="materials">Materials: Silk, Crepe</span> | <span className="care">Care: Dry Clean Only</span>
        </div>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetailPage;
