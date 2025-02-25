const ExperienceCard = ({ experience, index }) => {
  return (
    <div 
      className="glass p-8 rounded-2xl animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-primary mb-1">
            {experience.title}
          </h3>
          <p className="text-foreground/80">{experience.company}</p>
        </div>
        <p className="text-foreground/60 mt-2 md:mt-0">{experience.period}</p>
      </div>
      
      <ul className="space-y-2">
        {experience.description.map((item, i) => (
          <li key={i} className="text-foreground/70 flex items-start">
            <span className="mr-2 text-primary">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
