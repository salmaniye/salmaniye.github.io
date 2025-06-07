const Skills: React.FC = () => {
  return (
    <div className="border-t border-orange-100 dark:border-gray-700 pt-8">
      <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">
        Technologies
      </h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="font-medium text-gray-900 dark:text-white mb-2">Frontend</h3>
          <p className="text-gray-700 dark:text-gray-300">
            React, Next.js, TypeScript, JavaScript, Tailwind CSS, HTML5, CSS3
          </p>
        </div>
        
        <div>
          <h3 className="font-medium text-gray-900 dark:text-white mb-2">Backend</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Python, FastAPI, Node.js, Express.js, PostgreSQL, Prisma ORM
          </p>
        </div>
        
        <div>
          <h3 className="font-medium text-gray-900 dark:text-white mb-2">Tools & Services</h3>
          <p className="text-gray-700 dark:text-gray-300">
            AWS, Docker, Vercel, GitHub Actions, Sentry.io, Stripe, Twilio, OpenAI
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills; 