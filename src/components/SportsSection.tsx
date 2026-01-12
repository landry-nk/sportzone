import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const sports = [
  {
    name: 'Football',
    description: 'Rejoins des milliers de passionnés',
    emoji: '⚽',
    color: 'from-green-500 to-emerald-600',
    players: '15,000+',
  },
  {
    name: 'Basketball',
    description: 'Slam dunk tes objectifs',
    emoji: '🏀',
    color: 'from-orange-500 to-red-600',
    players: '8,500+',
  },
  {
    name: 'Tennis',
    description: 'Ace ta compétition',
    emoji: '🎾',
    color: 'from-yellow-500 to-orange-500',
    players: '5,200+',
  },
  {
    name: 'Natation',
    description: 'Nage vers le succès',
    emoji: '🏊',
    color: 'from-blue-500 to-cyan-600',
    players: '3,800+',
  },
  {
    name: 'Athlétisme',
    description: 'Sprinte vers la victoire',
    emoji: '🏃',
    color: 'from-red-500 to-pink-600',
    players: '7,100+',
  },
  {
    name: 'Volleyball',
    description: 'Saute plus haut',
    emoji: '🏐',
    color: 'from-indigo-500 to-purple-600',
    players: '4,500+',
  },
];

const SportsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="sports" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Explorez les sports
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Accédez à des communautés passionnées et à des compétitions épiques
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sports.map((sport, index) => (
            <motion.div
              key={sport.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -15, scale: 1.05 }}
              className={`relative overflow-hidden rounded-lg p-6 bg-gradient-to-br ${sport.color} cursor-pointer group shadow-lg hover:shadow-2xl transition-shadow duration-300`}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-all duration-300" />
              
              {/* Shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              </div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">{sport.emoji}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{sport.name}</h3>
                <p className="text-white/80 mb-4">{sport.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-sm">{sport.players} joueurs</span>
                  <ArrowRight className="text-white/60 group-hover:text-white transition-all duration-300 group-hover:translate-x-2" size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SportsSection;
