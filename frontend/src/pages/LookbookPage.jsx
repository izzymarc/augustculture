import React from 'react';

function LookbookPage() {
  return (
    <div className="lookbook-page">
      <h2>The August Culture Lookbook</h2>
      <p style={{textAlign: 'center', fontSize: '1.1em', color: '#777', marginBottom: '70px', letterSpacing: '0.04em'}}>Step into our visual storybook. The August Culture Lookbook presents inspiring ways to style our pieces, showcasing the versatility and elegance of our collections. Explore curated looks for every occasion, from everyday sophistication to evening glamour.</p>
      <div className="lookbook-grid">
        <div className="lookbook-item">
          <img src="https://images.unsplash.com/photo-1519742244544-94b0f3a310c8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=550&ixid=MnwxfDB8MXxyYW5kb218MHx8bG9vaGJvb2t8fHx8fDE2OTY4MzY1MDQ&ixlib=rb-4.0.3&q=80&w=450" alt="Lookbook Image 1" />
          <p className="lookbook-caption">Effortless Daywear: Pairing our Silk Blouse with Tailored Trousers for a refined, comfortable look.</p>
        </div>
        <div className="lookbook-item">
          <img src="https://images.unsplash.com/photo-1587413848809-0ea45401d341?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=550&ixid=MnwxfDB8MXxyYW5kb218MHx8bG9vaGJvb2t8fHx8fDE2OTY4MzY1MzE&ixlib=rb-4.0.3&q=80&w=450" alt="Lookbook Image 2" />
          <p className="lookbook-caption">Evening Chic: The Elegant Black Dress, accessorized for a night of sophistication and style.</p>
        </div>
        <div className="lookbook-item">
          <img src="https://images.unsplash.com/photo-1547394958-b1f9d5dc8531?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=550&ixid=MnwxfDB8MXxyYW5kb218MHx8bG9vaGJvb2t8fHx8fDE2OTY4MzY1NTY&ixlib=rb-4.0.3&q=80&w=450" alt="Lookbook Image 3" />
          <p className="lookbook-caption">Autumn Layers: Cashmere Sweater and Classic Trench Coat, perfect for transitional weather elegance.</p>
        </div>
        <div className="lookbook-item">
          <img src="https://images.unsplash.com/photo-1591085499550-cbb02c796441?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=550&ixid=MnwxfDB8MXxyYW5kb218MHx8bG9vaGJvb2t8fHx8fDE2OTY4MzY1ODQ&ixlib=rb-4.0.3&q=80&w=450" alt="Lookbook Image 4" />
          <p className="lookbook-caption">Accessorize with Grace: Showcasing our Pearl Earrings and Leather Tote Bag, essential complements to any August Culture ensemble.</p>
        </div>
        <div className="lookbook-item">
          <img src="https://images.unsplash.com/photo-1590485249684-a94524645744?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=550&ixid=MnwxfDB8MXxyYW5kb218MHx8bG9vaGJvb2t8fHx8fDE2OTY4MzY2MDc&ixlib=rb-4.0.3&q=80&w=450" alt="Lookbook Image 5" />
          <p className="lookbook-caption">Refined Footwear: The Suede Pumps, a versatile choice for completing your sophisticated look.</p>
        </div>
        <div className="lookbook-item">
          <img src="https://images.unsplash.com/photo-1543539748-a7b942a50246?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=550&ixid=MnwxfDB8MXxyYW5kb218MHx8cHVtcHN8fHx8fDE2OTY4MzY2MzE&ixlib=rb-4.0.3&q=80&w=450" alt="Lookbook Image 6" />
          <p className="lookbook-caption">The Complete Look: A harmonious blend of August Culture pieces, designed for timeless style and elegance.</p>
        </div>
      </div>
    </div>
  );
}

export default LookbookPage;
