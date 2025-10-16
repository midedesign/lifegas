import React, { useState } from "react";
import HamburgerButton from "./icons/HamburgerButton.jsx";
// import MobileMenu from "./MobileMenu.jsx";
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
      <header className="flex items-center justify-between bg-white px-6 py-4 shadow-sm">
        {/* Left: Hamburger */}
        <HamburgerButton onClick={toggleMenu} isOpen={isMenuOpen} />

        {/* Logo */}
        <img src={Logo} alt="Lifegasm Logo" />

        {/* Right: Cart Icon */}
        <div className="text-4xl">
          <PiShoppingBagLight />
        </div>
      </header>

      {/* Mobile Menu - rendered outside header */}
      {/* <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} /> */}
    </>
  );
};

export default NavBar;
