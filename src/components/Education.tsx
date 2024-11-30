const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 px-4 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 dark:text-white">Education</h2>
        <div className="space-y-8">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
              <div>
                <h3 className="text-xl font-semibold dark:text-white">M.Sc. (Taught) Data Science</h3>
                <p className="text-gray-600 dark:text-gray-400">University of Birmingham</p>
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm sm:text-right">
                <p>Birmingham, UK</p>
                <p>Distinction</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
              <div>
                <h3 className="text-xl font-semibold dark:text-white">B.Sc. Chemical Engineering</h3>
                <p className="text-gray-600 dark:text-gray-400">Institut Teknologi Bandung (ITB)</p>
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm sm:text-right">
                <p>Bandung, Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 