import React from 'react';
import { portfolioData } from '../data/mock';

const About = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-[#d4af37]/20 border border-[#d4af37] text-[#d4af37] text-xs font-mono uppercase tracking-widest rounded-full inline-block mb-6">
            Who I Am
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {about.title}
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg border-2 border-white/10">
              <img
                src={about.image}
                alt="Ayush Karole"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-white/80 leading-relaxed">
              {about.description}
            </p>
            <div className="pt-4">
              <h3 className="text-2xl font-semibold text-white mb-4">My Approach</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-white/70">Cinematic storytelling that evokes emotion</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-white/70">Attention to detail in every frame and edit</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-white/70">Clean, modern design that stands out</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-white/70">Continuous learning and creative growth</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;