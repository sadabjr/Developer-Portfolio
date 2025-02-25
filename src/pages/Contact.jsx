import { useState } from 'react';
import Navbar from '../components/Navbar';
import { Github, Linkedin, Twitter, Youtube } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/yourusername' },
    { icon: Linkedin, href: 'https://linkedin.com/in/yourusername' },
    { icon: Twitter, href: 'https://twitter.com/yourusername' },
    { icon: Youtube, href: 'https://youtube.com/yourusername' },
  ];

  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8 animate-fade-in">
            Get in <span className="text-primary">Touch</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="glass p-8 rounded-2xl animate-fade-in">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-foreground focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-foreground focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-foreground focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-background rounded-lg font-medium hover:bg-primary-dark transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="glass p-8 rounded-2xl animate-fade-in">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Connect with Me
              </h2>
              <p className="text-foreground/70 mb-8">
                Feel free to reach out through any of these platforms. I'm always open to discussing new projects and opportunities.
              </p>
              
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-primary transition-colors"
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
