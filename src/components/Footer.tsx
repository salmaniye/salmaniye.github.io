import ContactDetails from './ContactDetails';

const Footer: React.FC = () => {
  return (
    <footer className="mt-16 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center gap-6">
          <ContactDetails />
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Salman Fatahillah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 