import React from "react";
import { useRevealAnimation } from "../hooks/useRevealAnimation";

const Footer: React.FC = () => {
  const footerReveal = useRevealAnimation({ animation: "fadeInUp" });

  return (
    <footer className="bg-brand-black text-stone-500 py-12 border-t border-white/10">
      <div
        ref={footerReveal.ref}
        className={`container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest ${footerReveal.animationClass}`}
      >
        <p>&copy; {new Date().getFullYear()} Sabrina Fergo Arquitetura.</p>
        <div className="mt-4 md:mt-0">
          <a
            href="https://instagram.com/sabrinafergo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
