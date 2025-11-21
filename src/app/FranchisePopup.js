"use client";
import { useState, useEffect } from "react";
import {
  X,
  User,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";

export default function FranchisePopupModal({
  isOpen: externalIsOpen,
  onClose,
  showOnLoad = true, // New prop to control auto-show
}) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
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

  // Show popup when component mounts (auto-open on page load)
  useEffect(() => {
    // Only auto-show if showOnLoad is true AND no external control is provided
    if (showOnLoad && externalIsOpen === undefined) {
      const timer = setTimeout(() => {
        setInternalIsOpen(true);
      }, 1000); // Show popup 1 second after page load

      return () => clearTimeout(timer);
    }
  }, [showOnLoad, externalIsOpen]);

  // Use external control if provided, otherwise use internal state
  const isModalOpen =
    externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;

  const closeModal = () => {
    if (onClose) {
      onClose(); // Use external close handler if provided
    } else {
      setInternalIsOpen(false); // Use internal state if no external handler
    }
  };

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

  const handleSubmit = async () => {
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
        _subject: "New Buyzaar Mart Franchise Application - Popup Form",
        _captcha: "false",
        _template: "table",
      };

      console.log("Submitting data:", submitData); // For debugging

      // Submit to FormSubmit using JSON
      const response = await fetch(
        "https://formsubmit.co/info@thebuyzaarmart.com ",
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
        closeModal();
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
    "Puducherry",
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

  // Handle backdrop click to close modal
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  if (!isModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-opacity-50"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-md mx-auto bg-white rounded-xl shadow-2xl transform transition-all duration-300 scale-75">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 z-100 text-red-500 hover:text-[#b00000] transition-colors duration-200"
          title="Close"
        >
          <X size={24} strokeWidth={2} />
        </button>

  {/* Header Section - Clean and Balanced */}
<div className="bg-gray-100 p-5 rounded-t-xl relative"> 
  {/* Logo and Title */}
  <div className="flex flex-col items-center justify-center mb-0">
    <div className="w-32 h-32 flex items-center justify-center mb-1">
      <img
        src="/images/buyzaar-logo.png"
        alt="Logo"
        className="w-50 h-42 object-cover"
      />
    </div>
    <h1 className="text-lg font-bold text-gray-800 leading-tight">
      The Buyzaar Mart
    </h1>
  </div>

  {/* Main Heading */}
  <div className="text-center mt-0.5">
    <h2 className="text-base font-bold text-gray-900 mb-0.5">
      START YOUR OWN BUSINESS
    </h2>
    <p
      style={{ color: "#7f1d1d" }}
      className="font-medium text-md leading-snug"
    >
      &quot;Become a Part of Buyzaar Now&quot;
      <br />
      We&apos;ll call you.
    </p>
  </div>
</div>



        {/* Updated Form Section with proper validation */}
        <div className="p-6">
          <div className="space-y-4">
            {/* Full Name */}
            <div className="group">
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className={`w-full pl-12 pr-4 py-3 border-2 rounded-lg transition-all duration-300 text-gray-700 placeholder-gray-400 bg-white ${
                    errors.fullName
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 focus:border-[#fd7e14]"
                  }`}
                />
              </div>
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <span className="mr-1">⚠️</span>
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="group">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                  className={`w-full pl-12 pr-4 py-3 border-2 rounded-lg transition-all duration-300 text-gray-700 placeholder-gray-400 bg-white ${
                    errors.email
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 focus:border-[#fd7e14]"
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <span className="mr-1">⚠️</span>
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="group">
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength="10"
                  placeholder="Enter your phone number (10 digits)"
                  required
                  className={`w-full pl-12 pr-4 py-3 border-2 rounded-lg transition-all duration-300 text-gray-700 placeholder-gray-400 bg-white ${
                    errors.phone
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 focus:border-[#fd7e14]"
                  }`}
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <span className="mr-1">⚠️</span>
                  {errors.phone}
                </p>
              )}
            </div>

            {/* State and City in same row for space efficiency */}
            <div className="grid grid-cols-1 gap-4">
              {/* State */}
              <div className="group">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className={`w-full pl-12 pr-4 py-3 border-2 rounded-lg transition-all duration-300 text-gray-700 bg-white ${
                      errors.state
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 focus:border-[#fd7e14]"
                    }`}
                  >
                    <option value="">Select your state</option>
                    {states.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.state && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <span className="mr-1">⚠️</span>
                    {errors.state}
                  </p>
                )}
              </div>

              {/* City */}
              <div className="group">
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 flex items-center justify-center">
                    🏙️
                  </div>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter your city"
                    required
                    className={`w-full pl-12 pr-4 py-3 border-2 rounded-lg transition-all duration-300 text-gray-700 placeholder-gray-400 bg-white ${
                      errors.city
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 focus:border-[#fd7e14]"
                    }`}
                  />
                </div>
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
              <div className="relative">
                <MessageCircle className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
                <textarea
                  name="message"
                  value={formData.message || ""}
                  onChange={handleChange}
                  placeholder="Tell us about your franchise goals or any questions you have..."
                  rows="3"
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#fd7e14] transition-all duration-300 text-gray-700 placeholder-gray-400 resize-none bg-white"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={!isFormValid() || isSubmitting}
              className={`w-full py-3 px-6 rounded-lg font-bold text-base transition-all duration-300 mt-6 shadow-lg relative overflow-hidden group ${
                !isFormValid() || isSubmitting
                  ? "bg-gray-400 cursor-not-allowed text-white"
                  : "text-white hover:shadow-xl"
              }`}
              style={{
                backgroundColor:
                  !isFormValid() || isSubmitting ? undefined : "#fd7e14",
              }}
              onMouseEnter={(e) => {
                if (isFormValid() && !isSubmitting) {
                  e.target.style.backgroundColor = "#e8681a";
                }
              }}
              onMouseLeave={(e) => {
                if (isFormValid() && !isSubmitting) {
                  e.target.style.backgroundColor = "#fd7e14";
                }
              }}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>SUBMITTING...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  <Send className="w-4 h-4" />
                  <span>SUBMIT INQUIRY</span>
                </div>
              )}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Footer Text */}
          <p className="text-center text-gray-500 text-sm mt-4">
            * Required fields. By submitting this form, you agree to be
            contacted by our team.
          </p>
        </div>
      </div>
    </div>
  );
}
