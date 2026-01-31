import React, { useState } from 'react';
import { ExternalLink, Play, X } from 'lucide-react';
import { portfolioData, categories } from '../data/mock';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const { projects } = portfolioData;

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const handleProjectClick = (project) => {
    if (project.videoUrl) {
      setSelectedVideo(project);
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-[#d4af37]/20 border border-[#d4af37] text-[#d4af37] text-xs font-mono uppercase tracking-widest rounded-full inline-block mb-6">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Portfolio
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            A showcase of my best work across cinematography, video editing, and graphic design.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium uppercase text-sm tracking-wider transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-[#d4af37] text-black'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project)}
              className={`group relative bg-[#1a1a1a] rounded-lg overflow-hidden border border-white/10 hover:border-[#d4af37]/50 transition-all duration-300 hover:-translate-y-2 ${
                project.videoUrl ? 'cursor-pointer' : ''
              }`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#d4af37] flex items-center justify-center">
                    {project.videoUrl ? (
                      <Play size={24} className="text-black" fill="currentColor" />
                    ) : (
                      <ExternalLink size={24} className="text-black" />
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#d4af37] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm mb-4">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/5 border border-white/10 text-white/70 text-xs rounded-full font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-300"
            aria-label="Close video"
          >
            <X size={24} />
          </button>
          
          <div className="w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedVideo.title}</h3>
              <p className="text-white/60">{selectedVideo.description}</p>
            </div>
            <video
              src={selectedVideo.videoUrl}
              controls
              autoPlay
              className="w-full rounded-lg border-2 border-white/10"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;