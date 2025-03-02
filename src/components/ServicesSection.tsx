
import { Code, Gamepad2, Palette, BarChart3, Laptop, Users } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Game Development",
      description: "Custom game development services for various platforms including mobile, PC, and web.",
      icon: <Gamepad2 className="h-10 w-10 text-primary" />
    },
    {
      title: "3D Modeling & Animation",
      description: "Creation of 3D assets, characters, environments, and animations for your game projects.",
      icon: <Palette className="h-10 w-10 text-primary" />
    },
    {
      title: "Game Programming",
      description: "Efficient and optimized code implementation for gameplay mechanics, AI systems, and more.",
      icon: <Code className="h-10 w-10 text-primary" />
    },
    {
      title: "Game Design",
      description: "Comprehensive game design including mechanics, levels, UI/UX, and player experience.",
      icon: <Laptop className="h-10 w-10 text-primary" />
    },
    {
      title: "Analytics Integration",
      description: "Implementation of analytics systems to track player behavior and improve game performance.",
      icon: <BarChart3 className="h-10 w-10 text-primary" />
    },
    {
      title: "Multiplayer Systems",
      description: "Development of robust multiplayer infrastructure and networking solutions for online games.",
      icon: <Users className="h-10 w-10 text-primary" />
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Comprehensive game development services to bring your vision to life with quality and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-5">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
