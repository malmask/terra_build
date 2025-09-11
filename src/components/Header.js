// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-lg border-b border-gray-200' 
          : 'bg-white border-b border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div 
              className="cursor-pointer flex items-center"
              onClick={() => scrollToSection('home')}
            >
              {/* Logo Image */}
              <img
                src="/terra-build.png" // You'll need to add your logo to public/logo.png
                alt="TerraBuild Experts"
                className="h-[120px] w-auto mr-3"
                onError={(e) => {
                  // Fallback to text logo if image fails to load
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'block';
                }}
              />
              {/* Fallback Text Logo */}
              <div className="hidden">
                <h1 className="text-xl font-bold text-black">
                  TerraBuild Experts
                </h1>
                <p className="text-xs text-gray-600 -mt-1">REALTY • CONSTRUCT • INVEST</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {['home', 'features', 'apartments', 'about', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="text-black hover:text-gray-600 transition-colors duration-300 font-medium capitalize"
                  >
                    {item === 'apartments' ? 'Services' : item}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Button - Desktop */}
          <button
            onClick={() => scrollToSection('contact')}
            className="hidden md:block bg-black text-white px-6 py-2 rounded-full font-bold hover:bg-gray-800 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            Contact Us
          </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 border border-gray-200 rounded-lg mb-4">
              {['home', 'features', 'apartments', 'about', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block px-3 py-2 text-black hover:text-gray-600 font-medium capitalize w-full text-left"
                >
                  {item === 'apartments' ? 'Services' : item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;