import React from 'react';

function LookbookPage() {
  return (
    <div className="lookbook-page">
      <h2>The August Culture Lookbook</h2>
      <p style={{textAlign: 'center', fontSize: '1.1em', color: '#777', marginBottom: '70px', letterSpacing: '0.04em'}}>Step into our visual storybook. The August Culture Lookbook presents inspiring ways to style our pieces, showcasing the versatility and elegance of our collections. Explore curated looks for every occasion, from everyday sophistication to evening glamour.</p>
      <div className="lookbook-grid">
        <div className="lookbook-item">
          <img src="https://images.unsplash.com/photo-1523381294911-8cd2cfef102d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=550&ixid=MnwxfDB8MXxyYW5kb218MHx8bG9vaGJvb2t8fHx8fDE2OTY0MDYxNDc&ixlib=rb-4.0.3&q=80&w=450" alt="Lookbook Image 1" />
          <p className="lookbook-caption">Effortless Daywear: Pairing our Silk Blouse with Tailored Trousers for a refined, comfortable look.</p>
        </div>
        <div className="lookbook-item">
          <img src="https://images.unsplash.com/photo-1589339834988-a099899194cb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=550&ixid=MnwxfDB8MXxyYW5kb218MHx8bG9vaGJvb2t8fHx8fDE2OTY0MDYxNzE&ixlib=rb-4.0.3&q=80&w=450" alt="Lookbook Image 2" />
          <p className="lookbook-caption">Evening Chic: The Elegant Black Dress, accessorized for a night of sophistication and style.</p>
        </div>
        <div className="lookbook-item">
          <img src="https://images.unsplash.com/photo-1588361419864-64a705090498?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=550&ixid=MnwxfDB8MXxyYW5kb218MHx8bG9vaGJvb2t8fHx8fDE2OTY0MDYxOTQ&ixlib=rb-4.0.3&q=80&w=450" alt="Lookbook Image 3" />
          <p className="lookbook-caption">Autumn Layers: Cashmere Sweater and Classic Trench Coat, perfect for transitional weather elegance.</p>
        </div>
        <div className="lookbook-item">
          <img src="https://images.unsplash.com/photo-1546958637-9fbbffb04904?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=550&ixid=MnwxfDB8MXxyYW5kb218MHx8bG9vaGJvb2t8fHx8fDE2OTY0MDYyMTY&ixlib=rb-4.0.3&q=80&w=450" alt="Lookbook Image 4" />
          <p className="lookbook-caption">Accessorize with Grace: Showcasing our Pearl Earrings and Leather Tote Bag, essential complements to any August Culture ensemble.</p>
        </div>
        <div className="lookbook-item">
          <img src="https://images.unsplash.com/photo-1575422934939-94caca47c283?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=550&ixid=MnwxfDB8MXxyYW5kb218MHx8bG9vaGJvb2t8fHx8fDE2OTY0MDYyMzY&ixlib=rb-4.0.3&q=80&w=450" alt="Lookbook Image 5" />
          <p className="lookbook-caption">Refined Footwear: The Suede Pumps, a versatile choice for completing your sophisticated look.</p>
        </div>
        <div className="lookbook-item">
          <img src="https://images.unsplash.com/photo-1584440819030-dd842892d915?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=550&ixid=MnwxfDB8MXxyYW5kb218MHx8bG9vaGJvb2t8fHx8fDE2OTY0MDYyNTY&ixlib=rb-4.0.3&q=80&w=450" alt="Lookbook Image 6" />
          <p className="lookbook-caption">The Complete Look: A harmonious blend of August Culture pieces, designed for timeless style and elegance.</p>
        </div>
      </div>
    </div>
  );
}

export default LookbookPage;
