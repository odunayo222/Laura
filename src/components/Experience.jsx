import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileInvoiceDollar, faChartLine, faLightbulb, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  // Intersection Observer API to detect when elements enter or leave the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the card to visibleCards when it enters the viewport
            setVisibleCards((prev) => [...prev, entry.target]);
          } else {
            // Remove the card from visibleCards when it leaves the viewport
            setVisibleCards((prev) => prev.filter((card) => card !== entry.target));
          }
        });
      },
      { threshold: 0.3 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  const cards = [
    {
      icon: faFileInvoiceDollar,
      title: '$50M+ in Assets Managed',
      description:
        'Successfully managed and optimized client portfolios with assets exceeding $50M, ensuring steady growth and risk mitigation.',
    },
    {
      icon: faChartLine,
      title: '10+ Years of Experience in Investment Strategies',
      description:
        'Leveraged expertise in equities, bonds, and alternative investments to consistently achieve client financial goals, outperforming benchmarks by an average of 7% annually.',
    },
    {
      icon: faLightbulb,
      title: 'Leadership in Financial Planning',
      description:
        'Spearheaded investment planning initiatives, creating personalized strategies that increased client satisfaction and retention by 25%.',
    },
    {
      icon: faProjectDiagram,
      title: 'Key Projects',
      description:
        'Led a large-scale transition from traditional investments to sustainable assets, achieving a 15% return over a 3-year period.',
    },
  ];

  return (
    <div className="bg-gray-300 py-14 px-8" id="Experience">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center py-3 text-gray-900">
          Professional Experience Highlights
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`bg-white shadow-lg rounded-lg p-6 transform transition-transform transition-opacity duration-700 ${
                visibleCards.includes(cardRefs.current[index])
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }} // Stagger effect
            >
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={card.icon} className="text-[#D4AF37] w-14 h-14" />
                <h3 className="text-2xl font-semibold text-gray-800 ml-4">{card.title}</h3>
              </div>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
