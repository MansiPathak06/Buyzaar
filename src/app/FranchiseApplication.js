"use client";
import React, { useState } from "react";

// Simple SVG icon components
const Leaf = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.06.82C6.16 17.17 9 14 17 14V8z" />
    <path d="M3.95 6.06c6.79-6.79 17.16-3.91 19.8-1.27l-2.83 2.83c-1.77-1.77-8.82-3.54-13.14.78L3.95 6.06z" />
  </svg>
);

const Users = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const TrendingUp = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <polyline points="22,7 13.5,15.5 8.5,10.5 2,17" strokeWidth="2" />
    <polyline points="16,7 22,7 22,13" strokeWidth="2" />
  </svg>
);

const Award = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="8" r="7" strokeWidth="2" />
    <polyline
      points="8.21,13.89 7,23 12,20 17,23 15.79,13.88"
      strokeWidth="2"
    />
  </svg>
);

const MapPin = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const Phone = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
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

const User = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const FranchiseApplication = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        _subject: "New Buyzaar Mart Franchise Application",
        _captcha: "false",
        _template: "table",
      };

      console.log("Submitting data:", submitData); // For debugging

      // Submit to FormSubmit using JSON
      const response = await fetch(
        "https://formsubmit.co/info@apnabaazar.co.in",
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
        alert("Application submitted successfully! We will contact you soon.");
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
      alert(
        "There was an error submitting your application. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
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
    <div id="franchise" className="min-h-screen bg-white">
      <div className="container mx-auto px-6 lg:px-42 py-8">
        {/* Header Badge */}
        <div className="mb-8">
          <div className="inline-block bg-black text-white px-6 py-3 rounded-full shadow-lg">
            <span className="font-bold text-sm flex items-center">
              <Leaf className="w-4 h-4 mr-2" />
              India&apos;s leading retail franchise network
            </span>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-left">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-black">Own Your</span>{" "}
                <span className="text-black relative">
                  Success
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-black rounded-full transform scale-x-0 animate-scale-x"></div>
                </span>{" "}
                <span className="text-gray-800">Story with</span>{" "}
                <span className="text-black font-extrabold">
                  Buyzaar Mart
                </span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                Join India&apos;s fastest-growing convenience network. With
                our proven business model, comprehensive support, and innovative
                technology, we help entrepreneurs build thriving businesses that
                serve rural communities.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="group bg-gray-100 p-6 rounded-xl border border-gray-300 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/694/694642.png"
                    alt="Users icon"
                    className="w-8 h-8"
                  />
                </div>

                <h3 className="font-bold text-black mb-2">
                  Community Impact
                </h3>
                <p className="text-black text-sm">
                  Serving Urban and Rural communities all across India!
                </p>
              </div>

              <div className="group bg-gray-100 p-6 rounded-xl border border-gray-300 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
                 <img
                    src="https://cdn-icons-png.flaticon.com/128/3281/3281172.png"
                    alt="Users icon"
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="font-bold text-black mb-2">Proven Growth</h3>
                <p className="text-black text-sm">
                  Scalable business model with continuous support
                </p>
              </div>

              <div className="group bg-gray-100 p-6 rounded-xl border border-gray-300 hover:shadow-lg transition-all duration-300 hover:scale-105 sm:col-span-2">
                <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
                 <img
                    src="https://cdn-icons-png.flaticon.com/128/12650/12650351.png"
                    alt="Users icon"
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="font-bold text-black mb-2">
                  Comprehensive Training & Support
                </h3>
                <p className="text-black text-sm">
                  From setup to operations, we&apos;re with you every step of
                  the way
                </p>
              </div>
            </div>

            {/* Floating Icons Animation */}
            {/* <div className="hidden lg:block relative">
              <div className="absolute top-0 left-0 text-black opacity-30 animate-float">
                <Leaf className="w-8 h-8" />
              </div>
              <div className="absolute top-10 right-0 text-black opacity-30 animate-float-delayed">
                <Award className="w-6 h-6" />
              </div>
              <div className="absolute -top-5 right-20 text-black opacity-20 animate-float-slow">
                <TrendingUp className="w-7 h-7" />
              </div>
            </div> */}
          </div>

          {/* Right Form */}
          <div className="animate-fade-in-right">
            <div className="bg-white rounded-2xl shadow-2xl p-3 border border-gray-100 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-30 bg-gray-100 rounded-bl-full opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gray-100 rounded-tr-full opacity-50"></div>

              <div className="relative z-10">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    I want to become an entrepreneur
                  </h2>
                  <p className="text-gray-600">
                    Start your journey with Buyzaar Mart today
                  </p>
                </div>

                <div className="space-y-3">
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

        @keyframes scale-x {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in-left {
          animation: fade-in-left 1s ease-out;
        }

        .animate-fade-in-right {
          animation: fade-in-right 1s ease-out 0.3s both;
        }

        .animate-scale-x {
          animation: scale-x 1s ease-out 1s both;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite 1s;
        }

        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite 0.5s;
        }
      `,
        }}
      />
    </div>
  );
};

export default FranchiseApplication;