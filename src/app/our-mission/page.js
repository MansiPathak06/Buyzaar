import React from "react";
import {
  ShoppingBag,
  TrendingUp,
  Building2,
  Users,
  Smartphone,
  HeadphonesIcon,
} from "lucide-react";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function Mission() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <Navbar />
      
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "#000",
          }}
        ></div>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-red-800"></div>
        <div className="absolute inset-0 bg-linear-to-r from-black/20 to-black/20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-white">
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
              At Buyzaar, we believe true empowerment begins when people
              are given the chance to shape their own future. Our mission is to
              enable individuals to build an honest and dignified livelihood by
              becoming proud owners of neighborhood stores that serve everyday
              needs with fairness, affordability, and convenience. For every
              Buyzaar-Mart owner, this journey is more than a business—it&apos;s a legacy in making
               dignity, independence, and pride.
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
          {/* <div className="relative">
            <div className="absolute inset-0 bg-linear-to-r from-black to-black rounded-2xl blur-3xl opacity-20"></div>
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
          </div> */}
          <div className="relative">
  <img
    src="/images/Comic 4.png"
    alt="Brand"
    className="w-full h-auto rounded-2xl object-cover"
  />
</div>

        </div>

      

        {/* Section Header for Cards */}
        <div className="text-center mb-12 mt-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Makes Us Different
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the key features that set Buyzaar Mart apart and empower our franchise partners
          </p>
          <div className="mt-6 w-24 h-1 bg-linear-to-r from-red-800 to-black mx-auto rounded-full"></div>
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* One-Stop Retail Experience */}
          <div className="group relative overflow-hidden bg-linear-to-br from-red-800 to-red-900 backdrop-blur-sm border border-red-700 rounded-2xl p-6 hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://img.icons8.com/ios/50/10B981/customer-insight--v1.png"
                  alt="Retail Icon"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                One-Stop Retail Experience
              </h3>
              <p className="text-gray-200 leading-relaxed text-justify">
                &ldquo;All your Daily needs under one roof!&rdquo;
              </p>
            </div>
          </div>

          {/* Trust & Transparency */}
          <div className="group relative overflow-hidden bg-linear-to-br from-red-800 to-red-900 backdrop-blur-sm border border-red-700 rounded-2xl p-6 hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://img.icons8.com/ios/50/10B981/trust--v1.png"
                  alt="Trust Icon"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Trust & Transparency
              </h3>
              <p className="text-gray-200 leading-relaxed text-justify">
                &ldquo;Attractive Pricing, Assured Quality, Constantly ongoing support&rdquo;
              </p>
            </div>
          </div>

          {/* Scalable Business Opportunity */}
          <div className="group relative overflow-hidden bg-linear-to-br from-red-800 to-red-900 backdrop-blur-sm border border-red-700 rounded-2xl p-6 hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://img.icons8.com/ios/50/10B981/business--v1.png"
                  alt="Business Icon"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Scalable Business Opportunity
              </h3>
              <p className="text-gray-200 leading-relaxed text-justify">
                &ldquo;Ideal for new entrepreneurs. Risk free, good margins.
                Become a part of buyzaar today!&rdquo;
              </p>
            </div>
          </div>

          {/* Technology-Enabled Operations */}
          <div className="group relative overflow-hidden bg-linear-to-br from-red-800 to-red-900 backdrop-blur-sm border border-red-700 rounded-2xl p-6 hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://img.icons8.com/ios/50/10B981/wearable-technology.png"
                  alt="Technology Icon"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Technology-Enabled Operations
              </h3>
              <p className="text-gray-200 leading-relaxed text-justify">
                &ldquo;Digital backbone ensures inventory control, sales
                tracking, customer engagement. Minimizes manual errors and
                increases profitability for franchisees.&rdquo;
              </p>
            </div>
          </div>


          {/* End to End Ecosystem */}
          <div className="group relative overflow-hidden bg-linear-to-br from-red-800 to-red-900 backdrop-blur-sm border border-red-700 rounded-2xl p-6 hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://img.icons8.com/ios/50/10B981/speaker_1.png"
                  alt="Technology Icon"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                End to End Ecosystem
              </h3>
              <p className="text-gray-200 leading-relaxed text-justify">
                &ldquo;From Operations to Marketing, we handle it all!&rdquo;
              </p>
            </div>
          </div>

          {/* Professional Support & Service */}
          <div className="group relative overflow-hidden bg-linear-to-br from-red-800 to-red-900 backdrop-blur-sm border border-red-700 rounded-2xl p-6 hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://img.icons8.com/ios/50/10B981/customer-support--v1.png"
                  alt="Support Icon"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Professional Support & Service
              </h3>
              <p className="text-gray-200 leading-relaxed text-justify">
                &ldquo;Dedicated customer support for franchisee owners.
                Franchisees receive onboarding training, and ongoing
                assistance.&rdquo;
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 mb-8">
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden rounded-3xl shadow-2xl border-4 border-red-800">
            <img
              src="/images/BUYZAAR BRAND 3.png"
              alt="Buyzaar Mart mission"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    
      </div>
      <Footer />
    </div>
  );
}