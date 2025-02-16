import React, { useState, useEffect } from 'react';
import ProductItem from '../components/ProductItem';

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  // Function to get a random subset of featured products
  const getFeaturedProducts = () => {
    if (products.length < 3) {
      return products; // Return all if less than 3 products
    }
    const shuffled = [...products].sort(() => 0.5 - Math.random()); // Shuffle array
    return shuffled.slice(0, 3); // Take first 3 from shuffled array
  };

  const addToCart = (product) => {
    // Placeholder for addToCart functionality - adjust as needed
    alert(`${product.name} added to cart! (Homepage Featured)`);
  };

  return (
    <div className="home-page">
      {/* Hero Section - Improved */}
      <div className="hero-section" style={{backgroundImage: `url('https://images.unsplash.com/photo-1523381294911-8cd2cfef102d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8bG9vaGJvb2t8fHx8fDE2OT6836416&ixlib=rb-4.0.3&q=80&w=1200')`}}>
        <div className="hero-content"> {/* Add a container for the content */}
          <h2>Timeless Elegance</h2>
          <p>Discover sophisticated apparel for the modern woman. Explore our exclusive collections, crafted for discerning tastes and modern grace.</p>
          <button className="shop-now-button">Explore New Arrivals</button>
        </div>
      </div>

      {/* Featured Collection - Improved */}
      <section className="featured-collection">
        <h2>Featured Collection</h2>
        <p className="section-description">
          Explore our hand-picked selection of featured items, showcasing a variety of styles from our collection.
        </p>
        <div className="products-grid">
          {getFeaturedProducts().map(product => (
            <ProductItem key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </section>

      {/* Brand Story - Improved */}
      <section className="brand-story-section">
        <h2>Our Heritage</h2>
        <p className="section-description">
          Learn about August Culture's journey, our commitment to sustainable fashion, and the artisans behind our exquisite collections.
        </p>
        <div className="brand-story-content">
          <p>
            Founded in the heart of the fashion district, August Culture began with a simple yet profound idea: to create clothing that embodies timeless elegance, crafted with integrity and designed for the modern woman. From our initial sketches to the final stitch, every piece reflects our dedication to quality, sustainability, and enduring style.
          </p>
          <button className="learn-more-button">Discover Our Story</button>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
