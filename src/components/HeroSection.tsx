import { motion } from 'framer-motion';
import Scene3D from './Scene3D';
import { ArrowDown, Play } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      <Scene3D />

      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              ⚡ La nouvelle ère du sport digital
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mt-6 text-foreground"
            >
              Rejoignez la <span className="text-primary">révolution</span> sportive
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-foreground/60 mt-6 max-w-2xl mx-auto"
            >
              Découvrez une plateforme révolutionnaire dédiée aux passionnés de sports.
              Connectez-vous, participez et dominez dans votre discipline.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col md:flex-row gap-4 justify-center mt-8"
            >
              <Button className="text-lg px-8 py-6">
                Commencer maintenant
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6">
                <Play size={20} className="mr-2" />
                Voir la démo
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-16"
          >
            <ArrowDown className="mx-auto text-primary" size={32} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
