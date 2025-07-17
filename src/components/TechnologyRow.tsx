
import { Technology } from "@/data/technologiesData";

interface TechnologyRowProps {
  technologies: Technology[];
  direction: 'left' | 'right';
}

export const TechnologyRow = ({ technologies, direction }: TechnologyRowProps) => {
  // Function to get random size classes
  const getRandomSize = () => {
    const sizes = ['text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl'];
    return sizes[Math.floor(Math.random() * sizes.length)];
  };

  return (
    <div className="relative overflow-hidden py-4">
      <div 
        className={`flex gap-8 ${direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'}`}
        style={{
          width: 'calc(200% + 2rem)',
        }}
      >
        {/* First set */}
        {technologies.map((tech, index) => {
          const IconComponent = tech.icon;
          return (
            <div
              key={`${tech.name}-1-${index}`}
              className={`${getRandomSize()} font-semibold px-4 py-2 rounded-2xl text-gray-700 hover:text-[#2e4bce] cursor-default transition-all duration-300 inline-flex items-center gap-2 bg-transparent hover:bg-white/20 whitespace-nowrap flex-shrink-0`}
            >
              <IconComponent className="w-4 h-4 opacity-70" />
              <span>{tech.name}</span>
            </div>
          );
        })}
        {/* Duplicate set for seamless loop */}
        {technologies.map((tech, index) => {
          const IconComponent = tech.icon;
          return (
            <div
              key={`${tech.name}-2-${index}`}
              className={`${getRandomSize()} font-semibold px-4 py-2 rounded-2xl text-gray-700 hover:text-[#2e4bce] cursor-default transition-all duration-300 inline-flex items-center gap-2 bg-transparent hover:bg-white/20 whitespace-nowrap flex-shrink-0`}
            >
              <IconComponent className="w-4 h-4 opacity-70" />
              <span>{tech.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
