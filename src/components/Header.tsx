import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="py-6 px-4 bg-orange-100 border-b border-orange-100">
      <div className="max-w-3xl mx-auto flex justify-center items-center">
        <nav className="flex gap-8">
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
          <a
            href="/resume/CV_Salman_Fatahillah.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-orange-600 transition-colors font-medium"
          >
            Resume
          </a>
          {/* <Link
            to="/blog"
            className="text-gray-900 hover:text-gray-600 transition-colors font-medium"
          >
            Writing
          </Link> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
