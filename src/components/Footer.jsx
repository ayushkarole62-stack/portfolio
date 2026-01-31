import React from 'react';
import { Instagram, Mail, Heart } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Footer = () => {
  const { contact } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Name */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Ayush Karole</h3>
            <p className="text-white/50 text-sm">Visual Storyteller</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${contact.email}`}
              className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-[#d4af37] hover:border-[#d4af37] transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href={`https://instagram.com/${contact.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-[#d4af37] hover:border-[#d4af37] transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-white/50 text-sm flex items-center gap-2">
              © {currentYear} Made with <Heart size={14} className="text-[#d4af37] fill-current" /> by Ayush Karole
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;