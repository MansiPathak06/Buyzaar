"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const MainBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/images/slider_image2.png",
      alt: "Slide 4",
    },
    {
      id: 2,
      image: "/images/slider_image1.png",
      alt: "Slide 4",
    },
    {
      id: 3,
      image: "/images/slider_image3.png",
      alt: "Slide 4",
    },
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div>
      <div
        id="home"
        className="relative w-full 
                   h-[50vh]
                   md:h-[90vh] md:min-h-[600px]
                   lg:h-[95vh] lg:min-h-[700px]
                   xl:h-screen xl:min-h-[800px]
                   2xl:h-screen 2xl:min-h-[900px]
                   overflow-hidden bg-gray-50"
      >
        {/* Slides Container */}
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="min-w-full h-full relative flex-shrink-0"
            >
              {/* Mobile Layout */}
              <div className="block md:hidden relative w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className={`object-contain transition-transform duration-[4000ms] ease-in-out 
                    ${slide.id === 4 ? "scale-110" : "scale-100"}`}
                  style={{ objectPosition: "center 70%" }}
                />
              </div>

              {/* Desktop Layout - Full Width with padding */}
              <div className="hidden md:block relative w-full h-full p-2">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className={`object-contain transition-transform duration-[4000ms] ease-in-out 
                    ${slide.id === 4 ? "scale-110" : "scale-100"}`}
                  style={{ objectPosition: "center bottom" }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Left Arrow Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 
                     bg-black/30 hover:bg-black/50 text-white 
                     w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 
                     rounded-full flex items-center justify-center 
                     transition-all duration-200 z-20
                     backdrop-blur-sm hover:scale-105"
          aria-label="Previous slide"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Right Arrow Navigation */}
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 md:right-6 top-1/2 transform -translate-y-1/2 
                     bg-black/30 hover:bg-black/50 text-white 
                     w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 
                     rounded-full flex items-center justify-center 
                     transition-all duration-200 z-20
                     backdrop-blur-sm hover:scale-105"
          aria-label="Next slide"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Dots Navigation */}
        <div
          className="absolute bottom-2 sm:bottom-4 md:bottom-5 lg:bottom-6 
                     left-1/2 transform -translate-x-1/2 
                     flex space-x-1.5 sm:space-x-2 md:space-x-2.5 
                     z-20 px-4
                     bg-black/20 rounded-full py-1 px-3 backdrop-blur-sm"
        >
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`
                w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5
                rounded-full transition-all duration-300 
                touch-manipulation
                ${
                  index === currentSlide
                    ? "bg-white scale-110 sm:scale-125 shadow-lg"
                    : "bg-white/50 hover:bg-white/70 active:bg-white/80 hover:scale-105"
                }
              `}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide counter */}
        <div
          className="absolute 
                     top-3 right-3 sm:top-4 sm:right-4 md:top-5 md:right-5 lg:top-6 lg:right-6
                     bg-black/40 text-white 
                     px-2.5 py-1 sm:px-3 sm:py-1.5 md:px-3.5 md:py-2 
                     rounded-full 
                     text-xs sm:text-sm md:text-base
                     backdrop-blur-sm z-20
                     font-medium shadow-lg"
        >
          {currentSlide + 1} / {slides.length}
        </div>
      </div>

      {/* Tagline below slider */}
      <div className="w-full bg-black h-12 py-2 ">
  <h2 className="text-center text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-2xl tracking-tight">
    The Retail Revolution Starts Here!
  </h2>
</div>

    </div>
  );
};

export default MainBanner;