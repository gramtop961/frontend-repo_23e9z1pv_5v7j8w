import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Gadgets from './components/Gadgets';
import FriendsWatch from './components/FriendsWatch';

export default function App() {
  // Custom Doraemon-face cursor
  const cursorRef = useRef(null);
  useEffect(() => {
    const cursor = cursorRef.current;
    const move = (e) => {
      if (!cursor) return;
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  // WebAudio "ting" sound on hover
  const audioCtxRef = useRef(null);
  const registerHoverSound = () => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = 'sine';
      o.frequency.value = 1100; // ting
      g.gain.setValueAtTime(0.0001, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.18);
      o.connect(g).connect(ctx.destination);
      o.start();
      o.stop(ctx.currentTime + 0.2);
    } catch (e) {
      // ignore
    }
  };

  // Smooth scroll on CTA
  const handleCTAClick = () => {
    const el = document.querySelector('#about');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Subtle parallax gadgets following cursor
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handler = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return (
    <div className="min-h-screen bg-white text-sky-900">
      <Hero onCTAClick={handleCTAClick} registerHoverSound={registerHoverSound} />
      <About />
      <Gadgets registerHoverSound={registerHoverSound} />
      <FriendsWatch registerHoverSound={registerHoverSound} />

      {/* Footer */}
      <footer className="py-12 bg-gradient-to-t from-sky-100 to-white border-t border-sky-100">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sky-700/80">Made with love and dorayaki 🍩 by Doraemon fans.</p>
          <div className="flex items-center gap-3">
            <a href="#" className="w-10 h-10 rounded-full bg-white border border-sky-100 grid place-items-center shadow hover:shadow-md transition" aria-label="Twitter">
              <span className="text-sky-600">X</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white border border-sky-100 grid place-items-center shadow hover:shadow-md transition" aria-label="Instagram">
              <span className="text-pink-500">◐</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white border border-sky-100 grid place-items-center shadow hover:shadow-md transition" aria-label="YouTube">
              <span className="text-rose-600">▶</span>
            </a>
          </div>
        </div>
      </footer>

      {/* Mini Doraemon face cursor */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2"
        aria-hidden
      >
        <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-sky-500 ring-2 ring-white grid place-items-center">
          <div className="w-3 h-3 bg-white rounded-full" />
        </div>
      </div>

      {/* Floating gadget decals that follow cursor slightly for depth */}
      <AnimatePresence>
        <motion.div
          className="fixed top-10 left-10 w-10 h-16"
          style={{ x: mouse.x * 0.02, y: mouse.y * 0.02 }}
        >
          <svg viewBox="0 0 80 120" className="w-full h-full opacity-30">
            <rect x="15" y="5" width="50" height="110" rx="6" fill="#ff6b6b" />
            <circle cx="58" cy="60" r="4" fill="#ffd43b" />
          </svg>
        </motion.div>
        <motion.div
          className="fixed bottom-10 right-10 w-16 h-10"
          style={{ x: -mouse.x * 0.02, y: -mouse.y * 0.02 }}
        >
          <svg viewBox="0 0 140 100" className="w-full h-full opacity-30">
            <rect x="10" y="40" width="120" height="40" rx="10" fill="#74c0fc" />
            <circle cx="35" cy="60" r="8" fill="#ffd43b" />
            <circle cx="65" cy="60" r="8" fill="#ffd43b" />
            <circle cx="95" cy="60" r="8" fill="#ffd43b" />
          </svg>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
