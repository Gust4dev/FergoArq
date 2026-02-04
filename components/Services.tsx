import React from 'react';
import { Home, Briefcase, Ruler } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 1,
    title: "Residencial Alto Padrão",
    description: "Projetos de casas e apartamentos personalizados, focados no conforto, na exclusividade e na identidade dos moradores.",
    icon: "home"
  },
  {
    id: 2,
    title: "Comercial & Corporativo",
    description: "Lojas, escritórios e espaços de trabalho pensados para fortalecer a marca e otimizar a produtividade e a experiência do cliente.",
    icon: "briefcase"
  },
  {
    id: 3,
    title: "Reforma & Retrofit",
    description: "Transformação completa de espaços existentes, modernizando estruturas e renovando ambientes com inteligência projetual.",
    icon: "ruler"
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-bold tracking-widest uppercase text-stone-500 mb-4 block">O que faço</span>
          <h2 className="font-serif text-4xl text-brand-black mb-6">Áreas de Atuação</h2>
          <p className="text-brand-gray font-light">
            Desenvolvo soluções arquitetônicas completas, do conceito inicial ao detalhamento executivo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service) => (
            <div key={service.id} className="group p-8 border border-neutral-100 hover:border-stone-200 hover:bg-stone-50 transition-all duration-300">
              <div className="mb-6 text-stone-600 group-hover:text-stone-800 transition-colors">
                {service.icon === 'home' && <Home size={32} strokeWidth={1} />}
                {service.icon === 'briefcase' && <Briefcase size={32} strokeWidth={1} />}
                {service.icon === 'ruler' && <Ruler size={32} strokeWidth={1} />}
              </div>
              <h3 className="font-serif text-2xl mb-4 text-brand-black">{service.title}</h3>
              <p className="text-brand-gray font-light leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;