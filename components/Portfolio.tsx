import React from 'react';
import Placeholder from './Placeholder';
import { Project } from '../types';

const projects: Project[] = [
  { id: 1, title: "Residência Horizon", category: "Residencial", imageLabel: "FOTO PROJETO 1" },
  { id: 2, title: "Escritório Vanguarda", category: "Comercial", imageLabel: "FOTO PROJETO 2" },
  { id: 3, title: "Apartamento Jardins", category: "Reforma", imageLabel: "FOTO PROJETO 3" },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold tracking-widest uppercase text-stone-500 mb-4 block">Portfólio</span>
            <h2 className="font-serif text-4xl text-brand-black">Projetos Selecionados</h2>
          </div>
          <a href="#contato" className="hidden md:inline-block text-sm uppercase tracking-widest border-b border-stone-300 pb-1 hover:border-black transition-colors">
            Iniciar um projeto
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="overflow-hidden mb-6">
                 <Placeholder 
                   label={project.imageLabel} 
                   aspectRatio="aspect-[4/5]" 
                   className="transform group-hover:scale-105 transition-transform duration-700" 
                 />
              </div>
              <div className="flex justify-between items-baseline">
                <h3 className="font-serif text-xl text-brand-black group-hover:text-stone-600 transition-colors">
                  {project.title}
                </h3>
                <span className="text-xs font-medium uppercase tracking-widest text-stone-400">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;