import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from './ui/button';
import { Mail } from 'lucide-react';

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-primary to-primary/50 rounded-2xl p-12 md:p-20 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Prêt à transformer ta carrière sportive ?
          </h2>
          
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Rejoins des milliers d'athlètes et de passionnés qui ont déjà trouvé leur communauté
            et atteint leurs objectifs sur SportZone.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <Button className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90">
              Commencer gratuitement
            </Button>
            <Button 
              variant="outline" 
              className="text-lg px-8 py-6 border-white text-white hover:bg-white/10"
            >
              <Mail size={20} className="mr-2" />
              Nous contacter
            </Button>
          </motion.div>

          <p className="text-white/60 mt-8 text-sm">
            Pas de carte bancaire requise. Accès complet pendant 30 jours.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
