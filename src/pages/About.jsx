import Navbar from '../components/Navbar';
import { ArrowDownToLine, Code, Server, Database, BookOpen, Award, Globe, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  const skills = [
    { category: "Frontend", items: ["React", "Angular", "JavaScript", "TypeScript", "HTML/CSS", "Redux", "Next.js"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB", "REST APIs", "GraphQL", "MySQL", "PostgreSQL"] },
    { category: "Tools & Others", items: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Webpack", "Responsive Design"] }
  ];

  const experiences = [
    {
      title: "SDE II",
      company: "Destek Infosolutions",
      period: "2021 - Present",
      description: "Leading development of scalable web applications and mentoring junior developers."
    },
    {
      title: "Freelance Developer",
      company: "Self-employed",
      period: "2019 - 2021",
      description: "Collaborated with clients globally to deliver custom web solutions and digital experiences."
    }
  ];

  return (
    <main className="bg-background min-h-screen relative">
      {/* Background gradient elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl -z-10 opacity-60" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/10 rounded-full blur-3xl -z-10 opacity-60" />
      
      <Navbar />
      
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          {/* Header section with animated line */}
          <div className="relative mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About <span className="text-primary">Me</span>
            </h1>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
            <div className="h-1 w-12 bg-primary/50 rounded-full mt-1"></div>
          </div>
          
          {/* Profile section with image */}
          <div className="glass p-8 rounded-2xl mb-16 animate-fade-in grid grid-cols-1 md:grid-cols-3 gap-8 items-center backdrop-blur-md border border-primary/10 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
            <div className="col-span-1">
              <div className="relative w-48 h-48 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
                <img 
                  src="/profile-placeholder.jpg" 
                  alt="Sadab Ali" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/400?text=Sadab+Ali";
                  }}
                />
              </div>
            </div>
            
            <div className="col-span-2">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Hello, I'm <span className="text-primary">Sadab Ali</span>
              </h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                I'm an SDE II with a passion for crafting exceptional digital experiences. With extensive experience in full-stack development, I specialize in building scalable web applications that combine elegant design with robust functionality.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Throughout my career at Destek Infosolutions and as a freelancer, I've had the opportunity to work on diverse projects that have sharpened my expertise in modern web technologies and best practices in software development.
              </p>
            </div>
          </div>

          {/* Core values section */}
          <div className="mb-16 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 flex items-center">
              <Award className="text-primary mr-3" size={24} />
              Core <span className="text-primary ml-2">Values</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-background/40 backdrop-blur-md border border-primary/10 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Code className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
                <p className="text-foreground/70">I believe in writing maintainable, efficient, and well-documented code that stands the test of time.</p>
              </div>
              
              <div className="bg-background/40 backdrop-blur-md border border-primary/10 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <BookOpen className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
                <p className="text-foreground/70">Technology evolves rapidly, and I'm committed to staying at the forefront through continuous learning.</p>
              </div>
              
              <div className="bg-background/40 backdrop-blur-md border border-primary/10 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Globe className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">User-Centric</h3>
                <p className="text-foreground/70">I prioritize creating experiences that are intuitive, accessible, and provide real value to end users.</p>
              </div>
            </div>
          </div>

          {/* Experience section */}
          <div className="mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 flex items-center">
              <Briefcase className="text-primary mr-3" size={24} />
              Work <span className="text-primary ml-2">Experience</span>
            </h2>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-colors duration-300">
                  <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary"></div>
                  <div className="bg-background/40 backdrop-blur-md border border-primary/10 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">{exp.period}</span>
                    </div>
                    <p className="text-lg font-medium text-primary/80 mb-2">{exp.company}</p>
                    <p className="text-foreground/70">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical expertise section */}
          <div className="mb-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 flex items-center">
              <Server className="text-primary mr-3" size={24} />
              Technical <span className="text-primary ml-2">Expertise</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skills.map((skillGroup, index) => (
                <div key={index} className="bg-background/40 backdrop-blur-md border border-primary/10 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-primary/20">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors duration-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education section */}
          <div className="mb-16 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 flex items-center">
              <GraduationCap className="text-primary mr-3" size={24} />
              <span className="text-primary">Education</span>
            </h2>
            
            <div className="bg-background/40 backdrop-blur-md border border-primary/10 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="flex flex-wrap justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">Bachelor of Technology in Computer Science</h3>
                <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">2015 - 2019</span>
              </div>
              <p className="text-lg font-medium text-primary/80 mb-2">University Name</p>
              <p className="text-foreground/70">Graduated with honors, focusing on web technologies and software architecture.</p>
            </div>
          </div>

          {/* Resume download section */}
          <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <a 
              href="/resume.pdf" 
              download
              className="inline-flex items-center px-8 py-4 bg-primary text-background rounded-full font-medium hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/20 hover:translate-y-[-2px]"
            >
              Download Resume
              <ArrowDownToLine className="ml-3" size={20} />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;