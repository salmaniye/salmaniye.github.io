const Education: React.FC = () => {
  return (
    <div className="border-t border-orange-100 dark:border-gray-700 pt-8">
      <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">
        Education
      </h2>
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
            <h3 className="font-medium text-gray-900 dark:text-white">M.Sc. Data Science</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">2021 - 2022</p>
          </div>
          <p className="text-gray-600 dark:text-gray-400">University of Birmingham, UK</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Distinction</p>
        </div>

        <div className="space-y-2">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
            <h3 className="font-medium text-gray-900 dark:text-white">B.Sc. Chemical Engineering</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">2016 - 2020</p>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Institut Teknologi Bandung (ITB), Indonesia</p>
        </div>
      </div>
    </div>
  );
};

export default Education; 