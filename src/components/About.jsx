import { motion } from 'framer-motion';

function GadgetFloat({ delay = 0, children, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ y: 0 }}
      animate={{ y: [-6, 6, -6] }}
      transition={{ duration: 4, repeat: Infinity, delay }}
    >
      {children}
    </motion.div>
  );
}

function AnywhereDoorIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 80 120" className={className}>
      <rect x="15" y="5" width="50" height="110" rx="6" fill="#ff6b6b" stroke="#e03131" strokeWidth="4" />
      <circle cx="58" cy="60" r="4" fill="#ffd43b" />
    </svg>
  );
}
function BambooCopterIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 120 120" className={className}>
      <rect x="56" y="30" width="8" height="50" rx="4" fill="#ffd43b" stroke="#fab005" strokeWidth="3" />
      <rect x="30" y="20" width="60" height="12" rx="6" fill="#ffd43b" stroke="#fab005" strokeWidth="3" />
    </svg>
  );
}
function TimeMachineIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 140 100" className={className}>
      <rect x="10" y="40" width="120" height="40" rx="10" fill="#74c0fc" stroke="#228be6" strokeWidth="4" />
      <circle cx="35" cy="60" r="8" fill="#ffd43b" />
      <circle cx="65" cy="60" r="8" fill="#ffd43b" />
      <circle cx="95" cy="60" r="8" fill="#ffd43b" />
    </svg>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-white to-sky-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-sky-900">About Doraemon</h2>
          <p className="mt-3 text-sky-700/80">
            Doraemon is a robotic cat from the future who helps Nobita with fantastic gadgets. Created by the duo
            Fujiko F. Fujio, Doraemon first appeared in 1969 and has delighted fans across generations.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <motion.div whileHover={{ y: -6 }} className="rounded-3xl bg-white border border-sky-100 p-6 shadow-sm">
            <h3 className="font-bold text-sky-800">1969 — Born</h3>
            <p className="text-sky-700/80 mt-2">First manga publication by Fujiko F. Fujio.</p>
          </motion.div>
          <motion.div whileHover={{ y: -6 }} className="rounded-3xl bg-white border border-sky-100 p-6 shadow-sm">
            <h3 className="font-bold text-sky-800">1973/1979 — Anime</h3>
            <p className="text-sky-700/80 mt-2">Early TV adaptations began, cementing cultural impact.</p>
          </motion.div>
          <motion.div whileHover={{ y: -6 }} className="rounded-3xl bg-white border border-sky-100 p-6 shadow-sm">
            <h3 className="font-bold text-sky-800">Today — Global Icon</h3>
            <p className="text-sky-700/80 mt-2">Movies, games, and adventures loved by all ages.</p>
          </motion.div>
        </div>

        {/* Floating gadgets decor */}
        <GadgetFloat delay={0.2} className="hidden md:block absolute top-16 left-10 opacity-70">
          <AnywhereDoorIcon className="w-16 h-24" />
        </GadgetFloat>
        <GadgetFloat delay={0.6} className="hidden md:block absolute top-24 right-16 opacity-70">
          <BambooCopterIcon className="w-24 h-24" />
        </GadgetFloat>
        <GadgetFloat delay={1} className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2 opacity-70">
          <TimeMachineIcon className="w-28 h-20" />
        </GadgetFloat>
      </div>
    </section>
  );
}
