import React from "react";

/**
 * Configuração da imagem About - ajuste esses valores para posicionar a foto
 * scale: 1.0 = 100%, 1.2 = 120% zoom, 1.5 = 150% zoom
 * positionX: "0%" = esquerda, "50%" = centro, "100%" = direita
 * positionY: "0%" = topo, "50%" = centro, "100%" = base
 */
const ABOUT_IMAGE_CONFIG = {
  src: "/about/about.webp",
  alt: "Sabrina Fergo - Arquiteta",
  scale: 1.0,
  positionX: "50%",
  positionY: "50%",
};

const About: React.FC = () => {
  const imageStyle: React.CSSProperties = {
    objectPosition: `${ABOUT_IMAGE_CONFIG.positionX} ${ABOUT_IMAGE_CONFIG.positionY}`,
    transform: `scale(${ABOUT_IMAGE_CONFIG.scale})`,
  };

  return (
    <section id="sobre" className="py-20 md:py-32 bg-brand-light">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="w-full aspect-[3/4] max-w-md mx-auto md:mr-auto overflow-hidden shadow-xl">
              <img
                src={ABOUT_IMAGE_CONFIG.src}
                alt={ABOUT_IMAGE_CONFIG.alt}
                className="w-full h-full object-cover"
                style={imageStyle}
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-stone-200 -z-10 hidden md:block"></div>
          </div>

          <div className="space-y-8">
            <h2 className="font-serif text-4xl text-brand-black">Sobre Mim</h2>
            <div className="w-12 h-0.5 bg-stone-400"></div>

            <div className="space-y-6 text-brand-dark font-light leading-relaxed text-lg">
              <p>
                Meu diferencial como arquiteta está em projetar espaços com{" "}
                <strong>intenção e sensibilidade</strong>. Não se trata apenas
                de construir, mas de unir conceito, estética e funcionalidade em
                perfeita harmonia.
              </p>
              <p>
                Acredito profundamente na arquitetura como uma ferramenta de
                bem-estar. Meus projetos buscam conectar forma, luz e
                experiência humana, sempre com um olhar atento aos detalhes que
                melhoram a vida das pessoas que habitam esses espaços.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <h3 className="font-serif text-xl mb-2 italic">Formação</h3>
                <p className="text-sm text-gray-600">Arquitetura e Urbanismo</p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-2 italic">Foco</h3>
                <p className="text-sm text-gray-600">
                  Residencial & Comercial Alto Padrão
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
