const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 px-4 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 dark:text-white">Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Frontend Development</h3>
              <div className="space-y-2">
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium dark:text-gray-200">Languages:</span> JavaScript (ES6+), TypeScript, HTML5, CSS3
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium dark:text-gray-200">Frameworks:</span> React, Next.js
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium dark:text-gray-200">Styling:</span> Tailwind CSS, DaisyUI
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium dark:text-gray-200">State Management:</span> React Context API, Redux
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Backend Development</h3>
              <div className="space-y-2">
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium dark:text-gray-200">Languages:</span> Python, Node.js, JavaScript
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium dark:text-gray-200">Frameworks:</span> FastAPI, Express.js
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium dark:text-gray-200">Databases:</span> PostgreSQL, Prisma ORM, SQLAlchemy
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 dark:text-white">DevOps & Tools</h3>
              <div className="space-y-2">
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium dark:text-gray-200">Deployment:</span> Vercel, AWS (S3, EC2), Docker
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium dark:text-gray-200">CI/CD:</span> GitHub Actions
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium dark:text-gray-200">Monitoring:</span> Sentry.io
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Project Management</h3>
              <div className="space-y-2">
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium dark:text-gray-200">Methodologies:</span> Agile, Scrum
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium dark:text-gray-200">Tools:</span> Jira, Trello, Discord/Slack
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 