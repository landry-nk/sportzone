import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-6"
      >
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-9xl font-bold text-primary mb-6"
        >
          404
        </motion.div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Page non trouvée
        </h1>
        
        <p className="text-foreground/60 text-lg mb-8 max-w-md mx-auto">
          Oups ! Il semble que vous ayez pris un mauvais tournant. 
          Cette page n'existe pas ou a été déplacée.
        </p>

        <Button 
          onClick={() => navigate('/')}
          className="px-8 py-3 text-lg"
        >
          Retourner à l'accueil
        </Button>
      </motion.div>
    </div>
  );
}
