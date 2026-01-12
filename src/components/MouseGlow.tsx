import { useMousePosition } from '@/hooks/use-mouse-position';

export const MouseGlow = () => {
  const { x, y } = useMousePosition();

  return (
    <>
      {/* Glow orb following cursor */}
      <div
        className="pointer-events-none fixed w-80 h-80 rounded-full bg-gradient-to-r from-primary/30 to-orange-500/20 blur-3xl mix-blend-screen"
        style={{
          left: `${x - 160}px`,
          top: `${y - 160}px`,
          transition: 'left 0.08s ease-out, top 0.08s ease-out',
        }}
      />
      
      {/* Secondary glow with delay */}
      <div
        className="pointer-events-none fixed w-96 h-96 rounded-full bg-gradient-to-r from-primary/20 to-purple-500/10 blur-3xl mix-blend-screen"
        style={{
          left: `${x - 192}px`,
          top: `${y - 192}px`,
          transition: 'left 0.12s ease-out, top 0.12s ease-out',
        }}
      />
    </>
  );
};

export default MouseGlow;
