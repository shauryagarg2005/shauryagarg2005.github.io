
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ProjectSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="projects" className="py-24 sm:py-32" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-secondary text-primary-foreground rounded-full mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Game Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            A collection of games that showcase my skills in game development, 
            from designing engaging mechanics to creating immersive worlds.
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <div className="max-w-3xl w-full p-12 bg-secondary/30 rounded-2xl border border-border shadow-sm">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary"
                >
                  <path
                    d="M21 12L13 12M21 6L13 6M21 18L13 18M7 12C7 12.5523 6.55228 13 6 13C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11C6.55228 11 7 11.4477 7 12ZM7 6C7 6.55228 6.55228 7 6 7C5.44772 7 5 6.55228 5 6C5 5.44772 5.44772 5 6 5C6.55228 5 7 5.44772 7 6ZM7 18C7 18.5523 6.55228 19 6 19C5.44772 19 5 18.5523 5 18C5 17.4477 5.44772 17 6 17C6.55228 17 7 17.4477 7 18Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Explore My Game Portfolio</h3>
              <p className="text-muted-foreground mb-8 max-w-lg">
                View my complete collection of game development projects, including 
                released titles and works in progress. Each project showcases different 
                aspects of game design, programming, and visual aesthetics.
              </p>
              <Link to="/projects" className="w-full max-w-[200px]">
                <Button 
                  size="lg" 
                  className="w-full font-medium group flex items-center justify-center gap-1"
                >
                  View All Projects
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
