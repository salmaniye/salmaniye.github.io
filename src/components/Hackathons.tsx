const Hackathons: React.FC = () => {
  return (
    <div className="border-t border-orange-100 dark:border-gray-700 pt-8">
      <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">
        Hackathon Wins
      </h2>
      <div className="space-y-8">
        <div className="space-y-2">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
            <h3 className="font-medium text-gray-900 dark:text-white">UST D3CODE Hackathon 2024</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">October 2024</p>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Developed Skylark SMS, an AI-powered SMS health solution for rural communities. 
            Built with Next.js and Node.js, integrating NLP models from HuggingFace. 
            Awarded £4,000 for innovation and impact.
          </p>
          <a 
            href="https://www.ust.com/en/who-we-are/ust-newsroom/ust-announces-the-global-winners-of-d3code-hackathon-2024"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors underline underline-offset-4"
          >
            View Project
          </a>
        </div>

        <div className="space-y-2">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
            <h3 className="font-medium text-gray-900 dark:text-white">Hallé Archive Hackathon</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">April 2024</p>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Led data analysis using MySQL and NLP techniques to uncover gender disparities in orchestral compositions.
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
            <h3 className="font-medium text-gray-900 dark:text-white">Lincoln Hack</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">March 2024</p>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Developed "Stripes n Strides," a tiger-themed mobile fitness app using React and Node.js.
          </p>
          <a 
            href="https://2024.lincolnhack.org/winners/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors underline underline-offset-4"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hackathons; 