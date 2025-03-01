
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
  );
};

export default GameCard;
