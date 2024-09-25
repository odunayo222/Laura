import React, { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const skills = [
    { name: 'Strategic Investment Planning', level: 85, color: 'bg-teal-400' },
    { name: 'Financial Risk Assessment & Management', level: 80, color: 'bg-orange-400' },
    { name: 'Asset Allocation & Diversification', level: 90, color: 'bg-purple-400' },
    { name: 'Performance Analytics & Reporting', level: 75, color: 'bg-pink-400' },
    { name: 'Client Relationship Management', level: 80, color: 'bg-green-400' },
    { name: 'Compliance with Regulatory Standards', level: 85, color: 'bg-teal-400' },
  ];

  const [visibleSkills, setVisibleSkills] = useState([]);
  const skillRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSkills((prev) => [...prev, entry.target]);
          } else {
            setVisibleSkills((prev) => prev.filter((el) => el !== entry.target));
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold for when animation starts
    );

    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      skillRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="bg-white py-40 px-10 pb-28 pt-16" id="Skills">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8">My Expertise Area</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <span>{skill.level}%</span>
              </div>
              <div
                ref={(el) => (skillRefs.current[index] = el)}
                className="w-full bg-gray-200 rounded-full h-2.5 mb-4"
              >
                <div
                  className={`h-2.5 rounded-full ${skill.color} transition-all duration-1000 ease-in-out`}
                  style={{
                    width: visibleSkills.includes(skillRefs.current[index]) ? `${skill.level}%` : '0%',
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
