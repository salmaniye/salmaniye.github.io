import ContactDetails from './ContactDetails';

const Footer: React.FC = () => {
  return (
    <footer className="mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center gap-6">
          <p className="text-sm text-gray-500">
            Find me at:
          </p>
          <ContactDetails />
        </div>
      </div>
    </footer>
  );
};

export default Footer; 