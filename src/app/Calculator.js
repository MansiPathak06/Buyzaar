"use client";
import React, { useState, useEffect } from "react";

const Calculator = ({ openModal }) => {
  const [selectedSize, setSelectedSize] = useState("Mini Mart");
  const [area, setArea] = useState(600);
  const [costs, setCosts] = useState({
    stock: 0,
    interior: 0,
    franchiseFee: 0,
    securityFee: 0,
  });

  const franchiseSizes = {
    "Mini Mart": {
      minArea: 600,
      maxArea: 1000,
      icon: "https://cdn-icons-png.flaticon.com/128/869/869687.png",
      description: "600-1000 sqft",
    },
    "Super Mart": {
      minArea: 1001,
      maxArea: 3000,
      icon: "https://cdn-icons-png.flaticon.com/128/4963/4963840.png",
      description: "1001-3000 sqft",
    },
    "Hyper Mart": {
      minArea: 3001,
      maxArea: 8000,
      icon: "https://cdn-icons-png.flaticon.com/128/6842/6842281.png",
      description: "3001-8000 sqft",
    },
  };

  // GST calculation helper
  const calculateWithGST = (amount, gstRate = 18) => {
    return Math.round(amount * (1 + gstRate / 100));
  };

  // Calculate costs based on the investment plans
// Calculate costs based on the investment tiers and area
const calculateCosts = () => {
  // Store min/max investment & min/max area for each type
  const tiers = {
    'Mini Mart': {
      min: 1504000,
      max: 2217000,
      minArea: 600,
      maxArea: 1000
    },
    'Super Mart': {
      min: 2217000,
      max: 5538000,
      minArea: 1001,
      maxArea: 3000
    },
    'Hyper Mart': {
      min: 5538000,
      max: 18400000,
      minArea: 3001,
      maxArea: 8000
    }
  };
  const tier = tiers[selectedSize];

  // Compute the linear investment by area, clamped between min/max for tier
  const frac = (area - tier.minArea) / (tier.maxArea - tier.minArea);
  const total = Math.round(tier.min + frac * (tier.max - tier.min));
  // Distribute total into components using the same ratios as your original code
  const franchiseFee = calculateWithGST(250000);
  const securityFee = calculateWithGST(100000);

  // Let stock/interior be the rest, split at 750:900 ratio
  const stockInteriorTotal = total - franchiseFee - securityFee;
  const ratioStock = 750;
  const ratioInterior = 900;
  const ratioSum = ratioStock + ratioInterior;
  const stock = Math.round(stockInteriorTotal * (ratioStock / ratioSum));
  const interior = stockInteriorTotal - stock;

  return { stock, interior, franchiseFee, securityFee };
};



  // Automatically determine store type based on area
  useEffect(() => {
    let newStoreType;
    if (area >= 600 && area <= 1000) {
      newStoreType = "Mini Mart";
    } else if (area >= 1001 && area <= 3000) {
      newStoreType = "Super Mart";
    } else if (area >= 3001 && area <= 8000) {
      newStoreType = "Hyper Mart";
    } else {
      newStoreType = selectedSize;
    }

    if (newStoreType !== selectedSize) {
      setSelectedSize(newStoreType);
    }
  }, [area, selectedSize]);

  // Calculate costs when area or type changes
  useEffect(() => {
    setCosts(calculateCosts());
  }, [area, selectedSize]); // Also recalc when type changes

  // Total cost is exact sum of items in cost object
  const totalCost = Object.values(costs).reduce((sum, cost) => sum + cost, 0);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN").format(amount);
  };

  const handleAreaChange = (e) => {
    const value = parseInt(e.target.value) || 600;
    if (value >= 600 && value <= 8000) {
      setArea(value);
    }
  };

  const handleApplyForFranchise = () => {
    openModal();
  };

  const handleDownloadBrochure = () => {
    const link = document.createElement("a");
    link.href = "/brochures/franchise-brochure.pdf";
    link.download = "Franchise-Brochure.pdf";
    link.click();
  };

  return (
    <div
      id="calculator"
      className="min-h-screen bg-white p-3 sm:p-4 md:p-6 lg:p-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#b00000] mb-3 sm:mb-4 px-2">
            Calculate Your{" "}
            <span className="text-black">Franchise Investment</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto px-4">
            Calculate your estimated investment for Mini Mart, Super Mart, or
            Hyper Mart franchise with accurate costs including stock, interior,
            franchise fee, and security deposit.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="flex flex-col gap-4 sm:gap-6 lg:grid lg:grid-cols-2 lg:gap-8">
          {/* Left Panel - Calculator Controls */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {/* Store Type Selection Card */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 min-h-64 sm:min-h-80 lg:h-[350px]">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 text-center lg:text-left">
                Choose Your Store Type
              </h2>

              {/* Store Type Grid */}
              <div className="grid grid-cols-1 gap-3 mb-4 sm:grid-cols-3 sm:gap-4 sm:mb-6 lg:mb-8">
                {Object.entries(franchiseSizes).map(([size, details]) => {
                  const isSelected = selectedSize === size;
                  return (
                    <button
                      key={size}
                      onClick={() => {
                        setSelectedSize(size);
                        setArea(details.minArea);
                      }}
                      className={`relative p-4 sm:p-6 rounded-lg sm:rounded-xl border-2 transition-all duration-300 hover:shadow-lg min-h-[100px] sm:min-h-auto ${
                        isSelected
                          ? "border-black bg-gray-100 shadow-lg"
                          : "border-gray-200 bg-white hover:border-gray-400"
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-[#b00000] rounded-full flex items-center justify-center">
                          <svg
                            className="w-3 h-3 sm:w-5 sm:h-5 bg-[#b00000] text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      )}

                      <div className="flex flex-col items-center space-y-2 sm:space-y-3">
                        <img
                          src={details.icon}
                          alt={size}
                          className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 ${
                            isSelected ? "filter-black" : ""
                          }`}
                        />
                        <h3
                          className={`font-semibold text-sm sm:text-base lg:text-lg text-center ${
                            isSelected ? "text-black" : "text-gray-700"
                          }`}
                        >
                          {size}
                        </h3>
                        <p
                          className={`text-xs sm:text-sm text-center ${
                            isSelected ? "text-black" : "text-gray-500"
                          }`}
                        >
                          {details.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Area Selection Section */}
              <div className="space-y-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
                  <label className="text-sm sm:text-base lg:text-lg font-medium text-gray-700 text-center sm:text-left">
                    Select Area: 600 - 8000 sqft
                  </label>
                  {/* Area Input */}
                  <div className="flex items-center justify-center space-x-3">
                    <input
                      type="number"
                      value={area}
                      onChange={handleAreaChange}
                      min={600}
                      max={8000}
                      step={1}
                      className="w-20 sm:w-24 lg:w-28 px-2 sm:px-3 py-2 border border-gray-300 rounded-lg text-center text-base sm:text-lg font-bold focus:ring-2 focus:ring-black focus:border-black"
                      style={{ fontSize: "16px" }}
                    />
                    <span className="text-sm font-medium text-gray-500">
                      sqft
                    </span>
                  </div>
                </div>

                {/* Range Slider */}
                <div className="relative px-2">
                  <input
                    type="range"
                    min={600}
                    max={8000}
                    value={area}
                    step={1}
                    onChange={(e) => setArea(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, #000000 0%, #000000 ${
                        ((area - 600) / (8000 - 600)) * 100
                      }%, #e5e7eb ${
                        ((area - 600) / (8000 - 600)) * 100
                      }%, #e5e7eb 100%)`,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Investment Display Card */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 lg:p-8 min-h-50 sm:min-h-64 lg:h-[290px] flex flex-col justify-center">
              <div className="text-center">
                <h3 className="text-base sm:text-lg text-gray-500 mb-2">
                  Estimated Investment
                </h3>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-2">
                  ₹ {formatCurrency(totalCost)}
                </p>
                <p className="text-sm text-gray-400 mb-4 sm:mb-6">
                  {selectedSize} - {area} sqft
                </p>

                {/* Buttons Container */}
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 items-center justify-center">
                  {/* Download Button */}
                  <button
                    onClick={handleDownloadBrochure}
                    className="w-full sm:w-auto bg-black hover:bg-[#b00000] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-3"
                    style={{ minHeight: "44px" }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Download Brochure</span>
                  </button>

                  {/* Apply for Franchise Button */}
                 <button
  onClick={handleApplyForFranchise}
  className="w-full sm:w-auto bg-white hover:bg-black hover:text-white border border-[#b00000] font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-3"
  style={{ minHeight: '44px' }}
>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Apply Now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Images */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {/* ROI Image */}
            <div className="rounded-xl sm:rounded-2xl shadow-lg h-64 sm:h-80 lg:h-[350px] overflow-hidden">
              <img
                src="/images/Comic 2.jpg"
                alt="Franchise Investment Chart"
                className="w-full h-full object-contain object-center"
              />
            </div>

            {/* Investment Image */}
            <div className="rounded-xl sm:rounded-2xl shadow-lg h-50 sm:h-64 lg:h-[290px] overflow-hidden">
              <img
                src="/images/BUYZAAR BRAND 2.png"
                alt="Franchise Benefits"
                className="w-full h-full object-fit object-center"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #000000;
          cursor: pointer;
          box-shadow: 0 0 2px 0 #555;
          transition: background 0.15s ease-in-out;
        }

        .slider::-webkit-slider-thumb:hover {
          background: #1f2937;
        }

        .slider::-moz-range-thumb {
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #000000;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 2px 0 #555;
        }

        @media (max-width: 640px) {
          .slider::-webkit-slider-thumb {
            height: 28px;
            width: 28px;
          }

          .slider::-moz-range-thumb {
            height: 28px;
            width: 28px;
          }
        }
      `}</style>
    </div>
  );
};

export default Calculator;