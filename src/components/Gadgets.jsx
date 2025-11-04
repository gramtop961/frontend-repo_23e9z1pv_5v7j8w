import { motion } from 'framer-motion';

const gadgets = [
  {
    name: 'Anywhere Door',
    description: 'Open to instantly step anywhere you imagine!',
    colorFrom: 'from-pink-400',
    colorTo: 'to-rose-500',
    icon: (
      <svg viewBox="0 0 80 120" className="w-14 h-20">
        <rect x="15" y="5" width="50" height="110" rx="6" fill="#ff6b6b" stroke="#e03131" strokeWidth="4" />
        <circle cx="58" cy="60" r="4" fill="#ffd43b" />
      </svg>
    ),
  },
  {
    name: 'Bamboo Copter',
    description: 'A tiny propeller that lets you fly into the sky!',
    colorFrom: 'from-amber-300',
    colorTo: 'to-yellow-400',
    icon: (
      <svg viewBox="0 0 120 120" className="w-20 h-20">
        <rect x="56" y="30" width="8" height="50" rx="4" fill="#ffd43b" stroke="#fab005" strokeWidth="3" />
        <rect x="30" y="20" width="60" height="12" rx="6" fill="#ffd43b" stroke="#fab005" strokeWidth="3" />
      </svg>
    ),
  },
  {
    name: 'Time Machine',
    description: 'Travel to the past or future for grand adventures!',
    colorFrom: 'from-sky-400',
    colorTo: 'to-indigo-500',
    icon: (
      <svg viewBox="0 0 140 100" className="w-24 h-16">
        <rect x="10" y="40" width="120" height="40" rx="10" fill="#74c0fc" stroke="#228be6" strokeWidth="4" />
        <circle cx="35" cy="60" r="8" fill="#ffd43b" />
        <circle cx="65" cy="60" r="8" fill="#ffd43b" />
        <circle cx="95" cy="60" r="8" fill="#ffd43b" />
      </svg>
    ),
  },
];

export default function Gadgets({ registerHoverSound }) {
  return (
    <section id="gadgets" className="relative py-20 bg-gradient-to-b from-sky-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-sky-900">How Doraemon Works</h2>
          <p className="mt-3 text-sky-700/80">Hover to reveal each gadget’s powers!</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gadgets.map((g, idx) => (
            <motion.div
              key={g.name}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-sm"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${g.colorFrom} ${g.colorTo} opacity-0 group-hover:opacity-20 transition`} />
              <div className="p-6 flex flex-col items-center text-center">
                <motion.div
                  className="mb-4"
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: idx === 1 ? 360 : 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {g.icon}
                </motion.div>
                <h3 className="text-lg font-bold text-sky-900">{g.name}</h3>
                <p className="text-sky-700/80 mt-2">{g.description}</p>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="mt-4"
                >
                  <button
                    onMouseEnter={registerHoverSound}
                    className="rounded-full bg-sky-600 text-white px-4 py-2 text-sm shadow hover:bg-sky-500"
                  >
                    See it in action
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
