import React from 'react';
import { portfolioData } from '../data/mock';

const Skills = () => {
  const { skills, tools } = portfolioData;

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-[#d4af37]/20 border border-[#d4af37] text-[#d4af37] text-xs font-mono uppercase tracking-widest rounded-full inline-block mb-6">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Skills & Tools
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] border border-white/10 rounded-lg p-6 hover:border-[#d4af37]/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-white/70 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tools Section */}
        <div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            Professional Tools
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-black border border-white/20 text-white text-sm font-medium rounded-full hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;