import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 px-4 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 dark:text-white">About Me</h2>
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-400 whitespace-nowrap">
            <a href="mailto:fatahillah.salman@outlook.com" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
              fatahillah.salman@outlook.com
            </a>
            {' | '}
            <a href="https://linkedin.com/in/salman-fatahillah" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Technical Lead & Fullstack Developer based in London, UK, with expertise in building AI-powered platforms and e-commerce solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About; 