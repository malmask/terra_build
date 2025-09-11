// src/components/Footer.js
import React from 'react';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  MapPin, 
  Phone, 
  Mail, 
  Home,
  ArrowUp 
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white border-t-2 border-gray-200 text-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, black 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}
        ></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-black-600 mb-4 flex items-center">
                  <Home className="w-6 h-6 mr-2" />
                  TerraBuild Experts
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Building dreams through property, construction, and smart investments together.


                </p>
              </div>
              
              <div className="flex space-x-4">
                {[
                  { Icon: Facebook, href: '#', color: 'hover:text-blue-600' },
                  { Icon: Instagram, href: '#', color: 'hover:text-pink-600' },
                  { Icon: Twitter, href: '#', color: 'hover:text-blue-500' },
                  { Icon: Linkedin, href: '#', color: 'hover:text-blue-700' }
                ].map(({ Icon, href, color }, index) => (
                  <a
                    key={index}
                    href={href}
                    className={`p-2 bg-gray-100 rounded-full ${color} transition-all duration-300 hover:transform hover:scale-110`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-black-600 mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Home', id: 'home' },
                  { name: 'Features', id: 'features' },
                  { name: 'Services', id: 'Services' },
                  { name: 'About Us', id: 'about' },
                  { name: 'Contact', id: 'contact' }
                ].map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-700 hover:text-black-600 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-black-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Apartment Types */}
            

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold text-black-600 mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <MapPin className="w-5 h-5 text-black-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <div className="text-gray-700 group-hover:text-black transition-colors duration-300">
                      Delhi, India
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 group">
                  <Phone className="w-5 h-5 text-black-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <div className="text-gray-700 group-hover:text-black transition-colors duration-300">
                      +91 9211366324
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group">
                  <Mail className="w-5 h-5 text-black-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <div className="text-gray-700 group-hover:text-black transition-colors duration-300">
                      info@terrabuildexperts.com
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-6">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-black text-white py-3 px-4 rounded-lg font-bold hover:bg-gray-800 transition-all duration-300 hover:transform hover:scale-105"
                >
                  Schedule Site Visit
                </button>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="max-w-2xl mx-auto text-center">
              <h4 className="text-xl font-bold text-black-600 mb-4">Stay Updated</h4>
              <p className="text-gray-700 mb-6">
                Subscribe to our newsletter for exclusive offers and updates about new properties.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-300"
                />
                <button className="bg-black text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition-all duration-300 hover:transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 bg-gray-100/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-600">
                  &copy; Copyright © 2025. All Rights Reserved. TerraBuild Experts
                </p>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex space-x-4 text-sm">
                  <a href="#" className="text-gray-600 hover:text-black-600 transition-colors duration-300">
                    Privacy Policy
                  </a>
                  <span className="text-gray-400">|</span>
                  <a href="#" className="text-gray-600 hover:text-black-600 transition-colors duration-300">
                    Terms of Service
                  </a>
                  <span className="text-gray-400">|</span>
                  <a href="#" className="text-gray-600 hover:text-black-600 transition-colors duration-300">
                    RERA Info
                  </a>
                </div>

                <button
                  onClick={scrollToTop}
                  className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition-all duration-300 hover:transform hover:scale-110 group"
                  title="Back to top"
                >
                  <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
