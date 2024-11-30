import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        About Me
      </h2>
      <div className="prose prose-lg dark:prose-invert">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Technical Lead & Fullstack Developer based in London, UK, with expertise in building AI-powered platforms 
          and e-commerce solutions.
        </p>
      </div>
    </div>
  );
};

export default About; 