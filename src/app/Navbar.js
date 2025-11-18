"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesDropdownRef = useRef(null);
  const servicesButtonRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef(null);
  const aboutButtonRef = useRef(null);

  // Check if we're on the home page
  const isHomePage = pathname === "/";

  // Function to check if a link is active
  const isActiveLink = (path) => {
    if (path === "/") {
      return pathname === "/";
    }
    if (path === "/#calculator") {
      return pathname === "/" || pathname.includes("calculator");
    }
    if (path === "/#services") {
      return pathname === "/" && (typeof window !== 'undefined' && window.location.hash === "#services");
    }
    return pathname === path || pathname.startsWith(path + "/");
  };

  // Check if any About Us submenu is active
  const isAboutSectionActive = () => {
    return isActiveLink("/our-mission") || isActiveLink("/our-vision");
  };

  // Check if any Services submenu is active
  const isServicesSectionActive = () => {
    return isActiveLink("/fico-model") || (pathname === "/" && typeof window !== 'undefined' && window.location.hash === "#services");
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
    setIsAboutDropdownOpen(false);
    setIsMobileAboutOpen(false);
    setIsMobileServicesOpen(false);
  }, []);

  // Close mobile menu when clicking on a link
  const closeMobileMenu = useCallback(() => {
    setIsMenuOpen(false);
    setIsAboutDropdownOpen(false);
    setIsMobileAboutOpen(false);
    setIsMobileServicesOpen(false);
  }, []);

  // Toggle about dropdown (desktop)
  const toggleAboutDropdown = useCallback(() => {
    setIsAboutDropdownOpen((prev) => !prev);
  }, []);

  // Toggle mobile about submenu
  const toggleMobileAbout = useCallback(() => {
    setIsMobileAboutOpen((prev) => !prev);
  }, []);

  // Toggle services dropdown (desktop)
  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  // Toggle mobile services submenu
  const toggleMobileServices = useCallback(() => {
    setIsMobileServicesOpen((prev) => !prev);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // About Us dropdown logic
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        aboutButtonRef.current &&
        !aboutButtonRef.current.contains(event.target)
      ) {
        setIsAboutDropdownOpen(false);
      }

      // Services dropdown logic
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target) &&
        servicesButtonRef.current &&
        !servicesButtonRef.current.contains(event.target)
      ) {
        setIsServicesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle smooth scrolling for anchor links (only for same page)
  const handleSmoothScroll = useCallback(
    (e, targetId) => {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      closeMobileMenu();
    },
    [closeMobileMenu]
  );

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e) => {
      if (
        e.key === "Escape" &&
        (isMenuOpen || isAboutDropdownOpen || isServicesDropdownOpen)
      ) {
        closeMobileMenu();
        setIsAboutDropdownOpen(false);
        setIsServicesDropdownOpen(false);
      }
    },
    [isMenuOpen, isAboutDropdownOpen, isServicesDropdownOpen, closeMobileMenu]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-sm shadow-lg"
            : "bg-white shadow-md"
        }`}
      >
        <nav className="max-w-9xl mx-auto px-4 sm:px-6 py-2">
          {/* Desktop Layout */}
          <div className="hidden lg:flex relative items-center h-20">
            {/* Left Corner Logos */}
            

            {/* Absolutely Centered Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
              <Link href="/" className="flex items-center">
                <img
                  src="/images/buyzaar-logo.png"
                  alt="Gram Shree Mart"
                  className={`w-auto transition-all duration-300 ${
                    isScrolled ? "h-48" : "h-46"
                  }`}
                />
              </Link>
            </div>

            {/* Right Navigation - Desktop */}
            <div className="flex flex-1 justify-end">
              <div className="flex items-baseline space-x-8">
                <Link
                  href="/"
                  className={`font-medium transition-colors duration-300 ${
                    isActiveLink("/")
                      ? "text-black"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  Home
                </Link>

                {/* About Us Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    ref={aboutButtonRef}
                    onClick={toggleAboutDropdown}
                    onMouseEnter={() => setIsAboutDropdownOpen(true)}
                    onMouseLeave={() => setIsAboutDropdownOpen(false)}
                    className={`font-medium transition-colors duration-300 flex items-center space-x-1 focus:outline-none ${
                      isAboutSectionActive() || isAboutDropdownOpen
                        ? "text-black"
                        : "text-gray-600 hover:text-black"
                    }`}
                    aria-expanded={isAboutDropdownOpen}
                    aria-haspopup="true"
                  >
                    <span>About Us</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        isAboutDropdownOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-300 ${
                      isAboutDropdownOpen
                        ? "opacity-100 visible transform translate-y-0"
                        : "opacity-0 invisible transform -translate-y-2"
                    }`}
                    onMouseEnter={() => setIsAboutDropdownOpen(true)}
                    onMouseLeave={() => setIsAboutDropdownOpen(false)}
                  >
                    <div className="py-2">
                      <Link
                        href="/our-mission"
                        className={`block px-4 py-3 transition-colors duration-300 font-medium ${
                          isActiveLink("/our-mission")
                            ? "text-black bg-gray-100"
                            : "text-gray-600 hover:text-black hover:bg-gray-50"
                        }`}
                        onClick={() => setIsAboutDropdownOpen(false)}
                      >
                        Our Mission
                      </Link>
                      <Link
                        href="/our-vision"
                        className={`block px-4 py-3 transition-colors duration-300 font-medium ${
                          isActiveLink("/our-vision")
                            ? "text-black bg-gray-100"
                            : "text-gray-600 hover:text-black hover:bg-gray-50"
                        }`}
                        onClick={() => setIsAboutDropdownOpen(false)}
                      >
                        Our Vision
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Services Dropdown */}
                <div className="relative" ref={servicesDropdownRef}>
                  <button
                    ref={servicesButtonRef}
                    onClick={toggleServicesDropdown}
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                    className={`font-medium transition-colors duration-300 flex items-center space-x-1 focus:outline-none ${
                      isServicesSectionActive() || isServicesDropdownOpen
                        ? "text-black"
                        : "text-gray-600 hover:text-black"
                    }`}
                    aria-expanded={isServicesDropdownOpen}
                    aria-haspopup="true"
                  >
                    <span>Services</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        isServicesDropdownOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-300 ${
                      isServicesDropdownOpen
                        ? "opacity-100 visible transform translate-y-0"
                        : "opacity-0 invisible transform -translate-y-2"
                    }`}
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    <div className="py-2">
                      <Link
                        href="/#services"
                        className="block px-4 py-3 text-gray-600 hover:text-black hover:bg-gray-50 transition-colors duration-300 font-medium"
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        Store Features
                      </Link>
                      <Link
                        href="/fico-model"
                        className={`block px-4 py-3 transition-colors duration-300 font-medium ${
                          isActiveLink("/fico-model")
                            ? "text-black bg-gray-100"
                            : "text-gray-600 hover:text-black hover:bg-gray-50"
                        }`}
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        Our Module
                      </Link>
                      <Link
                        href="/our-store"
                        className={`block px-4 py-3 transition-colors duration-300 font-medium ${
                          isActiveLink("/our-store")
                            ? "text-black bg-gray-100"
                            : "text-gray-600 hover:text-black hover:bg-gray-50"
                        }`}
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                      Experience Apna  
                      </Link>
                    </div>
                  </div>
                </div>

                 <Link
                  href="/franchise"
                  className={`font-medium transition-colors duration-300 ${
                    isActiveLink("/contact")
                      ? "text-black"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  Franchise
                </Link>

                <Link
                  href="/contact"
                  className={`font-medium transition-colors duration-300 ${
                    isActiveLink("/contact")
                      ? "text-black"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex lg:hidden items-center justify-between h-16 relative ml-4">
            {/* Mobile Left Logos */}
            
            {/* Mobile Logo - Centered */}
            <div className="absolute right-16 flex items-center justify-center z-10 max-w-[35%]">
              <Link href="/" className="flex items-center">
                <img
                  src="/images/buyzaar-logo.png"
                  alt="Gram Shree Mart"
                  className={`w-auto transition-all duration-300 ${
                    isScrolled ? "h-14" : "h-16"
                  } max-w-full`}
                />
              </Link>
            </div>

            {/* Mobile Hamburger Menu - Right Side */}
            <div className="ml-auto">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-800 hover:text-black transition-colors duration-300 p-2 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded-md"
                aria-expanded={isMenuOpen}
                aria-label="Toggle mobile menu"
                type="button"
              >
                <div className="relative w-6 h-6">
                  <Menu
                    size={24}
                    className={`absolute inset-0 transition-all duration-300 ${
                      isMenuOpen
                        ? "rotate-180 opacity-0"
                        : "rotate-0 opacity-100"
                    }`}
                  />
                  <X
                    size={24}
                    className={`absolute inset-0 transition-all duration-300 ${
                      isMenuOpen
                        ? "rotate-0 opacity-100"
                        : "-rotate-180 opacity-0"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={`lg:hidden bg-white border-t border-gray-200 transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className={`block px-3 py-3 rounded-md transition-colors duration-300 font-medium ${
                isActiveLink("/")
                  ? "text-black bg-gray-100"
                  : "text-gray-600 hover:text-black hover:bg-gray-50"
              }`}
            >
              Home
            </Link>

            {/* Mobile About Us Dropdown */}
            <div>
              <button
                onClick={toggleMobileAbout}
                className={`flex items-center justify-between w-full px-3 py-3 rounded-md transition-colors duration-300 font-medium focus:outline-none ${
                  isAboutSectionActive()
                    ? "text-black bg-gray-100"
                    : "text-gray-600 hover:text-black hover:bg-gray-50"
                }`}
                aria-expanded={isMobileAboutOpen}
              >
                <span>About Us</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    isMobileAboutOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {/* Mobile About Submenu */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isMobileAboutOpen
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-6 space-y-1">
                  <Link
                    href="/our-mission"
                    onClick={closeMobileMenu}
                    className={`block px-3 py-2 rounded-md transition-colors duration-300 ${
                      isActiveLink("/our-mission")
                        ? "text-black bg-gray-100"
                        : "text-gray-600 hover:text-black hover:bg-gray-50"
                    }`}
                  >
                    Our Mission
                  </Link>
                  <Link
                    href="/our-vision"
                    onClick={closeMobileMenu}
                    className={`block px-3 py-2 rounded-md transition-colors duration-300 ${
                      isActiveLink("/our-vision")
                        ? "text-black bg-gray-100"
                        : "text-gray-600 hover:text-black hover:bg-gray-50"
                    }`}
                  >
                    Our Vision
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={toggleMobileServices}
                className={`flex items-center justify-between w-full px-3 py-3 rounded-md transition-colors duration-300 font-medium focus:outline-none ${
                  isServicesSectionActive()
                    ? "text-black bg-gray-100"
                    : "text-gray-600 hover:text-black hover:bg-gray-50"
                }`}
                aria-expanded={isMobileServicesOpen}
              >
                <span>Services</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    isMobileServicesOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {/* Mobile Services Submenu */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isMobileServicesOpen
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-6 space-y-1">
                  <Link
                    href="/#services"
                    onClick={closeMobileMenu}
                    className="block px-3 py-2 text-gray-600 hover:text-black hover:bg-gray-50 rounded-md transition-colors duration-300"
                  >
                    Store Features
                  </Link>
                  <Link
                    href="/fico-model"
                    onClick={closeMobileMenu}
                    className={`block px-3 py-2 rounded-md transition-colors duration-300 ${
                      isActiveLink("/fico-model")
                        ? "text-black bg-gray-100"
                        : "text-gray-600 hover:text-black hover:bg-gray-50"
                    }`}
                  >
                   Our Module
                  </Link>
                  <Link
                    href="our-store"
                    onClick={closeMobileMenu}
                    className={`block px-3 py-2 rounded-md transition-colors duration-300 ${
                      isActiveLink("/our-store")
                        ? "text-black bg-gray-100"
                        : "text-gray-600 hover:text-black hover:bg-gray-50"
                    }`}
                  >
                 Experience Apna  
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/franchise"
              onClick={closeMobileMenu}
              className={`block px-3 py-3 rounded-md transition-colors duration-300 font-medium ${
                pathname === "/" && typeof window !== 'undefined' && window.location.hash === "#calculator"
                  ? "text-black bg-gray-100"
                  : "text-gray-600 hover:text-black hover:bg-gray-50"
              }`}
            >
              Franchise
            </Link>

            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className={`block px-3 py-3 rounded-md transition-colors duration-300 font-medium ${
                isActiveLink("/contact")
                  ? "text-black bg-gray-100"
                  : "text-gray-600 hover:text-black hover:bg-gray-50"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;