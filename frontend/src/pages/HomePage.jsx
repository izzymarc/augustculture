import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import ProductItem from '../components/ProductItem'; // Import ProductItem

function HomePage() {
  const [products, setProducts] = useState([]); // State to hold products

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  // Function to get featured products (for now, just first 3)
  const getFeaturedProducts = () => {
    return products.slice(0, 3); // Get the first 3 products as featured
  };

  const addToCart = (product) => {
    // Placeholder for addToCart functionality - adjust as needed
    alert(`${product.name} added to cart! (Homepage Featured)`);
  };


  return (
    <div className="home-page">
      <div className="hero-section" style={{backgroundImage: `url('https://images.unsplash.com/photo-1523381294911-8cd2cfef102d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8bG9vaGJvb2t8fHx8fDE2OT6836416&ixlib=rb-4.0.3&q=80&w=1200')`}}>
        <h2>August Culture</h2>
        <p>Timeless, Sophisticated Apparel for the Modern Woman.<br/>Explore our exclusive collections, crafted for the discerning woman seeking sophistication and modern grace.</p>
        <button className="shop-now-button">Shop New Arrivals</button>
      </div>
      <section className="featured-collection">
        <h2>Featured Collection</h2>
        <p className="section-description">Discover our hand-picked selection of featured items, showcasing the best of our current collection.</p>
        <div className="products-grid">
          {getFeaturedProducts().map(product => (
            <ProductItem key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </section>
      <section className="brand-story-section">
        <h2>Our Heritage</h2>
        <p className="section-description">Learn about August Culture's journey, our commitment to sustainable fashion, and the artisans behind our exquisite collections.</p>
        <p>Founded in the heart of the fashion district, August Culture began with a simple yet profound idea: to create clothing that embodies timeless elegance, crafted with integrity and designed for the modern woman. From our initial sketches to the final stitch, every piece reflects our dedication to quality, sustainability, and enduring style.</p>
        <button className="learn-more-button">Discover Our Story</button>
      </section>
    </div>
  );
}

export default HomePage;
