import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-sky-50 via-white to-sky-100">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient glow - doesn’t block 3D interactions */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_20%,rgba(56,189,248,0.25),rgba(255,255,255,0))]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 rounded-full border border-sky-200/60 bg-white/70 px-4 py-1 text-sky-700 shadow-sm backdrop-blur-md"
       >
          <span className="h-2 w-2 rounded-full bg-sky-400" />
          <span className="text-sm font-medium">Doraemon • Futuristic & Playful</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl"
        >
          A Simple Doraemon Landing with Cool 3D Vibes
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg"
        >
          Minimal, interactive, and inspired by Doraemon’s world. Explore futuristic gadgets and smooth animations powered by a live 3D scene.
        </motion.p>

        <div className="mt-10 flex items-center gap-4">
          <motion.a
            href="#gadgets"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full bg-sky-500 px-6 py-3 text-white shadow-lg shadow-sky-200 transition-colors hover:bg-sky-600"
          >
            Explore Gadgets
          </motion.a>
          <motion.a
            href="#features"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full border border-sky-200 bg-white/80 px-6 py-3 text-sky-700 shadow-sm backdrop-blur-md transition-colors hover:bg-white"
          >
            See Features
          </motion.a>
        </div>
      </div>

      {/* subtle floating doodles - won’t block 3D */}
      <div className="pointer-events-none absolute -right-10 top-1/3 h-64 w-64 rounded-full bg-sky-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-10 bottom-10 h-64 w-64 rounded-full bg-yellow-200/30 blur-3xl" />
    </section>
  );
};

export default Hero;
