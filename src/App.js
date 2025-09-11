// src/App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Apartments from './components/Apartments';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Popup from './components/Popup';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Apartments />
      <About />
      <Contact />
      <Footer />
      
      {/* Popup Component */}
      <Popup />
    </div>
  );
}

export default App;