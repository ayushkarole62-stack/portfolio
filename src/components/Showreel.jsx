import React from 'react';
import { portfolioData } from '../data/mock';

const Showreel = () => {
  const { showreel } = portfolioData;

  return (
    <section id="showreel" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-[#d4af37]/20 border border-[#d4af37] text-[#d4af37] text-xs font-mono uppercase tracking-widest rounded-full inline-block mb-6">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {showreel.title}
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            {showreel.description}
          </p>
        </div>

        {/* Video */}
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="rounded-lg overflow-hidden border-2 border-white/10 shadow-2xl">
            <video
              className="w-full"
              src={showreel.videoUrl}
              controls
              poster="https://images.pexels.com/photos/8089657/pexels-photo-8089657.jpeg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showreel;