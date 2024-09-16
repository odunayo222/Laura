import React from 'react';

const AboutMe = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between px-6 lg:px-24 py-12">
      {/* Left Section - Text */}
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">Who I am</p>
        <h1 className="text-4xl font-bold mb-4">About Me <span className="text-lg font-normal">(she/her)</span></h1>
        <p className="text-lg text-gray-700 text-justify">
        Hi, I’m Laura Whitlock, a portfolio manager with over 10 years of experience helping clients achieve their financial goals. My passion for investment management goes beyond numbers—it's about understanding each client’s unique aspirations and crafting tailored solutions that deliver results. Whether it's managing portfolios with assets over $50M or transitioning to sustainable investments, I focus on strategies that not only grow wealth but also provide peace of mind.
        </p>
        <br />
        <p className="text-lg text-gray-700 text-justify">
        Over the years, I've had the privilege of working with a diverse range of clients, each with their own set of goals and challenges. From optimizing portfolios to outperform benchmarks by 7% annually to increasing client satisfaction and retention by 25%, my approach is always centered on personal connection and strategic foresight.
        </p>
      </div>

      {/* Right Section - Image */}
      <div className="lg:w-1/3">
        <img 
          src="/header.jpg" 
          alt="About Me" 
          className="rounded-lg w-full object-cover h-auto"
        />
      </div>
    </div>
  );
};

export default AboutMe;
