const Experience: React.FC = () => {
  return (
    <div className="border-t border-orange-100 dark:border-gray-700 pt-8">
      <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">
        Work Experience
      </h2>
      <div className="space-y-8">
        <div className="space-y-2">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
            <h3 className="font-medium text-gray-900 dark:text-white">Fullstack Developer</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">May 2024 – Present</p>
          </div>
          <p className="text-gray-600 dark:text-gray-400">CICON.App, London, UK</p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Developed an AI-powered e-commerce platform for shoe repair services. 
            Led end-to-end development using Next.js with Stripe, Twilio, and OpenAI integrations.
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
            <h3 className="font-medium text-gray-900 dark:text-white">Data Analyst Assistant</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Nov 2023 – Feb 2024</p>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Times Higher Education, London, UK</p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Involved in ranking universities based on UN's SDGs. Conducted thorough validation 
            procedures and was promoted to Quality Assurance team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience; 