"use client";
import React, { useState, useEffect } from 'react';
import { Search, FileText, Rocket, X } from 'lucide-react';

const Process = ({ openModal }) => {  // Accept openModal as prop
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [isDocumentationPopupOpen, setIsDocumentationPopupOpen] = useState(false);

  const processSteps = [
    {
      id: 1,
      title: "SUBMIT AN INQUIRY:",
      icon: "https://img.icons8.com/ios/50/FFFFFF/search--v1.png",
      description: "Start your journey with Buyzaar Mart!",
      details: [
        "Visit buyzaarmart.com",
        "Fill inquiry form.",
        "Get instant response.",
        "Begin your success story."
      ],
      color: "#000000",
      hasInquiryPopup: true  // Different from documentation popup
    },
    {
      id: 2,
      title: "DOCUMENTATION:",
      icon:"https://img.icons8.com/ios/50/FFFFFF/documents.png",
      description: "Legal formalities made simple!",
      details: [
        "KYC & legal documentation.",
        "Agreement Reviewing and Signing",
        "Complete compliance support."
      ],
      color: "#000000",
      hasDocumentationPopup: true  // For documentation popup
    },
    {
      id: 3,
      title: "STORE LAUNCH:",
      icon: "https://img.icons8.com/ios/50/FFFFFF/launched-rocket.png",
      description: "Grand opening with full support!",
      details: [
        "Store launch strategy.",
        "Local marketing campaigns.",
        "Operational backend support.",
        "Customer acquisition support."
      ],
      color: "#000000"
    }
  ];

  const documentationRequirements = [
    {
      category: "Applicant's personal details:",
      items: [
        "ID Proof: Aadhar/Pan/Voter ID",
        "Address proof: Electricity Bill/Rent Agreement/Ration Card"
      ]
    },
    {
      category: "Details for Franchise Application:",
      items: [
        "Educational Certificate: Certificate of Highest Education - 10th/12th/Grad/Post-Grad (Minimum 10th Pass)",
        "Bank Details: Cancelled cheque/Copy of Passbook",
        "Property Documents for Proposed Store: Ownership/Rental Agreement"
      ]
    },
    {
      category: "Additional Details(Not Documents): For applicant KYC",
      items: [
        "Financial details (Income and whether or not the applicant has the capability to Invest 5 Lakhs on his/her own.)",
        "Work experience/background/skills"
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    processSteps.forEach((_, index) => {
      const element = document.getElementById(`step-${index}`);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

 const getStepColors = (isActive) => {
    return {
      bg: isActive ? 'bg-gradient-to-br from-gray-900 to-black' : 'bg-black',
      border: 'border-gray-700',
      text: 'text-white',
      icon: 'text-white',
      iconBg: 'bg-gray-800',
      accent: 'text-white'
    };
  };

  const toggleDocumentationPopup = () => {
    setIsDocumentationPopupOpen(!isDocumentationPopupOpen);
  };

  const handleStepClick = (step) => {
    if (step.hasInquiryPopup) {
      openModal(); // Open franchise popup
    } else if (step.hasDocumentationPopup) {
      toggleDocumentationPopup(); // Open documentation popup
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative z-10 text-center py-20 px-4">
        <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-800 px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-bounce">
          Start Your Success Journey!!
        </div>
        
        <h1 className="text-5xl md:text-5xl font-black text-gray-900 mb-6 animate-fade-in">
          HOW TO GET{" "}
          <span style={{ backgroundImage: `linear-gradient(to right, #000000, #000000)`, backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }} className="inline-block">
            STARTED?
          </span>
        </h1>

        {/* Progress Bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="flex justify-between items-center mb-4">
            {processSteps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center">
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                  index === activeStep 
                    ? 'scale-125'
                    : index < activeStep 
                      ? ''
                      : 'bg-gray-200'
                }`}
                style={{
                  backgroundColor: index <= activeStep ? '#000000' : undefined
                }}>
                  <span className={`text-sm md:text-base font-bold ${
                    index <= activeStep ? 'text-white' : 'text-gray-500'
                  }`}>
                    {step.id}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
            <div 
              className="h-full transition-all duration-1000 ease-out rounded-full"
              style={{ 
                width: `${((activeStep + 1) / processSteps.length) * 100}%`,
                backgroundImage: `linear-gradient(to right, #000000, #000000)`
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Process Steps - Centered Grid Layout */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            const isActive = index === activeStep;
            const colors = getStepColors(isActive);
            const isVis = isVisible[`step-${index}`];
            
            return (
              <div
                key={step.id}
                id={`step-${index}`}
                className={`relative group transition-all duration-700 transform w-full max-w-sm ${
                  isVis ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                } ${
                  isActive ? 'scale-105 z-20' : 'hover:scale-105'
                }`}
                style={{ 
                  animationDelay: `${index * 200}ms`
                }}
                onMouseEnter={() => setActiveStep(index)}
              >
                {/* Card */}
                <div 
                  className={`h-full ${colors.bg} ${colors.border} border-2 rounded-3xl p-6 shadow-xl transition-all duration-500 relative overflow-hidden group-hover:shadow-2xl min-h-[400px] ${(step.hasInquiryPopup || step.hasDocumentationPopup) ? 'cursor-pointer' : ''}`}
                  onClick={() => handleStepClick(step)}
                >
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-30 rounded-full -translate-y-10 translate-x-10"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white opacity-30 rounded-full translate-y-8 -translate-x-8"></div>
                  
                  {/* Step Number Badge */}
                  <div 
                    className={`absolute -top-4 -left-4 w-16 h-16 text-white rounded-full flex items-center justify-center font-black text-2xl shadow-2xl transform transition-all duration-500 ${isActive ? 'scale-125 rotate-12' : 'group-hover:scale-110'} border-4 border-white`}
                    style={{
                      backgroundImage: `linear-gradient(135deg, #000000, #000000)`
                    }}
                  >
                    {step.id}
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 ${colors.iconBg} rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${
                      isActive ? "animate-bounce" : "group-hover:rotate-12"
                    }`}
                  >
                    {typeof IconComponent === "string" ? (
                      <img
                        src={IconComponent}
                        alt="step icon"
                        className="w-8 h-8 object-contain"
                      />
                    ) : (
                      <IconComponent className={`w-8 h-8 ${colors.icon} transition-colors duration-500`} />
                    )}
                  </div>

                  {/* Content */}
                  <h3 className={`text-xl font-black mb-3 ${colors.text} transition-colors duration-500 leading-tight`}>
                    {step.title}
                  </h3>
                  
                  <p className={`${colors.text} opacity-90 mb-4 text-sm leading-relaxed transition-colors duration-500`}>
                    {step.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className={`flex items-start gap-3 transition-all duration-500 ${isActive ? 'animate-fade-in' : ''}`} style={{ animationDelay: `${detailIndex * 100}ms` }}>
                        <div 
                          className={`w-3 h-3 rounded-full mt-1.5 flex-shrink-0 transition-all duration-500 ${isActive ? 'scale-125' : ''}`}
                          style={{ backgroundColor: '#000000' }}
                        ></div>
                        <span className={`${colors.text} text-sm font-medium transition-colors duration-500 leading-relaxed`}>
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Click indicator buttons */}
                  {(step.hasInquiryPopup || step.hasDocumentationPopup) && (
                    <div className="absolute bottom-4 right-4 bg-black text-white px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
                      {step.hasInquiryPopup ? "Click for Inquiry" : "Click for details"}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Documentation Requirements Popup Modal */}
      {isDocumentationPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="bg-black text-white p-6  relative">
              <button 
                onClick={toggleDocumentationPopup}
                className="absolute top-4 right-4 text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all duration-300"
              >
                <X size={24} />
              </button>
              <h2 className="text-2xl font-black mb-2 flex items-center gap-3">
                <FileText size={28} />
                Documents Required
              </h2>
              <p className="text-gray-100">Complete list of required documents for franchise application</p>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {documentationRequirements.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-8 last:mb-0">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
                    {section.category}
                  </h3>
                  <div className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="bg-gray-50 p-6 rounded-b-3xl">
              <button 
                onClick={toggleDocumentationPopup}
                className="w-full bg-black text-white py-3 px-6 rounded-xl font-semibold hover:from-gray-600 hover:to-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Got it! Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          animation-delay: 0.3s;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Process;