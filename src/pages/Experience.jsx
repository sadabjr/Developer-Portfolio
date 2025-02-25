import Navbar from '../components/Navbar';
import ExperienceCard from '../components/ExperienceCard';

const Experience = () => {
  const experiences = [
    {
      title: 'Freelance Full-Stack Developer',
      company: 'Self-Employed',
      period: '2025 – Present',
      description: [
        'Built custom web applications for various clients using React, Angular, Node.js, and MongoDB.',
        'Managed full project lifecycles, from concept to deployment.',
        'Integrated real-time features and authentication systems for secure and scalable solutions.',
        'Maintained strong client relationships by delivering high-quality solutions and on-time project completion.'
      ],
    },
    {
      title: 'Executive Software Developer (SDE II)',
      company: 'Destek Infosolutions Pvt. Ltd.',
      period: 'Aug 2024 – 2025',
      description: [
        'Developed CRUD APIs using Node.js & Express.js ensuring 99% uptime and scalability.',
        'Designed & maintained dashboards like Waayu Vendor Dashboard & Vendor Registration Panel in Angular, boosting efficiency by 40%.',
        'Migrated legacy applications from Angular 8 to Angular 17, enhancing performance and stability.',
        'Integrated APIs for real-time updates, reducing load times by 20% and improving user satisfaction by 35%.',
        'Implemented Socket.IO for real-time communication, enhancing dashboard engagement.'
      ],
    },
    {
      title: 'Executive Software Developer',
      company: 'Destek Infosolutions Pvt. Ltd.',
      period: 'June 2023 – Aug 2024',
      description: [
        'Developed and optimized RESTful APIs for applications like the Meri Dukaan E-commerce Platform, increasing user engagement by 25%.',
        'Revamped the LYCA Productions website with a responsive design using Angular, leading to a 40% increase in site traffic.',
        'Collaborated with UX designers to enhance UI/UX for applications like the PopC Comic Web App, improving retention rates by 30%.'
      ],
    },
    {
      title: 'Frontend Developer Intern',
      company: 'Destek Infosolutions Pvt. Ltd.',
      period: 'Dec 2022 – June 2023',
      description: [
        'Built a fully responsive UI for the Waayu Food Delivery Web App, improving user experience by 40%.',
        'Developed the VIA Exam Web Application, integrating 7 APIs for real-time functionality, increasing participation by 20%.',
        'Mentored junior peers while delivering high-quality Angular-based projects under team lead guidance.',
        'Implemented a responsive website for Boston Financial, optimizing content for India, USA, and UAE, boosting engagement by 35%.'
      ],
    },
    
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container px-4 py-24 mx-auto">
        <h1 className="mb-12 text-4xl font-bold text-foreground animate-fade-in">
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
