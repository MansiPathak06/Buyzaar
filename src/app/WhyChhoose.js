import { useState, useEffect, useRef } from "react";

const WhyChoose = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5]);
    }, 300);

    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const features = [
    {
      icon: (
        <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center">
          <img
            src="https://img.icons8.com/ios/50/10B981/trust--v1.png"
            alt="Trust & Transparency"
            className="w-10 h-10 object-contain"
          />
        </div>
      ),
      title: "Trust & Transparency",
      description:
        "Attractive Pricing, Assured Quality, Constantly ongoing support",
      delay: 0,
    },

    {
      icon: (
        <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center">
          <img
            src="https://img.icons8.com/ios/50/10B981/business--v1.png"
            alt="Trust & Transparency"
            className="w-10 h-10 object-contain"
          />
        </div>
      ),
      title: "Franchise Ready",
      description:
        "Making Entrepreneurship Simple and less risky.",

      delay: 200,
    },
    {
      icon: (
        <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center">
          <img
            src="https://img.icons8.com/ios/50/10B981/customer-insight--v1.png"
            alt="One-Stop Retail"
            className="w-10 h-10 object-contain"
          />
        </div>
      ),
      title: "One-Stop Retail",
      description:
        "Wide range of groceries, FMCG, and daily essentials under one roof.",
      delay: 400,
    },

    {
      icon: (
        <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center">
          <img
            src="https://img.icons8.com/ios/50/10B981/workflow.png"
            alt="Trust & Transparency"
            className="w-10 h-10 object-contain"
          />
        </div>
      ),
      title: "Smart Operations",
      description:
        "Tried and Tested tech enabled systems and models.",

      delay: 600,
    },

    {
      icon: (
        <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center">
          <img
            src="https://img.icons8.com/ios/50/10B981/population-return.png"
            alt="Trust & Transparency"
            className="w-10 h-10 object-contain"
          />
        </div>
      ),
      title: "Profitable Returns",
      description:
        "Earn an effective gross margin of 18-20%",

      delay: 800,
    },
    {
      icon: (
        <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center">
          <img
            src="https://img.icons8.com/ios/50/10B981/speaker_1.png"
            alt="Trust & Transparency"
            className="w-10 h-10 object-contain"
          />
        </div>
      ),
      title: "End to End Ecosystem",
      description:
        "From Operations to Marketing, we handle it all!",

      delay: 800,
    },
    {
      icon: (
        <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center">
          <img
            src="https://img.icons8.com/ios/50/10B981/population-return.png"
            alt="Trust & Transparency"
            className="w-10 h-10 object-contain"
          />
        </div>
      ),
      title: "Profitable Returns",
      description:
        "Earn an effective gross margin of 18-20%",

      delay: 800,
    },
   
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-slide for mobile
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        nextSlide();
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isMobile, currentSlide]);

  return (
    <div className=" bg-white py-18 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div
          className={`text-center mb-10 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Why Choose{" "}
            <span className="text-[#b00000]">BUYZAAR MART ?</span>
          </h1>
          <div className="w-24 h-1 bg-black mx-auto mb-4"></div>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Retail without pain ? That&apos;s Buyzaar
          </p>
        </div>

        {/* Mobile Slider */}
        {isMobile ? (
          <div className="relative">
            {/* Slider Container */}
            <div className="overflow-hidden rounded-xl">
              <div
                ref={sliderRef}
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {features.map((feature, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-black mx-2">
                      {/* Icon */}
                      <div
                        className={`${feature.color} rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto`}
                      >
                        {feature.icon}
                      </div>

                      {/* Content */}
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-justify">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    currentSlide === index ? "bg-black" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Desktop Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`transform transition-all duration-1000 hover:scale-105 ${
                  visibleCards.includes(index)
                    ? "translate-x-0 opacity-100"
                    : index % 2 === 0
                    ? "-translate-x-full opacity-0"
                    : "translate-x-full opacity-0"
                }`}
                style={{ transitionDelay: `${feature.delay}ms` }}
              >
                <div className="bg-red-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 h-full border-l-4 border-black">
                  {/* Icon */}
                  <div
                    className={`${feature.color} rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto transform hover:rotate-12 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-200 mb-4 hover:text-black transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-200 leading-relaxed text-justify">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Floating Elements - Hidden on mobile for cleaner look */}
        {/* <div className="fixed top-20 left-10 w-4 h-4 bg-black rounded-full animate-bounce opacity-60 hidden lg:block"></div>
        <div className="fixed top-1/2 right-20 w-3 h-3 bg-gray-800 rounded-full animate-ping opacity-50 hidden lg:block"></div> */}
      </div>
    </div>
  );
};

export default WhyChoose;