
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const backgroundImages = [
  "/portfolio/lovable-uploads/32c1ed10-4b05-406b-9412-174f08364440.png",
  "/portfolio/lovable-uploads/adc2c3b5-12ed-4b1d-85d6-57b487f4bd64.png",
  "/portfolio/lovable-uploads/ba0f61c7-1a4e-48dd-8a5f-929ec68be611.png",
  "/portfolio/lovable-uploads/ac7a7f66-d674-4376-bbd0-866715b07afb.png"
];

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Animation for hero elements
    const elements = [titleRef.current, subtitleRef.current, ctaRef.current];
    
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

    // Image slider
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      elements.forEach(el => {
        if (el) {
          el.classList.remove("animate-fade-in");
        }
      });
      clearInterval(imageInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center bg-no-repeat ${
              index === currentImageIndex ? "opacity-70" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/70 to-background" />
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
              className="inline-flex items-center justify-center h-11 px-8 font-medium tracking-wide text-primary-foreground transition duration-200 bg-primary rounded-md hover:bg-primary/90 focus:shadow-outline focus:outline-none group hover:translate-x-1"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
