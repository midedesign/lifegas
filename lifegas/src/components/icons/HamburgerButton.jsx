import React from "react";

const HamburgerButton = ({ onClick, isOpen }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 hover:opacity-70 transition-opacity duration-200"
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <span className="block w-6 h-0.5 bg-gray-800"></span>
      <span className="block w-6 h-0.5 bg-gray-800"></span>
      <span className="block w-6 h-0.5 bg-gray-800"></span>
    </button>
  );
};

export default HamburgerButton;
