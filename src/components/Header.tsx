import React from 'react';
import DarkModeToggle from './DarkModeToggle'

const Header: React.FC = () => {
  return (
    <header className="py-8 px-4 bg-white dark:bg-gray-900 shadow-sm transition-colors">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold dark:text-white">Salman Fatahillah</h1>
        <div className="flex items-center gap-8">
          <nav className="flex gap-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">About</a>
            <a href="#experience" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">Experience</a>
            <a href="#hackathons" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">Hackathons</a>
            <a href="#skills" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">Skills</a>
          </nav>
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header; 