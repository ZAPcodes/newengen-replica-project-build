import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltMaxAngle?: number;
  perspective?: number;
  scale?: number;
  speed?: number;
}

const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  tiltMaxAngle = 15,
  perspective = 1000,
  scale = 1.05,
  speed = 400
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: speed, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: speed, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [tiltMaxAngle, -tiltMaxAngle]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-tiltMaxAngle, tiltMaxAngle]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: 'preserve-3d',
        perspective,
      }}
      whileHover={{ scale }}
      className={`relative ${className}`}
    >
      <div
        style={{
          transform: 'translateZ(50px)',
          transformStyle: 'preserve-3d',
        }}
      >
        {children}
      </div>
      
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 pointer-events-none"
        style={{
          background: `linear-gradient(${useTransform(mouseXSpring, [-0.5, 0.5], [0, 180])}deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)`,
        }}
        animate={{
          opacity: [0, 1, 0],
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 0.6,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  );
};

export default TiltCard;