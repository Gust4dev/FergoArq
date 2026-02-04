import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-20 md:py-32 bg-brand-dark text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-4xl mb-6">Vamos conversar?</h2>
            <p className="font-light text-stone-300 mb-12 max-w-md leading-relaxed">
              Se você busca um projeto único, funcional e com identidade, entre
              em contato. Estou pronta para transformar suas ideias em
              realidade.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="text-stone-400 mt-1" size={20} />
                <div>
                  <h4 className="uppercase tracking-widest text-xs font-bold text-stone-500 mb-1">
                    Email
                  </h4>
                  <a
                    href="mailto:contato@sabrinafergo.com.br"
                    className="text-lg hover:text-stone-300 transition-colors"
                  >
                    contato@sabrinafergo.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-stone-400 mt-1" size={20} />
                <div>
                  <h4 className="uppercase tracking-widest text-xs font-bold text-stone-500 mb-1">
                    WhatsApp
                  </h4>
                  <a
                    href="https://wa.me/556296524616?text=Ol%C3%A1!%20Vim%20pela%20se%C3%A7%C3%A3o%20de%20contato%20e%20gostaria%20de%20falar%20sobre%20um%20projeto."
                    className="text-lg hover:text-stone-300 transition-colors"
                  >
                    +55 62 9652-4616
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-stone-400 mt-1" size={20} />
                <div>
                  <h4 className="uppercase tracking-widest text-xs font-bold text-stone-500 mb-1">
                    Localização
                  </h4>
                  <p className="text-lg text-stone-300">
                    Atendimento em Goiânia e Região
                    <br />
                    <span className="text-sm text-stone-500">
                      Projetos Online para todo o Brasil
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form
            className="space-y-6 bg-white/5 p-8 rounded-sm backdrop-blur-sm border border-white/10"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-stone-400">
                  Nome
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-stone-600 py-2 focus:outline-none focus:border-white transition-colors text-white"
                  placeholder="Seu nome"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-stone-400">
                  Telefone
                </label>
                <input
                  type="tel"
                  className="w-full bg-transparent border-b border-stone-600 py-2 focus:outline-none focus:border-white transition-colors text-white"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-stone-400">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-stone-600 py-2 focus:outline-none focus:border-white transition-colors text-white"
                placeholder="seu@email.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-stone-400">
                Mensagem
              </label>
              <textarea
                rows={4}
                className="w-full bg-transparent border-b border-stone-600 py-2 focus:outline-none focus:border-white transition-colors text-white"
                placeholder="Conte um pouco sobre seu projeto..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-stone-200 text-brand-dark py-4 uppercase tracking-widest text-sm font-bold hover:bg-white transition-colors mt-4"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
