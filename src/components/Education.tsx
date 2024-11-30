const Education: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
        Education
      </h2>
      <div className="space-y-8">
        <div className="group p-6 rounded-xl bg-gray-100 dark:bg-gray-800 shadow-sm hover:shadow-md transition-all">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                M.Sc. (Taught) Data Science
              </h3>
              <p className="text-orange-600 dark:text-orange-400">University of Birmingham</p>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 sm:text-right">
              <p>Birmingham, UK</p>
              <p className="font-medium">2021 - 2022</p>
              <p className="font-medium">Distinction</p>
            </div>
          </div>
        </div>

        <div className="group p-6 rounded-xl bg-gray-100 dark:bg-gray-800 shadow-sm hover:shadow-md transition-all">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                B.Sc. Chemical Engineering
              </h3>
              <p className="text-orange-600 dark:text-orange-400">Institut Teknologi Bandung (ITB)</p>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 sm:text-right">
              <p>Bandung, Indonesia</p>
              <p className="font-medium">2016 - 2020</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education; 