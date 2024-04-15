import React, { useState, useEffect } from 'react';
import './App.css';

function NavBar(props) {

  return (
    <div className="navbar">
    <div className="logo">
      <a href="index.html"> <img src="logo.webp" alt="Logo" width="100px" /></a>
    </div>
    <nav>
      <ul id="MenuItems">
        <li><a href="/" style={{ color: '#000000', fontWeight: 'bold' }}>Home</a></li>
        <li><a href="/" style={{ color: '#000000', fontWeight: 'bold' }}>Electronics Products</a></li>
        <li><a href="/" style={{ color: '#000000', fontWeight: 'bold' }}>Account</a></li>
        <li><a href="/" style={{ color: '#000000', fontWeight: 'bold' }}>Contact</a></li>
        <li><a href="cart.html" style={{ color: '#000000', fontWeight: 'bold' }}>Cart ({props.cartCount})</a></li>
      </ul>
    </nav>
  </div>
  );
}

export default NavBar;