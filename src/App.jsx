import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Gadgets from './components/Gadgets.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top nav */}
      <header className="fixed inset-x-0 top-0 z-20 border-b border-slate-200/70 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="flex items-center gap-2 font-semibold text-slate-900">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-sky-500 text-white"><Star size={16} /></span>
            Doraemon
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
            <a href="#features" onClick={(e) => handleSmoothScroll(e, '#features')} className="hover:text-slate-900">Features</a>
            <a href="#gadgets" onClick={(e) => handleSmoothScroll(e, '#gadgets')} className="hover:text-slate-900">Gadgets</a>
            <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')} className="rounded-full bg-sky-500 px-4 py-2 text-white hover:bg-sky-600">Get Started</a>
          </nav>
        </div>
      </header>

      <main className="pt-14 sm:pt-16">
        <Hero />
        <Features />
        <Callout />
        <Gadgets />
      </main>

      <Footer />
    </div>
  );
};

const Callout = () => (
  <section className="relative mx-auto max-w-7xl px-6 py-16">
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-3xl border border-sky-200 bg-gradient-to-b from-white to-sky-50 p-8 text-center shadow-sm"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(56,189,248,0.25),rgba(255,255,255,0))]" />
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Step into Doraemon’s Futuristic Playground</h3>
        <p className="mx-auto mt-2 max-w-2xl text-slate-600">Crafted with Spline 3D, Framer Motion, and Tailwind CSS — minimal, responsive, and delightful.</p>
        <div className="mt-6">
          <a href="#gadgets" className="inline-flex items-center rounded-full bg-sky-500 px-5 py-3 text-white shadow-lg shadow-sky-200 transition hover:bg-sky-600">Start Exploring</a>
        </div>
      </div>
    </motion.div>
  </section>
);

export default App;
