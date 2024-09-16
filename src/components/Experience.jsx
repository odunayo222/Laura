import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileInvoiceDollar, faChartLine, faLightbulb, faProjectDiagram, faGraduationCap, faCertificate, faChartPie } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
  return (
    <div className="bg-amber-50 py-14 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="text-4xl font-bold mb-4 text-center">Professional Experience Highlights</h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* $50M+ in Assets Managed */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faFileInvoiceDollar} className="text-[#af9781] w-14 h-14" />
              <h3 className="text-2xl font-semibold text-gray-800 ml-4">$50M+ in Assets Managed</h3>
            </div>
            <p className="text-gray-600">
              Successfully managed and optimized client portfolios with assets exceeding $50M, ensuring steady growth and risk mitigation.
            </p>
          </div>

          {/* 10+ Years of Experience in Investment Strategies */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faChartLine} className="text-[#af9781] w-14 h-14" />
              <h3 className="text-2xl font-semibold text-gray-800 ml-4">10+ Years of Experience in Investment Strategies</h3>
            </div>
            <p className="text-gray-600">
              Leveraged expertise in equities, bonds, and alternative investments to consistently achieve client financial goals, outperforming benchmarks by an average of 7% annually.
            </p>
          </div>

          {/* Leadership in Financial Planning */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faLightbulb} className="text-[#af9781] w-14 h-14" />
              <h3 className="text-2xl font-semibold text-gray-800 ml-4">Leadership in Financial Planning</h3>
            </div>
            <p className="text-gray-600">
              Spearheaded investment planning initiatives, creating personalized strategies that increased client satisfaction and retention by 25%.
            </p>
          </div>

          {/* Key Projects */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faProjectDiagram} className="text-[#af9781] w-14 h-14" />
              <h3 className="text-2xl font-semibold text-gray-800 ml-4">Key Projects</h3>
            </div>
            <p className="text-gray-600">
              Led a large-scale transition from traditional investments to sustainable assets, achieving a 15% return over a 3-year period.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;
