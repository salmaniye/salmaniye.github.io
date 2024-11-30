const Skills: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Technical Skills
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Frontend Development</h3>
            <div className="space-y-3">
              <div className="flex gap-2">
                <span className="text-blue-600 dark:text-blue-400 font-medium">Languages:</span>
                <span className="text-gray-700 dark:text-gray-300">JavaScript (ES6+), TypeScript, HTML5, CSS3</span>
              </div>
              <div className="flex gap-2">
                <span className="text-blue-600 dark:text-blue-400 font-medium">Frameworks:</span>
                <span className="text-gray-700 dark:text-gray-300">React, Next.js</span>
              </div>
              <div className="flex gap-2">
                <span className="text-blue-600 dark:text-blue-400 font-medium">Styling:</span>
                <span className="text-gray-700 dark:text-gray-300">Tailwind CSS, DaisyUI</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Backend Development</h3>
            <div className="space-y-3">
              <div className="flex gap-2">
                <span className="text-blue-600 dark:text-blue-400 font-medium">Languages:</span>
                <span className="text-gray-700 dark:text-gray-300">Python, Node.js</span>
              </div>
              <div className="flex gap-2">
                <span className="text-blue-600 dark:text-blue-400 font-medium">Frameworks:</span>
                <span className="text-gray-700 dark:text-gray-300">FastAPI, Express.js</span>
              </div>
              <div className="flex gap-2">
                <span className="text-blue-600 dark:text-blue-400 font-medium">Databases:</span>
                <span className="text-gray-700 dark:text-gray-300">PostgreSQL, Prisma ORM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">DevOps & Tools</h3>
            <div className="space-y-3">
              <div className="flex gap-2">
                <span className="text-blue-600 dark:text-blue-400 font-medium">Deployment:</span>
                <span className="text-gray-700 dark:text-gray-300">Vercel, AWS, Docker</span>
              </div>
              <div className="flex gap-2">
                <span className="text-blue-600 dark:text-blue-400 font-medium">CI/CD:</span>
                <span className="text-gray-700 dark:text-gray-300">GitHub Actions</span>
              </div>
              <div className="flex gap-2">
                <span className="text-blue-600 dark:text-blue-400 font-medium">Monitoring:</span>
                <span className="text-gray-700 dark:text-gray-300">Sentry.io</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Project Management</h3>
            <div className="space-y-3">
              <div className="flex gap-2">
                <span className="text-blue-600 dark:text-blue-400 font-medium">Methodologies:</span>
                <span className="text-gray-700 dark:text-gray-300">Agile, Scrum</span>
              </div>
              <div className="flex gap-2">
                <span className="text-blue-600 dark:text-blue-400 font-medium">Tools:</span>
                <span className="text-gray-700 dark:text-gray-300">Jira, Trello, Discord</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills; 