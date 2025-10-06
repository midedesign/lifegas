import React from "react";
import HeroImage from "../assets/images/livingdecor.png";

const HeroSection = ({ backgroundImage }) => {
  const bgImage = HeroImage;

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 w-full h-auto bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${backgroundImage || bgImage}')`,
        }}
      ></div>

      {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}

      <div className="relative z-20 text-center text-white px-6 max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-4 leading-tight">
          Elevate
          <br />
          <span className="font-normal">Everyday Living</span>
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed opacity-90">
          Discover thoughtfully designed interiors and handcrafted pieces that
          bring warmth, functionality and beauty into your space.
        </p>
        <button className="bg-white text-gray-900 px-10 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-gray-100 transition-all duration-300 shadow-xl">
          Shop our Collection.
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
