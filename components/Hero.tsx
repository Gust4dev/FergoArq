import React from "react";
import { ArrowDown } from "lucide-react";

/**
 * Configuração da imagem Hero - ajuste esses valores para posicionar a foto
 * scale: 1.0 = 100%, 1.2 = 120% zoom, 1.5 = 150% zoom
 * positionX: "0%" = esquerda, "50%" = centro, "100%" = direita
 * positionY: "0%" = topo, "50%" = centro, "100%" = base
 */
const HERO_IMAGE_CONFIG = {
  src: "/Sala comercial London Eye/WhatsApp Image 2026-02-04 at 15.46.18.webp",
  alt: "Sala Comercial London Eye - Projeto em Destaque",
  scale: 1.0,
  positionX: "52%",
  positionY: "60%",
};

const Hero: React.FC = () => {
  const imageStyle: React.CSSProperties = {
    objectPosition: `${HERO_IMAGE_CONFIG.positionX} ${HERO_IMAGE_CONFIG.positionY}`,
    transform: `scale(${HERO_IMAGE_CONFIG.scale})`,
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Logo grande no fundo com blur */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src="/logo.svg"
          alt=""
          className="w-[60vw] max-w-3xl opacity-[0.03] blur-sm -translate-x-[10%]"
          aria-hidden="true"
        />
      </div>

      {/* Logo menor no canto inferior direito */}
      <img
        src="/logo.svg"
        alt="Sabrina Fergo Arquitetura"
        className="absolute bottom-8 right-8 w-20 md:w-28 opacity-100 hidden md:block"
      />
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

        <div className="lg:col-span-7 order-1 lg:order-2 h-[50vh] lg:h-[80vh] w-full overflow-hidden">
          <img
            src={HERO_IMAGE_CONFIG.src}
            alt={HERO_IMAGE_CONFIG.alt}
            className="h-full w-full object-cover rounded-sm"
            style={imageStyle}
          />
        </div>
      </div>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 animate-bounce text-brand-gray hidden md:block">
        <ArrowDown size={20} />
      </div>
    </section>
  );
};

export default Hero;
