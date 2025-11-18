"use client";
import React from 'react';
import { 
  ShoppingCart, 
  CreditCard, 
  Store, 
  Users, 
  Palette, 
  MapPin,
  Package,
  IndianRupee,
  BarChart3,
  Shield,
  Clock,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Wide Product Range",
      description: "Daily-need items under one roof!",
      icon:"https://cdn-icons-png.flaticon.com/128/9280/9280764.png",
      color: "bg-black",
      features: [
        "FMCG, groceries, home care, and personal care products.",
        "Carefully curated product mix to meet the needs of urban and semi-urban households."
      ]
    },
    {
      id: 2,
      title: "Affordable Pricing",
      description: "Value-conscious pricing strategy!",
      icon:"https://cdn-icons-png.flaticon.com/128/7370/7370261.png" ,
      color: "bg-black",
      features: [
        "Competitive retail pricing across categories.",
        "Combo deals for value-conscious customers.",
        "Pocket-friendly without compromising on quality."
      ]
    },
    {
      id: 3,
      title: "POS-Enabled Billing System",
      description: "Modern point-of-sale technology!",
      icon: "https://cdn-icons-png.flaticon.com/128/4021/4021708.png",
      color: "bg-black",
      features: [
        "Stores are equipped with modern Point-of-Sale systems.",
        "Fast and accurate billing, GST-compliant invoices.",
        "Real-time tracking of sales and inventory."
      ]
    },
    {
      id: 4,
      title: "Customer Relationship Management (CRM)",
      description: "Building lasting customer relationships!",
      icon: "https://cdn-icons-png.flaticon.com/128/9464/9464467.png",
      color: "bg-black",
      features: [
        "Captures customer data for building loyalty programs and repeat marketing.",
        "Enables personalized offers and return-customer engagement.",
        "Helps improve store profitability and customer retention."
      ]
    },
    {
      id: 5,
      title: "Uniform Branding & Store Design",
      description: "Consistent professional identity!",
      icon:"https://cdn-icons-png.flaticon.com/128/7845/7845486.png",
      color: "bg-black",
      features: [
        "All Gram Shree stores follow a consistent brand layout, signage, and merchandising.",
        "Builds trust and a professional identity across locations.",
        "Easy for customers to recognize and trust."
      ]
    },
    {
      id: 6,
      title: "Localized Product Flexibility",
      description: "Adapted to local preferences!",
      icon:"https://cdn-icons-png.flaticon.com/128/18611/18611195.png",
      color: "bg-black",
      features: [
        "While core SKUs are standardized, stores have the flexibility to include region-specific or locally popular items based on demand."
      ]
    }
  ];

  // Error handler for product images
  const handleImageError = (e, productNum, currentExt) => {
    const extensions = ['png', 'jpg', 'webp'];
    const currentIndex = extensions.indexOf(currentExt);
    
    // Try next extension
    const nextIndex = (currentIndex + 1) % extensions.length;
    const nextExt = extensions[nextIndex];
    
    // Only try each extension once
    if (e.target.dataset.attempts === undefined) {
      e.target.dataset.attempts = 1;
    } else {
      e.target.dataset.attempts = parseInt(e.target.dataset.attempts) + 1;
    }
    
    if (e.target.dataset.attempts < 3) {
      e.target.src = `/images/product${productNum}.${nextExt}`;
    } else {
      // Hide image after trying all formats
      e.target.style.display = 'none';
    }
  };

  return (
    <div id="services" className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-black p-4 rounded-2xl shadow-1xl transform hover:scale-60 transition-transform duration-300">
              <img
                src="https://cdn-icons-png.flaticon.com/128/869/869687.png"
                alt="Trust & Transparency"
                className="w-12 h-12 object-contain"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-5xl font-black text-black mb-6 leading-tight">
            Store Features{" "}
            <span className="text-black">& Services</span>
          </h1>

          <div className="w-24 h-2 bg-black mx-auto mb-4 rounded-full"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Discover our comprehensive range of services designed to provide the 
            <span className="font-semibold text-black"> best shopping experience </span>
            for urban and semi-urban households
          </p>
        </div>
      </div>

      {/* Services Grid with Side Products */}
      <div className="relative py-8 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        {/* Left Side Products - Moving Up */}
        <div className="hidden lg:block absolute left-0 top-0 w-24 h-full">
          <div className="flex flex-col animate-scroll-up">
            {[
              { num: 1, ext: 'png' }, { num: 2, ext: 'png' }, { num: 3, ext: 'png' }, 
              { num: 4, ext: 'jpg' }, { num: 5, ext: 'png' }, { num: 6, ext: 'jpg' },
              { num: 7, ext: 'png' }, { num: 8, ext: 'png' }, { num: 9, ext: 'jpg' },
              { num: 10, ext: 'jpg' }, { num: 11, ext: 'jpg' }, { num: 12, ext: 'webp' },
              { num: 13, ext: 'webp' }, { num: 14, ext: 'webp' }, { num: 15, ext: 'jpg' }, 
              { num: 16, ext: 'jpg' }, { num: 17, ext: 'webp' },
              { num: 1, ext: 'png' }, { num: 2, ext: 'png' }, { num: 3, ext: 'png' }, 
              { num: 4, ext: 'jpg' }, { num: 5, ext: 'png' },
            ].map((product, index) => (
              <div key={`left-${index}`} className="flex-shrink-0 my-4 ml-4">
                <img 
                  src={`/images/product${product.num}.${product.ext}`} 
                  alt={`Product ${product.num}`}
                  className="w-20 h-20 object-cover rounded-lg shadow-lg hover:scale-110 transition-transform duration-300"
                  onError={(e) => handleImageError(e, product.num, product.ext)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Products - Moving Down */}
        <div className="hidden lg:block absolute right-0 top-0 w-24 h-full">
          <div className="flex flex-col animate-scroll-down">
            {[
              { num: 6, ext: 'jpg' }, { num: 7, ext: 'png' }, { num: 8, ext: 'png' },
              { num: 9, ext: 'jpg' }, { num: 10, ext: 'jpg' }, { num: 11, ext: 'jpg' },
              { num: 12, ext: 'webp' }, { num: 13, ext: 'webp' }, { num: 14, ext: 'webp' }, 
              { num: 15, ext: 'jpg' }, { num: 1, ext: 'png' }, { num: 2, ext: 'png' },
              { num: 16, ext: 'jpg' }, { num: 17, ext: 'webp' },
              { num: 3, ext: 'png' }, { num: 4, ext: 'jpg' }, { num: 5, ext: 'png' },
              { num: 6, ext: 'jpg' }, { num: 7, ext: 'png' }, { num: 8, ext: 'png' },
              { num: 9, ext: 'jpg' }, { num: 10, ext: 'jpg' }
            ].map((product, index) => (
              <div key={`right-${index}`} className="flex-shrink-0 my-4 mr-4">
                <img 
                  src={`/images/product${product.num}.${product.ext}`} 
                  alt={`Product ${product.num}`}
                  className="w-20 h-20 object-cover rounded-lg shadow-lg hover:scale-110 transition-transform duration-300"
                  onError={(e) => handleImageError(e, product.num, product.ext)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Center Services Content */}
        <div className="max-w-6xl mx-auto relative z-10 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isBlack = index % 2 === 0;

              return (
                <div key={service.id} className="relative group h-full max-w-xs mx-auto">
                  {/* Main Card */}
                  <div className={`relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-3 transition-all duration-700 overflow-hidden group border-2 
                    ${isBlack ? 'border-gray-200 hover:border-gray-400' : 'border-gray-200 hover:border-gray-400'} 
                    flex flex-col h-[420px]`}>
                    
                    {/* Animated Background Gradient */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700 ${isBlack ? 'bg-black' : 'bg-black'}`}></div>
                    
                    {/* Top Icon Section */}
                    <div
                      className={`relative p-8 pb-0 ${
                        isBlack ? "bg-gray-50" : "bg-gray-50"
                      } rounded-t-3xl flex-grow flex flex-col justify-center`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={`${service.color} p-5 rounded-2xl shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                        >
                          {typeof IconComponent === "string" ? (
                            <img
                              src={IconComponent}
                              alt="icon"
                              className="w-12 h-12 object-contain"
                            />
                          ) : (
                            <IconComponent className="w-12 h-12 text-white" />
                          )}
                        </div>
                        <div
                          className={`w-16 h-1 ${
                            isBlack ? "bg-black" : "bg-black"
                          } rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-200`}
                        ></div>
                      </div>
                      <h2 className="text-3xl font-black text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                        {service.title}
                      </h2>
                      <p
                        className={`text-lg font-semibold mb-4 ${
                          isBlack ? "text-black" : "text-black"
                        }`}
                      >
                        {service.description}
                      </p>
                    </div>

                    {/* Bottom Accent with Pulse Effect */}
                    <div className={`absolute bottom-0 left-0 h-2 w-full ${isBlack ? 'bg-black' : 'bg-black'} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-b-3xl`}></div>
                    
                    {/* Hover Glow Effect */}
                    <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${isBlack ? 'shadow-gray-200' : 'shadow-gray-200'} shadow-2xl pointer-events-none`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Brand Image Section - Added after cards section */}
      <div className="py-6 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="relative inline-block">
            <img 
              src="/images/Quality.jpg" 
              alt="Gram Shree - अपना बाजार - बचत का साथ Quality की बात"
              className="w-full max-w-5xl mx-auto rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500"
            />
            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes scroll-up {
          0% { transform: translateY(100vh); }
          100% { transform: translateY(-100vh); }
        }
        
        @keyframes scroll-down {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }
        
        .animate-scroll-up {
          animation: scroll-up 20s linear infinite;
        }
        
        .animate-scroll-down {
          animation: scroll-down 25s linear infinite;
        }

        .auto-rows-fr {
          grid-auto-rows: 1fr;
        }
      `}</style>
    </div>
  );
};

export default Services;