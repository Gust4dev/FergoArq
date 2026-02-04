import React from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/556296524616?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20bd5a] transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap group-hover:pl-3 group-hover:pr-1">
        Fale comigo
      </span>
    </a>
  );
};

export default WhatsAppButton;
