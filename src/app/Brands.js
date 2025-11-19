"use client";
import React from "react";
import Image from "next/image";

const Brands = () => {
  // Complete brands array with all your brand images
  const brands = [
    { id: 1, name: "Adani Wilmar", logo: "/brands/adaniwilmar.jpg", alt: "Adani Wilmar Logo" },
    { id: 2, name: "Agro Tech Foods Limited", logo: "/brands/agrotech.png", alt: "Agrotech Logo" },
    { id: 3, name: "Baggry's", logo: "/brands/baggrys.png", alt: "Baggrys Logo" },
    { id: 4, name: "Bikano", logo: "/brands/bikano.png", alt: "Bikano Logo" },
    { id: 5, name: "Biotique", logo: "/brands/biotique.jpeg", alt: "Biotique Logo" },
    { id: 6, name: "Bombay Shaving", logo: "/brands/bombayshaving.png", alt: "Bombay Shaving Logo" },
    { id: 7, name: "Brij", logo: "/brands/brij.jpeg", alt: "Brij Logo" },
    { id: 8, name: "Britania", logo: "/brands/britania.jpeg", alt: "Britania Logo" },
    { id: 9, name: "Cadbury", logo: "/brands/cadbury.png", alt: "Cadbury Logo" },
    { id: 10, name: "Chings", logo: "/brands/chings.jpg", alt: "Chings Logo" },
    { id: 11, name: "Coca Cola", logo: "/brands/cocacola.png", alt: "Coca Cola Logo" },
    { id: 12, name: "Dabur", logo: "/brands/dabur.png", alt: "Dabur Logo" },
    { id: 13, name: "Dhampur Bio", logo: "/brands/dhampur_bio.jpeg", alt: "Dhampur Bio Logo" },
    { id: 14, name: "DS Group", logo: "/brands/dsgroup.jpg", alt: "DS Group Logo" },
    { id: 15, name: "Emami Group", logo: "/brands/emamigroup.jpeg", alt: "Emami Group Logo" },
    { id: 16, name: "Ferrero", logo: "/brands/ferrero.png", alt: "Ferrero Logo" },
    { id: 17, name: "Firstcry", logo: "/brands/firstcry.jpg", alt: "Firstcry Logo" },
    { id: 18, name: "Gaia", logo: "/brands/gaia.png", alt: "Gaia Logo" },
    { id: 19, name: "Garinda", logo: "/brands/garinda.png", alt: "Garinda Logo" },
    { id: 20, name: "GM Foods", logo: "/brands/gmfoods.jpeg", alt: "GM Foods Logo" },
    { id: 21, name: "Godrej", logo: "/brands/godrej.png", alt: "Godrej Logo" },
    { id: 22, name: "Hello Panda", logo: "/brands/hellopanda.png", alt: "Hello Panda Logo" },
    { id: 23, name: "Himalaya", logo: "/brands/himalaya.jpg", alt: "Himalaya Logo" },
    { id: 24, name: "Honasa", logo: "/brands/honasa.png", alt: "Honasa Logo" },
    { id: 25, name: "HUL", logo: "/brands/hul.jpg", alt: "HUL Logo" },
    { id: 26, name: "Hully Gully", logo: "/brands/hullygully.jpeg", alt: "Hully Gully Logo" },
    { id: 27, name: "ITC", logo: "/brands/itc.png", alt: "ITC Logo" },
    { id: 28, name: "Johnson", logo: "/brands/johnson.jpg", alt: "Johnson Logo" },
    { id: 29, name: "Kellogg", logo: "/brands/kellogg.png", alt: "Kellogg Logo" },
    { id: 30, name: "Lahorerewareb", logo: "/brands/lahorerewareb.jpg", alt: "Lahorerewareb Logo" },
    { id: 31, name: "Lotus Herbals", logo: "/brands/lotusherbp.jpg", alt: "Lotus Herbals Logo" },
    { id: 32, name: "Madagascar", logo: "/brands/madagascar.jpeg", alt: "Madagascar Logo" },
    { id: 33, name: "Marico", logo: "/brands/marico.jpeg", alt: "Marico Logo" },
    { id: 34, name: "Mavalli Tiffin ROoms", logo: "/brands/Mavalli.png", alt: "Mavalipong Logo" },
    { id: 35, name: "Mogu Mogu", logo: "/brands/mogu-mogu.webp", alt: "Mogu Mogu Logo" },
    { id: 36, name: "Mondelez India", logo: "/brands/mondelez.webp", alt: "Momdeer Logo" },
    { id: 37, name: "Mother's Pickle Spice", logo: "/brands/motherspickle.svg", alt: "Mother Spice Logo" },
    { id: 38, name: "Narpa Masala", logo: "/brands/narpa.jpeg", alt: "Napa Logo" },
    { id: 39, name: "Nestle", logo: "/brands/nestle.jpeg", alt: "Nestle Logo" },
    { id: 40, name: "Ola Pop & Dal", logo: "/brands/olapop.jpeg", alt: "Olygon Logo" },
    { id: 41, name: "Om Cookies", logo: "/brands/omcookies.jpeg", alt: "Omorekek Logo" },
    { id: 42, name: "Parle", logo: "/brands/parle.png", alt: "Parle Logo" },
    { id: 43, name: "P&G", logo: "/brands/pandg.jpeg", alt: "P&G Logo" },
    { id: 44, name: "Pantanjan", logo: "/brands/pantanjan.png", alt: "Pantanjan Logo" },
    { id: 45, name: "Panzan", logo: "/brands/panzan.png", alt: "Panzan Logo" },
    { id: 46, name: "Park Care", logo: "/brands/parkcare.jpg", alt: "Park Care Logo" },
    { id: 47, name: "Parle Agro", logo: "/brands/parleagro.png", alt: "Parle Agro Logo" },
    { id: 48, name: "Patnanjali", logo: "/brands/patnanjali.png", alt: "Patnanjali Logo" },
    { id: 49, name: "Refoods", logo: "/brands/refoods.jpeg", alt: "Refoods Logo" },
    { id: 50, name: "Reckit", logo: "/brands/reckit.png", alt: "Reckit Logo" },
    { id: 51, name: "Saffola", logo: "/brands/saffola.png", alt: "Saffola Logo" },
    { id: 52, name: "Tata Consumer", logo: "/brands/tataconsumer.png", alt: "Tata Consumer Logo" },
    { id: 53, name: "Tops", logo: "/brands/tops.jpeg", alt: "Tops Logo" },
    { id: 54, name: "Ustra", logo: "/brands/ustra.png", alt: "Ustra Logo" },
    { id: 55, name: "Vareca", logo: "/brands/vareca.png", alt: "Vareca Logo" },
    { id: 56, name: "Veeba", logo: "/brands/veebaweb.jpg", alt: "Veeba Logo" },
    { id: 57, name: "Victoria Food", logo: "/brands/victoriafood.png", alt: "Victoria Food Logo" },
    { id: 58, name: "Vijan", logo: "/brands/vijan.jpeg", alt: "Vijan Logo" },
    { id: 59, name: "Wipro", logo: "/brands/wipro.jpeg", alt: "Wipro Logo" },
    { id: 60, name: "Yadu", logo: "/brands/yadu.jpeg", alt: "Yadu Logo" },
    { id: 61, name: "Yoga Bar", logo: "/brands/yogabar.png", alt: "Yoga Bar Logo" },
  ];

  // Split brands into two halves
  const firstHalfBrands = brands.slice(0, 31); // First 31 brands
  const secondHalfBrands = brands.slice(31, 61); // Last 30 brands

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-4">
            Our Brand
            <span className="text-black ml-2">
              Associations
            </span>
          </h2>
          <div className="w-24 h-1 bg-black mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Trusted partnerships with leading brands across industries
          </p>
        </div>

        {/* Two Row Carousel - Desktop slow, Mobile fast */}
        <div className="space-y-6">
          {/* First Row - First 31 brands scrolling left */}
          <div className="relative overflow-hidden touch-pan-x">
            <div className="flex animate-scroll-left hover:pause will-change-transform">
              {/* Triple for smooth infinite scroll */}
              {[...firstHalfBrands, ...firstHalfBrands, ...firstHalfBrands].map((brand, index) => (
                <div
                  key={`row1-${brand.id}-${index}`}
                  className="flex-shrink-0 w-28 h-20 sm:w-32 sm:h-24 md:w-36 md:h-28 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center p-2 sm:p-3 mx-2 sm:mx-3 border border-gray-100 hover:border-gray-400 will-change-transform"
                >
                  <div className="text-center w-full">
                    <div className="w-14 h-12 sm:w-16 sm:h-14 md:w-20 md:h-16 flex items-center justify-center mb-1 mx-auto">
                      <Image
                        src={brand.logo}
                        alt={brand.alt}
                        width={80}
                        height={64}
                        className="object-contain max-w-full max-h-full"
                        loading="lazy"
                        quality={60}
                        sizes="(max-width: 640px) 56px, (max-width: 768px) 64px, 80px"
                      />
                    </div>
                    <span className="text-xs text-gray-700 font-medium truncate block leading-tight">
                      {brand.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Last 30 brands scrolling right */}
          <div className="relative overflow-hidden touch-pan-x">
            <div className="flex animate-scroll-right hover:pause will-change-transform">
              {/* Triple for smooth infinite scroll */}
              {[...secondHalfBrands, ...secondHalfBrands, ...secondHalfBrands].map((brand, index) => (
                <div
                  key={`row2-${brand.id}-${index}`}
                  className="flex-shrink-0 w-28 h-20 sm:w-32 sm:h-24 md:w-36 md:h-28 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center p-2 sm:p-3 mx-2 sm:mx-3 border border-gray-100 hover:border-gray-400 will-change-transform"
                >
                  <div className="text-center w-full">
                    <div className="w-14 h-12 sm:w-16 sm:h-14 md:w-20 md:h-16 flex items-center justify-center mb-1 mx-auto">
                      <Image
                        src={brand.logo}
                        alt={brand.alt}
                        width={80}
                        height={64}
                        className="object-contain max-w-full max-h-full"
                        loading="lazy"
                        quality={60}
                        sizes="(max-width: 640px) 56px, (max-width: 768px) 64px, 80px"
                      />
                    </div>
                    <span className="text-xs text-gray-700 font-medium truncate block leading-tight">
                      {brand.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% / 3));
          }
        }

        @keyframes scroll-right {
          from {
            transform: translateX(calc(-100% / 3));
          }
          to {
            transform: translateX(0);
          }
        }

        /* Desktop - Slow speed (8 seconds) */
        .animate-scroll-left {
          animation: scroll-left 8s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 8s linear infinite;
        }

        /* Mobile - Fast speed (3 seconds) */
        @media (max-width: 768px) {
          .animate-scroll-left {
            animation: scroll-left 3s linear infinite;
            backface-visibility: hidden;
            perspective: 1000px;
          }

          .animate-scroll-right {
            animation: scroll-right 3s linear infinite;
            backface-visibility: hidden;
            perspective: 1000px;
          }
        }

        .hover\:pause:hover {
          animation-play-state: paused !important;
        }

        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll-left,
          .animate-scroll-right {
            animation-duration: 12s;
          }
        }
      `}</style>
    </section>
  );
};

export default Brands;