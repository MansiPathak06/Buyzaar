import React from "react";
import {
  ShoppingBag,
  TrendingUp,
  Building2,
  Users,
  Smartphone,
  HeadphonesIcon,
} from "lucide-react";

// Mock components for demonstration
const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 px-6 py-4">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="text-2xl font-bold text-red-800">Buyzaar Mart</div>
      <div className="space-x-6 text-gray-700">
        <a href="#" className="hover:text-red-800">Home</a>
        <a href="#" className="hover:text-red-800">Mission</a>
        <a href="#" className="hover:text-red-800">Contact</a>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-gray-900 text-white py-8 mt-20">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <p>&copy; 2025 Buyzaar Mart. All rights reserved.</p>
    </div>
  </footer>
);

export default function Mission() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section with Background Image */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "#000",
          }}
        ></div>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white">
                Mission
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              &quot;Your Need, Our Commitment&quot; is not just a slogan —
              it&apos;s our operating principle.
            </p>
            <div className="mt-8 w-24 h-1 bg-white mx-auto rounded-full shadow-lg"></div>
          </div>
        </div>
      </div>

      {/* Mission Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Empowering Communities Through
              <span className="text-transparent bg-clip-text bg-black">
                {" "}
                Retail Excellence
              </span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              At Buyzaar Mart, we believe true empowerment begins when people
              are given the chance to shape their own future. Our mission is to
              enable individuals to build an honest and dignified livelihood by
              becoming proud owners of neighborhood stores that serve everyday
              needs with fairness, affordability, and convenience. For every
              Buyzaar Mart store owner, this journey is more than a business—it
              is a path to dignity, independence, and pride.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              By making entrepreneurship accessible and sustainable, we enable
              people to take charge of their futures while serving their
              neighborhoods with trust and reliability. Beyond business, we
              believe in building relationships that last a lifetime—grounded in
              trust, service, and shared growth. With every step forward, we
              strive to evolve, innovate, and improve, so that we can always be
              there when we are needed most.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-black to-black rounded-2xl blur-3xl opacity-20"></div>
            <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Core Values
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span>Customer-Centric Approach</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span>Transparency & Trust</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span>Community Empowerment</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span>Innovation & Excellence</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Featured Image Section - Redesigned */}
        <div className="mb-20">
          <div className="relative max-w-4xl mx-auto">
            {/* Decorative background elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-red-800 via-red-50 to-red-800 rounded-3xl blur-2xl opacity-30"></div>
            
            {/* Main image container */}
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-red-800/10">
              <div className="absolute inset-0 bg-gradient-to-br from-red-800/5 to-transparent"></div>
              
              <div className="relative p-8">
                {/* Title above image */}
                <div className="text-center mb-6">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                   Own it. Run it. Love it.

                  </h2>
                  <div className="w-20 h-1 bg-red-800 mx-auto rounded-full"></div>
                </div>

                {/* Image with enhanced styling */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-800 to-red-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                  <img
                    src="/images/Comic 4.png"
                    alt="Your business, not your burden"
                    className="relative rounded-2xl shadow-xl w-full h-auto max-h-[600px] object-contain bg-white p-4"
                  />
                </div>

                {/* Optional caption */}
                <p className="text-center mt-6 text-gray-600 italic text-lg">
                  Empowering entrepreneurs to build sustainable businesses
                </p>
              </div>
            </div>

            {/* Decorative corner accents */}
            <div className="absolute -top-6 -left-6 w-16 h-16 border-t-4 border-l-4 border-red-800 rounded-tl-3xl opacity-50"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 border-b-4 border-r-4 border-red-800 rounded-br-3xl opacity-50"></div>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="space-y-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the comprehensive support and services that set Buyzaar Mart apart
            </p>
            <div className="mt-4 w-24 h-1 bg-red-800 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* One-Stop Retail Experience */}
            <div className="group relative overflow-hidden bg-red-800 backdrop-blur-sm border border-black rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="https://img.icons8.com/ios/50/10B981/customer-insight--v1.png"
                    alt="Retail Icon"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-200 mb-3">
                  One-Stop Retail Experience
                </h3>
                <p className="text-gray-400 leading-relaxed text-justify">
                  &ldquo;Groceries, Home Care, Self Care, Daily essentials and
                  many more, All your needs fulfilled under one roof.&rdquo;
                </p>
              </div>
            </div>

            {/* Trust & Transparency */}
            <div className="group relative overflow-hidden bg-red-800 backdrop-blur-sm border border-black rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="https://img.icons8.com/ios/50/10B981/trust--v1.png"
                    alt="Trust Icon"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-200 mb-3">
                  Trust & Transparency
                </h3>
                <p className="text-gray-400 leading-relaxed text-justify">
                  &ldquo;Pricing that you&apos;ll love, assured quality, Clear
                  Communication. Built on Integrity and service.&rdquo;
                </p>
              </div>
            </div>

            {/* Scalable Business Opportunity */}
            <div className="group relative overflow-hidden bg-red-800 backdrop-blur-sm border border-black rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="https://img.icons8.com/ios/50/10B981/business--v1.png"
                    alt="Business Icon"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-200 mb-3">
                  Scalable Business Opportunity
                </h3>
                <p className="text-gray-400 leading-relaxed text-justify">
                  &ldquo;Ideal for new entrepreneurs. Risk free, good margins.
                  Become a part of the Gram Shree Network today!&rdquo;
                </p>
              </div>
            </div>

            {/* Technology-Enabled Operations */}
            <div className="group relative overflow-hidden bg-red-800 backdrop-blur-sm border border-black rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="https://img.icons8.com/ios/50/10B981/wearable-technology.png"
                    alt="Technology Icon"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-200 mb-3">
                  Technology-Enabled Operations
                </h3>
                <p className="text-gray-400 leading-relaxed text-justify">
                  &ldquo;Digital backbone ensures inventory control, sales
                  tracking, customer engagement. Minimizes manual errors and
                  increases profitability for franchisees.&rdquo;
                </p>
              </div>
            </div>

            {/* Professional Support & Service */}
            <div className="group relative overflow-hidden bg-red-800 backdrop-blur-sm border border-black rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="https://img.icons8.com/ios/50/10B981/customer-support--v1.png"
                    alt="Support Icon"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-200 mb-3">
                  Professional Support & Service
                </h3>
                <p className="text-gray-400 leading-relaxed text-justify">
                  &ldquo;Dedicated customer support for franchisee owners.
                  Franchisees receive onboarding training, and ongoing
                  assistance.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}