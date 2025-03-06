
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface GameCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  index: number;
  projectId?: string;
}

const projectIds = {
  "Cosmic Explorer": "cosmic-explorer",
  "Forgotten Realms": "forgotten-realms",
  "Cyber Nexus": "cyber-nexus",
  "Puzzle Dimensions": "puzzle-dimensions",
  "Spike Jukes": "spike-jukes",
  "Skyway Stunts": "skyway-stunts",
  "Color Block Jam Replica": "color-block-jam",
};

const GameCard = ({ title, description, imageUrl, technologies, index }: GameCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Get the projectId based on the title
  const projectId = projectIds[title as keyof typeof projectIds] || title.toLowerCase().replace(/\s+/g, "-");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  // Function to render external link based on title
  const renderExternalLink = () => {
    if (title === "Spike Jukes") {
      return (
        <a 
          href="https://play.google.com/store/apps/details?id=com.NightScream.SpikeJukes"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs px-3 py-1 bg-primary rounded-full inline-flex items-center gap-1 hover:bg-primary/90 transition-colors mr-3"
          onClick={(e) => e.stopPropagation()}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16L16 12M16 12L12 8M16 12H8M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Play Store
        </a>
      );
    } else if (title === "Skyway Stunts") {
      return (
        <a 
          href="https://shaurya-garg.itch.io/skyway-stunts"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs px-3 py-1 bg-primary rounded-full inline-flex items-center gap-1 hover:bg-primary/90 transition-colors mr-3"
          onClick={(e) => e.stopPropagation()}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16L16 12M16 12L12 8M16 12H8M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          itch.io
        </a>
      );
    }
    return null;
  };

  return (
    <div
      ref={cardRef}
      className={`rounded-xl border border-border bg-card transition-all duration-700 delay-${
        index * 100
      } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="relative aspect-video overflow-hidden rounded-t-xl">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 text-xs font-medium bg-secondary/50 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center">
          {renderExternalLink()}
          <Link 
            to={`/project/${projectId}`}
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            View Details
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
