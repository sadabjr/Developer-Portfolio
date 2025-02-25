import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="relative bg-background/40 backdrop-blur-md border border-primary/10 rounded-xl overflow-hidden group animate-fade-in hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 flex flex-col h-full">
      {/* Image container with overlay effect */}
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        {/* Project title with animated underline effect */}
        <h3 className="text-xl font-bold text-foreground mb-2 relative inline-block">
          {project.title}
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300"></span>
        </h3>
        
        <p className="text-foreground/70 mb-6 flex-grow">
          {project.description}
        </p>
        
        {/* Tags with hover effect */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span 
              key={tag}
              className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors duration-300 cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Links with improved hover effects */}
        <div className="flex justify-between items-center pt-4 border-t border-primary/10">
          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-foreground/60 hover:text-primary transition-all duration-300 hover:translate-y-[-2px]"
              aria-label="GitHub Repository"
            >
              <Github size={20} />
              <span className="ml-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">Code</span>
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-foreground/60 hover:text-primary transition-all duration-300 hover:translate-y-[-2px]"
              aria-label="Live Demo"
            >
              <ExternalLink size={20} />
              <span className="ml-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">Demo</span>
            </a>
          </div>
          
          {/* New view details button */}
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center font-medium text-sm"
          >
            View Details
            <ArrowUpRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
      
      {/* Subtle border highlight effect */}
      <div className="absolute inset-0 border-2 border-primary/0 rounded-xl group-hover:border-primary/20 transition-colors duration-700 pointer-events-none"></div>
    </div>
  );
};

export default ProjectCard;