import React, { useEffect, useRef, useState } from 'react';

const CustomHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="relative w-full h-screen flex flex-col md:flex-row items-center justify-between bg-gray-900 px-8 md:px-16"
      id="header"
    >
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
      <div
        className={`flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left text-white space-y-3 md:space-y-4 transition-transform duration-700 ease-out ${
          isVisible ? 'translate-x-0 scale-100 opacity-100' : 'translate-x-10 scale-95 opacity-0'
        }`}
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          Hello, I’m <span className="text-[#D4AF37]">Laura Whitlock</span>
        </h1>
        <p className="text-lg md:text-xl font-light">
          Portfolio Manager | Dedicated Financial Strategist
        </p>
        <p className="text-base md:text-lg">
          Passionate about delivering efficient solutions in portfolio management and business consulting.
        </p>

        {/* CTA Buttons */}
        <div className="flex space-x-3 md:space-x-4">
          <a href='#Contact' className="px-5 py-2 md:px-6 md:py-3 bg-[#D4AF37] text-white font-semibold rounded-full shadow-md hover:bg-transparent border hover:border-[#2C3E50] transition">
            Let's Talk
          </a>
          <a href='#Skills' className="px-5 py-2 md:px-6 md:py-3 bg-transparent border border-white text-white font-semibold rounded-full shadow-md hover:bg-[#2C3E50] hover:text-white transition">
            My Work
          </a>
        </div>
      </div>
    </header>
  );
};

export default CustomHeader;
