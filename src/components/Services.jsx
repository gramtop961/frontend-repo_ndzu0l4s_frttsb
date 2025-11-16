import { motion } from 'framer-motion';
import { Camera, Film, Megaphone, Settings2, Waves, MicVocal } from 'lucide-react';

const services = [
  { title: 'Documentary Production', icon: Film, desc: 'Human-centered stories crafted with cinematic precision.' },
  { title: 'Corporate & NGO Impact Films', icon: Megaphone, desc: 'Inspire action and support through authentic narratives.' },
  { title: 'Brand Story Videos', icon: Camera, desc: 'Premium visuals that define and elevate brand perception.' },
  { title: 'Content Strategy & Creative Direction', icon: Settings2, desc: 'Strategic ideation, scripting, and production oversight.' },
  { title: 'Livestreaming & Multi-Camera Event Coverage', icon: Waves, desc: 'Reliable live production for conferences and events.' },
  { title: 'Video Podcasts & Thought-Leadership Content', icon: MicVocal, desc: 'Studio-grade conversation formats for influence and reach.' },
];

const Services = () => {
  return (
    <section className="bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">What We Do</h2>
          <p className="mt-2 text-neutral-600">Cinematic, Afrocentric, and impact-driven.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ title, icon: Icon, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-amber-100 p-2 text-amber-700">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">{title}</h3>
                  <p className="mt-1 text-sm text-neutral-600">{desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
