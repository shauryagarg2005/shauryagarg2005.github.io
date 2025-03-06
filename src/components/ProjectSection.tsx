
import { useRef } from "react";
import GameCard from "./GameCard";

const games = [
  {
    title: "Spike Jukes",
    description: "A hyper-casual arcade game where players control a ball, dodging spikes while aiming for a high score.",
    imageUrl: "/lovable-uploads/ba0f61c7-1a4e-48dd-8a5f-929ec68be611.png",
    technologies: ["Unity", "C#", "Mobile"]
  },
  {
    title: "Skyway Stunts",
    description: "Racing & stunt-based driving game featuring realistic physics, jumps, drifts, and precision driving.",
    imageUrl: "/lovable-uploads/ac7a7f66-d674-4376-bbd0-866715b07afb.png",
    technologies: ["Unity", "C#", "Physics"]
  },
  {
    title: "Color Block Jam Replica",
    description: "Puzzle/hyper-casual game where players match colored blocks by moving them into correct slots.",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    technologies: ["Unity", "C#", "Puzzle"]
  },
  {
    title: "Puzzle Dimensions",
    description: "Mind-bending puzzle game that manipulates space and time to solve challenges.",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    technologies: ["Unity", "C#", "Shader Graph"]
  }
];

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <GameCard
              key={index}
              title={game.title}
              description={game.description}
              imageUrl={game.imageUrl}
              technologies={game.technologies}
              index={index}
            />
          ))}
          
          <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1 h-full">
            <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-secondary/50 rounded-xl border border-border">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5V19M5 12H19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">More Coming Soon</h3>
              <p className="text-muted-foreground text-center text-sm">
                New projects are in development and will be added to the portfolio soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
