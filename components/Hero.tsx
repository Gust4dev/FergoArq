import React from "react";
import { ArrowDown } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
    >
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center space-y-6">
          <h2 className="text-brand-gray tracking-[0.2em] uppercase text-sm font-medium">
            Arquitetura com Intenção
          </h2>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-brand-black">
            Espaços que <br />
            <span className="italic text-stone-500">conectam</span> forma <br />
            e sensibilidade.
          </h1>
          <p className="text-brand-dark font-light leading-relaxed max-w-md">
            Projetos residenciais e comerciais que unem estética, funcionalidade
            e cuidado humano para transformar a experiência de viver.
          </p>
          <div className="pt-4">
            <a
              href="#portfolio"
              className="inline-block border-b border-brand-black pb-1 uppercase tracking-widest text-xs hover:text-stone-600 hover:border-stone-600 transition-all"
            >
              Ver Projetos Selecionados
            </a>
          </div>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2 h-[50vh] lg:h-[80vh] w-full">
          <img
            src="/Sala comercial London Eye/WhatsApp Image 2026-02-04 at 15.46.18.webp"
            alt="Sala Comercial London Eye - Projeto em Destaque"
            className="h-full w-full object-cover rounded-sm"
          />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-brand-gray hidden md:block">
        <ArrowDown size={20} />
      </div>
    </section>
  );
};

export default Hero;
