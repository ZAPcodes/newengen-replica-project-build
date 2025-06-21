import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  type?: 'words' | 'letters' | 'lines';
  stagger?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  delay = 0,
  type = 'words',
  stagger = 0.1
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const splitText = () => {
    switch (type) {
      case 'letters':
        return text.split('');
      case 'words':
        return text.split(' ');
      case 'lines':
        return text.split('\n');
      default:
        return text.split(' ');
    }
  };

  const textArray = splitText();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren: stagger,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90,
      transformOrigin: 'top',
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={controls}
      className={className}
      style={{ perspective: '1000px' }}
    >
      {textArray.map((item, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {item}
          {type === 'words' && index < textArray.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;