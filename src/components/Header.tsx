import { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-orange-100 border-b border-orange-100">
      <div className="max-w-3xl mx-auto flex items-center justify-between px-4 sm:px-6 py-6">
        <Link
          to="/"
          className="text-gray-900 font-medium"
          onClick={closeMenu}
        >
          <img src="/sf.svg" className="h-10 w-10" />
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-orange-200 px-3 py-2 text-gray-900 md:hidden"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="flex flex-col gap-1">
            <span className="block h-0.5 w-5 bg-gray-900"></span>
            <span className="block h-0.5 w-5 bg-gray-900"></span>
            <span className="block h-0.5 w-5 bg-gray-900"></span>
          </span>
        </button>

        <nav
          id="primary-navigation"
          className="hidden md:flex md:gap-8"
        >
          <Link
            to="/"
            className="text-gray-900 hover:text-orange-600 transition-colors font-medium"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="text-gray-900 hover:text-orange-600 transition-colors font-medium"
          >
            Projects
          </Link>
          {/* <Link
            to="/photography"
            className="text-gray-900 hover:text-orange-600 transition-colors font-medium"
          >
            Photography
          </Link> */}
          <a
            href="/resume/CV_Salman_Fatahillah.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-orange-600 transition-colors font-medium"
          >
            Resume
          </a>
        </nav>
      </div>

      {isOpen && (
        <nav className="md:hidden border-t border-orange-200" aria-label="Mobile">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 space-y-3">
            <Link
              to="/"
              className="block rounded-md px-3 py-2 text-gray-900 hover:bg-orange-200"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              to="/projects"
              className="block rounded-md px-3 py-2 text-gray-900 hover:bg-orange-200"
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link
              to="/photography"
              className="block rounded-md px-3 py-2 text-gray-900 hover:bg-orange-200"
              onClick={closeMenu}
            >
              Photography
            </Link>
            <a
              href="/resume/CV_Salman_Fatahillah.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-md px-3 py-2 text-gray-900 hover:bg-orange-200"
              onClick={closeMenu}
            >
              Resume
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
