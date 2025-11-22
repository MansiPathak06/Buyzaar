"use client";
import { useState, useEffect } from 'react';
import { X, User, Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';

export default function FranchisePopupModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    state: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Show popup when component mounts (simulating website load)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000); // Show popup 1 second after page load

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    if (!formData.fullName || !formData.email || !formData.phone || !formData.state) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Create FormData object for FormSubmit
      const submitData = new FormData();
      submitData.append('fullName', formData.fullName);
      submitData.append('email', formData.email);
      submitData.append('phone', formData.phone);
      submitData.append('state', formData.state);
      submitData.append('message', formData.message);
      submitData.append('_subject', 'New Franchise Inquiry - Buyzaar Mart');
      submitData.append('_captcha', 'false');

      // Submit to FormSubmit
      const response = await fetch('https://formsubmit.co/info@thebuyzaarmart.com', {
        method: 'POST',
        body: submitData
      });

      if (response.ok) {
        alert('Thank you! Your application has been submitted successfully.');
        setIsOpen(false);
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          state: '',
          message: ''
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg mx-auto backdrop-blur-2xl rounded-xl shadow-2xl transform transition-all duration-300 scale-95 sm:scale-100 m-2 sm:m-4 my-8">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50 p-1.5 sm:p-2 text-red-600 hover:text-red-500 hover:bg-red-100 hover:bg-opacity-20 rounded-full transition-all duration-200 bg-white shadow-md"
          title="Close"
        >
          <X size={24} strokeWidth={3} className="sm:w-7 sm:h-7" />
        </button>

        {/* Header Section */}
        <div className="bg-white p-3 sm:p-4 md:p-6 rounded-t-xl text-black relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <div className="flex items-center space-x-2">
                {/* Logo */}
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center">
                  <img 
                    src="/images/buyzaar-logo.png" 
                    alt="Buyzaar Mart logo" 
                    className="w-20 h-20 sm:w-25 sm:h-25 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML = '<span class="text-green-600 font-bold text-xs sm:text-sm">Buyzaar Mart</span>';
                    }}
                  />
                </div>
                <div>
                  <h1 className="text-base sm:text-lg font-bold">ग्राम श्री</h1>
                  <p className="text-orange-500 text-xs">अपना बाज़ार</p>
                </div>
              </div>
              <div className="text-right">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Send className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-base sm:text-xl md:text-2xl font-extrabold mb-1">START YOUR OWN BUSINESS</h2>
              <p className="text-xs sm:text-sm font-semibold text-orange-500">Apply For Franchise</p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="p-4 sm:p-6 md:p-8 max-h-[70vh] sm:max-h-none overflow-y-auto">
          <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Full Name */}
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  required
                  className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-200 text-sm sm:text-base text-gray-700 placeholder-gray-400"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  required
                  className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-200 text-sm sm:text-base text-gray-700 placeholder-gray-400"
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  required
                  className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-200 text-sm sm:text-base text-gray-700 placeholder-gray-400"
                />
              </div>

              {/* State */}
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  placeholder="State/City"
                  required
                  className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-200 text-sm sm:text-base text-gray-700 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Message */}
            <div className="relative">
              <MessageCircle className="absolute left-3 top-4 sm:top-6 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your interest in our franchise..."
                rows="3"
                className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-200 text-sm sm:text-base text-gray-700 placeholder-gray-400 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`w-full py-3 sm:py-4 px-6 rounded-xl font-bold text-base sm:text-lg transition-all duration-200 transform hover:scale-105 active:scale-95 ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-green-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl'
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Submitting...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>SUBMIT APPLICATION</span>
                </div>
              )}
            </button>
          </div>

          {/* Footer Text */}
          <p className="text-center text-gray-500 text-xs sm:text-sm mt-4 sm:mt-6">
            Join hundreds of successful franchise owners. Start your journey today!
          </p>
        </div>
      </div>
    </div>
  );
}
