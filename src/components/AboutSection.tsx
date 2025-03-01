
import { useRef, useEffect, useState } from "react";

const skills = [
  { name: "Game Design", level: 90 },
  { name: "Unity", level: 85 },
  { name: "Unreal Engine", level: 75 },
  { name: "3D Modeling", level: 70 },
  { name: "C#", level: 80 },
  { name: "C++", level: 65 },
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className={`transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <span className="inline-block px-3 py-1 text-sm font-medium bg-primary text-primary-foreground rounded-full mb-4">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Passionate Game Developer & Designer
            </h2>
            <p className="text-muted-foreground mb-6 text-balance">
              With over 5 years of experience in game development, I've dedicated my career to creating
              engaging and immersive gaming experiences. My passion lies in blending innovative gameplay
              mechanics with compelling narratives.
            </p>
            <p className="text-muted-foreground mb-8 text-balance">
              I specialize in developing games across multiple platforms using industry-standard
              engines and tools. My background in both design and programming allows me to bridge
              the gap between creative vision and technical implementation.
            </p>
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
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
