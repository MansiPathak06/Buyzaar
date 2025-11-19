"use client";
import React, { useEffect, useRef, useState } from "react";

const About = () => {
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    if (cardsRef.current) observer.observe(cardsRef.current);

    return () => observer.disconnect();
  }, []);

  const handleCardHover = (cardType) => {
    setActiveCard(cardType);
  };

  const handleCardLeave = () => {
    setActiveCard(null);
  };

  return (
    <div id="about" className=" bg-white relative overflow-hidden">
      {/* Background Elements */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-4 w-16 h-16 md:w-32 md:h-32 lg:w-48 lg:h-48 bg-gray-200/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-6 w-20 h-20 md:w-40 md:h-40 lg:w-60 lg:h-60 bg-gray-200/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 md:w-24 md:h-24 lg:w-36 lg:h-36 bg-gray-200/20 rounded-full blur-xl animate-pulse"></div>
      </div> */}

      {/* Main Container */}
      <div className="relative z-10 w-full px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div
            ref={headerRef}
            className="text-center mb-8 md:mb-16 opacity-0 transform translate-y-8 header-animation"
          >
            <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-black mb-4 leading-tight">
              ABOUT &quot;THE BUYZAAR MART&quot;
            </h1>
            <div className="w-16 md:w-24 lg:w-32 h-1 bg-[#b00000] rounded-full mx-auto mb-6"></div>

            <div className="space-y-4 max-w-4xl mx-auto">
              <p className="text-sm md:text-lg lg:text-xl text-gray-700 leading-relaxed px-2">
                Buyzaar Mart is committed to providing transparent, high-quality
                retail solutions that simplify everyday shopping while building
                trust through clear communication and consistent service
                standards.
              </p>
            </div>
          </div>

          {/* Interactive Cards Section */}
          <div
            ref={cardsRef}
            className="relative opacity-0 transform translate-y-8 cards-animation"
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
              {/* Mission Card */}
              <div
                className={`group relative cursor-pointer transition-all duration-700 transform ${
                  activeCard === null || activeCard === "mission"
                    ? "scale-100 opacity-100"
                    : "scale-95 opacity-60"
                }`}
                onMouseEnter={() => handleCardHover("mission")}
                onMouseLeave={handleCardLeave}
              >
                <div className="relative bg-red-800 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-[#b00000]/50 overflow-hidden min-h-[300px] flex flex-col justify-center">
                  {/* Glowing Background Effect */}
                  <div
                    className={`absolute inset-0 rounded-3xl transition-all duration-700 ${
                      activeCard === "mission"
                        ? "bg-gradient-to-br from-[#800000]/50 via-[#800000]/30 to-[#800000]/20"
                        : ""
                    }`}
                  ></div>

                  {/* Animated Border */}
                  <div
                    className={`absolute inset-0 rounded-3xl transition-all duration-700 ${
                      activeCard === "mission"
                        ? "shadow-2xl shadow-black border-2 border-[#b00000]/50"
                        : "border border-[#b00000]/50"
                    }`}
                  ></div>

                  {/* Content Container */}
                  <div className="relative z-10 text-center">
                    {/* Icon - Now positioned in center initially, moves up on hover */}
                    <div
                      className={`bg-gradient-to-br from-black via-black to-black w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-700 relative overflow-hidden ${
                        activeCard === "mission"
                          ? "scale-110 rotate-6 shadow-2xl shadow-black -translate-y-4"
                          : "scale-100"
                      }`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                      <img
                        src="https://img.icons8.com/ios/50/10B981/goal--v1.png"
                        alt="icon"
                        className="w-10 h-10 md:w-12 md:h-12 relative z-10 filter drop-shadow-lg text-white "
                      />
                    </div>

                    {/* Title - Always visible */}
                    <h2
                      className={`text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 transition-all duration-700 relative ${
                        activeCard === "mission" ? "text-black scale-105" : ""
                      }`}
                    >
                      Mission
                      <div
                        className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-black to-black rounded-full transition-all duration-700 ${
                          activeCard === "mission" ? "w-20" : "w-0"
                        }`}
                      ></div>
                    </h2>

                    {/* Content - Only shows on hover */}
                    <div
                      className={`transition-all duration-700 transform ${
                        activeCard === "mission"
                          ? "opacity-100 scale-100 translate-y-0 max-h-96"
                          : "opacity-0 scale-95 translate-y-4 max-h-0 overflow-hidden"
                      }`}
                    >
                      <p className="text-sm md:text-base lg:text-lg text-white leading-relaxed">
                        Our mission is to empower communities through retail
                        ownershhip, enabling individuals to build dignified
                        livelihoods by running neighbourhood stores thhat offer
                        fairness, affordability, and convenience.
                      </p>
                    </div>

                    {/* Show placeholder when not active */}
                    <div
                      className={`transition-all duration-500 ${
                        activeCard !== "mission" && activeCard !== null
                          ? "opacity-100"
                          : activeCard === null
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    >
                      {activeCard === null && (
                        <p className="text-gray-400 text-sm">
                          Hover to reveal mission
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Ripple Effect */}
                  <div
                    className={`absolute inset-0 rounded-3xl overflow-hidden pointer-events-none ${
                      activeCard === "mission" ? "" : "opacity-0"
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-400/0 via-gray-400/10 to-gray-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
                  </div>
                </div>
              </div>

              {/* Vision Card */}
              <div
                className={`group relative cursor-pointer transition-all duration-700 transform ${
                  activeCard === null || activeCard === "vision"
                    ? "scale-100 opacity-100"
                    : "scale-95 opacity-60"
                }`}
                onMouseEnter={() => handleCardHover("vision")}
                onMouseLeave={handleCardLeave}
              >
                <div className="relative bg-red-800 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-200/50 overflow-hidden min-h-[300px] flex flex-col justify-center">
                  {/* Glowing Background Effect */}
                  <div
                    className={`absolute inset-0 rounded-3xl transition-all duration-700 ${
                      activeCard === "vision"
                        ? "bg-gradient-to-br from-[#800000]/50 via-[#800000]/30 to-[#800000]/20"
                        : ""
                    }`}
                  ></div>

                  {/* Animated Border */}
                  <div
                    className={`absolute inset-0 rounded-3xl transition-all duration-700 ${
                      activeCard === "vision"
                        ? "shadow-2xl shadow-gray-500/30 border-2 border-[#b00000]00/50"
                        : "border border-[#b00000]/100"
                    }`}
                  ></div>

                  {/* Content Container */}
                  <div className="relative z-10 text-center">
                    {/* Icon - Now positioned in center initially, moves up on hover */}
                    <div
                      className={`bg-black w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-700 relative overflow-hidden ${
                        activeCard === "vision"
                          ? "scale-110 -rotate-6 shadow-2xl shadow-gray-400/50 -translate-y-4"
                          : "scale-100"
                      }`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                      <img
                        src="https://img.icons8.com/ios/50/10B981/visible--v1.png"
                        alt="icon"
                        className="w-10 h-10 md:w-12 md:h-12 relative z-10 filter drop-shadow-lg"
                      />
                    </div>

                    {/* Title - Always visible */}
                    <h2
                      className={`text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 transition-all duration-700 relative ${
                        activeCard === "vision" ? "text-black scale-105" : ""
                      }`}
                    >
                      Vision
                      <div
                        className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-black to-black rounded-full transition-all duration-700 ${
                          activeCard === "vision" ? "w-20" : "w-0"
                        }`}
                      ></div>
                    </h2>

                    {/* Content - Only shows on hover */}
                    <div
                      className={`transition-all duration-700 transform ${
                        activeCard === "vision"
                          ? "opacity-100 scale-100 translate-y-0 max-h-96"
                          : "opacity-0 scale-95 translate-y-4 max-h-0 overflow-hidden"
                      }`}
                    >
                      <p className="text-sm md:text-base lg:text-lg text-white leading-relaxed">
                        The Vision outlines growth to open multiple stores
                        across India with a focus on transparency, accessibility
                        and care.
                      </p>
                    </div>

                    {/* Show placeholder when not active */}
                    <div
                      className={`transition-all duration-500 ${
                        activeCard !== "vision" && activeCard !== null
                          ? "opacity-100"
                          : activeCard === null
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    >
                      {activeCard === null && (
                        <p className="text-gray-400 text-sm">
                          Hover to reveal vision
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Ripple Effect */}
                  <div
                    className={`absolute inset-0 rounded-3xl overflow-hidden pointer-events-none ${
                      activeCard === "vision" ? "" : "opacity-0"
                    }`}
                  >
                    {/* <div className="absolute inset-0 bg-gradient-to-r from-gray-400/0 via-gray-400/10 to-gray-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Instruction Text */}
          </div>
        </div>
      </div>

      <style jsx>{`
        .header-animation.animate-in {
          animation: fadeInUp 1s ease-out forwards;
        }

        .cards-animation.animate-in {
          animation: slideInUp 0.8s ease-out 0.3s forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Mobile optimizations */
        @media (max-width: 1024px) {
          .group:hover {
            transform: none !important;
          }
        }

        @media (max-width: 640px) {
          .group:active {
            transform: scale(0.98);
            transition: transform 0.1s ease;
          }
        }

        /* Prevent horizontal overflow */
        body {
          overflow-x: hidden;
        }

        /* Better mobile text rendering */
        @media (max-width: 480px) {
          .text-2xl {
            font-size: 1.5rem;
          }
          .text-xl {
            font-size: 1.25rem;
          }
          .text-sm {
            font-size: 0.875rem;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
