import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Sparkles, Shield, Cpu } from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="h-6 w-6 text-sky-600" />,
    title: 'Playful Minimalism',
    desc: 'A clean Doraemon-inspired aesthetic with soft gradients and rounded edges.'
  },
  {
    icon: <Cpu className="h-6 w-6 text-sky-600" />,
    title: 'Interactive 3D',
    desc: 'Live Spline scene that responds as you explore the page.'
  },
  {
    icon: <Shield className="h-6 w-6 text-sky-600" />,
    title: 'Smooth & Safe',
    desc: 'Subtle motion, accessible contrast, and responsive layout across devices.'
  },
  {
    icon: <Rocket className="h-6 w-6 text-sky-600" />,
    title: 'Fast by Default',
    desc: 'Vite + React + Tailwind for a speedy, modern developer experience.'
  }
];

const Features = () => {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Features</h2>
        <p className="mt-3 text-slate-600">Simple, futuristic, and interactive — just like Doraemon’s gadgets.</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            whileHover={{ y: -6 }}
            className="group rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur-md transition hover:shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 ring-1 ring-sky-100">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
