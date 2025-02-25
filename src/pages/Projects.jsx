import { useState } from 'react';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import AIAssistant from '../components/AIAssistant';
import Layout from '../components/Layout';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management and payment processing.',
      image: '/placeholder.svg',
      tags: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'fullstack',
    },
    {
      title: 'Task Management App',
      description: 'A responsive task management application with drag-and-drop functionality and team collaboration features.',
      image: '/placeholder.svg',
      tags: ['Angular', 'Firebase'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'frontend',
    },
    {
      title: 'Portfolio Generator',
      description: 'A dynamic portfolio generator for creative professionals with customizable themes.',
      image: '/placeholder.svg',
      tags: ['React', 'Tailwind'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'freelance',
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <Layout>
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-foreground mb-8 animate-fade-in">
          Featured <span className="text-primary">Projects</span>
        </h1>

        <div className="flex gap-4 mb-8 overflow-x-auto pb-2 animate-fade-in">
          {['all', 'frontend', 'fullstack', 'freelance'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full capitalize transition-colors ${
                filter === category
                  ? 'bg-primary text-background'
                  : 'bg-white/5 text-foreground hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="lg:col-span-1">
            <AIAssistant />
          </div>
      </div>
      </Layout>
    </main>
  );
};

export default Projects;
