const TechStack = () => {
  const technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'Angular', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Firebase', category: 'Backend' },
    { name: 'Redux', category: 'State Management' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'SQL', category: 'Database' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 animate-fade-in">
      {technologies.map((tech) => (
        <div
          key={tech.name}
          className="glass p-4 rounded-xl flex flex-col items-center justify-center hover:bg-white/10 transition-colors cursor-default"
        >
          <h3 className="text-lg font-semibold text-primary">{tech.name}</h3>
          <p className="text-sm text-foreground/60">{tech.category}</p>
        </div>
      ))}
    </div>
  );
};

export default TechStack;