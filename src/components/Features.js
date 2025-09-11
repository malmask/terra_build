// src/components/Features.js
import React, { useEffect, useRef, useState } from 'react';
import { 
  Building2, 
  MapPin, 
  CreditCard, 
  Star, 
  Car, 
  Trees 
} from 'lucide-react';

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  const features = [
    {
      icon: Building2,
      title: "Modern Amenities",
      description: "Lift facility, stilt parking, and front-facing balconies in every apartment",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Located near local markets, malls, hospitals, and daily convenience stores",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: CreditCard,
      title: "Easy Financing",
      description: "Bank loan approval up to 80% available for qualified buyers",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Star,
      title: "Semi-Furnished",
      description: "Move-in ready Services with essential fittings and fixtures",
      gradient: "from-black-500 to-black-600"
    },
    {
      icon: Car,
      title: "Excellent Connectivity",
      description: "Easy access to major highways and public transportation",
      gradient: "from-red-500 to-red-600"
    },
    {
      icon: Trees,
      title: "Green Spaces",
      description: "Beautiful gardens and recreational areas for residents",
      gradient: "from-emerald-500 to-emerald-600"
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

  // src/components/Features.js - Update the return section only
return (
  <section id="features" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="text-center mb-16">
        <h2 className="section-title">
          Why Choose TerraBuild Experts?
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Experience the perfect blend of comfort, convenience, and luxury in our thoughtfully designed residential community.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg card-hover border border-gray-200 ${
                isVisible 
                  ? `animate-fade-in-up opacity-100` 
                  : 'opacity-0'
              }`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'forwards'
              }}
            >
              <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-black mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Decorative Element */}
              <div className="mt-6 h-1 w-12 bg-black rounded-full"></div>
            </div>
          );
        })}
      </div>

      {/* Stats Section */}
      <div className="mt-20 bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="group">
            <div className="text-4xl font-bold text-black mb-2 group-hover:scale-110 transition-transform duration-300">
              150+
            </div>
            <div className="text-gray-600">Happy Families</div>
          </div>
          <div className="group">
            <div className="text-4xl font-bold text-black mb-2 group-hover:scale-110 transition-transform duration-300">
              8
            </div>
            <div className="text-gray-600">Floor Plans</div>
          </div>
          <div className="group">
            <div className="text-4xl font-bold text-black mb-2 group-hover:scale-110 transition-transform duration-300">
              80%
            </div>
            <div className="text-gray-600">Bank Loan Approved</div>
          </div>
          <div className="group">
            <div className="text-4xl font-bold text-black mb-2 group-hover:scale-110 transition-transform duration-300">
              100%
            </div>
            <div className="text-gray-600">Your Home. Your Future</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
};

export default Features;