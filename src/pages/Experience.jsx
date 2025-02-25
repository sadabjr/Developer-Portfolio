import Navbar from '../components/Navbar';
import ExperienceCard from '../components/ExperienceCard';

const Experience = () => {
  const experiences = [
    {
      title: 'SDE II',
      company: 'Destek Infosolutions',
      period: '2022 - Present',
      description: [
        'Led development of mission-critical features for enterprise clients',
        'Mentored junior developers and conducted code reviews',
        'Implemented CI/CD pipelines improving deployment efficiency by 40%',
      ],
    },
    {
      title: 'Freelance Developer',
      company: 'Self-Employed',
      period: '2020 - 2022',
      description: [
        'Developed custom web solutions for diverse client base',
        'Managed entire project lifecycles from conception to deployment',
        'Maintained long-term relationships with clients through excellent service',
      ],
    },
  ];

  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-foreground mb-12 animate-fade-in">
          Professional <span className="text-primary">Experience</span>
        </h1>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={experience.title} 
              experience={experience} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Experience;