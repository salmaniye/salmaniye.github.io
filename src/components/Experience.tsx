const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 px-4 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 dark:text-white">Work Experience</h2>
        <div className="space-y-12">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
              <div>
                <h3 className="text-xl font-semibold dark:text-white">Fullstack Developer</h3>
                <p className="text-gray-600 dark:text-gray-400">CICON.App</p>
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-left sm:text-right">
                <p className="whitespace-nowrap">London, UK | May 2024 – Present</p>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Developed an AI-powered e-commerce platform for shoe repair services</li>
              <li>Led end-to-end development using Next.js with Stripe, Twilio, and OpenAI integrations</li>
              <li>Designed scalable state management using React's Context API</li>
              <li>Integrated Sentry.io for real-time error tracking</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
              <div>
                <h3 className="text-xl font-semibold dark:text-white">Data Analyst Assistant</h3>
                <p className="text-gray-600 dark:text-gray-400">Times Higher Education</p>
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-left sm:text-right">
                <p className="whitespace-nowrap">London, UK | Nov 2023 – Feb 2024</p>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Involved in ranking universities based on UN's SDGs</li>
              <li>Conducted thorough validation procedures</li>
              <li>Promoted to Quality Assurance team</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 