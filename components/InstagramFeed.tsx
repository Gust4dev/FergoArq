import React from "react";
import { Instagram } from "lucide-react";

const INSTAGRAM_URL = "https://instagram.com/sabrinafergo";

const INSTAGRAM_IMAGES = [
  "/insta/insta1.webp",
  "/insta/insta2.webp",
  "/insta/insta3.webp",
  "/insta/insta4.webp",
];

const InstagramFeed: React.FC = () => {
  return (
    <section className="py-20 bg-brand-light">
      <div className="container mx-auto px-6 md:px-12">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 mb-12 hover:opacity-70 transition-opacity"
        >
          <Instagram size={20} className="text-brand-dark" />
          <span className="text-sm uppercase tracking-widest font-medium">
            @sabrinafergo
          </span>
        </a>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {INSTAGRAM_IMAGES.map((src, index) => (
            <a
              key={index}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden aspect-square"
            >
              <img
                src={src}
                alt={`Post Instagram ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram size={48} className="text-white" />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest border border-brand-dark px-8 py-3 hover:bg-brand-dark hover:text-white transition-all duration-300"
          >
            Seguir no Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
