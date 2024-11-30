import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

const Header: React.FC = () => {
  return (
    <header className="py-4 sm:py-8 px-4 bg-white dark:bg-gray-900 shadow-sm transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8">
        <h1 className="text-2xl sm:text-3xl font-bold dark:text-white">Salman Fatahillah</h1>
        <div className="flex items-center gap-6 sm:gap-8">
          <nav className="flex gap-6 sm:gap-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">Home</Link>
            <Link to="/blog" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">Blog</Link>
          </nav>
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header; 