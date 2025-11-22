// components/HomeBrandImages.js
import React from 'react';

const brandImages = [
  {
    src: "/images/Comic 3 Panel 1.png",
    alt: "Buyzaar Mart - Your business, not your burden",
  },
  {
    src: "/images/Comic 3 Panel 2.png",
    alt: "Buyzaar Mart - Smart Retail, Smart Choice",
  },
];

const HomeBrandImages = () => (
  <div className="w-full mt-15 py-5 flex justify-center bg-white">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full items-center px-4">
      {brandImages.map((img, idx) => (
        <div key={idx} className="flex justify-center">
          <img
            src={img.src}
            alt={img.alt}
            className="max-h-[600px] w-full object-contain rounded-xl shadow-lg border border-gray-200"
          />
        </div>
      ))}
    </div>
  </div>
);

export default HomeBrandImages;
