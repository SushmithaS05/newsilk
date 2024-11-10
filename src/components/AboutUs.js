// src/components/AboutUs.js
import React from 'react';

function AboutUs() {
  return (
    <div
      style={{
        backgroundImage: 'url(https://t4.ftcdn.net/jpg/05/87/63/79/360_F_587637938_bnkZxzr0zLQtiva6AZZtLUNWnYvXQgQt.jpg)', // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // Ensures the background covers the entire viewport height
        padding: '20px',
        color: 'white' // Adjust text color to be visible on the background
      }}
    >
      <h2>About Us</h2>
      <section>
        <h3>Our Story</h3>
        <p>
          Welcome to Shop, where we bake delicious cakes made from the finest ingredients with love and care. Our journey began with a passion for creating the perfect cake, and we have since grown to become a beloved destination for cake lovers of all kinds.
        </p>
        <p>
          Whether you're celebrating a birthday, wedding, or just a special occasion, our cakes are designed to bring joy to your day. We specialize in both traditional and custom cakes, offering a variety of flavors and designs to fit any event.
        </p>
      </section>
      <section>
        <h3>Our Mission</h3>
        <p>
          Our mission is simple: to create the most delicious and visually stunning cakes that bring smiles to our customers. Every cake is handcrafted with attention to detail, ensuring that it not only tastes amazing but also looks beautiful.
        </p>
      </section>
      <section>
        <h3>Why Choose Us?</h3>
        <ul>
          <li>Fresh ingredients - We use only the best quality ingredients to create our cakes.</li>
          <li>Customizable designs - No matter the occasion, we can make your dream cake come to life.</li>
          <li>Affordable prices - We believe in providing great cakes at reasonable prices for every budget.</li>
          <li>Customer satisfaction - Our goal is to ensure you're completely satisfied with your cake, every time.</li>
        </ul>
      </section>
    </div>
  );
}

export default AboutUs;
