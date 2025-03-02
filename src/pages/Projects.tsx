
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const projects = [
  {
    id: "spike-jukes",
    title: "Spike Jukes",
    description: "Hyper-casual arcade game where players control a ball, dodging spikes while aiming for a high score.",
    status: "Released & Maintained",
    platform: "Android",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "skyway-stunts",
    title: "Skyway Stunts",
    description: "Racing & stunt-based driving game featuring realistic physics, jumps, drifts, and precision driving.",
    status: "In Development",
    platform: "Android",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "color-block-jam",
    title: "Color Block Jam Replica",
    description: "Puzzle/hyper-casual game where players match colored blocks by moving them into correct slots.",
    status: "In Development",
    platform: "Android",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
  }
];

const Projects = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = "Projects | Shaurya Garg";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-24 pt-32 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-secondary text-primary-foreground rounded-full mb-4">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Game Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
              A collection of games that showcase my skills in game development, 
              from designing engaging mechanics to creating immersive worlds.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link 
                key={index}
                to={`/project/${project.id}`}
                className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-lg"
              >
                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-70 group-hover:opacity-90 transition-opacity" />
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 z-20 flex gap-2">
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                      {project.status}
                    </span>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-secondary rounded-full">
                      {project.platform}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex items-center text-sm font-medium text-primary">
                    View Details
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1 transition-transform group-hover:translate-x-1"
                    >
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Projects;
