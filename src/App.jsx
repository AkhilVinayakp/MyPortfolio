import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import EducationCerts from './components/EducationCerts';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundGlow from './components/BackgroundGlow';

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col bg-obsidian-950 text-zinc-100 bg-hud-grid bg-[size:32px_32px] overflow-x-hidden">
      {/* Interactive Background Mouse Movement Layer */}
      <BackgroundGlow />

      {/* Primary Application Layout */}
      <Navbar />
      <main className="flex-grow relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <EducationCerts />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}