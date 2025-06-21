import React, { forwardRef } from 'react';
import { LucideIcon } from 'lucide-react';

interface AnimatedCardProps {
  image: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  skills: string[];
  duration: string;
  index: number;
  className?: string;
}

const AnimatedCard = forwardRef<HTMLDivElement, AnimatedCardProps>(
  ({ image, title, description, icon: Icon, color, skills, duration, index, className = '' }, ref) => {
    const getColorClasses = (color: string) => {
      const colors = {
        cyan: "from-secondary-cyan to-secondary-cyan/80 text-secondary-cyan border-secondary-cyan/30",
        purple: "from-accent-rust to-accent-rust/80 text-accent-rust border-accent-rust/30",
        green: "from-secondary-cyan to-primary-medium text-secondary-cyan border-secondary-cyan/30",
        blue: "from-primary-medium to-primary-dark text-light-blue border-light-blue/30"
      };
      return colors[color as keyof typeof colors];
    };

    const colorClasses = getColorClasses(color);

    return (
      <div 
        ref={ref}
        className={`w-80 h-96 bg-primary-dark/90 backdrop-blur-sm border border-primary-medium/50 rounded-2xl overflow-hidden shadow-2xl ${className}`}
        data-card={index}
      >
        {/* Card Header */}
        <div className="p-6 border-b border-primary-medium/50">
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 bg-gradient-to-br ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} rounded-xl flex items-center justify-center shadow-lg`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <span className={`px-3 py-1 bg-primary-medium border ${colorClasses.split(' ')[3]} rounded-full text-xs font-mono ${colorClasses.split(' ')[2]}`}>
              {duration}
            </span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-light-blue text-sm">{description}</p>
        </div>

        {/* Card Image */}
        <div className="h-40 relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent"></div>
        </div>

        {/* Card Footer */}
        <div className="p-6">
          <div className="space-y-3">
            <div className="text-xs font-mono text-light-blue/70 uppercase tracking-wider">Key Skills</div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, idx) => (
                <span 
                  key={idx} 
                  className="px-2 py-1 bg-primary-medium text-light-blue text-xs rounded border border-secondary-cyan/30 hover:bg-secondary-cyan/10 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

AnimatedCard.displayName = 'AnimatedCard';

export default AnimatedCard;