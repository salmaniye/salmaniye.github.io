import ContactDetails from './ContactDetails';

const Hero: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
      <div className="flex flex-col items-center text-center">
        <img 
          src="/me.jpg" 
          alt="Salman Fatahillah"
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover shadow-lg mb-8"
        />
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
            Salman Fatahillah
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Fullstack Developer based in London, UK
          </p>
          <ContactDetails />
        </div>
      </div>
    </div>
  );
};

export default Hero; 