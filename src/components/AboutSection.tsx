
import { useRef, useEffect, useState } from "react";

const skills = [
  { name: "Unity (C#)", level: 90 },
  { name: "Game Mechanics Design", level: 85 },
  { name: "UI/UX Development", level: 80 },
  { name: "Physics-Based Gameplay", level: 85 },
  { name: "Mobile Game Development", level: 80 },
  { name: "Custom Input Systems", level: 75 },
];

const projects = [
  {
    title: "Spike Jukes",
    status: "Released",
    platform: "Android",
    description: "Hyper-casual arcade game where players control a ball, dodging spikes while aiming for a high score.",
    storeLink: "https://play.google.com/store/apps/details?id=com.NightScream.SpikeJukes"
  },
  {
    title: "Skyway Stunts",
    status: "In Development",
    platform: "Android",
    description: "Racing & stunt-based driving game featuring realistic physics, jumps, drifts, and precision driving.",
    storeLink: "https://shaurya-garg.itch.io/skyway-stunts",
    storeLinkText: "Play on itch.io"
  },
  {
    title: "Color Block Jam Replica",
    status: "In Development",
    platform: "Android",
    description: "Puzzle/hyper-casual game where players match colored blocks by moving them into correct slots."
  }
];

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 sm:py-32 bg-secondary/30"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className={`transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <span className="inline-block px-3 py-1 text-sm font-medium bg-primary text-primary-foreground rounded-full mb-4">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Unity Game Developer & Designer
            </h2>
            <p className="text-muted-foreground mb-6 text-balance">
              Experienced Unity Developer from Delhi, India. I'm Shaurya Garg, proficient in C# programming and game mechanics design.
              I specialize in custom input systems, UI/UX development, and game physics with a focus
              on vehicle physics and racing mechanics.
            </p>
            <p className="text-muted-foreground mb-6 text-balance">
              My expertise spans mobile (Android) and PC game development, including Steam publishing.
              I focus on creating engaging gameplay experiences while implementing effective monetization
              strategies like in-app purchases (IAP) and paid Unity asset development.
            </p>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Current Projects</h3>
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <div key={index} className="bg-background/50 rounded-lg p-4 border border-border">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">{project.title}</h4>
                      <div className="flex items-center">
                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary mr-2">
                          {project.status}
                        </span>
                        <span className="text-xs px-2 py-1 rounded-full bg-secondary">
                          {project.platform}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                    {project.storeLink && (
                      <div className="mt-2">
                        <a 
                          href={project.storeLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs px-3 py-1 bg-primary rounded-full inline-flex items-center gap-1 hover:bg-primary/90 transition-colors"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 16L16 12M16 12L12 8M16 12H8M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          {project.storeLinkText || "Play Store"}
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-white transition duration-200 bg-primary rounded-lg hover:bg-primary/90 focus:shadow-outline focus:outline-none"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide transition duration-200 border border-primary rounded-lg hover:bg-primary/10 focus:shadow-outline focus:outline-none"
              >
                View Projects
              </a>
            </div>
          </div>

          <div 
            ref={skillsRef}
            className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm mb-8">
              <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%', 
                          transitionDelay: `${index * 150}ms` 
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-6">Expertise Areas</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <div className="font-medium">Game Development</div>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-1">
                    <li>Custom Input Systems</li>
                    <li>UI/UX Development</li>
                    <li>Physics-Based Gameplay</li>
                    <li>Camera Control Systems</li>
                  </ul>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-medium">Game Design</div>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-1">
                    <li>Hyper-Casual Mechanics</li>
                    <li>Racing Game Physics</li>
                    <li>In-App Purchases (IAP)</li>
                    <li>Unity Utility Development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
