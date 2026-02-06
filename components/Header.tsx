import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavItem } from "../types";

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Sobre", href: "#sobre" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center relative z-50">
        <a href="#" className="block">
          <img
            src="/logo.svg"
            alt="Sabrina Fergo - Arquitetura & Interiores"
            className="h-16 md:h-20 w-auto"
          />
        </a>

        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm tracking-widest uppercase hover:text-stone-500 transition-colors ${
                isScrolled ? "text-brand-dark" : "text-brand-black"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-brand-black focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white z-40 flex flex-col justify-center items-center space-y-8 transition-transform duration-300 ease-in-out md:hidden pt-20 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-serif text-2xl text-brand-black hover:text-stone-500 transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
