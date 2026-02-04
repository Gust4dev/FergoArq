import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-stone-500 py-12 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} Sabrina Fergo Arquitetura.</p>
        <div className="mt-4 md:mt-0 space-x-6">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;