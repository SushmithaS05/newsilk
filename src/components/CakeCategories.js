import React from 'react';
import { Link } from 'react-router-dom';

function CakeCategories() {
  const categories = [
    { name: 'Chocolate Cakes', id: 'chocolate' },
    { name: 'Fruit Cakes', id: 'fruit' },
    { name: 'Custom Cakes', id: 'custom' },
  ];

  // Inline style for background image
  const backgroundStyle = {
    backgroundImage: 'url("https://www.shutterstock.com/image-photo/blueberry-cheesecake-fresh-blueberries-on-600nw-2421467525.jpg")', // Correct URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '20px',
    minHeight: '70vh', // Adjusted to make it smaller than the full screen
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-first', // Align items to the right
    textAlign: 'left', // Align text to the right
  };

  // Link style with bright color and medium font size
  const linkStyle = {
    color: '#ffeb3b', // Bright yellow color for visibility
    textDecoration: 'none',
    fontSize: '1.1rem', // Slightly smaller font size for a more compact design
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  return (
    <div style={backgroundStyle}>
      <h2 style={{ fontSize: '2rem', marginBottom: '20px',color:'white' }}>Cake Categories</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {categories.map(category => (
          <li key={category.id} style={{ marginBottom: '10px' }}>
            <Link to={`/categories/${category.id}`} style={linkStyle}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CakeCategories;
