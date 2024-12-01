import React, { useState, useEffect } from 'react';
import { User, Folder, Layers, Mail, Award, GraduationCap, Moon, Sun, Send, Linkedin, Github, Twitter, ExternalLink, Menu, X, Code, Globe, Database, Wrench, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ParticleBackground from './ParticleBackground';
import StorySection from './StorySection';
import BMN from './Images/BMN.png';
import FA from './Images/FA.png';
import LIVE from './Images/LIVE.png';
import LOGO from './Images/Logo.png';
import SET from './Images/SET.png';
import QuranVerseImage from './Images/QuranVerse.png';
import TasbeehAppImage from './Images/TasbeehApp.png';
import { HashRouter as Router } from 'react-router-dom';

const Dock = ({ children, isMobile, isOpen, toggleMenu }) => {
  const menuRef = React.useRef(null);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        toggleMenu();
      }
    };

    if (isOpen && isMobile) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, isMobile, toggleMenu]);

  return (
    <div className="relative">
      {isMobile && (
        <button 
          onClick={toggleMenu} 
          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-gray-300/50 dark:hover:bg-gray-700/50 transition-all"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      )}
      <AnimatePresence>
        {(!isMobile || isOpen) && (
          <>
            {isMobile && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-gray-500/30 dark:bg-black/60 backdrop-blur-[2px] z-40"
              />
            )}
            <motion.div
              ref={menuRef}
              initial={isMobile ? { opacity: 0, y: -10 } : false}
              animate={isMobile ? { opacity: 1, y: 0 } : false}
              exit={isMobile ? { opacity: 0, y: -10 } : false}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className={`${
                isMobile 
                  ? 'fixed top-4 right-4 left-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-xl z-50 rounded-2xl border border-gray-200/50 dark:border-gray-800/50'
                  : 'flex items-center space-x-4'
              }`}
            >
              <div className={`${
                isMobile 
                  ? 'flex flex-col w-full py-3'
                  : 'flex items-center space-x-4'
              }`}>
                <div className={`${
                  isMobile 
                    ? 'grid grid-cols-1 gap-1 px-2'
                    : 'flex items-center space-x-4'
                }`}>
                  {children}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

const DockIcon = ({ children, onClick, label, isMobile }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        flex items-center gap-3 
        ${isMobile 
          ? 'w-full p-2 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-lg transition-all cursor-pointer'
          : 'flex-col cursor-pointer transition-all duration-300 hover:transform hover:translate-y-1'
        }
      `}
      onClick={onClick}
    >
      <div className={`
        flex items-center justify-center 
        ${isMobile 
          ? 'w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
          : 'w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-700'
        }
      `}>
        {children}
      </div>
      {label && (
        <span className={`
          font-medium 
          ${isMobile 
            ? 'text-sm text-gray-600 dark:text-gray-300'
            : 'text-xs mt-1 text-gray-700 dark:text-gray-300'
          }
        `}>
          {label}
        </span>
      )}
    </motion.div>
  );
};

const PersonalWebsite = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const SkillCard = ({ title, items }) => {
    const [hoveredSkill, setHoveredSkill] = useState(null);

    return (
      <motion.div 
        className="bg-gray-800/10 backdrop-blur-md rounded-xl p-6 transition-all duration-300"
        whileHover={{ scale: 1.02 }}
      >
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <div className="space-y-4">
          {items.map((item, index) => (
            <motion.div 
              key={index} 
              className="relative"
              onHoverStart={() => setHoveredSkill(item.name)}
              onHoverEnd={() => setHoveredSkill(null)}
            >
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium">{item.name}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{item.proficiency}%</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-blue-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${item.proficiency}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

  const TechStack = () => {
    const technologies = [
      {
        name: 'Programming Languages',
        description: 'Core development languages',
        skills: ['Python', 'JavaScript', 'C++', 'Java', 'Kotlin', 'Swift'],
        icon: Code
      },
      {
        name: 'Web Technologies',
        description: 'Frontend & frameworks',
        skills: ['HTML/CSS', 'React', 'React Native', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Node.js'],
        icon: Globe
      },
      {
        name: 'Backend & Databases',
        description: 'Server & data management',
        skills: ['Express', 'MongoDB', 'PostgreSQL', 'SQL','Firebase', 'Google Cloud Platform'],
        icon: Database
      },
      {
        name: 'Tools & Technologies',
        description: 'Development tools',
        skills: ['Git/GitHub', 'Xcode', 'Docker', 'Kubernetes', 'Bash', 'Jest','MS Office Suite', ],
        icon: Wrench
      }
    ];

    const [hoveredCard, setHoveredCard] = useState(null);
    const [showHint, setShowHint] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
      
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleCardHover = (index) => {
      setHoveredCard(index);
      if (showHint) {
        setShowHint(false);
      }
    };

    return (
      <>
        <AnimatePresence>
          {showHint && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg py-2 px-3 shadow-md backdrop-blur-sm border border-blue-100/50 dark:border-blue-800/50"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ 
                      y: [0, -3, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                    className="text-base"
                  >
                    ✨
                  </motion.div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {isMobile ? 'Tap cards to explore skills' : 'Hover over cards to explore skills'}
                  </span>
                </div>
                <button 
                  onClick={() => setShowHint(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors duration-200 ml-2"
                >
                  <X size={14} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="relative"
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <motion.div
                className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg cursor-pointer
                  ${hoveredCard === index ? 'sm:col-span-1 md:col-span-1' : ''}`}
                animate={{
                  scale: hoveredCard === index ? 1.02 : 1,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="p-4 md:p-6">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30">
                      {React.createElement(tech.icon, { 
                        size: 20, 
                        className: "text-blue-600 dark:text-blue-400" 
                      })}
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-semibold text-sm md:text-base text-gray-900 dark:text-white">{tech.name}</h3>
                      <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">{tech.description}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {hoveredCard === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-4 md:mt-6 overflow-hidden"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                          {tech.skills.map((skill, skillIndex) => (
                            <div
                              key={skillIndex}
                              className="bg-gray-100 dark:bg-gray-700 rounded-lg px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                              {skill}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </>
    );
  };

  const ExperienceSection = () => {
    const experiences = [
      {
        title: "Application Manager",
        company: "Solar Stewards",
        date: "Nov 2024 - Present",
        description: "Manage and develop a performant full-stack application using Next.js and Node.js. Implement serverless functions, APIs, and maintain infrastructure using Docker and Google Cloud Platform. Optimize for scalability, implement CI/CD pipelines, and ensure high-performance, responsive user interfaces.",
        skills: ["Next.js", "Node.js", "Docker", "Google Cloud Platform", "MongoDB", "CI/CD", "Jest", "TypeScript"]
      },
      {
        title: "Project Consultant",
        company: "Floreo Labs",
        date: "Aug 2024 - Nov 2024",
        description: "Led the development of a machine learning algorithm to improve compatibility between students and companies in a workforce development program. Increased accuracy from 30% to 95% by integrating factors like gender balance and programming language compatibility.",
        skills: ["Python", "Pandas", "GeoPy", "Machine Learning", "Technical Documentation"]
      },
      {
        title: "Web Developer Intern",
        company: "Black Mentor Network",
        date: "Jun 2024 - Aug 2024",
        description: "Designed and developed a secure, responsive website using React and Tailwind CSS. Implemented SEO best practices and optimized the site for performance and usability.",
        skills: ["React", "Tailwind CSS", "JavaScript", "SEO", "Web Development"]
      },
      {
        title: "Lab Tech Manager",
        company: "Bronx Community College",
        date: "May 2021 - Present",
        description: "Delivered technical support for macOS and Windows systems, maintained ticketing systems to track and resolve user issues, and implemented system maintenance protocols for seamless performance.",
        skills: ["macOS", "Windows", "Troubleshooting", "System Maintenance", "Ticketing Systems"]
      }
    ];
  
    return (
      <section id="experience" className="py-16">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex"
            >
              <div className="absolute left-0 h-full w-6 flex items-center">
                <div className="h-full w-px bg-gray-200 dark:bg-gray-700 absolute left-3" />
                <div className="w-6 h-6 rounded-full bg-blue-500 border-4 border-white dark:border-gray-800 z-10" />
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 ml-10 flex-grow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400 md:ml-4">{exp.date}</span>
                </div>
                
                <div className="text-lg font-medium text-blue-500 dark:text-blue-400 mb-2">
                  {exp.company}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    );
  };

  return (
    <Router>
      <div className={`min-h-screen relative font-montserrat ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-100 text-black'} transition-colors duration-300`}>
        <ParticleBackground />
        <div className="relative z-10">
          <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-5xl px-4">
            <nav className={`px-6 py-3 rounded-xl transition-all duration-300 ${darkMode ? 'bg-gray-800/10' : 'bg-white/10'} shadow-lg backdrop-blur-md`}>
              <div className="flex items-center justify-between">
                <div 
                  className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 cursor-pointer transition-transform hover:scale-105"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <img 
                    src={LOGO} 
                    alt="Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <Dock isMobile={isMobile} isOpen={isMenuOpen} toggleMenu={toggleMenu}>
                  {[
                    { id: 'story', icon: <User size={20} />, label: 'Story' },
                    { id: 'skills', icon: <Layers size={20} />, label: 'Skills' },
                    { id: 'projects', icon: <Folder size={20} />, label: 'Projects' },
                    { id: 'experience', icon: <Briefcase size={20} />, label: 'Exp' },
                    { id: 'education', icon: <GraduationCap size={20} />, label: 'Education' },
                    { id: 'honors', icon: <Award size={20} />, label: 'Honors' },
                    { id: 'connect', icon: <Mail size={20} />, label: 'Connect' },
                  ].map((item) => (
                    <DockIcon key={item.id} onClick={() => scrollToSection(item.id)} label={item.label} isMobile={isMobile}>
                      {item.icon}
                    </DockIcon>
                  ))}
                  <DockIcon onClick={toggleDarkMode} label={darkMode ? "Light" : "Dark"} isMobile={isMobile}>
                    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                  </DockIcon>
                </Dock>
              </div>
            </nav>
          </header>

          <main className="container mx-auto px-6 pt-32">
            <section id="story">
              <StorySection />
            </section>

            <section id="skills" className="py-16">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Tech Stack</h2>
              <TechStack />
            </section>

            <section id="projects" className="py-16">
              <h2 className="text-3xl font-bold mb-8">Selected Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-justify">
                <ProjectCard
                  title="Quran Verse of the Day Website"
                  description="Developed a Quran Verse Website using Next.js, React, Chakra UI, Node.js, Express, and MongoDB. Features include random verse display, favorites, history, Tafsir (interpretation), audio recitation with multiple reciters, prayer times, and dark mode. Integrated Axios for external APIs, and supported responsive design with customizable Islamic backgrounds."
                  technologies={['Next.js', 'React', 'Chakra UI', 'Node.js', 'Express', 'MongoDB', 'Axios']}
                  image={QuranVerseImage}
                  projectLink="https://github.com/omer310/Quran-Website-"
                />
                <ProjectCard
                  title="Manarat Al-Muslim App"
                  description="Created an Android app using React Native for prayer times, Quran, Tasbeeh, and Hadith with real-time and offline features. Integrated API services for real-time prayer times and offline access to core features such as Quran and Hadith."
                  technologies={['React Native', 'Android', 'API Integration']}
                  image={TasbeehAppImage}
                  projectLink="https://github.com/omer310/Tasbeeh"
                />
                <ProjectCard
                  title="Food Assistance Form"
                  description="Revamped a food assistance application form, focusing on improving user experience and data flow. Key features include a streamlined application process.."
                  technologies={['HTML', 'CSS', 'JavaScript', 'Firebase', 'React']}
                  image={FA}
                  projectLink="https://github.com/464squad/CMB-FrontEnd"
                />
                <ProjectCard
                  title="Black Mentor Network Website"
                  description="Designed and implemented a website for the Black Mentor Network, a non-profit organization that provides mentorship to underprivileged individuals. The website was built using Next.js, Tailwind CSS, and Firebase, and it allows users to browse mentorship opportunities and apply to the ones that interest them."
                  technologies={['HTML', 'CSS', 'JavaScript', 'Firebase', 'React', 'Next.js', 'Tailwind CSS']}
                  image={BMN}
                  projectLink="https://blackmentornetwork.org/"
                />
                <ProjectCard
                  title="Live Transcription"
                  description="Turn your computer's sounds into text with this nifty app! Using Deepgram's API, it grabs your PC's audio and converts it to readable words in real-time. Watch as computer babble becomes actual sentences in a cool little window. It's tech magic made simple!"
                  technologies={['Python', 'Deepgram API', 'OpenAI API', 'Customtkinter']}
                  image={LIVE}
                  projectLink="https://github.com/omer310/real-time-audio-transcription"
                />
                <ProjectCard
                  title="Set-Game IOS"
                  description="Set is a fast-paced card game of visual perception. In this iOS implementation, players identify sets of three cards where each feature is either all the same or all different."
                  technologies={['Swift', 'SwiftUI','MVVM Architecture','Combine framework (for reactive programming)']}
                  image={SET}
                  projectLink="https://github.com/omer310/Set-Game"
                />
              </div>
            </section>

            <ExperienceSection />

            <section id="education" className="py-16">
              <h2 className="text-3xl font-bold mb-8">Education</h2>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">Lehman College</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">Bachelor of Science in Computer Science</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">Minor in Mathematics</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">GPA: <span className="text-blue-500 dark:text-blue-300 font-semibold">3.65</span></p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">Graduated: May 2024</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">Relevant Coursework: Data Structures and Algorithms, Machine Learning, Web Development</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Bronx Community College</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">Associate Degree in Computer Science</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">GPA: <span className="text-blue-500 dark:text-blue-300 font-semibold">3.7</span></p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">Graduated: May 2022</p>
                </div>
              </div>
            </section>

            <section id="honors" className="py-16">
              <h2 className="text-3xl font-bold mb-8">Honors & Awards</h2>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li>President's List</li>
                  <li>Dean's List</li>
                  <li>1st Place, University Hackathon 2022</li>
                </ul>
              </div>
            </section>

            <ContactSection />
          </main>
        </div>
      </div>
    </Router>
  );
};

const ProjectCard = ({ title, description, technologies, image, projectLink }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative h-64 md:h-80">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-2xl font-bold text-white text-center px-4">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="mb-4 text-gray-600 dark:text-gray-300">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">{tech}</span>
          ))}
        </div>
        {projectLink && (
          <a 
            href={projectLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors"
          >
            Visit Project <ExternalLink className="ml-2" size={18} />
          </a>
        )}
      </div>
    </div>
  );
};

const ContactSection = () => {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('https://formspree.io/f/mdkngpjq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setMessage('');
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <section id="connect" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Let's Connect</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Get in Touch</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <motion.form 
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message..."
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-32 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                required
              />
              <button
                type="submit"
                className="absolute bottom-3 right-3 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
                disabled={status === 'Sending...'}
              >
                <Send size={20} />
              </button>
            </div>
            {status && (
              <p className={`text-sm ${status.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
                {status}
              </p>
            )}
          </motion.form>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold mb-4">Connect with Me</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Find me on these platforms:
          </p>
          <div className="flex space-x-4">
            <SocialLink href="https://www.linkedin.com/in/omar-ahmed-9214b6186/" icon={<Linkedin />} label="LinkedIn" />
            <SocialLink href="https://github.com/omer310" icon={<Github />} label="GitHub" />
            <SocialLink href="https://x.com/user_l0_0l" icon={
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true" 
                width="20"
                height="20"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            } label="Twitter" />
          </div>
          <div className="mt-8">
            <h4 className="text-lg font-semibold mb-2">Email</h4>
            <a href="mailto:omersalahabuzaid@gmail.com" className="text-blue-500 hover:underline">
              omersalahabuzaid@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
    aria-label={label}
  >
    {icon}
  </a>
);

export default PersonalWebsite;