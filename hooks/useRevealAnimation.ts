import { useEffect, useRef, useState, type RefObject } from "react";

type AnimationType = "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn";

interface UseRevealOptions {
    animation?: AnimationType;
    delay?: number;
    threshold?: number;
    triggerOnce?: boolean;
}

interface UseRevealReturn {
    ref: RefObject<HTMLDivElement | null>;
    isVisible: boolean;
    animationClass: string;
}

export function useRevealAnimation(options: UseRevealOptions = {}): UseRevealReturn {
    const {
        animation = "fadeInUp",
        delay = 0,
        threshold = 0.15,
        triggerOnce = true,
    } = options;

    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) {
            setIsVisible(true);
            return;
        }

        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (triggerOnce) {
                        observer.unobserve(element);
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false);
                }
            },
            { threshold, rootMargin: "0px 0px -50px 0px" }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [threshold, triggerOnce]);

    const baseClass = isVisible ? "reveal-visible" : "reveal-hidden";
    const animClass = isMobile ? "reveal-fade" : `reveal-${animation}`;
    const delayClass = delay > 0 && !isMobile ? `reveal-delay-${delay}` : "";

    return {
        ref,
        isVisible,
        animationClass: `${baseClass} ${animClass} ${delayClass}`.trim(),
    };
}

export function getStaggerDelay(index: number, baseDelay: number = 100): number {
    return index * baseDelay;
}
