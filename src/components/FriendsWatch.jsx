import { motion } from 'framer-motion';

const friends = [
  { name: 'Nobita', color: 'bg-yellow-300', text: 'Let’s go on an adventure!' },
  { name: 'Shizuka', color: 'bg-pink-300', text: 'Tea time after homework?' },
  { name: 'Gian', color: 'bg-orange-300', text: 'I’ll sing! You’ll love it!' },
  { name: 'Suneo', color: 'bg-purple-300', text: 'Check out my cool gadget!' },
];

const platforms = [
  { name: 'Disney+ Hotstar', url: 'https://www.hotstar.com', color: 'from-sky-500 to-blue-700' },
  { name: 'Netflix', url: 'https://www.netflix.com', color: 'from-red-500 to-rose-700' },
  { name: 'Prime Video', url: 'https://www.primevideo.com', color: 'from-blue-500 to-indigo-700' },
  { name: 'YouTube', url: 'https://www.youtube.com', color: 'from-rose-400 to-red-600' },
];

export default function FriendsWatch({ registerHoverSound }) {
  return (
    <section id="friends" className="relative py-20 bg-gradient-to-b from-white to-sky-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Friends & Adventures */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-sky-900">Friends & Adventures</h2>
            <p className="mt-3 text-sky-700/80">Meet the crew who make every day an adventure.</p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              {friends.map((f, i) => (
                <motion.div
                  key={f.name}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className={`w-14 h-14 ${f.color} rounded-full shadow-inner ring-2 ring-white`} />
                  <div className="bg-white border border-sky-100 rounded-2xl px-4 py-3 shadow-sm">
                    <p className="text-sky-800 font-semibold">{f.name}</p>
                    <p className="text-sky-700/70 text-sm">{f.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Watch Now */}
          <div id="watch">
            <h2 className="text-3xl md:text-4xl font-extrabold text-sky-900">Watch Doraemon Now</h2>
            <p className="mt-3 text-sky-700/80">Catch episodes and movies on your favorite platforms.</p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {platforms.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={registerHoverSound}
                  className={`relative overflow-hidden rounded-2xl border border-sky-100 bg-white p-5 shadow-sm hover:shadow transition`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-10`} />
                  <div className="relative z-10">
                    <p className="text-lg font-bold text-sky-900">{p.name}</p>
                    <p className="text-sm text-sky-700/70">Click to open</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="#watch"
                onMouseEnter={registerHoverSound}
                className="inline-flex items-center gap-2 rounded-full bg-sky-600 text-white px-6 py-3 font-semibold shadow-lg shadow-sky-300 hover:bg-sky-500 transition"
              >
                Start Watching ➜
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
