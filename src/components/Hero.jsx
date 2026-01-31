import React from 'react';
import { ArrowDown, Play, Mail } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Hero = () => {
  const { hero } = portfolioData;

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero.backgroundImage}
          alt="Cinematic background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-6 animate-fade-in">
          {/* Tag */}
          <div className="inline-block">
            <span className="px-4 py-2 bg-[#d4af37]/20 border border-[#d4af37] text-[#d4af37] text-xs font-mono uppercase tracking-widest rounded-full">
              {hero.tagline}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
            {hero.name}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/70 font-light tracking-wide max-w-2xl mx-auto">
            {hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button
              onClick={() => scrollToSection('showreel')}
              className="group px-8 py-4 bg-[#d4af37] text-black font-semibold rounded-full hover:bg-[#c4a037] transition-all duration-300 flex items-center gap-2 min-w-[200px] justify-center"
            >
              <Play size={20} className="group-hover:scale-110 transition-transform duration-300" />
              View Showreel
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 min-w-[200px] justify-center"
            >
              <Mail size={20} />
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('showreel')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 hover:text-white transition-colors duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;