import React, { useState } from "react";
import HamburgerButton from "./icons/HamburgerButton.jsx";
import MobileMenu from "./MobileMenu.jsx";
import Logo from "../assets/lifegasmlogo.png";
import { PiShoppingBagLight } from "react-icons/pi";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-9 left-0 w-full flex items-center justify-between bg-white px-6 py-4 shadow-sm z-50">
        {/* Left: Hamburger */}
        <HamburgerButton onClick={toggleMenu} isOpen={isMenuOpen} />

        {/* Logo */}
        <img src={Logo} alt="Lifegasm Logo" className="h-8" />

        {/* Right: Cart Icon */}
        <div className="text-4xl cursor-pointer hover:text-gray-600 transition-colors">
          <PiShoppingBagLight />
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
};

export default NavBar;
