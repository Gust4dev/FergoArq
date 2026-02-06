import React, { useState, useEffect, useCallback, useRef } from "react";
import { Project } from "../types";
import {
  useRevealAnimation,
  getStaggerDelay,
} from "../hooks/useRevealAnimation";

const projects: Project[] = [
  {
    id: 1,
    title: "AP Terrazo JK",
    category: "Residencial",
    image: "/AP TERRAZO JK/capa.webp",
    images: [
      "/AP TERRAZO JK/WhatsApp Image 2026-02-04 at 15.48.57.webp",
      "/AP TERRAZO JK/WhatsApp Image 2026-02-04 at 15.48.57 (1).webp",
      "/AP TERRAZO JK/WhatsApp Image 2026-02-04 at 15.48.58 (1).webp",
      "/AP TERRAZO JK/WhatsApp Image 2026-02-04 at 15.48.58 (2).webp",
    ],
  },
  {
    id: 2,
    title: "Suíte JJ",
    category: "Residencial",
    image: "/SUÍTE JJ/capa.webp",
    images: [
      "/SUÍTE JJ/WhatsApp Image 2026-02-04 at 15.50.37.webp",
      "/SUÍTE JJ/WhatsApp Image 2026-02-04 at 15.50.37 (1).webp",
      "/SUÍTE JJ/WhatsApp Image 2026-02-04 at 15.50.37 (2).webp",
      "/SUÍTE JJ/WhatsApp Image 2026-02-04 at 15.50.37 (3).webp",
      "/SUÍTE JJ/WhatsApp Image 2026-02-04 at 15.50.37 (4).webp",
      "/SUÍTE JJ/WhatsApp Image 2026-02-04 at 15.50.37 (5).webp",
    ],
  },
  {
    id: 3,
    title: "Banheiro Esmeralda",
    category: "Reforma",
    image: "/Banheiro Esmeralda/WhatsApp Image 2026-02-04 at 15.51.47.webp",
    images: [
      "/Banheiro Esmeralda/WhatsApp Image 2026-02-04 at 15.51.47.webp",
      "/Banheiro Esmeralda/WhatsApp Image 2026-02-04 at 15.51.47 (1).webp",
    ],
  },
  {
    id: 4,
    title: "Sala Comercial London Eye",
    category: "Comercial",
    image: "/Sala comercial London Eye/capa.webp",
    images: [
      "/Sala comercial London Eye/WhatsApp Image 2026-02-04 at 15.46.18.webp",
    ],
  },
];

const ProjectCard: React.FC<{
  project: Project;
  index: number;
  onClick: () => void;
}> = ({ project, index, onClick }) => {
  const cardReveal = useRevealAnimation({
    animation: "fadeInUp",
    delay: getStaggerDelay(index, 100),
  });

  return (
    <div
      ref={cardReveal.ref}
      className={`group cursor-pointer ${cardReveal.animationClass}`}
      onClick={onClick}
    >
      <div className="overflow-hidden mb-6">
        <img
          src={project.image}
          alt={project.title}
          className="w-full aspect-[4/5] object-cover transform group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
      </div>
      <div className="flex justify-between items-baseline">
        <h3 className="font-serif text-xl text-brand-black group-hover:text-stone-600 transition-colors">
          {project.title}
        </h3>
        <span className="text-xs font-medium uppercase tracking-widest text-stone-400">
          {project.category}
        </span>
      </div>
      <p className="text-xs text-stone-400 mt-2">
        {project.images.length}{" "}
        {project.images.length === 1 ? "imagem" : "imagens"}
      </p>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const headerReveal = useRevealAnimation({ animation: "fadeInUp" });

  const touchStartX = useRef<number>(0);
  const touchStartTime = useRef<number>(0);
  const containerWidth = useRef<number>(0);

  const nextImage = useCallback(() => {
    if (selectedProject && selectedProject.images.length > 1) {
      setCurrentImageIndex((prev) =>
        prev < selectedProject.images.length - 1 ? prev + 1 : prev,
      );
    }
  }, [selectedProject]);

  const prevImage = useCallback(() => {
    if (selectedProject && selectedProject.images.length > 1) {
      setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : prev));
    }
  }, [selectedProject]);

  const openLightbox = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setDragOffset(0);
  };

  const closeLightbox = useCallback(() => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    setDragOffset(0);
  }, []);

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        nextImage();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevImage();
      } else if (e.key === "Escape") {
        e.preventDefault();
        closeLightbox();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, nextImage, prevImage, closeLightbox]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    touchStartX.current = e.touches[0].clientX;
    touchStartTime.current = Date.now();
    containerWidth.current = window.innerWidth;
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !selectedProject) return;

    const currentX = e.touches[0].clientX;
    let diff = currentX - touchStartX.current;

    // Limit dragging at edges
    const isAtStart = currentImageIndex === 0 && diff > 0;
    const isAtEnd =
      currentImageIndex === selectedProject.images.length - 1 && diff < 0;

    if (isAtStart || isAtEnd) {
      diff = diff * 0.3; // Rubber band effect at edges
    }

    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging || !selectedProject) return;
    setIsDragging(false);

    const threshold = containerWidth.current * 0.2;
    const timeElapsed = Date.now() - touchStartTime.current;
    const velocity = Math.abs(dragOffset) / timeElapsed;
    const shouldSwipe = Math.abs(dragOffset) > threshold || velocity > 0.5;

    if (shouldSwipe) {
      if (
        dragOffset < 0 &&
        currentImageIndex < selectedProject.images.length - 1
      ) {
        setCurrentImageIndex((prev) => prev + 1);
      } else if (dragOffset > 0 && currentImageIndex > 0) {
        setCurrentImageIndex((prev) => prev - 1);
      }
    }

    setDragOffset(0);
  };

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!selectedProject || selectedProject.images.length <= 1) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const percentX = clickX / width;

    if (percentX < 0.25) {
      prevImage();
    } else if (percentX > 0.75) {
      nextImage();
    }
  };

  const getClickZoneCursor = (e: React.MouseEvent<HTMLDivElement>): string => {
    if (!selectedProject || selectedProject.images.length <= 1)
      return "default";

    const rect = e.currentTarget.getBoundingClientRect();
    const hoverX = e.clientX - rect.left;
    const width = rect.width;
    const percentX = hoverX / width;

    if (percentX < 0.25 && currentImageIndex > 0) return "w-resize";
    if (
      percentX > 0.75 &&
      currentImageIndex < selectedProject.images.length - 1
    )
      return "e-resize";
    return "default";
  };

  const [cursorStyle, setCursorStyle] = useState("default");

  // Calculate the transform for carousel effect
  const getCarouselTransform = () => {
    const baseOffset = -currentImageIndex * 100;
    const dragPercent =
      (dragOffset / (containerWidth.current || window.innerWidth)) * 100;
    return `translateX(calc(${baseOffset}% + ${dragOffset}px))`;
  };

  return (
    <>
      <section id="portfolio" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div
            ref={headerReveal.ref}
            className={`flex flex-col md:flex-row justify-between items-end mb-16 gap-6 ${headerReveal.animationClass}`}
          >
            <div className="max-w-xl">
              <span className="text-xs font-bold tracking-widest uppercase text-stone-500 mb-4 block">
                Portfólio
              </span>
              <h2 className="font-serif text-4xl text-brand-black">
                Projetos Selecionados
              </h2>
            </div>
            <a
              href="#contato"
              className="hidden md:inline-block text-sm uppercase tracking-widest border-b border-stone-300 pb-1 hover:border-black transition-colors"
            >
              Iniciar um projeto
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => openLightbox(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Fechar (Esc)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div className="absolute top-6 left-6 text-white z-10">
            <h3 className="font-serif text-2xl">{selectedProject.title}</h3>
            <p className="text-white/60 text-sm mt-1">
              {selectedProject.category}
            </p>
          </div>

          {selectedProject.images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className={`absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors p-2 z-20 hidden md:block ${
                  currentImageIndex === 0 ? "opacity-30 cursor-not-allowed" : ""
                }`}
                aria-label="Imagem anterior (←)"
                disabled={currentImageIndex === 0}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className={`absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors p-2 z-20 hidden md:block ${
                  currentImageIndex === selectedProject.images.length - 1
                    ? "opacity-30 cursor-not-allowed"
                    : ""
                }`}
                aria-label="Próxima imagem (→)"
                disabled={
                  currentImageIndex === selectedProject.images.length - 1
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </>
          )}

          <div
            className="w-full max-w-5xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Carousel Container */}
            <div
              className="w-full overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onClick={handleImageClick}
              onMouseMove={(e) => setCursorStyle(getClickZoneCursor(e))}
              style={{ cursor: cursorStyle }}
            >
              <div
                className="flex"
                style={{
                  transform: getCarouselTransform(),
                  transition: isDragging ? "none" : "transform 0.3s ease-out",
                }}
              >
                {selectedProject.images.map((image, idx) => (
                  <div
                    key={idx}
                    className="w-full flex-shrink-0 flex items-center justify-center px-4"
                    style={{ minWidth: "100%" }}
                  >
                    <img
                      src={image}
                      alt={`${selectedProject.title} - Imagem ${idx + 1}`}
                      className="max-w-full max-h-[70vh] object-contain mx-auto select-none pointer-events-none"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
            </div>

            <a
              href={`https://wa.me/556296524616?text=Ol%C3%A1!%20Vi%20o%20projeto%20${encodeURIComponent(selectedProject.title)}%20no%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20ele.`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full text-white text-sm uppercase tracking-widest transition-all backdrop-blur-sm border border-white/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              Quero um projeto assim
            </a>
          </div>

          {selectedProject.images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {selectedProject.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(idx);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    idx === currentImageIndex
                      ? "bg-white"
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Ir para imagem ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Portfolio;
