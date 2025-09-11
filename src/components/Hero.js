// src/components/Hero.js
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-white"
    >
      {/* Content */}
      <div className="text-center text-black max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-float text-black">
            <span className="block">Your Home.</span>
            <span className="block">Your Future.</span>
            <span className="block text-gray-700">Our Expertise.</span>
        </h1>


          
          <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Buy, build, invest, or protect — we provide tailored real estate, construction, investment, and legal solutions designed around your vision.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('Services')}
              className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-gray-800 hover:transform hover:-translate-y-1 hover:shadow-lg group"
            >
              View Services
              <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300 inline" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-white text-black border-2 border-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-gray-50 hover:transform hover:-translate-y-1 hover:shadow-lg group"
            >
              Get Details
              <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300 inline" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gray-600" />
      </div>
    </section>
  );
};

export default Hero;