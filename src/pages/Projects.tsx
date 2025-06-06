import { projects } from '../data/projects';

const Projects = () => {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="space-y-12">
        <div className="border-t border-orange-100 pt-8">
          <h1 className="text-2xl font-normal text-gray-900 mb-4">
            Projects
          </h1>
          <p className="text-gray-700 leading-relaxed mb-8">
            A collection of projects I've built while learning new technologies and exploring different ideas.
          </p>
          
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div key={project.id} className="space-y-4">
                {index > 0 && (
                  <div className="border-t border-orange-200 pt-12 -mt-4" />
                )}
                
                {project.image && (
                  <div className="aspect-video relative overflow-hidden rounded-lg bg-orange-100">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
                
                <div className="space-y-2">
                  <h2 className="font-medium text-gray-900 text-lg">
                    {project.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                  {project.summary && (
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.summary}
                    </p>
                  )}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-gray-900 hover:text-gray-600 transition-colors underline underline-offset-4"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects; 