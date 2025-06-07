import { projects } from '../data/projects';

const renderMarkdown = (text: string) => {
  // Split on multiple markdown patterns
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*|`.*?`|\[.*?\]\(.*?\))/g);
  
  return parts.map((part, index) => {
    // Bold text **text**
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    // Italic text *text*
    if (part.startsWith('*') && part.endsWith('*') && !part.startsWith('**')) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }
    // Inline code `code`
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code key={index} className="px-1 py-0.5 bg-gray-100 text-gray-800 rounded text-sm font-mono">
          {part.slice(1, -1)}
        </code>
      );
    }
    // Links [text](url)
    const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
    if (linkMatch) {
      return (
        <a 
          key={index} 
          href={linkMatch[2]} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-orange-600 hover:text-orange-700 underline underline-offset-2"
        >
          {linkMatch[1]}
        </a>
      );
    }
    // Regular text
    return part;
  });
};

const Projects = () => {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="space-y-12">
        <div className="border-t border-orange-100 pt-8">
          <h1 className="text-2xl font-normal text-gray-900 mb-4">
            Projects
          </h1>
          <p className="text-gray-700 leading-relaxed mb-8">
            From analyzing Pokémon tweets for my MSc to winning my first hackathon at LincolnHack 2024 - a weekend that completely changed my career direction. These projects trace my evolution from academic research to building practical web applications, and now expanding into native macOS development with Swift.
          </p>
          
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div key={project.title} className="space-y-4">
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
                  <div className="flex items-center gap-3">
                    <h2 className="font-medium text-gray-900 text-lg">
                      {project.title}
                    </h2>
                    <span className="px-2 py-1 text-xs font-medium text-orange-700 bg-orange-200 rounded-full">
                      {project.year}
                    </span>
                  </div>
                                      <p className="text-gray-700 leading-relaxed">
                      {renderMarkdown(project.description)}
                    </p>
                    {project.summary && (
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {renderMarkdown(project.summary)}
                      </p>
                    )}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-orange-600 hover:text-orange-700 transition-colors underline underline-offset-4"
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