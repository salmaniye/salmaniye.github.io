import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const BlogPost: React.FC = () => {
  const { slug } = useParams();
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return (
      <div className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Post not found</h2>
          <Link to="/blog" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">
            ← Back to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="py-12 sm:py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link to="/blog" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 mb-6 sm:mb-8 block">
          ← Back to blog
        </Link>
        
        <header className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4 dark:text-white">{post.title}</h1>
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
            <time className="text-sm sm:text-base">{post.date}</time>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span 
                key={tag}
                className="px-2 sm:px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs sm:text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose prose-sm sm:prose-lg dark:prose-invert max-w-none">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({node, ...props}) => <h1 className="text-3xl font-bold mt-8 mb-4 dark:text-white" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-6 mb-4 dark:text-white" {...props} />,
              h3: ({node, ...props}) => <h3 className="text-xl font-bold mt-4 mb-3 dark:text-white" {...props} />,
              p: ({node, ...props}) => <p className="text-gray-700 dark:text-gray-300 mb-4" {...props} />,
              ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300" {...props} />,
              ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-4 text-gray-700 dark:text-gray-300" {...props} />,
              li: ({node, ...props}) => <li className="mb-2" {...props} />,
              a: ({node, ...props}) => <a className="text-blue-600 hover:text-blue-800 dark:text-blue-400" {...props} />,
              blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4" {...props} />,
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  );
};

export default BlogPost; 