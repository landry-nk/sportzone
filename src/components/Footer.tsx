import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const links = {
    Product: ['Features', 'Pricing', 'Security', 'Blog'],
    Company: ['About', 'Careers', 'Press', 'Guides'],
    Legal: ['Claim', 'Privacy', 'Terms', 'Cookies'],
    Social: [
      { icon: Facebook, href: '#' },
      { icon: Twitter, href: '#' },
      { icon: Instagram, href: '#' },
      { icon: Linkedin, href: '#' },
    ],
  };

  return (
    <footer className="bg-secondary/50 border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-1 md:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">
                  SZ
                </span>
              </div>
              <span className="font-bold text-foreground">SportZone</span>
            </div>
            <p className="text-foreground/60 text-sm">
              La plateforme révolutionnaire pour les passionnés de sports.
            </p>
          </motion.div>

          {['Product', 'Company', 'Legal'].map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
            >
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-2">
                {links[category as keyof typeof links].map((link, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="text-foreground/60 hover:text-primary transition-colors"
                    >
                      {typeof link === 'string' ? link : ''}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="font-semibold text-foreground mb-4">Suivez-nous</h4>
            <div className="flex gap-4">
              {links.Social.map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold text-foreground mb-3">Newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-3 py-2 bg-background border border-border/50 rounded text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="px-3 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors">
                  <Mail size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-foreground/60 text-sm">
            <p>&copy; 2024 SportZone. Tous droits réservés.</p>
            <p>Fait avec ❤️ pour les passionnés de sports</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
