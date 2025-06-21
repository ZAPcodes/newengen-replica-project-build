import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface UseCardAnimationProps {
  heroContainerRef: React.RefObject<HTMLDivElement>;
  serviceContainerRef: React.RefObject<HTMLDivElement>;
  cardRefs: React.RefObject<HTMLDivElement[]>;
}

// Disabled card animation hook - no longer needed
export const useCardAnimation = ({ 
  heroContainerRef, 
  serviceContainerRef, 
  cardRefs 
}: UseCardAnimationProps) => {
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    // Animation is disabled - cards remain static in both sections
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [heroContainerRef, serviceContainerRef, cardRefs]);

  return timelineRef;
};

// Enhanced responsive handling
export const useResponsiveCardAnimation = (cardRefs: React.RefObject<HTMLDivElement[]>) => {
  useEffect(() => {
    const handleResize = () => {
      if (!cardRefs.current) return;
      
      // Refresh ScrollTrigger calculations on resize
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call

    return () => window.removeEventListener('resize', handleResize);
  }, [cardRefs]);
};