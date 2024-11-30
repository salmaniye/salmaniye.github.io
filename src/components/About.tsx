import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-16 px-4 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 dark:text-white">About Me</h2>
        <div className="space-y-4">
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Technical Lead & Fullstack Developer based in London, UK, with expertise in building AI-powered platforms and e-commerce solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a href="mailto:fatahillah.salman@outlook.com" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
              fatahillah.salman@outlook.com
            </a>
            <a href="tel:+447398921611" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
              +447398921611
            </a>
            <a href="https://linkedin.com/in/salman-fatahillah" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 