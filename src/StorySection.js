import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Github } from 'lucide-react';
import Avatar from './Images/avatar.png';
import Resume from './Images/resume.pdf';

const XIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    width="20"
    height="20"
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
  </svg>
);

const StorySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const milestones = [
    { year: '2018', event: 'Started CS in Sudan', details: 'Began studying Computer Science at the University of Gezira, developing a strong foundation in algorithms and programming.' },
    { year: '2019', event: 'Moved to USA', details: 'Transitioned to a new academic environment, continuing to expand my skills in software development and problem-solving.' },
    { year: '2022', event: 'Associate\'s Degree', details: 'Earned an Associate\'s in Computer Science, focusing on database design, programming languages, and teamwork.' },
    { year: '2024', event: 'Bachelor\'s Degree & Career Start', details: 'Graduated with a Bachelor\'s in CS, completing projects like the Manarat Al-Muslim app and a real-time AI-enhanced transcription tool. Began freelancing and building expertise in designing scalable applications, collaborating with stakeholders, and leveraging modern tech stacks to deliver innovative solutions.' },
  ];
  

  const handleConnect = () => {
    window.open("https://www.linkedin.com/in/omar-ahmed-9214b6186/", "_blank");
  };

  return (
    <section id="story" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100"
        >
          My Journey in Tech
        </motion.h2>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/3"
          >
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 bg-blue-500 rounded-lg opacity-10 rounded-3xl"></div>
              <div className="absolute inset-0 overflow-hidden rounded-lg border-4 border-white dark:border-gray-800 shadow-lg rounded-3xl">
                <img 
                  src={Avatar} 
                  alt="Your Avatar" 
                  className="w-full h-full object-cover object-center object-top"
                  style={{ objectPosition: '50% 3%' }}
                />
              </div>
            </div>
            <div className="mt-8 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Omar Ahmed</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Software Engineer</p>
              <div className="flex items-center justify-center mt-2">
                <svg className="w-4 h-4 text-gray-600 dark:text-gray-300 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Bronx, NY</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-2/3"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
              <div className="flex">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`flex-1 py-4 px-2 text-center cursor-pointer transition-colors duration-300 ${
                      activeIndex === index 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    {milestone.year}
                  </div>
                ))}
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-6"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">{milestones[activeIndex].event}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{milestones[activeIndex].details}</p>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">My Unique Perspective</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-justify">
              Back home in Sudan, I learned tech by fixing broken computers - taking them apart and making them work again. When war forced us to America, I had to do the same thing with my own life - rebuild piece by piece, learning English and coding along the way. Every challenge became an opportunity to problem-solve differently. Now I bring both technical skills and resilience to every project, knowing any problem can be solved if you break it down and keep pushing forward.
              </p>
              <div className="flex items-center justify-between mt-8">
                <div className="flex items-center space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-blue-500 text-white rounded-full flex items-center group transition-colors duration-300 hover:bg-blue-600"
                    onClick={handleConnect}
                  >
                    Connect with me
                    <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full flex items-center group transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                    onClick={() => window.open(Resume, "_blank")}
                  >
                    Resume
                    <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>

                <div className="flex items-center space-x-3">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://github.com/omer310"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://x.com/user_l0_0l"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X (formerly Twitter) Profile"
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <XIcon />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;