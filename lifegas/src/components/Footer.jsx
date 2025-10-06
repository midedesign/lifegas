import React from "react";
import Logo from "../assets/lifegasmlogo.png";

const Footer = () => {
  return (
    <footer className="bg-brand-500 px-6 py-10 text-gray-300">
      {/* Logo */}
      <img src={Logo} alt="Lifegasm Logo" />

      {/* Links */}
      <div className="flex justify-between px ">
        <div className="flex gap-6 text-sm text-salmonpink-100">
          {" "}
          <a href="#">Portfolio</a>
          <a href="#">Journal</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <div className="flex gap-6 text-sm text-salmonpink-100">
          <a href="#">Shop</a>
          <a href="#">Cart</a>
          <a href="#">Book a Consultation</a>
        </div>
      </div>
      <p className="mt-6  text-sm text-salmonpink-100">
        Copyright Lifegasm Org 2025
      </p>
    </footer>
  );
};

export default Footer;
