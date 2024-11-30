import { useState } from 'react';
import { Project, projects } from '../data/projects';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-16 sm:py-24">
        <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <div className="aspect-video relative overflow-hidden cursor-pointer" onClick={() => setSelectedProject(project)}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-800 dark:text-orange-400 dark:hover:text-orange-300 transition-colors"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute -top-10 right-0 text-white hover:text-orange-400 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={selectedProject.image} 
              alt={selectedProject.title}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default Projects; 