import './App.css';
// import Contact from './Components/Contact';
import React from 'react';
import { useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Products from './Components/Products/Products.jsx';

function App() {

  return (
        <div className="App" >
        <Navbar/>
        <div className="home-wrapper">
          <Home/>
        </div>
        <div className="about-wrapper">
          <About/>
        </div>
        <div className="products-wrapper">
          <Products/>
        </div>
        <div className="contact-wrapper">
          <Contact/>
        </div>
        <Footer/>
        </div>
  );
}

export default App;
