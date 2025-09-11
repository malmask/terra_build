import React, { useState, useEffect } from 'react';
import { 
  X, 
  Phone, 
  Mail, 
  User, 
  MessageSquare, 
  Send, 
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
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

  useEffect(() => {
    // For testing, show popup immediately
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, 300);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

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
      setSubmitError('Please select a service type');
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
      timestamp: new Date().toLocaleString()
    };

    console.log('=== FORM SUBMISSION ===');
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

      console.log('✅ Form submission completed');
      
      // Since we're using no-cors, we can't check the response
      // But if we reach here without error, assume success
      
      // Wait a moment to ensure submission is processed
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      
      // Reset form and close popup after showing success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          apartmentType: '',
          message: ''
        });
        setIsSubmitted(false);
        handleClose();
      }, 3000);

    } catch (error) {
      console.error('❌ Submission error:', error);
      setSubmitError('Submission failed. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm transition-all duration-300 p-4 ${
        isClosing ? 'opacity-0' : 'opacity-100'
      }`}
      onClick={handleBackdropClick}
    >
      <div 
        className={`relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 ${
          isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Header */}
        <div className="p-8">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-black mb-3">Get In Touch</h2>
            <p className="text-gray-600 text-sm">
              Get expert property advice, legal documentation support, and investment guidance
            </p>
          </div>

          {/* Error Message */}
          {submitError && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
              <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
              <span className="text-red-700 text-sm">{submitError}</span>
            </div>
          )}

          {/* Success State */}
          {isSubmitted ? (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-green-600 mb-2">Thank You!</h4>
              <p className="text-gray-600">
                Your message has been sent successfully. We'll get back to you soon.
              </p>
            </div>
          ) : (
            /* Form */
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
                    maxLength={15} // Allow for formatting characters
                    className="w-full pl-10 pr-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-300"
                  />
                </div>
                
                <select
                  name="apartmentType"
                  value={formData.apartmentType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-300"
                >
                  <option value="">Select Service Type</option>
                  <option value="rent">Rent Properties</option>
                  <option value="buy">Buy Properties</option>
                  <option value="investment">Investment</option>
                  <option value="construction">Construction</option>
                </select>
              </div>
              
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <textarea
                  name="message"
                  placeholder="Tell us about your preferred area and requirements..."
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
                {isSubmitting ? 'Sending...' : 'Get FREE Consultation'}
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
  );
};

export default Popup;