"use client";
import React from "react";

// Lucide React Icons
const Phone = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const Mail = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const MapPin = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const Facebook = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const Instagram = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const Linkedin = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const ExternalLink = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/#about" },
    { name: "Our Module", href: "/our-module" },
    { name: "Services", href: "/#services" },
    { name: "Contact", href: "/contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "FAQs", href: "/faqs" },
    
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/share/19LWULuxXz/",
      name: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/Buyzaar Martapnabaazar?igsh=MTUybzhmZmFnNHJycA==",
      name: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/Buyzaar Mart-apna-baazar/",
      name: "LinkedIn",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-4 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-4">
              <div>
                <img
                  src="/images/buyzaar-logo.png"
                  alt="Gram Shree Mart"
                  className="h-38 w-40"
                />
                <p className="text-gray-400 leading-relaxed max-w-lg text-sm">
                  Built on value, trust, and day-to-day demand, Buyzaar Mart is
                  one of India&apos;s fastest-growing supermarket franchise
                  networks with over 400 stores nationwide, empowering
                  entrepreneurs with government-backed opportunities.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Contact Information
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                    <div className="text-sm">
                      <p className="text-gray-300 leading-relaxed">
                        D-43, Third floor, Sector-6,
                        <br />
                        Noida-201301
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                    <div className="text-sm">
                      <p className="text-gray-300 font-medium">9311939160 , 9311939161</p>
                      <p className="text-gray-400 mt-1">
                        Mon-Sat 9:00 AM - 7:00 PM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                    <div className="text-sm">
                      <p className="text-gray-300 font-medium">info@apnabaazar.co.in</p>
                      <p className="text-gray-400 mt-1">
                        Response within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white mb-6">
                Quick Links
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block py-1"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Social */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white mb-6">
                Legal & Compliance
              </h4>
              <ul className="space-y-4 mb-8">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm inline-flex items-center py-1"
                    >
                      {link.name}
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </li>
                ))}
              </ul>

              {/* Social Media */}
              <div>
                <h5 className="text-md font-semibold text-white mb-4">
                  Follow Us
                </h5>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 hover:bg-white hover:text-gray-900 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Government Partnership & MSME Disclaimer */}
        <div className="border-t border-gray-800 py-8">
          <div className="bg-gray-800/50 rounded-2xl p-6 mb-6">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
              <ExternalLink className="w-5 h-5 mr-2 text-white" />
              Government Partnership & MSME Compliance
            </h4>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-300 leading-relaxed">
              <div>
                <h5 className="font-semibold text-white mb-3">
                  MSME Registration & Benefits
                </h5>
                <p>
                  Buyzaar Mart is a registered MSME enterprise under the
                  Ministry of Micro, Small and Medium Enterprises, Government of
                  India. Our franchise partners are eligible for various
                  government schemes including MUDRA loans, PMEGP benefits, and
                  skill development programs as per MSME guidelines and
                  applicable terms & conditions.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-white mb-3">
                  Government Scheme Disclaimer
                </h5>
                <p>
                  Government scheme benefits are subject to eligibility
                  criteria, documentation requirements, and approval from
                  respective authorities.Buyzaar Mart provides facilitation
                  and guidance but does not guarantee scheme approval. All
                  applications are processed as per government norms and
                  individual merit assessment.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-700">
              <p className="text-xs text-gray-400 leading-relaxed">
                <strong>Important:</strong> MSME benefits and government schemes
                are administered by respective government departments. Please
                verify current scheme details and eligibility criteria from
                official government sources.Buyzaar Mart facilitates
                applications but final decisions rest with government
                authorities.
              </p>
            </div>
          </div>

          {/* Certifications & Licenses */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-gray-800/30 rounded-lg p-4 text-center">
              <div className="text-white font-semibold text-sm mb-1">
                FSSAI Licensed
              </div>
              <div className="text-xs text-gray-400">
                Food Safety & Standards Authority of India
              </div>
            </div>
            <div className="bg-gray-800/30 rounded-lg p-4 text-center">
              <div className="text-white font-semibold text-sm mb-1">
                GST Registered
              </div>
              <div className="text-xs text-gray-400">
                Goods & Services Tax Compliance
              </div>
            </div>
            <div className="bg-gray-800/30 rounded-lg p-4 text-center">
              <div className="text-white font-semibold text-sm mb-1">
                MSME Certified
              </div>
              <div className="text-xs text-gray-400">
                Ministry of MSME, Govt. of India
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400 text-center md:text-left">
              <p>© 2025 Buyzaar Mart. All rights reserved.</p>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;