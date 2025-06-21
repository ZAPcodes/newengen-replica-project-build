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

    // Create master timeline with scroll trigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroContainerRef.current,
        start: "center center",
        end: "bottom top",
        scrub: 1,
        pin: false,
        anticipatePin: 1,
        refreshPriority: -1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;
          // Fade hero section as cards fly away
          if (heroContainerRef.current) {
            gsap.set(heroContainerRef.current, { 
              opacity: Math.max(0.3, 1 - progress * 0.7)
            });
          }
        }
      }
    });

    // Enhanced initial stacked state - realistic card stack
    gsap.set(cards, {
      position: "fixed",
      top: "50%",
      left: "50%",
      xPercent: -50,
      yPercent: -50,
      zIndex: (i) => 200 + (cards.length - i),
      scale: (i) => 1 - (i * 0.05),
      rotationY: (i) => (i - 1.5) * 12,
      rotationX: (i) => i * 4,
      rotationZ: (i) => (i - 1.5) * 6,
      y: (i) => i * 20,
      x: (i) => (i - 1.5) * 25,
      opacity: 1,
      transformOrigin: "center center",
      transformStyle: "preserve-3d",
      filter: (i) => i > 0 ? `blur(${i * 0.8}px)` : "blur(0px)"
    });

    // Calculate precise final positions in services section
    const gridSlots = servicesSection.querySelectorAll('[data-target-slot]');
    
    // Phase 1: Cards start separating with staggered timing (0-25% of scroll)
    cards.forEach((card, index) => {
      tl.to(card, {
        duration: 0.2,
        ease: "power2.out",
        y: (i) => i * 50 + Math.sin(index * 0.5) * 30,
        x: (i) => (i - 1.5) * 80 + Math.cos(index * 0.3) * 40,
        rotationY: (i) => (i - 1.5) * 20,
        rotationZ: (i) => (i - 1.5) * 10,
        scale: (i) => 0.9 - (i * 0.03),
        filter: "blur(0px)",
      }, index * 0.05);
    });

    // Phase 2: Cards fly in organic paths to services section (25-75% of scroll)
    cards.forEach((card, index) => {
      const targetSlot = gridSlots[index] as HTMLElement;
      if (!targetSlot) return;

      const slotRect = targetSlot.getBoundingClientRect();
      const servicesRect = servicesSection.getBoundingClientRect();
      
      // Calculate position relative to services section
      const finalX = slotRect.left - servicesRect.left + slotRect.width / 2 - servicesRect.width / 2;
      const finalY = slotRect.top - servicesRect.top + slotRect.height / 2 - servicesRect.height / 2;

      // Create curved flight path
      const midX = finalX * 0.5 + (Math.random() - 0.5) * 200;
      const midY = finalY * 0.3 - 100 - (index * 50);

      // First part of flight - to midpoint
      tl.to(card, {
        duration: 0.3,
        ease: "power1.inOut",
        x: midX,
        y: midY,
        rotationY: (index - 1.5) * 15 + Math.sin(index) * 20,
        rotationX: index * 8,
        rotationZ: Math.cos(index) * 15,
        scale: 0.85,
        transformOrigin: "center center"
      }, 0.25 + index * 0.08);

      // Second part of flight - to final position
      tl.to(card, {
        duration: 0.3,
        ease: "power2.out",
        x: finalX,
        y: finalY,
        rotationY: 0,
        rotationX: 0,
        rotationZ: 0,
        scale: 1,
        transformOrigin: "center center"
      }, 0.55 + index * 0.06);
    });

    // Phase 3: Final settling animation with position change (75-100% of scroll)
    cards.forEach((card, index) => {
      const targetSlot = gridSlots[index] as HTMLElement;
      if (!targetSlot) return;

      // Final positioning - change from fixed to static positioning
      tl.to(card, {
        duration: 0.15,
        ease: "back.out(1.7)",
        scale: 1.05,
        zIndex: 10 + index,
        onComplete: () => {
          // Mark card as landed
          card.setAttribute('data-card-landed', 'true');
          
          // Change positioning to static so cards stay in services section
          gsap.set(card, {
            position: "static",
            transform: "none",
            top: "auto",
            left: "auto",
            xPercent: 0,
            yPercent: 0,
            x: 0,
            y: 0,
            zIndex: "auto"
          });
          
          // Make the target slot visible and append the card
          if (targetSlot) {
            targetSlot.style.opacity = "1";
            targetSlot.appendChild(card);
          }
        }
      }, 0.85 + index * 0.02)
      .to(card, {
        duration: 0.1,
        ease: "power2.out",
        scale: 1,
      }, 0.95 + index * 0.02);
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