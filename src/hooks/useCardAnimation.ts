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

export const useCardAnimation = ({ 
  heroContainerRef, 
  serviceContainerRef, 
  cardRefs 
}: UseCardAnimationProps) => {
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!heroContainerRef.current || !cardRefs.current) {
      return;
    }

    const cards = cardRefs.current.filter(Boolean);
    if (cards.length === 0) return;

    // Find services section
    const servicesSection = document.getElementById('services');
    if (!servicesSection) return;

    // Clear existing timeline
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    // Create master timeline with smoother scroll trigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroContainerRef.current,
        start: "top center",
        end: "bottom top",
        scrub: 2,
        pin: false,
        anticipatePin: 1,
        refreshPriority: -1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;
          // Fade hero section as cards fly away
          if (heroContainerRef.current) {
            gsap.set(heroContainerRef.current, { 
              opacity: Math.max(0.2, 1 - progress * 0.8)
            });
          }
        }
      }
    });

    // Enhanced initial stacked state - more realistic overlap like in reference
    gsap.set(cards, {
      position: "fixed",
      top: "50%",
      left: "50%",
      xPercent: -50,
      yPercent: -50,
      zIndex: (i) => 200 + (cards.length - i), // Higher z-index for better stacking
      scale: (i) => 1 - (i * 0.03), // More subtle scale difference
      rotationY: (i) => (i - 1.5) * 8, // Subtle 3D rotation
      rotationX: (i) => i * 3,
      rotationZ: (i) => (i - 1.5) * 5, // Add z rotation for more dynamic look
      y: (i) => i * 15, // Tighter stacking
      x: (i) => (i - 1.5) * 20, // Slight horizontal offset
      opacity: 1,
      transformOrigin: "center center",
      transformStyle: "preserve-3d",
      filter: (i) => i > 0 ? `blur(${i * 0.5}px)` : "blur(0px)" // Subtle depth blur
    });

    // Calculate precise final positions matching the reference grid
    const servicesRect = servicesSection.getBoundingClientRect();
    const gridSlots = servicesSection.querySelectorAll('[data-target-slot]');
    
    // Phase 1: Cards start separating and rotating (0-30% of scroll)
    tl.to(cards, {
      duration: 0.3,
      ease: "power2.out",
      y: (i) => i * 40,
      x: (i) => (i - 1.5) * 60,
      rotationY: (i) => (i - 1.5) * 15,
      rotationZ: (i) => (i - 1.5) * 8,
      scale: (i) => 0.95 - (i * 0.02),
      filter: "blur(0px)",
      stagger: 0.1
    }, 0);

    // Phase 2: Cards fly to approximate positions (30-70% of scroll)
    cards.forEach((card, index) => {
      const targetSlot = gridSlots[index] as HTMLElement;
      if (!targetSlot) return;

      const slotRect = targetSlot.getBoundingClientRect();
      const finalX = slotRect.left + slotRect.width / 2 - window.innerWidth / 2;
      const finalY = slotRect.top + slotRect.height / 2 - window.innerHeight / 2;

      // Create flying path with easing
      tl.to(card, {
        duration: 0.5,
        ease: "power2.inOut",
        x: finalX * 0.8, // 80% of the way first
        y: finalY * 0.8,
        rotationY: (index - 1.5) * 10,
        rotationX: index * 5,
        rotationZ: 0,
        scale: 0.9,
        transformOrigin: "center center"
      }, 0.3 + index * 0.05);
    });

    // Phase 3: Final positioning and settling (70-100% of scroll)
    cards.forEach((card, index) => {
      const targetSlot = gridSlots[index] as HTMLElement;
      if (!targetSlot) return;

      const slotRect = targetSlot.getBoundingClientRect();
      const finalX = slotRect.left + slotRect.width / 2 - window.innerWidth / 2;
      const finalY = slotRect.top + slotRect.height / 2 - window.innerHeight / 2;

      // Final precise positioning
      tl.to(card, {
        duration: 0.2,
        ease: "back.out(1.2)",
        x: finalX,
        y: finalY,
        rotationY: 0,
        rotationX: 0,
        rotationZ: 0,
        scale: 1,
        zIndex: 10 + index,
        transformOrigin: "center center"
      }, 0.8 + index * 0.03);
    });

    timelineRef.current = tl;

    // Cleanup function
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
