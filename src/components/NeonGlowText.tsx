import React from 'react';
import { motion } from 'framer-motion';

interface NeonGlowTextProps {
  text: string;
  className?: string;
  color?: string;
  intensity?: 'low' | 'medium' | 'high';
  animate?: boolean;
}

const NeonGlowText: React.FC<NeonGlowTextProps> = ({
  text,
  className = '',
  color = '#00FFC6',
  intensity = 'medium',
  animate = true
}) => {
  const getGlowIntensity = () => {
    switch (intensity) {
      case 'low':
        return '0 0 10px';
      case 'medium':
        return '0 0 20px';
      case 'high':
        return '0 0 30px';
      default:
        return '0 0 20px';
    }
  };

  const glowStyle = {
    color,
    textShadow: `
      ${getGlowIntensity()} ${color},
      ${getGlowIntensity()} ${color},
      ${getGlowIntensity()} ${color}
    `,
  };

  const pulseAnimation = {
    textShadow: [
      `${getGlowIntensity()} ${color}`,
      `0 0 ${parseInt(getGlowIntensity().split(' ')[2]) * 1.5}px ${color}`,
      `${getGlowIntensity()} ${color}`,
    ],
  };

  return (
    <motion.span
      className={`font-tech font-bold ${className}`}
      style={glowStyle}
      animate={animate ? pulseAnimation : {}}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {text}
    </motion.span>
  );
};

export default NeonGlowText;