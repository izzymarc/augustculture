import React from 'react';

function HomePage() {
  return (
    <div className="home-page">
      <div className="hero-section" style={{backgroundImage: `url('https://images.unsplash.com/photo-1523381294911-8cd2cfef102d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8bG9vaGJvb2t8fHx8fDE2OTY8MzY0MTY&ixlib=rb-4.0.3&q=80&w=1200')`}}>
        <h2>August Culture</h2>
        <p>Explore Timeless Style. Discover our exclusive collections, crafted for the discerning woman seeking sophistication and modern grace.</p>
        <button className="shop-now-button">Shop New Arrivals</button>
      </div>
      <section className="featured-collection">
        <h2>Featured Collection: Autumn Elegance</h2>
        <p className="section-description">Embrace the season with our curated Autumn Elegance collection. Discover luxurious textures, rich colors, and sophisticated designs perfect for the cooler days ahead.</p>
        <div className="products-grid">
          {/* Example Featured Products - Replace with actual featured products */}
          <div className="product-item">
            <img src="https://images.unsplash.com/photo-1574653564058-495491754954?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fGFwcGFyZWx8fHx8fDE2OTY0MDYwMzA&ixlib=rb-4.0.3&q=80&w=450" alt="Featured Dress" style={{ maxWidth: '100%', height: 'auto' }} />
            <h3>The Florence Dress</h3>
            <p>An iconic little black dress, reimagined for the contemporary wardrobe.</p>
            <p className="price">$220</p>
          </div>
          <div className="product-item">
            <img src="https://images.unsplash.com/photo-1587489941488-a591489465f7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8YWNjZXNzb3JpZXN8fHx8fHwxNjk2NDA2MDYw&ixlib=rb-4.0.3&q=80&w=450" alt="Featured Blouse" style={{ maxWidth: '100%', height: 'auto' }} />
            <h3>The Siena Silk Blouse</h3>
            <p>Elevate your ensemble with this luxuriously smooth and subtly luminous silk blouse.</p>
            <p className="price">$150</p>
          </div>
          <div className="product-item">
            <img src="https://images.unsplash.com/photo-1614476557588-a70065984268?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8ZmFzaGlvbnx8fHx8fDE2OTY0MDYwODU&ixlib=rb-4.0.3&q=80&w=450" alt="Featured Trousers" style={{ maxWidth: '100%', height: 'auto' }} />
            <h3>The Milan Trousers</h3>
            <p>Experience the perfect fusion of tailored precision and all-day comfort.</p>
            <p className="price">$180</p>
          </div>
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
