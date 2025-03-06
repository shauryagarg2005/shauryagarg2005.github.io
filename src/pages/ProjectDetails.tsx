
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const projects = [
  {
    id: "spike-jukes",
    title: "Spike Jukes",
    status: "Released & Maintained",
    platform: "Android",
    description: "Hyper-casual arcade game where players control a ball, dodging spikes while aiming for a high score.",
    longDescription: "Spike Jukes is a fast-paced arcade game designed for mobile gamers who enjoy quick, challenging sessions. Players control a ball, navigating through increasingly difficult spike arrangements while trying to achieve high scores. The game features one-touch controls for easy gameplay, a competitive high-score system, and smooth animations with dynamic physics. Current focus is on improving user engagement and exploring potential monetization strategies through ads, cosmetics, or in-app purchases.",
    features: [
      "One-touch controls for easy gameplay",
      "High-score system for competitive play",
      "Smooth animations and dynamic physics",
      "Difficulty progression system"
    ],
    goals: [
      "Improve user engagement and marketing reach",
      "Explore potential monetization (ads, cosmetics, or in-app purchases)"
    ],
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.NightScream.SpikeJukes",
    screenshots: [
      "/lovable-uploads/adc2c3b5-12ed-4b1d-85d6-57b487f4bd64.png",
      "/lovable-uploads/ba0f61c7-1a4e-48dd-8a5f-929ec68be611.png",
      "/lovable-uploads/32c1ed10-4b05-406b-9412-174f08364440.png"
    ]
  },
  {
    id: "skyway-stunts",
    title: "Skyway Stunts",
    status: "In Development",
    platform: "Android",
    description: "Racing & stunt-based driving game featuring realistic physics, jumps, drifts, and precision driving.",
    longDescription: "Skyway Stunts is an adrenaline-fueled racing and stunt game currently in active development. Players drive high-speed vehicles across stunt-filled tracks, experiencing realistic physics including jumps, drifts, and precision driving challenges. The game focuses on skill-based gameplay and dynamic vehicle handling to create an immersive driving experience. A custom garage system is being developed (which may later be released as a separate Unity asset), along with in-app purchases for monetization.",
    features: [
      "Custom garage system with extensive vehicle customization",
      "Physics-based driving mechanics",
      "In-app purchases (IAP) for monetization",
      "Stunt-based gameplay with jumps and drifts"
    ],
    goals: [
      "Enhance physics for a more immersive experience",
      "Expand vehicle customization options",
      "Finalize monetization strategy"
    ],
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    itchioUrl: "https://shaurya-garg.itch.io/skyway-stunts"
  },
  {
    id: "color-block-jam",
    title: "Color Block Jam Replica",
    status: "In Development",
    platform: "Android",
    description: "Puzzle/hyper-casual game where players match colored blocks by moving them into correct slots.",
    longDescription: "Color Block Jam Replica is a relaxing yet engaging puzzle game designed for casual mobile gamers. Players must match colored blocks by moving them into the correct slots, with intuitive touch controls and fluid animations. The game features dynamic level progression with increasing difficulty and vibrant visuals to keep players engaged. Future development plans include adding new game modes for variety, implementing leaderboards and achievements, and optimizing performance for low-end devices.",
    features: [
      "Intuitive touch controls for smooth gameplay",
      "Dynamic level progression with increasing difficulty",
      "Vibrant visuals and fluid animations",
      "Casual-friendly game mechanics"
    ],
    goals: [
      "Add new game modes for variety",
      "Implement leaderboards and achievements",
      "Optimize performance for low-end devices"
    ],
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
  }
];

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = project ? `${project.title} | Shaurya Garg` : "Project Not Found | Shaurya Garg";
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/#projects" 
            className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-white transition duration-200 bg-primary rounded-lg hover:bg-primary/90 focus:shadow-outline focus:outline-none"
          >
            Back to Projects
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Back button */}
          <Link 
            to="/#projects" 
            className="inline-flex items-center text-sm font-medium mb-8 hover:text-primary transition-colors"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path
                d="M19 12H5M5 12L12 19M5 12L12 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Projects
          </Link>
          
          {/* Project hero */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-start">
            <div>
              <div className="flex items-center mb-4">
                <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/90 text-primary-foreground rounded-full mr-3">
                  {project.status}
                </span>
                <span className="inline-block px-3 py-1 text-sm font-medium bg-secondary/90 rounded-full">
                  {project.platform}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {project.title}
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8">
                {project.longDescription}
              </p>
              
              <div className="flex flex-wrap gap-4">
                {project.id === "spike-jukes" && project.playStoreUrl ? (
                  <a
                    href={project.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-white transition duration-200 bg-primary rounded-lg hover:bg-primary/90 focus:shadow-outline focus:outline-none"
                  >
                    <svg
                      className="mr-2"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 16L16 12M16 12L12 8M16 12H8M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Play
                  </a>
                ) : project.id === "skyway-stunts" && project.itchioUrl ? (
                  <a
                    href={project.itchioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-white transition duration-200 bg-primary rounded-lg hover:bg-primary/90 focus:shadow-outline focus:outline-none"
                  >
                    <svg
                      className="mr-2"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 16L16 12M16 12L12 8M16 12H8M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Play on itch.io
                  </a>
                ) : (
                  <a
                    href="#"
                    className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-white transition duration-200 bg-primary rounded-lg hover:bg-primary/90 focus:shadow-outline focus:outline-none"
                  >
                    View Demo
                  </a>
                )}
              </div>
            </div>
            
            <div className="relative">
              {project.id === "spike-jukes" && project.screenshots && project.screenshots.length > 0 ? (
                <div className="space-y-4">
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={project.screenshots[activeScreenshot]}
                      alt={`${project.title} Screenshot ${activeScreenshot + 1}`}
                      className="object-contain w-full h-auto mx-auto"
                      style={{ maxHeight: '500px' }}
                    />
                  </div>
                  <div className="flex space-x-2 overflow-x-auto pb-2">
                    {project.screenshots.map((screenshot, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveScreenshot(index)}
                        className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-all ${
                          index === activeScreenshot ? 'border-primary' : 'border-transparent'
                        }`}
                      >
                        <img
                          src={screenshot}
                          alt={`Thumbnail ${index + 1}`}
                          className="object-cover w-full h-full"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
            </div>
          </div>
          
          {/* Features and goals */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Features</h2>
              <ul className="space-y-4">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-primary"
                      >
                        <path
                          d="M5 12L10 17L20 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Future Goals</h2>
              <ul className="space-y-4">
                {project.goals.map((goal, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/30 flex items-center justify-center mr-3 mt-0.5">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-secondary-foreground"
                      >
                        <path
                          d="M12 22V2M12 22L5 15M12 22L19 15"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* CTA */}
          <div className="bg-secondary/30 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Interested in this project?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always looking for feedback, collaboration opportunities, or just a chat about game development.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-white transition duration-200 bg-primary rounded-lg hover:bg-primary/90 focus:shadow-outline focus:outline-none"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProjectDetails;
