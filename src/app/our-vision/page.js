import React from "react";
import {
  Target,
  Globe,
  Lightbulb,
  Users,
  Rocket,
  Star,
  MapPin,
  ChevronRight,
} from "lucide-react";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function Vision() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <Navbar />
      {/* Hero Section with Background Image */}
      <div className="relative overflow-hidden">
        {/* Background Image */}
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
                Vision
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              Building India&apos;s most innovative retail
              franchise network that empowers communities and transforms lives.
            </p>
            <div className="mt-8 w-24 h-1 bg-gradient-to-r from-white to-white mx-auto rounded-full shadow-lg"></div>
          </div>
        </div>
      </div>

      {/* Vision Statement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Transforming Retail,
              <span className="text-black"> Empowering Entrepreneurs</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              Our vision is to become the leaders in retail by building a vast network of  stores, that stand for transparency, accessibility, and care.

            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              With every store we open, we move closer to a future where opportunity is not limited to a few, but shared with many. Strengthening families, empowering youth, and uplifting villages across India.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-black rounded-2xl blur-3xl opacity-20"></div>
            <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Vision Pillars
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8  rounded-lg flex items-center justify-center mt-1">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/3234/3234841.png"
                      alt="Trust & Transparency"
                      className="w-[10rem] h-[2rem]"
                    />
                  </div>
                  <div>
                    <h4 className="text-gray-800 font-semibold">
                      State Leadership
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Becoming India&apos;s #1 retail franchise network
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8  rounded-lg flex items-center justify-center mt-1">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/694/694642.png"
                      alt="Trust & Transparency"
                      className="w-[10rem] h-[2rem]"
                    />
                  </div>
                  <div>
                    <h4 className="text-gray-800 font-semibold">
                      Community Impact
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Empowering 25,000+ entrepreneurs across India
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center mt-1">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/2153/2153534.png"
                      alt="Trust & Transparency"
                      className="w-[10rem] h-[2rem]"
                    />
                  </div>
                  <div>
                    <h4 className="text-gray-800 font-semibold">Innovation</h4>
                    <p className="text-gray-600 text-sm">
                      Pioneering technology-driven retail solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Goals */}
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-black text-center mb-12">
            Our Strategic <span className="text-black">Goals</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Goal 1 */}
            <div className="group relative overflow-hidden bg-black/10 backdrop-blur-sm border border-black/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-4">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/9147/9147930.png"
                    alt="Users icon"
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 ">
                  Nation Wide Expansion
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify mb-4">
                  Establish franchise outlets across all states and union territories by 2030, covering both urban and rural areas.
                </p>
                <div className="flex items-center text-black text-sm font-medium">
                  <span>Target: Pan-India presence by 2030</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>

            {/* Goal 2 */}
            <div className="group relative overflow-hidden bg-black/10 backdrop-blur-sm border border-black/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-4">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/17744/17744557.png"
                    alt="Users icon"
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 ">
                  Technology Leadership
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify mb-4">
                  Pioneer AI-driven inventory management and customer analytics
                  for enhanced franchise performance across India.
                </p>
                <div className="flex items-center text-black text-sm font-medium">
                  <span>Innovation First</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>

            {/* Goal 3 */}
            <div className="group relative overflow-hidden bg-black/10 backdrop-blur-sm border border-black/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-4">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/9375/9375453.png"
                    alt="Users icon"
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 ">
                  Brand Excellence
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify mb-4">
                  Become the most trusted retail brand in India with
                  95%+ customer satisfaction ratings.
                </p>
                <div className="flex items-center text-black text-sm font-medium">
                  <span>Trust & Quality</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future Roadmap */}
<div className="mb-32 pb-20">
  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
    Future <span className="text-black">Roadmap</span>
  </h2>

  {/* Mobile Version - Only visible on mobile */}
  <div className="block md:hidden px-4">
    <div className="relative max-w-md mx-auto">
      {/* Vertical Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-black to-gray-400"></div>
      
      {/* Milestone 1 - 2025 */}
      <div className="relative mb-12">
        <div className="flex items-start">
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center shadow-xl border-4 border-white relative z-10">
            <img
              src="https://cdn-icons-png.flaticon.com/128/7027/7027562.png"
              alt="location icon"
              className="w-10 h-10"
            />
          </div>
          <div className="ml-6 bg-white rounded-xl shadow-lg p-4 border-2 border-black/20 flex-1">
            {/* <div className="bg-black/20 text-black px-3 py-1 rounded-full text-xs font-bold inline-block mb-2">
              2025
            </div> */}
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Foundation & Growth
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Launch many franchise outlets across major states and union territories of India with full technology integration.
            </p>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>• 300+ franchise outlets</li>
              <li>• 15 major districts</li>
              <li>• Full tech integration</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Milestone 2 - 2027 */}
      <div className="relative mb-12">
        <div className="flex items-start">
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center shadow-xl border-4 border-white relative z-10">
            <img
              src="https://cdn-icons-png.flaticon.com/128/7027/7027562.png"
              alt="location icon"
              className="w-10 h-10"
            />
          </div>
          <div className="ml-6 bg-white rounded-xl shadow-lg p-4 border-2 border-black/20 flex-1">
            {/* <div className="bg-black/20 text-black px-3 py-1 rounded-full text-xs font-bold inline-block mb-2">
              2027
            </div> */}
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              NationWide Expansion
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Expand operations across all states and union territories of India with AI-driven analytics and strong rural penetration.
            </p>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>• Presence across all states</li>
              <li>• Urban and Rural Coverage</li>
              <li>• AI-powered analytics</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Milestone 3 - 2030 */}
      <div className="relative">
        <div className="flex items-start">
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center shadow-xl border-4 border-white relative z-10">
            <img
              src="https://cdn-icons-png.flaticon.com/128/7027/7027562.png"
              alt="location icon"
              className="w-10 h-10"
            />
          </div>
          <div className="ml-6 bg-white rounded-xl shadow-lg p-4 border-2 border-black/20 flex-1">
            {/* <div className="bg-black/20 text-black px-3 py-1 rounded-full text-xs font-bold inline-block mb-2">
              2030
            </div> */}
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              State Leadership
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Achieve many outlets across all states and union territories, becoming India&apos;s largest retail franchise network.
            </p>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>• Many outlets</li>
              <li>• All states and union territories</li>
              <li>• Multi-state ready</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Desktop Version - Hidden on mobile, exactly as original */}
  <div className="hidden md:block relative max-w-6xl mx-auto">
    {/* Ascending Graph */}
    <div className="relative h-[600px] md:h-[500px] bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-200">
      {/* Graph Grid */}
      <svg
        className="absolute inset-8 w-[calc(100%-4rem)] h-[calc(100%-4rem)]"
        viewBox="0 0 800 400"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="graphGradient"
            x1="0%"
            y1="100%"
            x2="0%"
            y2="0%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#000000", stopOpacity: 0.1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#000000", stopOpacity: 0.3 }}
            />
          </linearGradient>
        </defs>

        {/* Grid Lines */}
        <line
          x1="0"
          y1="300"
          x2="800"
          y2="300"
          stroke="#e5e7eb"
          strokeWidth="1"
          strokeDasharray="5,5"
        />
        <line
          x1="0"
          y1="200"
          x2="800"
          y2="200"
          stroke="#e5e7eb"
          strokeWidth="1"
          strokeDasharray="5,5"
        />
        <line
          x1="0"
          y1="100"
          x2="800"
          y2="100"
          stroke="#e5e7eb"
          strokeWidth="1"
          strokeDasharray="5,5"
        />

        {/* Area Under Graph */}
        <path
          d="M 50 350 L 400 180 L 750 50 L 750 400 L 50 400 Z"
          fill="url(#graphGradient)"
        />

        {/* Main Graph Line */}
        <path
          d="M 50 350 L 400 180 L 750 50"
          fill="none"
          stroke="#000000"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Milestone 1 - 2025 (Bottom) */}
      <div className="absolute left-[15%] bottom-[10%] transform -translate-x-1/2">
        <div className="relative">
          {/* Data Point */}
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center shadow-xl border-4 border-white relative z-10 ">
            <img
              src="https://cdn-icons-png.flaticon.com/128/7027/7027562.png"
              alt="location icon"
              className="w-12 h-12"
            />
          </div>

          {/* Info Card */}
          <div className="absolute -top-52 left-1/2 transform -translate-x-1/2 w-64 bg-white rounded-xl shadow-2xl p-5 border-2 border-black/30">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Foundation & Growth
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Launch 300 franchise outlets across major districts of UP
              with full technology integration.
            </p>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>• 300+ franchise outlets</li>
              <li>• 15 major districts</li>
              <li>• Full tech integration</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Milestone 2 - 2027 (Middle) */}
      <div className="absolute left-[50%] top-[40%] transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          {/* Data Point */}
          <div
            className="w-16 h-16 bg-black rounded-full flex items-center justify-center shadow-xl border-4 border-white relative z-10 "
            style={{ animationDelay: "0.5s" }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/7027/7027562.png"
              alt="location icon"
              className="w-12 h-12"
            />
          </div>
          {/* Info Card */}
          <div className="absolute -top-52 left-1/2 transform -translate-x-1/2 w-64 bg-white rounded-xl shadow-2xl p-5 border-2 border-black/30">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Regional Expansion
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Scale to different outlets across all states and union territories with AI
              analytics and rural penetration.
            </p>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>• Different outlets</li>
              <li>• Different states and union territories</li>
              <li>• AI-powered analytics</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Milestone 3 - 2030 (Top) */}
      <div className="absolute right-[8%] top-[10%] transform translate-x-1/2">
        <div className="relative">
          {/* Data Point */}
          <div
            className="w-16 h-16 bg-black rounded-full flex items-center justify-center shadow-xl border-4 border-white relative z-10 "
            style={{ animationDelay: "1s" }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/7027/7027562.png"
              alt="location icon"
              className="w-12 h-12"
            />
          </div>
          {/* Info Card */}
          <div className="absolute -bottom-52 left-1/2 transform -translate-x-1/2 w-64 bg-white rounded-xl shadow-2xl p-5 border-2 border-black/30">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              State Leadership
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Achieve 8,000+ outlets across all states and union territories, becoming
              India&apos;s largest retail franchise network.
            </p>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>• Many outlets</li>
              <li>• All states and union territories</li>
              <li>• Multi-state ready</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Y-axis Label */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -rotate-90 origin-center">
        <span className="text-sm font-semibold text-gray-600">
          Growth →
        </span>
      </div>

      {/* X-axis Label */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
        <span className="text-sm font-semibold text-gray-600">
          Future →
        </span>
      </div>
    </div>
  </div>
</div>

      </div>

      <Footer />
    </div>
  );
}