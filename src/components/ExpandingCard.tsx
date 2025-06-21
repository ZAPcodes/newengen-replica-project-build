import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ExpandingCardProps {
  children: React.ReactNode;
  expandedContent: React.ReactNode;
  className?: string;
  expandedClassName?: string;
}

const ExpandingCard: React.FC<ExpandingCardProps> = ({
  children,
  expandedContent,
  className = '',
  expandedClassName = ''
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const cardVariants = {
    collapsed: {
      scale: 1,
      borderRadius: '1rem',
    },
    expanded: {
      scale: 1,
      borderRadius: '0rem',
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
  };

  const contentVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.5,
        delay: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
  };

  return (
    <>
      <motion.div
        className={`cursor-pointer ${className}`}
        variants={cardVariants}
        animate={isExpanded ? 'expanded' : 'collapsed'}
        onClick={() => setIsExpanded(true)}
        layoutId="expanding-card"
        style={{ zIndex: isExpanded ? 1000 : 1 }}
      >
        {children}
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[999]"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={() => setIsExpanded(false)}
            />

            {/* Expanded Card */}
            <motion.div
              className={`fixed inset-4 md:inset-8 bg-white rounded-2xl shadow-2xl z-[1000] overflow-hidden ${expandedClassName}`}
              layoutId="expanding-card"
              initial={{ borderRadius: '1rem' }}
              animate={{ borderRadius: '1rem' }}
              exit={{ borderRadius: '1rem' }}
            >
              {/* Close Button */}
              <motion.button
                className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center z-10 transition-colors duration-200"
                onClick={() => setIsExpanded(false)}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5 text-gray-600" />
              </motion.button>

              {/* Expanded Content */}
              <motion.div
                className="h-full overflow-auto p-6"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {expandedContent}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ExpandingCard;