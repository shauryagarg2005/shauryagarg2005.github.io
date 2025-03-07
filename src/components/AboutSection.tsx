
import { useRef, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const skills = [
  { name: "Unity (C#)", level: 90 },
  { name: "Game Mechanics Design", level: 85 },
  { name: "UI/UX Development", level: 80 },
  { name: "Physics-Based Gameplay", level: 85 },
  { name: "Mobile Game Development", level: 80 },
  { name: "Custom Input Systems", level: 75 },
];

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

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
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center h-11 px-8 font-medium tracking-wide text-primary-foreground transition duration-200 bg-primary rounded-md hover:bg-primary/90 focus:shadow-outline focus:outline-none group hover:translate-x-1"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center h-11 px-8 font-medium tracking-wide transition duration-200 border border-primary rounded-md hover:bg-primary/10 focus:shadow-outline focus:outline-none"
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
