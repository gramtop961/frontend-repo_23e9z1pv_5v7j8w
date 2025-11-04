import React from 'react';
import { motion } from 'framer-motion';

const gadgets = [
  {
    name: 'Anywhere Door',
    emoji: '🚪',
    color: 'from-pink-100 to-rose-50',
    desc: 'Open a portal to any section of the page with a single click.'
  },
  {
    name: 'Bamboo Copter',
    emoji: '🚁',
    color: 'from-emerald-100 to-teal-50',
    desc: 'Float through content with silky-smooth scroll and motion.'
  },
  {
    name: 'Time Machine',
    emoji: '⏱️',
    color: 'from-sky-100 to-indigo-50',
    desc: 'Relive highlights as elements animate into view.'
  }
];

const Gadgets = () => {
  return (
    <section id="gadgets" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Signature Gadgets</h2>
        <p className="mt-3 text-slate-600">Tap a card and feel the micro-interactions — playful and tactile.</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {gadgets.map((g, idx) => (
          <motion.button
            key={g.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
            whileHover={{ y: -6, rotate: -0.5 }}
            whileTap={{ scale: 0.98 }}
            className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-b ${g.color} p-5 text-left shadow-sm transition-shadow hover:shadow-xl`}
          >
            <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/40 blur-2xl" />
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-slate-900">{g.name}</h3>
                <p className="mt-1 text-sm text-slate-600">{g.desc}</p>
              </div>
              <div className="select-none text-4xl drop-shadow-sm" aria-hidden>{g.emoji}</div>
            </div>
            <div className="mt-4 h-2 w-full rounded-full bg-white/60">
              <motion.div
                className="h-2 rounded-full bg-sky-400"
                initial={{ width: '0%' }}
                whileHover={{ width: '100%' }}
                transition={{ type: 'spring', stiffness: 120, damping: 16 }}
              />
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  );
};

export default Gadgets;
