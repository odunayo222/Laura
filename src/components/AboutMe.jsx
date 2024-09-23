import React, { useEffect, useState, useRef } from 'react';

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // Adjust this threshold to control when the animation starts
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      id="About"
      ref={sectionRef}
      className="relative flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between px-6 lg:px-24 py-16"
    >
      {/* Left Section - Text */}
      <div
        className={`lg:w-1/2 mb-8 lg:mb-0 transform transition-all duration-1000 ease-in-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">Who I am</p>
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          About Me <span className="text-lg font-normal">(she/her)</span>
        </h1>
        <p className="text-lg text-gray-700 md:text-justify">
          Hi, I’m Laura Whitlock, a portfolio manager with over 10 years of experience helping clients achieve their financial goals. My passion for investment management goes beyond numbers—it's about understanding each client’s unique aspirations and crafting tailored solutions that deliver results. Whether it's managing portfolios with assets over $50M or transitioning to sustainable investments, I focus on strategies that not only grow wealth but also provide peace of mind.
        </p>
        <br />
        <p className="text-lg text-gray-700 text-justify">
          Over the years, I've had the privilege of working with a diverse range of clients, each with their own set of goals and challenges. From optimizing portfolios to outperform benchmarks by 7% annually to increasing client satisfaction and retention by 25%, my approach is always centered on personal connection and strategic foresight.
        </p>
        <br />
        <a href="/Laura_resume.pdf" download="/Laura_resume.pdf" className="px-5 py-4 my-7 md:px-6 md:py-3 bg-[#D4AF37] text-[#2C3E50] font-semibold shadow-md hover:bg- border hover:border-[#2C3E50] transition">
          Download Resume
        </a>
      </div>

      {/* Right Section - Image */}
      <div
        className={`lg:w-1/3 transform transition-all duration-1000 ease-in-out delay-300 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}
      >
        <img
          src="/pic5.jpg"
          alt="About Me"
          className="rounded-lg w-full object-cover h-auto"
        />
      </div>
    </div>
  );
};

export default AboutMe;
