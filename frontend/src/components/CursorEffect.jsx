import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add trail particle
      const newTrail = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      
      setTrails((prev) => [...prev.slice(-8), newTrail]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Color cycling effect
  const colorIndex = Math.floor((Date.now() / 20000) % 3);
  const colors = ['#38bdf8', '#a855f7', '#22d3ee'];
  const currentColor = colors[colorIndex];

  return (
    <>
      {trails.map((trail, index) => (
        <motion.div
          key={trail.id}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            position: 'fixed',
            left: trail.x,
            top: trail.y,
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: currentColor,
            boxShadow: `0 0 20px ${currentColor}`,
            pointerEvents: 'none',
            zIndex: 9999,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </>
  );
};

export default CursorEffect;