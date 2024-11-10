import React from 'react';
import { useParams, Link } from 'react-router-dom';

function CategoryDetails() {
  const { categoryId } = useParams();

  const cakes = [
    // Chocolate Cakes
    { id: '1', name: 'Chocolate Fudge Cake', category: 'chocolate', price: 25, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-o7qv5HVQBBnUxtcxqu00Et3vdUtTOhIr8Q' },
    { id: '2', name: 'Classic Chocolate Cake', category: 'chocolate', price: 20, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAqb66k3KhMN2sopE0yYUQWa8USlHRr02AzA&s' },
    { id: '3', name: 'Double Layer Chocolate Cake', category: 'chocolate', price: 28, imageUrl: 'https://www.janespatisserie.com/wp-content/uploads/2020/10/IMG_5635-2.jpg' },
    { id: '4', name: 'Triple Chocolate Cake', category: 'chocolate', price: 32, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQChxFOL6miLeQq1tq_3UcSROqi7iLyZY4MUg&s'},
    { id: '5', name: 'Chocolate Mousse Cake', category: 'chocolate', price: 22, imageUrl: 'https://juliemarieeats.com/wp-content/uploads/2022/11/Peanut-butter-and-Dark-Chocolate-Mousse-Cake-4-scaled.jpg'},
    { id: '6', name: 'Chocolate Lava Cake', category: 'chocolate', price: 30, imageUrl: 'https://www.foodandwine.com/thmb/XdFd-DvTtouryLCjeCqwhfmmK-A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/molten-chocolate-cake-FT-RECIPE0220-0a33d7d0ab0c45588f7bfe742d33a9bc.jpg' },

    // Fruit Cakes (additional)
    { id: '7', name: 'Strawberry Fruit Cake', category: 'fruit', price: 18, imageUrl: 'https://liliyum.com/cdn/shop/products/Seasonal-Fruit-Gateaux-Strawberry-1_2400x.jpg?v=1590986659' },
    { id: '8', name: 'Mango Fruit Cake', category: 'fruit', price: 22, imageUrl: 'https://5.imimg.com/data5/MD/XF/MY-10960989/selection_855-500x500.png' },
    { id: '9', name: 'Blueberry Cheesecake', category: 'fruit', price: 26, imageUrl: 'https://theobroma.in/cdn/shop/files/HIGHRESBlueberryCheesecake-Square_grande.jpg?v=1711180961' },
    { id: '10', name: 'Tropical Fruit Cake', category: 'fruit', price: 24, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7NTY19OXQyPY7-utTT7OSj6E8aUcl9eknfw&s' },
    { id: '11', name: 'Peach Fruit Cake', category: 'fruit', price: 20, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbxI6fssqqMdLZQQNyCfkVuEbMPvYW476eGg&s' },
    { id: '12', name: 'Apple Cinnamon Fruit Cake', category: 'fruit', price: 23, imageUrl: 'https://www.littlesugarsnaps.com/wp-content/uploads/2020/05/Cinnamon-Apple-Cake-8826-scaled-480x270.jpg'},
    // Custom Cakes (additional)
    { id: '13', name: 'Customized Birthday Cake', category: 'custom', price: 30, imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/11/c3/2f/e1/customized-birthday-cake.jpg' },
    { id: '14', name: 'Wedding Tier Cake', category: 'custom', price: 100, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtJak_88aXZ1IUFNwu-kgm8E6xiHs30GUcKQ&s' },
    { id: '15', name: 'Custom Cupcake Tower', category: 'custom', price: 50, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA03yn_f1sUxFcOTgIuwVImdZeq5GUtn0VPA&s' },
    { id: '16', name: 'Custom Graduation Cake', category: 'custom', price: 55, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZBeqEkyJBS1U7PmH0egEr0urqVya2-w_epA&s' },
    { id: '17', name: 'Custom Baby Shower Cake', category: 'custom', price: 45, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC9kUPx689QWVp3WS8VVa9WGPYpKnoGMkQGQ&s' },
  ];

  // Filter cakes by category
  const filteredCakes = cakes.filter(cake => cake.category === categoryId);

  return (
    <div>
      <h2>{categoryId.charAt(0).toUpperCase() + categoryId.slice(1)} Cakes</h2>
      <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {filteredCakes.map(cake => (
          <li key={cake.id} style={{ marginBottom: '20px', textAlign: 'center' }}>
            <Link to={`/cake/${cake.id}`} style={{ textDecoration: 'none', color: 'black' }}>
              <img
                src={cake.imageUrl}
                alt={cake.name}
                style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
              />
              <p>{cake.name}</p>
              <p>${cake.price}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryDetails;
