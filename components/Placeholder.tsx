import React from 'react';

interface PlaceholderProps {
  label: string;
  className?: string;
  aspectRatio?: string; // e.g., 'aspect-video', 'aspect-square'
}

const Placeholder: React.FC<PlaceholderProps> = ({ label, className = "", aspectRatio = "aspect-square" }) => {
  return (
    <div className={`w-full ${aspectRatio} bg-neutral-200 border border-neutral-300 flex items-center justify-center relative overflow-hidden group ${className}`}>
      <div className="absolute inset-0 bg-neutral-300/30 group-hover:bg-neutral-300/10 transition-colors duration-500"></div>
      <span className="text-neutral-500 font-mono text-sm md:text-base font-medium tracking-widest uppercase z-10 text-center px-4">
        {label}
      </span>
    </div>
  );
};

export default Placeholder;