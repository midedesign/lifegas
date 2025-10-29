import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/lifegasmlogo.png";

const Footer = () => {
  return (
    <footer className="bg-brand-500 px-4 sm:px-6 md:px-16 lg:px-24 py-12 md:py-16 text-gray-300">
      <div className="max-w-7xl mx-auto">
        {/* Logo */}
        <div className="mb-8 md:mb-12">
          <Link to="/">
            <img src={Logo} alt="Lifegasm Logo" className="h-6 sm:h-8" />
          </Link>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-0 pb-6 md:pb-8 border-b border-salmonpink-1000">
          {/* Left Links */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 md:gap-8 text-xs text-salmonpink-100">
            <Link
              to="/portfolio"
              className="hover:text-white transition-colors"
            >
              Portfolio
            </Link>
            <Link to="/journal" className="hover:text-white transition-colors">
              Journal
            </Link>
            <Link to="/about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          {/* Right Links */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 md:gap-8 text-xs text-salmonpink-100">
            <Link to="/shop" className="hover:text-white transition-colors">
              Shop
            </Link>
            <Link to="/cart" className="hover:text-white transition-colors">
              Cart
            </Link>
            <Link
              to="/consultation"
              className="hover:text-white transition-colors"
            >
              Book a Consultation
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <p className="mt-6 md:mt-8 text-xs sm:text-xs text-salmonpink-100 opacity-60">
          Copyright Lifegasm Org 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
