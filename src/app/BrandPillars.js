"use client";

import React from "react";

const pillars = [
  {
    title: "Simplicity",
    description: "We take the complexity away from retail operations: Handling purchasing, inventory and Supply Chain.",
  },
  {
    title: "Reliability",
    description: "Timely supply, transparent processes, one partner you can trust.",
  },
  {
    title: "Affordability & Quality",
    description: "Curated range, fair pricing, consistent availability.",
  },
  {
    title: "Ownership & Legacy",
    description: "A store is a family business — build it, grow it, pass it on.",
  },
];

const BrandPillar = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h2 className=" text-center mb-10 text-5xl md:text-5xl font-black text-black leading-tight">
        Our Brand Pillars
      </h2>
      <div className="w-24 h-2 bg-black mx-auto mb-4 rounded-full"></div>
      <div className="grid gap-10 md:grid-cols-2">
        {pillars.map(({ title, description }, i) => (
          <div
            key={title}
            className={`
              p-6 rounded-xl border border-gray-300 bg-white shadow-md
              opacity-0 translate-y-10
              transition-all duration-700
              will-change-transform
            `}
            style={{
              animation: `fadeInUp 0.7s ease-out forwards`,
              animationDelay: `${i * 0.25 + 0.2}s`,
            }}
          >
            <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
            <p className="text-gray-700 leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
      {/* Put the keyframes in your global styles or tailwind config */}
      <style global jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default BrandPillar;
