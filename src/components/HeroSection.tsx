
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure elements are visible even if animation fails
    const elements = [titleRef.current, subtitleRef.current, ctaRef.current];
    
    // Add animation classes with timeouts
    if (titleRef.current) {
      titleRef.current.style.opacity = "1";
      titleRef.current.classList.add("animate-fade-in");
    }
    
    setTimeout(() => {
      if (subtitleRef.current) {
        subtitleRef.current.style.opacity = "1";
        subtitleRef.current.classList.add("animate-fade-in");
      }
    }, 200);
    
    setTimeout(() => {
      if (ctaRef.current) {
        ctaRef.current.style.opacity = "1";
        ctaRef.current.classList.add("animate-fade-in");
      }
    }, 400);

    // Cleanup function to remove animation classes
    return () => {
      elements.forEach(el => {
        if (el) {
          el.classList.remove("animate-fade-in");
        }
      });
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 md:py-32 relative z-10">
        <div className="max-w-4xl">
          <h1 
            ref={titleRef}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 tracking-tight transition-opacity duration-300"
          >
            Crafting immersive game experiences
          </h1>
          <p 
            ref={subtitleRef}
            className="text-lg md:text-xl text-muted-foreground mb-8 opacity-0 text-balance max-w-2xl transition-opacity duration-300"
          >
            A game developer portfolio showcasing innovative projects with a focus on gameplay mechanics and visual aesthetics.
          </p>
          <div 
            ref={ctaRef}
            className="opacity-0 transition-opacity duration-300"
          >
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-white transition duration-200 bg-primary rounded-lg hover:bg-primary/90 focus:shadow-outline focus:outline-none"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M12 5V19M12 19L5 12M12 19L19 12" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
