"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Work_Sans } from "next/font/google";

// ✅ Load Work Sans font
const worksans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const HeroPage = ({ openModal }) => {
  const handleDownloadBrochure = () => {
    const link = document.createElement("a");
    link.href = "/brochures/franchise-brochure.pdf";
    link.download = "Franchise-Brochure.pdf";
    link.click();
  };
  return (
    <section
      id="home"
      className={`${worksans.className} relative bg-white overflow-hidden mt-1`}
    >
      <div className="absolute inset-0 bg-white"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-left space-y-6 sm:space-y-8 lg:space-y-15 px-2 sm:px-0 lg:pr-16 lg:-ml[-40px]">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-[#b00000]">The Buyzaar Mart -&quot;Your Friendly neighborhood store&quot;</span>{" "}
                
                
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                Join{" "}
                <span className="text-black">Buyzaar </span>{" "}
                and become a part of India&apos;s growing entrepreneurial
                network.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              {/* Apply Now Button - now calls openModal */}
              <button
                onClick={openModal}
                className="bg-black  text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-[#b00000] transition-all transform hover:scale-105 shadow-lg text-center"
              >
                Apply Now
              </button>

              {/* Download Brochure Button */}
              <button
                onClick={handleDownloadBrochure}
                className="border-2 border-[#b00000] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-[#b00000] hover:text-white transition-all"
              >
                Download brochure
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative mt-8 lg:mt-0 mx-4 sm:mx-0 lg:-ml-8 xl:-ml-12">
            {/* Main Image Container */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform scale-100 sm:scale-105 lg:scale-115">
              <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden">
                <Image
                  src="/images/f01.jpg"
                  alt="Buyzaar Mart Store"
                  width={700}
                  height={800}
                  priority
                  className="w-full h-full object-cover scale-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
