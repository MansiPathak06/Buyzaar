// components/HomeBrandImages.js
import React from 'react';

const brandImages = [
  {
    src: "/images/Comic 3 Panel 1.png", // Ensure this matches your public/static folder location
    alt: "Buyzaar Mart - Your business, not your burden",
  },
  {
    src: "/images/Comic 3 Panel 2.png", // Ensure this matches your public/static folder location
    alt: "Buyzaar Mart - Smart Retail, Smart Choice",
  },
];

const HomeBrandImages = () => (
  <div className="w-full mt-15 py-5 flex justify-center bg-white">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl w-full items-center">
      {brandImages.map((img, idx) => (
        <div key={idx} className="flex justify-center">
          <img
            src={img.src}
            alt={img.alt}
            className="max-h-96 w-auto rounded-xl shadow-lg border border-gray-200"
          />
        </div>
      ))}
    </div>
  </div>
);

export default HomeBrandImages;
