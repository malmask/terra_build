// src/components/About.js
import React, { useEffect, useRef, useState } from 'react';
import { Award, Users, Building, Leaf } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  const achievements = [
    {
      icon: Building,
      number: '500+',
      label: 'Homes Delivered',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      number: '1000+',
      label: 'Happy Families',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Award,
      number: '15+',
      label: 'Years Experience',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Leaf,
      number: '100%',
      label: 'Green Certified',
      color: 'from-emerald-500 to-emerald-600'
    }
  ];

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

  return (
    <section id="about" className="py-20 bg-white text-black relative overflow-hidden border-t border-gray-200">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-gray-300 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-gray-300 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-gray-300 rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-20 h-20 border border-gray-300 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black">
              About <span className="text-gray-700">TerraBuild Experts</span>
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-gray-800">
                At TerraBuild Experts, our work is grounded in trust, transparency, and results. We value strong client relationships, attention to detail, and consistent quality across every project — whether it's buying a home, constructing a space, or investing in a development. Our values guide every decision, ensuring long-term satisfaction and sustainable growth.
              </p>
              
              <p className="text-gray-800">
                A full-fledged garden and a slew of options for recreation and sport will make you spoilt for choice. As a result, prepare to be enchanted by not just the tranquil canopy of greenery that surrounds the property, but also by the elegant luxury that surrounds you.
              </p>
            </div>

            {/* Key Features */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold text-black mb-2">Quality Construction</h4>
                <p className="text-sm text-gray-600">Premium materials and modern construction techniques</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold text-black mb-2">Green Living</h4>
                <p className="text-sm text-gray-600">Eco-friendly design with abundant green spaces</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold text-black mb-2">Strategic Location</h4>
                <p className="text-sm text-gray-600">Prime location with excellent connectivity</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold text-black mb-2">Modern Amenities</h4>
                <p className="text-sm text-gray-600">World-class facilities for comfortable living</p>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={index}
                    className="bg-white border-2 border-gray-200 rounded-2xl p-6 text-center hover:border-gray-400 transition-all duration-300 group shadow-lg"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-black flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-black mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {achievement.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mission Statement */}
            <div className="mt-8 bg-gray-50 border-2 border-gray-200 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-black mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide Expert Solutions in Real Estate, Construction, Investments & Legal Support
              </p>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 border-2 border-gray-200 rounded-3xl p-8 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-3xl font-bold text-black mb-6">Our Vision</h3>
            <p className="text-xl text-gray-700 leading-relaxed">
              To be the most trusted and innovative real estate developer in the region, 
              known for delivering exceptional quality homes that exceed expectations and create 
              vibrant communities where families thrive.
            </p>
          </div>
        </div>

        {/* Company Values */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-black mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h4 className="text-xl font-bold text-black mb-3">Excellence</h4>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our work, from design to construction to customer service.
              </p>
            </div>
            <div className="text-center bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h4 className="text-xl font-bold text-black mb-3">Integrity</h4>
              <p className="text-gray-600">
                Transparency and honesty in all our dealings, building trust with every interaction.
              </p>
            </div>
            <div className="text-center bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h4 className="text-xl font-bold text-black mb-3">Innovation</h4>
              <p className="text-gray-600">
                Embracing new technologies and design concepts to create modern, sustainable homes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;