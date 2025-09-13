// src/components/Services.js
import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const services = [
    {
      title: "Rent Properties",
      description: "Explore Terra Build Experts' curated properties for modern living and thriving business spaces, designed for comfort, style, and convenience.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop&crop=center",
      highlight: false,
    },
    {
        title: "Buy Properties",
        description: "Partner with TerraBuild Experts to explore premium residential and commercial properties, helping you buy with confidence and ease.",
        img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
        highlight: false,
    },
    {
      title: "Investment",
      description: "Invest with TerraBuild Experts in high-growth residential and commercial properties, ensuring strong ROI and secure opportunities.",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&crop=center",
      highlight: false,
    },
    {
      title: "Construction",
      description: "From design & planning to execution & legal support, TerraBuild Experts delivers complete construction projects with quality and precision.",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop&crop=center",
      highlight: false,
    },
  ];

  return (
    <section id="Services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Trusted Real Estate, Construction, Investment & Legal Solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`
                rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2
                ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}
                ${service.highlight 
                  ? "bg-black-600 text-white border-2 border-green-600" 
                  : "bg-white text-black border-2 border-gray-200 hover:border-gray-300"
                }
              `}
              style={{ 
                animationDelay: `${index * 0.15}s`,
                animationFillMode: 'forwards'
              }}
            >
              {/* Image Container */}
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay for better text readability on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300"></div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col h-64">
                {/* Title with Icon */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className={`text-xl font-bold ${service.highlight ? "text-white" : "text-black"}`}>
                    {service.title}
                  </h3>
                  <ArrowUpRight 
                    className={`w-5 h-5 ${service.highlight ? "text-white" : "text-gray-400"} transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1`} 
                  />
                </div>

                {/* Description */}
                <p className={`text-sm leading-relaxed flex-grow mb-6 ${
                  service.highlight ? "text-white/90" : "text-gray-600"
                }`}>
                  {service.description}
                </p>

                {/* Button */}
                <button className={`
                  w-full py-3 px-4 rounded-xl font-semibold text-sm
                  transition-all duration-300 hover:scale-105 hover:shadow-lg
                  ${service.highlight
                    ? "bg-white text-green-600 hover:bg-gray-50 hover:text-green-700"
                    : "bg-black text-white hover:bg-gray-800"
                  }
                `}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-3xl p-12 shadow-lg">
            <h3 className="text-3xl font-bold text-black mb-6">
              Ready to Transform Your Real Estate Journey?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Schedule a consultation today and experience the expertise of TerraBuild Experts firsthand. 
              Our team is ready to help you with all your real estate needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-black text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-gray-800 hover:scale-105 hover:shadow-xl flex items-center gap-2">
                <span>Schedule Consultation</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>
              <button className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg border-2 border-black hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;