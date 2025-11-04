import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

function DoraemonSVG() {
  // Simple, friendly Doraemon-like face (not exact) with waving arm
  return (
    <svg viewBox="0 0 220 220" className="w-56 h-56 md:w-72 md:h-72">
      <defs>
        <radialGradient id="faceGrad" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#fff" />
          <stop offset="100%" stopColor="#dff2ff" />
        </radialGradient>
      </defs>
      {/* Head */}
      <circle cx="110" cy="110" r="100" fill="#39a7ff" stroke="#1971c2" strokeWidth="4" />
      <circle cx="110" cy="120" r="80" fill="url(#faceGrad)" stroke="#e6f4ff" strokeWidth="3" />
      {/* Eyes */}
      <ellipse cx="90" cy="95" rx="16" ry="20" fill="#fff" />
      <ellipse cx="130" cy="95" rx="16" ry="20" fill="#fff" />
      <circle cx="96" cy="102" r="5" fill="#222" />
      <circle cx="124" cy="102" r="5" fill="#222" />
      {/* Nose */}
      <circle cx="110" cy="110" r="9" fill="#ff4d6d" />
      {/* Mouth */}
      <path d="M70 140 Q110 165 150 140" fill="none" stroke="#e03131" strokeWidth="4" strokeLinecap="round" />
      {/* Bell */}
      <circle cx="110" cy="170" r="12" fill="#ffd43b" stroke="#fab005" strokeWidth="3" />
      <line x1="98" y1="160" x2="122" y2="160" stroke="#fab005" strokeWidth="4" />
      <circle cx="110" cy="173" r="3" fill="#7048e8" />
      {/* Left hand waving */}
      <motion.g
        animate={{ rotate: [0, 20, 0] }}
        transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.8, ease: 'easeInOut' }}
        style={{ originX: 0.2, originY: 0.2 }}
      >
        <circle cx="30" cy="120" r="16" fill="#fff" stroke="#1971c2" strokeWidth="3" />
        <line x1="46" y1="120" x2="80" y2="120" stroke="#1971c2" strokeWidth="6" strokeLinecap="round" />
      </motion.g>
      {/* Right hand */}
      <circle cx="190" cy="120" r="16" fill="#fff" stroke="#1971c2" strokeWidth="3" />
      <line x1="174" y1="120" x2="140" y2="120" stroke="#1971c2" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

export default function Hero({ onCTAClick, registerHoverSound }) {
  const containerRef = useRef(null);

  // Parallax tilt on mouse move
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handle = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(1000px) rotateX(${y * -4}deg) rotateY(${x * 6}deg)`;
    };
    el.addEventListener('mousemove', handle);
    return () => el.removeEventListener('mousemove', handle);
  }, []);

  return (
    <section id="hero" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-sky-100 via-sky-50 to-white">
      {/* Soft cloud background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 left-10 w-64 h-64 rounded-full bg-white/70 blur-3xl" />
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-sky-200/60 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 w-80 h-80 rounded-full bg-sky-300/40 blur-3xl" />
      </div>

      {/* 3D Spline Scene (optional visual depth) */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/9w9j6sC1bM3G2mXk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24 pb-16 flex flex-col md:flex-row items-center gap-10">
        <motion.div
          ref={containerRef}
          className="relative flex-1 flex flex-col items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <DoraemonSVG />
            <motion.div
              className="absolute -top-6 -right-2 bg-white shadow-lg rounded-2xl px-4 py-2 border border-sky-100"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: [0, -4, 0], opacity: 1 }}
              transition={{ duration: 2.2, repeat: Infinity }}
            >
              <p className="font-semibold text-sky-700">Hi, I’m Doraemon!</p>
            </motion.div>
          </motion.div>

          <h1 className="mt-8 text-3xl md:text-5xl font-extrabold text-sky-900 leading-tight">
            Step into Doraemon’s World — Where Imagination Has No Limits!
          </h1>
          <p className="mt-4 text-sky-700/80 max-w-xl">
            A playful journey through time, gadgets, and friendship. Scroll to explore stories, gadgets, and where to watch!
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onMouseEnter={registerHoverSound}
              onClick={onCTAClick}
              className="group inline-flex items-center gap-2 rounded-full bg-sky-600 text-white px-6 py-3 font-semibold shadow-lg shadow-sky-300 hover:bg-sky-500 transition"
            >
              Discover Doraemon’s World
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
            <a
              href="#about"
              onMouseEnter={registerHoverSound}
              className="inline-flex items-center gap-2 rounded-full bg-white text-sky-700 px-5 py-3 font-semibold shadow-md border border-sky-100 hover:shadow-lg transition"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>

      {/* Gradient overlay so text stands out, but keep Spline interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
    </section>
  );
}
