import { ArrowRight, Code, Server, Database, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const techStack = [
    { name: "MongoDB", category: "Database" },
    { name: "Express", category: "Backend" },
    { name: "Angular", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "JavaScript", category: "Language" },
    { name: "TypeScript", category: "Language" },
    { name: "HTML/CSS", category: "Frontend" },
    { name: "RESTful APIs", category: "Backend" },
  ];
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />

      <div className="container mx-auto px-4 z-10 mt-[7rem]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Building Seamless Web Experiences with{" "}
            <span className="bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA] bg-clip-text text-transparent animate-glow">
              Precision & Innovation
            </span>
          </h1>

          <p
            className="text-lg md:text-xl text-foreground/80 mb-8 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Full-Stack Developer specializing in creating elegant solutions for
            complex problems, leveraging both MEAN (MongoDB, Express, Angular,
            Node.js) and MERN (MongoDB, Express, React, Node.js) stacks
          </p>

          <div
            className="mb-10 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              Tech Expertise
            </h2>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  style={{ animationDelay: `${0.4 + index * 0.05}s` }}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="p-4 rounded-lg bg-primary/5 flex flex-col items-center">
              <Code className="text-primary mb-2" size={24} />
              <h3 className="font-medium text-foreground">
                Frontend Excellence
              </h3>
              <p className="text-sm text-foreground/70">
                Creating intuitive and responsive user interfaces
              </p>
            </div>
            <div className="p-4 rounded-lg bg-primary/5 flex flex-col items-center">
              <Server className="text-primary mb-2" size={24} />
              <h3 className="font-medium text-foreground">Backend Mastery</h3>
              <p className="text-sm text-foreground/70">
                Building robust and scalable server-side solutions
              </p>
            </div>
            <div className="p-4 rounded-lg bg-primary/5 flex flex-col items-center">
              <Database className="text-primary mb-2" size={24} />
              <h3 className="font-medium text-foreground">
                Database Expertise
              </h3>
              <p className="text-sm text-foreground/70">
                Data modeling and efficient database management
              </p>
            </div>
          </div>

          <div
            className="flex justify-center gap-4 animate-fade-in pb-7"
            style={{ animationDelay: "0.6s" }}
          >
            <Link to="/projects" className="btn btn-primary flex items-center">
              View Projects
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link to="/contact" className="btn btn-secondary flex items-center">
              Get in Touch
              <Globe className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
