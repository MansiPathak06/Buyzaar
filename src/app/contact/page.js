"use client";
import React, { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import Footer from '../Footer';
import Navbar from '../Navbar';

// Simple SVG icon components (matching the franchise form)
const User = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const Mail = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
      strokeWidth="2"
    />
    <polyline points="22,6 12,13 2,6" strokeWidth="2" />
  </svg>
);

const Phone = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const MapPin = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    state: '',
    city: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Real-time validation for instant feedback
    let newErrors = { ...errors };

    if (name === "fullName") {
      if (!value.trim()) {
        newErrors.fullName = "Full name is required";
      } else if (value.trim().length < 2) {
        newErrors.fullName = "Full name must be at least 2 characters";
      } else {
        delete newErrors.fullName;
      }
    }

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) {
        newErrors.email = "Email is required";
      } else if (!emailRegex.test(value.trim())) {
        newErrors.email =
          "Please enter a valid email (e.g., example@gmail.com)";
      } else {
        delete newErrors.email;
      }
    }

    if (name === "phone") {
      const phoneRegex = /^[6-9]\d{9}$/;
      if (!value.trim()) {
        newErrors.phone = "Phone number is required";
      } else if (!/^\d+$/.test(value.trim())) {
        newErrors.phone = "Phone number should contain only digits";
      } else if (value.trim().length < 10) {
        newErrors.phone = "Phone number must be 10 digits";
      } else if (!phoneRegex.test(value.trim())) {
        newErrors.phone = "Phone number must start with 6, 7, 8, or 9";
      } else {
        delete newErrors.phone;
      }
    }

    if (name === "state") {
      if (!value.trim()) {
        newErrors.state = "Please select your state";
      } else {
        delete newErrors.state;
      }
    }

    if (name === "city") {
      if (!value.trim()) {
        newErrors.city = "City is required";
      } else if (value.trim().length < 2) {
        newErrors.city = "City name must be at least 2 characters";
      } else {
        delete newErrors.city;
      }
    }

    setErrors(newErrors);
  };

  const validateForm = () => {
    let newErrors = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address (e.g., example@gmail.com)";
    }

    // Phone validation (Indian phone number format)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone =
        "Enter a valid 10-digit phone number starting with 6, 7, 8, or 9";
    }

    // State validation
    if (!formData.state.trim()) {
      newErrors.state = "Please select your state";
    }

    // City validation
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    } else if (formData.city.trim().length < 2) {
      newErrors.city = "City name must be at least 2 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Create a regular object instead of FormData for better compatibility
      const submitData = {
        name: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        state: formData.state,
        city: formData.city.trim(),
        message: formData.message.trim() || "No additional message provided",
        _subject: "New Contact Form Submission from Buyzaar Mart Website",
        _captcha: "false",
        _template: "table",
      };

      console.log("Submitting data:", submitData); // For debugging

      // Submit to FormSubmit using JSON
      const response = await fetch(
        "https://formsubmit.co/pathakmansi608@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(submitData),
        }
      );

      console.log("Response status:", response.status); // For debugging

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          state: "",
          city: "",
          message: "",
        });
        setErrors({});
      } else {
        // Try to get error message from response
        const errorText = await response.text();
        console.error("Server response:", errorText);
        throw new Error(`Submission failed with status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

const states = [
  // States
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",

  // Union Territories
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry"
];

  // Check if form is valid by running validation
  const isFormValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    return (
      formData.fullName.trim().length >= 2 &&
      emailRegex.test(formData.email.trim()) &&
      phoneRegex.test(formData.phone.trim()) &&
      formData.state &&
      formData.city.trim().length >= 2
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      
      {/* Hero Section with Background Image */}
      <div className="pt-20 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/bg-image.png')",
          }}
        ></div>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0" style={{background: 'linear-gradient(to right, #00000020, #00000030)'}}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Contact{" "}
              <span className="text-transparent bg-clip-text" style={{background: 'linear-gradient(to right, #ffffff, #ffffffcc)', WebkitBackgroundClip: 'text'}}>
             Buyzaar Mart
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
            <div className="mt-8 w-24 h-1 mx-auto rounded-full shadow-lg" style={{backgroundColor: '#ffffff'}}></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            
            {/* Contact Information */}
            <div className="transform transition-all duration-700 translate-x-0 opacity-100">
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border hover:shadow-xl transition-shadow duration-300 h-full" style={{borderColor: 'black'}}>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8" style={{color: '#000000'}}>Get in 
                  <span className="text-black"> Touch</span></h2>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl hover:bg-opacity-80 transition-colors duration-300" style={{backgroundColor: '#00000010'}}>
                    <div className="p-2 sm:p-3 rounded-full flex-shrink-0" style={{backgroundColor: '#00000040'}}>
                      <img
                    src="https://cdn-icons-png.flaticon.com/128/646/646094.png"
                    alt="Users icon"
                    className="w-8 h-8"
                  />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base sm:text-lg font-semibold mb-1" style={{color: '#000000'}}>Email Us:</h3>
                      <p className="text-sm sm:text-base break-all text-black">info@apnabaazar.co.in</p>
                      <p className="text-xs sm:text-sm mt-1 text-gray-600">We&apos;ll respond within 24 hours</p>
                    </div>
                  </div>

                    <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl hover:bg-opacity-80 transition-colors duration-300" style={{backgroundColor: '#00000010'}}>
                    <div className="p-2 sm:p-3 rounded-full flex-shrink-0" style={{backgroundColor: '#00000040'}}>
                      <img
                    src="https://cdn-icons-png.flaticon.com/128/126/126509.png"
                    alt="Users icon"
                    className="w-8 h-8"
                  />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base sm:text-lg font-semibold mb-1" style={{color: '#000000'}}>Call Us:</h3>
                      <p className="text-sm sm:text-base text-black">9311939160 , 9311939161</p>
                     
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl hover:bg-opacity-80 transition-colors duration-300" style={{backgroundColor: '#00000010'}}>
                    <div className="p-2 sm:p-3 rounded-full flex-shrink-0" style={{backgroundColor: '#00000040'}}>
                      <img
                    src="https://cdn-icons-png.flaticon.com/128/535/535239.png"
                    alt="Users icon"
                    className="w-8 h-8"
                  />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base sm:text-lg font-semibold mb-1" style={{color: '#000000'}}>Visit Our Office</h3>
                      <p className="text-sm sm:text-base text-black">D-43, Third floor</p>
                      <p className="text-sm sm:text-base text-black">Sector-6, Noida-201301</p>
                    </div>
                  </div>

                

                  <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl hover:bg-opacity-80 transition-colors duration-300" style={{backgroundColor: '#00000010'}}>
                    <div className="p-2 sm:p-3 rounded-full flex-shrink-0" style={{backgroundColor: '#00000040'}}>
                       <img
                    src="https://cdn-icons-png.flaticon.com/128/2088/2088617.png"
                    alt="Users icon"
                    className="w-8 h-8"
                  />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base sm:text-lg font-semibold mb-1" style={{color: '#000000'}}>Business Hours</h3>
                      <p className="text-sm sm:text-base text-black">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                      <p className="text-xs sm:text-sm mt-1 text-gray-600">Closed on Sundays</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Updated to match the franchise form exactly */}
            <div className="animate-fade-in-right">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-bl-full opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gray-100 rounded-tr-full opacity-50"></div>

                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">
                      I want to become an entrepreneur
                    </h2>
                    <p className="text-gray-600">
                      Start your journey with Buyzaar Mart today
                    </p>
                  </div>

                  {submitStatus && (
                    <div className={`mb-6 p-4 rounded-lg flex items-start space-x-2 transition-all duration-300 border`}
                    style={{
                      backgroundColor: '#00000010',
                      borderColor: '#00000040'
                    }}>
                      {submitStatus === 'success' ? (
                        <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{color: '#000000'}} />
                      ) : (
                        <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{color: '#000000'}} />
                      )}
                      <span className="text-sm text-black">
                        {submitStatus === 'success' 
                          ? 'Thank you! Your inquiry has been submitted successfully. We&apos;ll respond soon!'
                          : 'Something went wrong. Please try again or email us directly.'
                        }
                      </span>
                    </div>
                  )}

                  <div className="space-y-6">
                    {/* Full Name */}
                    <div className="group">
                      <label className="block text-gray-700 font-medium mb-2 transition-colors group-focus-within:text-black">
                        <User className="w-4 h-4 inline mr-2" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-300 hover:border-gray-300 ${
                          errors.fullName
                            ? "border-red-500 focus:border-red-500"
                            : "border-gray-200 focus:border-black"
                        }`}
                        placeholder="Enter your full name"
                        required
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-sm mt-1 flex items-center">
                          <span className="mr-1">⚠️</span>
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="group">
                      <label className="block text-gray-700 font-medium mb-2 transition-colors group-focus-within:text-black">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-300 hover:border-gray-300 ${
                          errors.email
                            ? "border-red-500 focus:border-red-500"
                            : "border-gray-200 focus:border-black"
                        }`}
                        placeholder="Enter your email address"
                        required
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1 flex items-center">
                          <span className="mr-1">⚠️</span>
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="group">
                      <label className="block text-gray-700 font-medium mb-2 transition-colors group-focus-within:text-black">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        maxLength="10"
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-300 hover:border-gray-300 ${
                          errors.phone
                            ? "border-red-500 focus:border-red-500"
                            : "border-gray-200 focus:border-black"
                        }`}
                        placeholder="Enter your phone number (10 digits)"
                        required
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1 flex items-center">
                          <span className="mr-1">⚠️</span>
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* State and City */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="group">
                        <label className="block text-gray-700 font-medium mb-2 transition-colors group-focus-within:text-black">
                          <MapPin className="w-4 h-4 inline mr-2" />
                          State *
                        </label>
                        <select
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-300 hover:border-gray-300 ${
                            errors.state
                              ? "border-red-500 focus:border-red-500"
                              : "border-gray-200 focus:border-black"
                          }`}
                          required
                        >
                          <option value="">Select your state</option>
                          {states.map((state) => (
                            <option key={state} value={state}>
                              {state}
                            </option>
                          ))}
                        </select>
                        {errors.state && (
                          <p className="text-red-500 text-sm mt-1 flex items-center">
                            <span className="mr-1">⚠️</span>
                            {errors.state}
                          </p>
                        )}
                      </div>

                      <div className="group">
                        <label className="block text-gray-700 font-medium mb-2 transition-colors group-focus-within:text-black">
                          City *
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-300 hover:border-gray-300 ${
                            errors.city
                              ? "border-red-500 focus:border-red-500"
                              : "border-gray-200 focus:border-black"
                          }`}
                          placeholder="Enter your city"
                          required
                        />
                        {errors.city && (
                          <p className="text-red-500 text-sm mt-1 flex items-center">
                            <span className="mr-1">⚠️</span>
                            {errors.city}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="group">
                      <label className="block text-gray-700 font-medium mb-2 transition-colors group-focus-within:text-black">
                        Message (Optional)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message || ""}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none transition-all duration-300 hover:border-gray-300 resize-none"
                        placeholder="Tell us about your franchise goals or any questions you have..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      disabled={!isFormValid() || isSubmitting}
                      className={`w-full font-bold py-4 px-8 rounded-lg transform transition-all duration-300 shadow-lg relative overflow-hidden group
                ${
                  !isFormValid() || isSubmitting
                    ? "bg-gray-400 cursor-not-allowed text-white"
                    : "bg-black hover:bg-gray-800 text-white hover:scale-105 hover:shadow-xl"
                }`}
                    >
                      <span className="relative z-10">
                        {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                      </span>
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </button>
                  </div>

                  <p className="text-center text-sm text-gray-500 mt-6">
                    * Required fields. By submitting this form, you agree to be
                    contacted by our team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-right {
          animation: fade-in-right 1s ease-out 0.3s both;
        }

        /* Responsive background image fixes */
        @media (max-width: 768px) {
          [style*="background-attachment: fixed"] {
            background-attachment: scroll !important;
          }
        }

        /* Ensure proper text wrapping on small screens */
        @media (max-width: 640px) {
          h1 {
            word-break: break-word;
            hyphens: auto;
          }
        }
      `,
        }}
      />
    </div>
  );
};

export default ContactPage;