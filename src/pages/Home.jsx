import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Showreel from '../components/Showreel';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Toaster } from '../components/ui/toaster';

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Showreel />
      <Portfolio />
      <About />
      <Skills />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Home;