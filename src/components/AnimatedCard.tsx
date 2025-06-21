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
        cyan: "from-cyan-500 to-cyan-600 text-cyan-400 border-cyan-500/30",
        purple: "from-purple-500 to-purple-600 text-purple-400 border-purple-500/30",
        green: "from-green-500 to-green-600 text-green-400 border-green-500/30",
        blue: "from-blue-500 to-blue-600 text-blue-400 border-blue-500/30"
      };
      return colors[color as keyof typeof colors];
    };

    const colorClasses = getColorClasses(color);

    return (
      <div 
        ref={ref}
        className={`w-80 h-96 bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden ${className}`}
        data-card={index}
      >
        {/* Card Header */}
        <div className="p-6 border-b border-gray-700/50">
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 bg-gradient-to-br ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} rounded-xl flex items-center justify-center`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <span className={`px-3 py-1 bg-gray-800 border ${colorClasses.split(' ')[3]} rounded-full text-xs font-mono ${colorClasses.split(' ')[2]}`}>
              {duration}
            </span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>

        {/* Card Image */}
        <div className="h-40 relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
        </div>

        {/* Card Footer */}
        <div className="p-6">
          <div className="space-y-3">
            <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">Key Skills</div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, idx) => (
                <span 
                  key={idx} 
                  className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded border border-gray-700"
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
