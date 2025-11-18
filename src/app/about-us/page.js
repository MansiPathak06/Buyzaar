"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, Target, TrendingUp, MapPin, Book, Settings, Smartphone, Package, Megaphone, Shield, CheckCircle, ArrowRight, Star, Zap, Menu, X } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const observerRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Parallax scrolling effect
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for card animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set([...prev, entry.target.dataset.index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  const supportServices = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Pre-Franchise Onboarding Support",
      items: ["Franchisee Orientation", "Location Evaluation", "Documentation Help"],
      color: "bg-gradient-to-br from-orange-50 to-orange-100",
      iconColor: "text-orange-500",
      borderColor: "border-orange-300"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Training & Skill Development",
      items: ["Initial Training Program", "Ongoing Learning"],
      color: "bg-gradient-to-br from-green-50 to-green-100",
      iconColor: "text-green-600",
      borderColor: "border-green-300"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Technology Enablement",
      items: ["POS System Setup", "ERP Access", "CRM Integration", "IT Support"],
      color: "bg-gradient-to-br from-orange-50 to-orange-100",
      iconColor: "text-orange-500",
      borderColor: "border-orange-300"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Inventory & Supply Chain",
      items: ["Centralized Sourcing", "Order Management System", "Stock Planning Assistance"],
      color: "bg-gradient-to-br from-green-50 to-green-100",
      iconColor: "text-green-600",
      borderColor: "border-green-300"
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Marketing & Promotion Support",
      items: ["Branding Assets", "Local Advertising Guidance", "Regional Campaigns"],
      color: "bg-gradient-to-br from-orange-50 to-orange-100",
      iconColor: "text-orange-500",
      borderColor: "border-orange-300"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Operational Support",
      items: ["Store Setup Consultation", "Franchise Relationship Manager", "Performance Reviews"],
      color: "bg-gradient-to-br from-green-50 to-green-100",
      iconColor: "text-green-600",
      borderColor: "border-green-300"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Compliance & Governance",
      items: ["Retail SOPs", "Regulatory Compliance Help"],
      color: "bg-gradient-to-br from-orange-50 to-orange-100",
      iconColor: "text-orange-500",
      borderColor: "border-orange-300"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth & Expansion Assistance",
      items: ["Multi-Unit Support", "Market Intelligence", "Innovation Pipeline"],
      color: "bg-gradient-to-br from-green-50 to-green-100",
      iconColor: "text-green-600",
      borderColor: "border-green-300"
    }
  ];

  const features = [
    { text: "Government Affiliated Retail Model", icon: <Shield className="w-5 h-5" /> },
    { text: "Mukhya Mantri Yuva Udyam Vikas Yojna", icon: <Star className="w-5 h-5" /> },
    { text: "Essential Needs Accessibility", icon: <Target className="w-5 h-5" /> },
    { text: "Employment Generation Focus", icon: <Users className="w-5 h-5" /> }
  ];

  const CardWrapper = ({ children, index, delay = 0 }) => {
    const ref = useRef(null);
    
    useEffect(() => {
      if (ref.current && observerRef.current) {
        ref.current.dataset.index = index;
        observerRef.current.observe(ref.current);
      }
    }, [index]);

    const isVisible = visibleCards.has(String(index));
    
    return (
      <div
        ref={ref}
        className={`transition-all duration-700 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-8 scale-95'
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    );
  };

  return (
    <div id="about" className="min-h-screen bg-white overflow-hidden">
    <Navbar/>
      
      {/* Hero Section with Background Pattern */}
       <div 
        className="relative h-103 flex items-end justify-center pb-16"
        style={{
          backgroundImage: `
            url('./images/heropage.png'),
            radial-gradient(circle at 25% 25%, rgba(249, 115, 22, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(34, 197, 94, 0.2) 0%, transparent 50%),
            linear-gradient(135deg, rgba(254, 243, 199, 0.4) 0%, rgba(220, 252, 231, 0.4) 100%)
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
          transform: `translateY(${scrollY * 0.3}px)`
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute w-96 h-96 rounded-full bg-orange-200 opacity-20 animate-pulse"
            style={{ 
              top: '10%', 
              left: '-10%',
              transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`
            }}
          ></div>
          <div 
            className="absolute w-64 h-64 rounded-full bg-green-200 opacity-30"
            style={{ 
              top: '60%', 
              right: '-5%',
              transform: `translate(${-scrollY * 0.08}px, ${scrollY * 0.04}px)`,
              animation: 'bounce 3s infinite'
            }}
          ></div>
          <div 
            className="absolute w-32 h-32 rounded-full bg-orange-300 opacity-25"
            style={{ 
              top: '30%', 
              right: '15%',
              transform: `translate(${scrollY * 0.15}px, ${-scrollY * 0.1}px)`,
              animation: 'pulse 2s infinite'
            }}
          ></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
              <span 
                className="inline-block text-green-600 hover:scale-110 transition-transform duration-500 cursor-default"
                style={{ 
                  textShadow: '0 4px 8px rgba(34, 197, 94, 0.3)',
                  animation: 'float 6s ease-in-out infinite'
                }}
              >
                ABOUT
              </span>
              <br />
              <span 
                className="inline-block text-orange-500 hover:scale-110 transition-transform duration-500 cursor-default"
                style={{ 
                  textShadow: '0 4px 8px rgba(249, 115, 22, 0.3)',
                  animation: 'float 6s ease-in-out infinite 3s'
                }}
              >
                US
              </span>
            </h1>
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-16 h-1 bg-orange-500 rounded-full animate-pulse"></div>
              <Zap className="w-6 h-6 text-yellow-500 animate-bounce" />
              <div className="w-16 h-1 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover the story behind India&apos;s most innovative franchise model
            </p>
          </div>
        </div>

        {/* Scroll Indicator - Removed for shorter height */}
      </div>

      {/* Company Description with Background Image Effect */}
      <div 
        className="relative py-24 bg-white"
        style={{
          backgroundImage: `url('./images/slider-03.jpg'), linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9))`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            transform: `translateY(${scrollY * 0.1}px)`
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CardWrapper index="0">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-16 border-t-4 border-orange-500 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="text-center mb-12">
                <h2 className="text-5xl font-black text-gray-800 mb-8 leading-tight">
                  <span className="text-orange-500 inline-block hover:rotate-3 transition-transform duration-300">Buyzaar Mart</span>
                  <span className="text-gray-800"> by </span>
                  <span className="text-green-600 inline-block hover:-rotate-3 transition-transform duration-300">SRG INOIL</span>
                </h2>
                <div className="flex items-center justify-center space-x-4 mb-8">
                  <div className="w-12 h-1 bg-orange-500 rounded-full"></div>
                  <Star className="w-8 h-8 text-yellow-500 animate-spin-slow" />
                  <div className="w-12 h-1 bg-green-500 rounded-full"></div>
                </div>
              </div>
              
              <div className="max-w-5xl mx-auto">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 text-center">
                  Buyzaar Mart by <span className="font-bold text-orange-500 px-2 py-1 bg-orange-50 rounded-lg">SRG INOIL Promoter Solutions Pvt. Ltd.</span> is a 
                  <span className="font-bold text-green-600 px-2 py-1 bg-green-50 rounded-lg mx-1">franchise-driven retail model</span> affiliated with the 
                  <span className="font-bold text-orange-500 px-2 py-1 bg-orange-50 rounded-lg mx-1">government of Uttar Pradesh</span> under 
                  <span className="font-bold text-green-600 px-2 py-1 bg-green-50 rounded-lg mx-1">Mukhya Mantri Yuva Udhyam Vikas Yojna</span> & is designed to make 
                  <span className="font-bold text-orange-500 px-2 py-1 bg-orange-50 rounded-lg mx-1">essential needs accessible, affordable, and convenient</span> for every household & 
                  <span className="font-bold text-green-600 px-2 py-1 bg-green-50 rounded-lg mx-1">ensuring employment</span>.
                </p>

                {/* Hindi Tagline with Enhanced Design */}
                <div className="text-center">
                  <div 
                    className="inline-block relative px-12 py-6 rounded-3xl border-4 border-dashed hover:border-solid transition-all duration-500 transform hover:scale-105"
                    style={{
                      background: 'linear-gradient(135deg, rgba(254, 215, 170, 0.3) 0%, rgba(187, 247, 208, 0.3) 100%)',
                      borderColor: '#f97316'
                    }}
                  >
                    <div className="absolute -top-3 -left-3 w-6 h-6 bg-orange-500 rounded-full animate-ping"></div>
                    <div className="absolute -top-3 -right-3 w-6 h-6 bg-green-500 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                    <p className="text-3xl md:text-4xl font-black text-gray-800">
                      <span className="text-orange-500 hover:animate-pulse">&quot;ग्राम श्री&quot;</span>{' '}
                      <span className="text-green-600 hover:animate-pulse">अपना बाजार</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardWrapper>
        </div>
      </div>

      {/* Key Features Section */}
      <div 
        className="py-24 relative" 
        style={{ 
          backgroundColor: '#fefce8',
          backgroundImage: `url('./images/slider-03.jpg'), linear-gradient(rgba(254, 252, 232, 0.8), rgba(254, 252, 232, 0.8))`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2322c55e' fill-opacity='0.3'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v-40c11.046 0 20 8.954 20 20z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CardWrapper index="1">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-black mb-6 text-gray-800">
                <span className="text-orange-500 inline-block hover:scale-110 transition-transform duration-300">Key</span>{' '}
                <span className="text-green-600 inline-block hover:scale-110 transition-transform duration-300">Features</span>
              </h3>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-24 h-1 bg-orange-500 rounded-full animate-pulse"></div>
                <CheckCircle className="w-6 h-6 text-green-600 animate-bounce" />
                <div className="w-24 h-1 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </CardWrapper>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <CardWrapper key={index} index={`feature-${index}`} delay={index * 100}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 border-l-4 border-orange-500 hover:border-green-500 group">
                  <div className="flex items-start mb-6">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:animate-spin group-hover:bg-orange-100 transition-all duration-300">
                        <div className="text-green-600 group-hover:text-orange-500 transition-colors duration-300">
                          {feature.icon}
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <span className="font-bold text-gray-800 text-lg leading-tight group-hover:text-orange-500 transition-colors duration-300">
                        {feature.text}
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-1 bg-gradient-to-r from-orange-500 to-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </div>
              </CardWrapper>
            ))}
          </div>
        </div>
      </div>

      {/* Support Services Section */}
      <div 
        className="py-24 bg-white relative overflow-hidden"
        style={{
          backgroundImage: `url('./images/slider-02.jpg'), linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9))`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f97316' fill-opacity='0.2'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CardWrapper index="support-title">
            <div className="text-center mb-20">
              <h3 className="text-5xl font-black mb-8">
                <span className="text-orange-500 inline-block hover:animate-bounce">Buyzaar Mart</span>{' '}
                <span className="text-green-600 inline-block hover:animate-bounce" style={{ animationDelay: '0.1s' }}>SUPPORT</span>
              </h3>
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="w-16 h-1 bg-orange-500 rounded-full animate-pulse"></div>
                <Settings className="w-8 h-8 text-gray-600 animate-spin-slow" />
                <div className="w-16 h-1 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive support services to ensure your franchise success at every step of your journey
              </p>
            </div>
          </CardWrapper>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {supportServices.map((service, index) => (
              <CardWrapper key={index} index={`service-${index}`} delay={index * 50}>
                <div
                  className={`${service.color} ${service.borderColor} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-6 hover:rotate-2 cursor-pointer border-2 hover:scale-105 group relative overflow-hidden`}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  {/* Animated background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="text-center mb-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg ${service.iconColor} mb-4 transition-all duration-500 group-hover:scale-110 ${activeCard === index ? 'animate-pulse' : ''}`}>
                        {service.icon}
                      </div>
                      <h4 className="text-lg font-black text-gray-800 leading-tight group-hover:text-orange-500 transition-colors duration-300">
                        {service.title}
                      </h4>
                    </div>
                    
                    <div className="space-y-3">
                      {service.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className={`flex items-start transition-all duration-500 ${activeCard === index ? 'translate-x-2 scale-105' : ''}`}
                          style={{ transitionDelay: `${itemIndex * 50}ms` }}
                        >
                          <ArrowRight className="w-4 h-4 text-orange-500 mt-1 mr-3 flex-shrink-0 transition-transform duration-300 group-hover:rotate-45" />
                          <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardWrapper>
            ))}
          </div>
        </div>
      </div>

      
      {/* Custom Animations Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
      <Footer/>
    </div>

  );
};

export default AboutUs;