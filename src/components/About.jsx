import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-1">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">About Storyboard Limited</h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <p className="text-neutral-700 leading-relaxed">
              Storyboard Limited is a filmmaker-led studio specializing in human-centered storytelling,
              impact-driven narratives, and cinematic visuals. We work with corporates, NGOs, engineering bodies,
              and community projects across Kenya and Africa to create films that inspire real action.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
