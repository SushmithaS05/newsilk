// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import CakeCategories from './components/CakeCategories';
import CategoryDetails from './components/CategoryDetails';
import CakeDetails from './components/CakeDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';  // Add Checkout component
import AboutUs from './components/AboutUs';
import ContactForm from './components/ContactForm';
import { CartProvider } from './components/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/categories" element={<CakeCategories />} />
          <Route path="/categories/:categoryId" element={<CategoryDetails />} />
          <Route path="/cake/:id" element={<CakeDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} /> {/* Add the Checkout route */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
