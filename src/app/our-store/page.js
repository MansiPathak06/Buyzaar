'use client';

import React from "react";
import Image from "next/image";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function OurStore() {
  const storeImages = [
    {
      id: 1,
      src: "/images/heropage-slider.png",
      alt: "Store Front View",
      title: "Store Exterior"
    },
    {
      id: 2,
      src: "/images/slider_image3.png",
      alt: "Store Interior Section 1",
      title: "Product Display Area"
    },
    {
      id: 3,
      src: "/images/slider-03.jpg",
      alt: "Store Interior Section 2",
      title: "Checkout Counter"
    },
    {
      id: 4,
      src: "/images/slider_image1.png",
      alt: "Store Layout Overview",
      title: "Complete Layout"
    },
    {
      id: 5,
      src: "/images/slider_image2.png",
      alt: "Product Shelves",
      title: "Product Shelves"
    },
    {
      id: 6,
      src: "/images/slider-02.jpg",
      alt: "Store Entrance",
      title: "Entrance Design"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section - Matching the screenshot */}
        <section className="relative bg-gray-900 text-white py-16 md:py-24 px-4">
          <div className="container mx-auto max-w-7xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 mt-10 leading-tight">
              Your Dream Store Awaits
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 max-w-3xl mx-auto font-medium">
              Experience Our Premium 600 Sq Ft Store Design
            </p>
            <div className="w-24 md:w-32 h-1 bg-white mx-auto rounded-full"></div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-12 md:py-16 lg:py-20 px-4 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                Store
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-800 ml-2">
                  Walkthrough
                </span>
              </h2>
              <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                Take a virtual tour of our 600 sq ft franchise store layout
              </p>
            </div>

            {/* Responsive Video Container */}
            <div className="relative w-full max-w-5xl mx-auto">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-black aspect-video">
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  controls
                  preload="metadata"
                  poster="/images/slider_image1.png"
                  aria-label="Store walkthrough video"
                >
                  <source src="/store/store-walkthrough-600sqft.mp4" type="video/mp4" />
                  <track kind="captions" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Video Info Badge */}
            
          </div>
        </section>

        {/* 3D Store Images Gallery */}
        <section className="py-12 md:py-16 lg:py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                Store
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-800 ml-2">
                  Gallery
                </span>
              </h2>
              <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                Explore every corner of your future store with our 3D renders
              </p>
            </div>

            {/* Responsive Grid Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {storeImages.map((image) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-2 border-gray-200 hover:border-black cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      // Add modal or lightbox functionality here
                    }
                  }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-lg md:text-xl font-bold mb-1">{image.title}</h3>
                        <p className="text-xs md:text-sm text-gray-200">Click to view details</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        
      </div>
      <Footer />
    </>
  );
}