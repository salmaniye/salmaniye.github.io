const Hackathons: React.FC = () => {
  return (
    <section id="hackathons" className="py-16 px-4 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 dark:text-white">Hackathon Achievements</h2>
        <div className="space-y-8">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold dark:text-white">UST D3code Hackathon 2024</h3>
              <span className="text-green-600 dark:text-green-400 font-semibold">1st Winner</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Developed Skylark SMS, an AI-powered SMS health solution for rural communities.</p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>Built with Next.js and Node.js</li>
              <li>Integrated NLP models from HuggingFace</li>
              <li>Awarded £4,000 for innovation and impact</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold dark:text-white">Hallé Archive Hackathon</h3>
              <span className="text-green-600 dark:text-green-400 font-semibold">1st Winner</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300">Led data analysis using MySQL and NLP techniques to uncover gender disparities in orchestral compositions.</p>
          </div>

          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold dark:text-white">Lincoln Hack</h3>
              <span className="text-green-600 dark:text-green-400 font-semibold">1st Winner</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300">Developed "Stripes n Strides," a tiger-themed mobile fitness app using React and Node.js.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hackathons; 