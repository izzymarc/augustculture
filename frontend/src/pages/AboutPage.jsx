import React from 'react';

function AboutPage() {
  return (
    <div className="about-page">
      <h2>Our Brand Philosophy</h2>
      <p>August Culture is more than a clothing brand; it is a sanctuary of style, dedicated to crafting garments that transcend seasons. Founded on the principles of enduring elegance and impeccable craftsmanship, we aim to enrich the lives of fashion-forward women.</p>
      <p>Our founder, [Founder's Name - *To be added*]'s vision was to cultivate a brand that champions slow fashion, creating pieces that are not only aesthetically exquisite but also ethically produced and environmentally conscious. We believe in the power of clothing to express individuality and confidence, and our designs are a testament to this belief.</p>
      <p>From our atelier in [City - *To be added*], we meticulously oversee every step of the creation process, from initial sketch to final stitch. We are committed to using only the finest materials, sourced responsibly, and working with artisans who share our passion for excellence. Our collections are inspired by the rich tapestry of global cultures, art movements, and the timeless allure of nature.</p>
      <p>
        <b>Our Core Values:</b>
        <ul>
          <li><b>Timeless Elegance:</b> We focus on designs that remain stylish beyond fleeting trends, ensuring lasting value and appeal.</li>
          <li><b>Impeccable Craftsmanship:</b>  Our garments are made with meticulous attention to detail and quality, promising durability and luxury.</li>
          <li><b>Ethical Production:</b> We are committed to responsible and ethical manufacturing processes, respecting both people and planet.</li>
          <li><b>Sustainability:</b> We strive to minimize our environmental impact through sustainable practices, from material sourcing to packaging.</li>
        </ul>
      </p>
      <p>At August Culture, we are dedicated to fostering a community that values quality over quantity, and style over trends. We invite you to explore our world, where each garment tells a story of dedication, artistry, and a profound respect for the art of fashion.</p>

      <section className="founder-section">
        <h3>Meet the Founder</h3>
        <div className="founder-info">
          <img src="https://images.unsplash.com/photo-1584440819030-dd842892d915?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=150&ixid=MnwxfDB8MXxyYW5kb218MHx8bG9vaGJvb2t8fHx8fDE2OTY4MzY0NDU&ixlib=rb-4.0.3&q=80&w=150" alt="Founder" className="founder-image" />
          <div className="founder-text">
            <h4>[Founder's Name - *To be added*]</h4>
            <p>[Founder's Name] has always been passionate about design and sustainability. With a background in [Founder's Background - *To be added*], she envisioned August Culture as a brand that could redefine luxury fashion by blending timeless aesthetics with ethical practices. Her dedication to craftsmanship and environmental responsibility is the soul of August Culture.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
