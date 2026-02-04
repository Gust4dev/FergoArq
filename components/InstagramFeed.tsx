import React from 'react';
import Placeholder from './Placeholder';
import { Instagram } from 'lucide-react';

const InstagramFeed: React.FC = () => {
  return (
    <section className="py-20 bg-brand-light">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-center gap-3 mb-12">
            <Instagram size={20} className="text-brand-dark" />
            <span className="text-sm uppercase tracking-widest font-medium">@sabrinafergo.arq</span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Placeholder label="INSTA POST 1" aspectRatio="aspect-square" />
            <Placeholder label="INSTA POST 2" aspectRatio="aspect-square" />
            <Placeholder label="INSTA POST 3" aspectRatio="aspect-square" />
            <Placeholder label="INSTA POST 4" aspectRatio="aspect-square" />
        </div>
        
        <div className="text-center mt-10">
             <a 
              href="#" 
              target="_blank" 
              className="text-xs uppercase tracking-widest border border-brand-dark px-8 py-3 hover:bg-brand-dark hover:text-white transition-all duration-300"
            >
              Seguir no Instagram
            </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;