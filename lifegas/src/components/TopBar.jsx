import React from "react";

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-9 bg-denim-500 flex items-center justify-center z-[10000]">
      <h1 className="text-center text-sm text-salmonpink-100">
        FREE SHIPPING ON ORDERS OVER ₦100,000
      </h1>
    </div>
  );
};

export default TopBar;
