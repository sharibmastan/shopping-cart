// src/App.js
import React, { useState } from 'react';
import Product from './Product';
import Cart from './Cart';
import './App.css';

const products = [
  { name: 'Apple', price: 1.00 },
  { name: 'Banana', price: 0.50 },
  { name: 'Cherry', price: 2.00 },
  { name: 'Date', price: 3.00 },
];

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter(item => item !== product));
  };

  return (
    <div className="app">
      <h1>Shopping Cart</h1>
      <div className="products">
        {products.map((product, index) => (
          <Product key={index} product={product} addToCart={addToCart} />
        ))}
      </div>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;
