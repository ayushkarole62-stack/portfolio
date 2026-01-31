import React, { useState } from 'react';
import { Mail, Instagram, Send } from 'lucide-react';
import { portfolioData } from '../data/mock';
import { toast } from '../hooks/use-toast';

const Contact = () => {
  const { contact } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-[#d4af37]/20 border border-[#d4af37] text-[#d4af37] text-xs font-mono uppercase tracking-widest rounded-full inline-block mb-6">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-[#d4af37] font-light italic">
            {contact.tagline}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-4 p-4 bg-[#1a1a1a] border border-white/10 rounded-lg hover:border-[#d4af37]/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-[#d4af37]/20 rounded-full flex items-center justify-center group-hover:bg-[#d4af37]/30 transition-colors duration-300">
                    <Mail size={24} className="text-[#d4af37]" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Email</p>
                    <p className="text-white font-medium">{contact.email}</p>
                  </div>
                </a>

                <a
                  href={`https://instagram.com/${contact.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[#1a1a1a] border border-white/10 rounded-lg hover:border-[#d4af37]/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-[#d4af37]/20 rounded-full flex items-center justify-center group-hover:bg-[#d4af37]/30 transition-colors duration-300">
                    <Instagram size={24} className="text-[#d4af37]" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Instagram</p>
                    <p className="text-white font-medium">{contact.instagram}</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-6 bg-[#1a1a1a] border border-white/10 rounded-lg">
              <h4 className="text-white font-semibold mb-3">Available For:</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full mt-2"></span>
                  <span>Video editing projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full mt-2"></span>
                  <span>Cinematography & filming</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full mt-2"></span>
                  <span>Graphic design work</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full mt-2"></span>
                  <span>Creative collaborations</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white/70 text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#d4af37] transition-colors duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white/70 text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#d4af37] transition-colors duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white/70 text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#d4af37] transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#d4af37] text-black font-semibold rounded-lg hover:bg-[#c4a037] transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;