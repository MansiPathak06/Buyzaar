"use client";

import React, { useState } from 'react';
import Navbar from './Navbar';
import HeroPage from './HeroPage';
import About from './About';
import Services from './Services';
import FranchiseApplication from './FranchiseApplication';
import Process from './Process';
import WhyChoose from './WhyChhoose';
import Footer from './Footer';
import Calculator from './Calculator';
import FranchisePopupModal from './FranchisePopup';
import Brands from './Brands';
import MainBanner from './MainBanner';
import BrandPillar from './BrandPillars';
// import Comic from './Comic';

const Page = () => {
  // State for manual modal (button click)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative min-h-screen">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content Sections */}
      <MainBanner/>
     <HeroPage openModal={openModal} />
      <About />
      
      <Process openModal={openModal} /> {/* Pass openModal function as prop */}
      
      <Services />
      <BrandPillar/>
      <WhyChoose />
      {/* <Comic/> */}
      <Calculator openModal={openModal} />
      <FranchiseApplication />
      <Brands />
      
      {/* Footer */}
      <Footer />
      
      {/* Fixed Apply for Franchise Button - Right Side Vertical */}
      <div className="fixed right-0 z-40
                     /* Desktop positioning - same as before */
                     md:top-[40%] md:transform md:-translate-y-1/2
                     
                     /* Mobile positioning - lower on screen */
                     top-[55%] transform -translate-y-1/2">
        <button
          onClick={openModal}
          className="bg-[#b00000] text-white font-bold shadow-lg hover:shadow-xl hover:from-[#e06d00] hover:to-[#d15c00] transition-all duration-300 transform hover:scale-105 active:scale-95 rounded-l-lg
          
          /* Desktop styles */
          md:px-8 md:py-3 md:text-lg
          
          /* Mobile styles - much slimmer */
          px-6 py-3 text-xs"
          type="button"
          title="Apply for Franchise"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed'
          }}
        >
          <span className="transform rotate-180 inline-block tracking-wider
          
          /* Desktop letter spacing */
          md:tracking-wider
          
          /* Mobile - tighter letter spacing */
          tracking-tight">
            Apply Now
          </span>
        </button>
      </div>

      {/* Auto-show Modal (shows on page load/refresh) */}
      <FranchisePopupModal showOnLoad={true} />

      {/* Manual Modal (shows on button click) */}
      <FranchisePopupModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        showOnLoad={false}
      />
    </div>
  );
};

export default Page;
