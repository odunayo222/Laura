import React from 'react';

const CustomHeader = () => {
  return (
    <header className="relative w-full h-screen flex flex-col md:flex-row items-center justify-between bg-[#af9781] px-8 md:px-16" id='header'>
      {/* Left Section - Image */}
      <div className="flex-1 flex justify-center items-center relative hidden md:flex">
        <div className="w-2/3 max-w-xs h-auto">
          <img
            src="/pic3.jpg" // Replace with your image link
            alt="Person"
            className="rounded-full border-8 border-white shadow-lg"
          />
        </div>
      </div>

      {/* Right Section - Text and CTA */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left text-white space-y-3 md:space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hello, I’m <span className="text-[#2C3E50]">Laura Whitlock</span>
        </h1>
        <p className="text-lg md:text-xl font-light">
        Portfolio Manager | Dedicated Financial Strategist
        </p>
        <p className="text-base md:text-lg">
          Passionate about delivering efficient solutions in portfolio management and business consulting.
        </p>

        {/* CTA Buttons */}
        <div className="flex space-x-3 md:space-x-4">
          <button className="px-5 py-2 md:px-6 md:py-3 bg-[#2C3E50] text-white font-semibold rounded-full shadow-md hover:bg-transparent border hover:border-[#2C3E50] transition">
            Let's Talk
          </button>
          <button className="px-5 py-2 md:px-6 md:py-3 bg-transparent border border-[#2C3E50] text-[#2C3E50] font-semibold rounded-full shadow-md hover:bg-[#2C3E50] hover:text-white transition">
            My Work
          </button>
        </div>
      </div>
    </header>
  );
};

export default CustomHeader;
