import React from 'react';

const Education = () => {
  const educationData = [
    {
      title: 'MBA, Finance',
      institution: '[University Name]',
      years: '2014 - 2019',
      description:
        'Completed an MBA in Finance with a focus on investment strategies, corporate finance, and financial risk management. Gained in-depth expertise in financial modeling, capital budgeting, and valuation, while also developing a strong foundation in economic theory and global financial markets. Specialized in optimizing portfolio performance and corporate decision-making through data-driven analysis.',
    },
    {
      title: 'Certified Financial Planner (CFP)',
      institution: '[Certification Body]',
      years: '2021 - 2023',
      description:
        'Achieved the Certified Financial Planner (CFP) designation, demonstrating a comprehensive understanding of personal financial planning, including retirement, tax, and estate planning. Acquired specialized knowledge in risk management, wealth accumulation strategies, and ethical financial advising, ensuring adherence to the highest industry standards in client relationship management and fiduciary responsibility.',
    },
    {
        title: 'Chartered Financial Analyst (CFA) Level III Candidate',
        institution: '[Certification Body]',
        years: '2022',
        description:
          'Currently a CFA Level III candidate, deepening proficiency in portfolio management, wealth planning, and advanced investment techniques. Developed a robust skill set in asset allocation, equity valuation, and performance analysis, with a focus on the practical application of financial theories in institutional and private wealth management.',
      }
  ];

  return (
    <section className="py-12 bg-[#af9781]">
      <div className="container mx-auto py-14 lg:px-36">
        <h2 className="text-4xl font-semibold text-center text-black mb-12">My Education</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
          {educationData.map((edu, index) => (
            <div key={index} className="flex flex-col sm:flex-row justify-between items-start p-6 rounded-lg shadow-lg bg-white">
              <div className="text-black mb-4 sm:mb-0">
                <h3 className="text-2xl font-bold">{edu.title}</h3>
                <p className="text-sm italic text-gray-400">{edu.institution}</p>
                <p className="mt-4">{edu.description}</p>
              </div>
              <div className="text-[#2C3E50] text-3xl font-semibold sm:ml-8">{edu.years}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
