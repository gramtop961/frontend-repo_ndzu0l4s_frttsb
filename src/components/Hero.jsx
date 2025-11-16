import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-neutral-900 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/40 to-neutral-900/10 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:py-36">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
        >
          <span className="block text-white">Stories That Move</span>
          <span className="block text-amber-400">Africa Forward</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-6 max-w-2xl text-lg md:text-xl text-neutral-200"
        >
          Cinematic documentaries and brand films for organizations that want to inspire, influence, and create lasting impact.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
