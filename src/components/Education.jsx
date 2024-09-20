import React, { useEffect, useRef, useState } from 'react';

const Education = () => {
  const [visibleEntries, setVisibleEntries] = useState([]);
  const entryRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleEntries((prev) => [...prev, entry.target]);
          } else {
            setVisibleEntries((prev) => prev.filter((el) => el !== entry.target));
          }
        });
      },
      { threshold: 0.2 } // Adjust the threshold to trigger earlier or later
    );

    entryRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      entryRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const educationData = [
    {
      year: '2014 - 2018',
      institution: 'Harvard University',
      degree: 'MBA, Finance',
      description:
        'Completed an MBA in Finance with a focus on investment strategies, corporate finance, and financial risk management. Gained in-depth expertise in financial modeling, capital budgeting, and valuation, while also developing a strong foundation in economic theory and global financial markets. Specialized in optimizing portfolio performance and corporate decision-making through data-driven analysis.',
    },
    {
      year: '2018 - 2020',
      institution: 'MIT',
      degree: 'Certified Financial Planner (CFP)',
      description:
        'Achieved the Certified Financial Planner (CFP) designation, demonstrating a comprehensive understanding of personal financial planning, including retirement, tax, and estate planning. Acquired specialized knowledge in risk management, wealth accumulation strategies, and ethical financial advising, ensuring adherence to the highest industry standards in client relationship management and fiduciary responsibility.',
    },
    {
      year: '2020 - 2022',
      institution: 'Stanford University',
      degree: 'Chartered Financial Analyst (CFA) Level III Candidate',
      description:
        'Currently a CFA Level III candidate, deepening proficiency in portfolio management, wealth planning, and advanced investment techniques. Developed a robust skill set in asset allocation, equity valuation, and performance analysis, with a focus on the practical application of financial theories in institutional and private wealth management.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8">Education</h2>
      <div className="relative border-l border-gray-200 dark:border-gray-700">
        {educationData.map((edu, idx) => (
          <div
            key={idx}
            ref={(el) => (entryRefs.current[idx] = el)}
            className={`mb-8 pl-8 relative transform transition-all duration-700 ease-in-out ${
              visibleEntries.includes(entryRefs.current[idx])
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <span className="absolute left-0 top-2 transform -translate-x-2 w-4 h-4 bg-[#2C3E50] rounded-full"></span>
            <p className="text-sm text-gray-500 dark:text-gray-400">{edu.year}</p>
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-gray-600 dark:text-gray-300 py-2 font-semibold">
              <i>{edu.institution}</i>
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-justify">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
