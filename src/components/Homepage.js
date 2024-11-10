import React from 'react';
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const navigate = useNavigate();

  const handleViewMoreClick = () => {
    navigate('/categories');
  };

  return (
    <div
      style={{
        backgroundImage: 'url(https://eatdrinkhilton.com/shop/hilton-manila/wp-content/uploads/2023/09/Ube-Sansrival-Tall-Cake.jpg)',
        
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textShadow: '1px 1px 5px rgba(0, 0, 0, 0.7)'
      }}
    >
      
      
      
      <div className="featured-cakes" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
        <h3>Featured Cake of the Day</h3>
        <p>Our Chocolate Delight Cake - a rich, moist cake topped with silky chocolate ganache and garnished with fresh berries.</p>
        <button 
          onClick={handleViewMoreClick}
          style={{ padding: '10px 20px', backgroundColor: '#ff6600', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' }}
        >
          View More Cakes
        </button>
      </div>
    </div>
  );
}

export default Homepage;
