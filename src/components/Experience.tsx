const Experience: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Work Experience
      </h2>
      <div className="space-y-12">
        <div className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400">
          <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -left-[9px] top-0" />
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Fullstack Developer</h3>
                <p className="text-blue-600 dark:text-blue-400">CICON.App</p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">London, UK | May 2024 – Present</p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Developed an AI-powered e-commerce platform for shoe repair services</li>
              <li>Led end-to-end development using Next.js with Stripe, Twilio, and OpenAI integrations</li>
              <li>Designed scalable state management using React's Context API</li>
              <li>Integrated Sentry.io for real-time error tracking</li>
            </ul>
          </div>
        </div>

        <div className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400">
          <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -left-[9px] top-0" />
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Data Analyst Assistant</h3>
                <p className="text-blue-600 dark:text-blue-400">Times Higher Education</p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">London, UK | Nov 2023 – Feb 2024</p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Involved in ranking universities based on UN's SDGs</li>
              <li>Conducted thorough validation procedures</li>
              <li>Promoted to Quality Assurance team</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience; 