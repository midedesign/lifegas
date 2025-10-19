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
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-salmonpink-100 font-medium mb-3 sm:mb-4 leading-tight px-4 sm:px-6 md:px-0">
          Elevate
          <br />
          <span className="font-medium">Everyday Living</span>
        </h2>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg font-light text-salmonpink-300 mb-6 sm:mb-8 md:mb-10 max-w-sm sm:max-w-xl md:max-w-2xl mx-auto leading-relaxed opacity-90 px-6 sm:px-4 md:px-0">
          Discover thoughtfully designed interiors and handcrafted pieces that
          bring warmth, functionality and beauty into your space.
        </p>
        <button className="relative overflow-hidden bg-salmonpink-1100 text-salmonpink-100 px-6 py-3 text-sm tracking-wider shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group/button">
          <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover/button:translate-x-0 transition-transform duration-500 ease-out"></span>
          <span className="relative z-10 font-light group-hover/button:text-salmonpink-1100 transition-colors duration-500">
            Shop our Collection
          </span>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
