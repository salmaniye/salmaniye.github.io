const Hackathons: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Hackathon Achievements
      </h2>
      <div className="space-y-8">
        <div className="group p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                UST D3CODE Hackathon 2024
              </h3>
              <a 
                href="https://www.hackerearth.com/challenges/hackathon/ust-d3code-hackathon24-uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 text-sm inline-flex items-center gap-1"
              >
                View Hackathon 
                <span className="text-xs">→</span>
              </a>
            </div>
            <span className="px-3 py-1 text-sm font-medium text-green-700 bg-green-100 dark:text-green-400 dark:bg-green-900/30 rounded-full">
              1st Winner
            </span>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Developed Skylark SMS, an AI-powered SMS health solution for rural communities.
          </p>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
              Built with Next.js and Node.js
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
              Integrated NLP models from HuggingFace
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
              Awarded £4,000 for innovation and impact
            </li>
          </ul>
        </div>

        <div className="group p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Hallé Archive Hackathon
            </h3>
            <span className="px-3 py-1 text-sm font-medium text-green-700 bg-green-100 dark:text-green-400 dark:bg-green-900/30 rounded-full">
              1st Winner
            </span>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            Led data analysis using MySQL and NLP techniques to uncover gender disparities in orchestral compositions.
          </p>
        </div>

        <div className="group p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Lincoln Hack
              </h3>
              <a 
                href="https://2024.lincolnhack.org/winners/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 text-sm inline-flex items-center gap-1"
              >
                View Winners
                <span className="text-xs">→</span>
              </a>
            </div>
            <span className="px-3 py-1 text-sm font-medium text-green-700 bg-green-100 dark:text-green-400 dark:bg-green-900/30 rounded-full">
              1st Winner
            </span>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            Developed "Stripes n Strides," a tiger-themed mobile fitness app using React and Node.js.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hackathons; 