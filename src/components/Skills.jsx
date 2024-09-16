import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'Strategic Investment Planning', level: 85 },
    { name: 'Financial Risk Assessment & Management', level: 80 },
    { name: 'Asset Allocation & Diversification', level: 90 },
    { name: 'Performance Analytics & Reporting', level: 75 },
    { name: 'Client Relationship Management', level: 80 },
    { name: 'Compliance with Regulatory Standards', level: 85 },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Core Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="text-lg font-semibold mb-1">{skill.name}</div>
            <div className="relative w-full h-4 bg-gray-200 rounded-full">
              <div
                className="absolute top-0 left-0 h-4 bg-[#af9781] rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
