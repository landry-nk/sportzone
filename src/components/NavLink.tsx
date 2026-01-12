import { motion } from 'framer-motion';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavLink({ href, children, className }: NavLinkProps) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.1, color: 'hsl(24, 100%, 50%)' }}
      className={`transition-colors ${className}`}
    >
      {children}
    </motion.a>
  );
}
