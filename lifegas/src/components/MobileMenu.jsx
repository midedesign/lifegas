import React from "react";
import Logo from "../assets/lifegasmlogo.png";
import { FiSearch } from "react-icons/fi";
import { PiShoppingBagLight } from "react-icons/pi";

const MobileMenu = ({ isOpen, onClose }) => {
  const menuItems = [
    { name: "Shop", href: "#shop" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Book a Consultation", href: "#consultation" },
    { name: "Journal", href: "#journal" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div
      className={`fixed inset-x-0 top-9 bottom-0 bg-white z-[9999] transform transition-all duration-500 ease-in-out ${
        isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      {/* Blurred Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100/50 to-gray-200/30 backdrop-blur-md"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
          {/* Close Button (X) */}
          <button
            onClick={onClose}
            className="text-3xl text-gray-800 hover:text-gray-600 transition-colors"
            aria-label="Close menu"
          >
            ×
          </button>

          {/* Logo */}
          <img src={Logo} alt="Lifegasm Logo" className="h-8" />

          {/* Shopping Bag */}
          <div className="text-3xl text-gray-800">
            <PiShoppingBagLight />
          </div>
        </div>

        {/* Menu Items - Centered */}
        <nav className="flex-1 flex items-center justify-center">
          <ul className="space-y-8 text-center">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  onClick={onClose}
                  className="text-xl md:text-2xl font-light text-gray-800 hover:text-salmonpink-1100 transition-colors duration-200 flex items-center justify-center gap-2 group"
                >
                  {item.name}
                  <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Search Bar at Bottom */}
        <div className="px-6 py-8 bg-white/80 backdrop-blur-sm">
          <div className="max-w-md mx-auto relative">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-12 pr-4 py-3 bg-transparent border-b border-gray-300 focus:border-gray-800 focus:outline-none text-gray-800 placeholder-gray-400 transition-colors"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
