// src/components/Contact.js
import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  Phone, 
  Send, 
  User, 
  MessageSquare,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    apartmentType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
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

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    // Validation
    if (!formData.name.trim()) {
      setSubmitError('Please enter your name');
      return;
    }
    if (!formData.email.trim()) {
      setSubmitError('Please enter your email');
      return;
    }
    if (!formData.phone.trim()) {
      setSubmitError('Please enter your phone number');
      return;
    }
    if (!formData.apartmentType) {
      setSubmitError('Please select an apartment type');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');
    
    const submissionData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      apartmentType: formData.apartmentType,
      message: formData.message.trim(),
      timestamp: new Date().toLocaleString(),
      source: 'Contact Form'
    };

    console.log('=== CONTACT FORM SUBMISSION ===');
    console.log('Data:', submissionData);

    try {
      // Use fetch with FormData - more reliable approach
      const formDataObj = new FormData();
      Object.keys(submissionData).forEach(key => {
        formDataObj.append(key, submissionData[key] || '');
      });

      // Submit to Google Apps Script
      const response = await fetch('https://script.google.com/macros/s/AKfycbyaacCYckV4opLo09UB1_g5K5oQrtYJI9vqys4x5TZil2NrFg-uo_AXVNJVU50fs14Bog/exec', {
        method: 'POST',
        body: formDataObj,
        mode: 'no-cors'
      });

      console.log('✅ Contact form submission completed');
      
      // Since we're using no-cors, we can't check the response
      // But if we reach here without error, assume success
      
      // Wait a moment to ensure submission is processed
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      
      // Reset form after showing success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          apartmentType: '',
          message: ''
        });
        setIsSubmitted(false);
      }, 5000);

    } catch (error) {
      console.error('❌ Contact form submission error:', error);
      setSubmitError('Submission failed. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 text-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, black 2px, transparent 2px)',
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="text-black-500">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to find your dream home? Contact us today for site visits, detailed floor plans, 
            and exclusive offers. Our team is here to help you every step of the way.
          </p>
        </div>

        {/* ✅ Centered Contact Form */}
        <div className={`${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}>
          <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-2xl p-8 shadow-md">
            <h3 className="text-2xl font-bold text-black mb-6 text-center">Send us a Message</h3>
            
            {/* Error Message */}
            {submitError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                <span className="text-red-700 text-sm">{submitError}</span>
              </div>
            )}
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-green-600 mb-2">Thank You!</h4>
                <p className="text-gray-600 mb-4">
                  Your message has been sent successfully. We'll get back to you soon.
                </p>
                <div className="text-sm text-gray-500">
                  <p>📧 Email: info@terrabuildexperts.com</p>
                  <p>📞 Phone: +91 98765 43210</p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-300"
                    />
                  </div>
                  
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number (10 digits)"
                      value={formData.phone}
                      onChange={handleInputChange}
                      maxLength={15}
                      className="w-full pl-10 pr-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-300"
                    />
                  </div>
                  
                  <select
                    name="apartmentType"
                    value={formData.apartmentType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-300"
                  >
                    <option value="">Select Apartment Type</option>
                    <option value="1bhk">1 BHK</option>
                    <option value="2bhk">2 BHK</option>
                    <option value="3bhk">3 BHK</option>
                    <option value="villa">Villa</option>
                    <option value="plot">Plot</option>
                  </select>
                </div>
                
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <textarea
                    name="message"
                    placeholder="Tell us about your requirements, preferred location, budget, etc."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full pl-10 pr-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-300 resize-none"
                  />
                </div>
                
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-black text-white py-4 px-6 rounded-lg font-bold hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center group"
                >
                  <Send className={`w-5 h-5 mr-2 transition-transform duration-300 ${
                    isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1'
                  }`} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                <div className="text-center">
                  <p className="text-xs text-gray-500">
                    By submitting this form, you agree to our Terms of Service and Privacy Policy.
                  </p>
                  <div className="flex items-center justify-center mt-3 space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-1 text-green-600" />
                      <span>+91 98765 43210</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-1 text-green-600" />
                      <span>info@terrabuildexperts.com</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;