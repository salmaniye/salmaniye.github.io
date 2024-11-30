import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 py-4 px-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <nav className="flex gap-6 sm:gap-8">
          <Link
            to="/"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            to="/blog"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
          >
            Blog
          </Link>
        </nav>
        <DarkModeToggle />
      </div>
    </header>
  );
};

export default Header;
