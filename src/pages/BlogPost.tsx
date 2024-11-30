import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const BlogPost: React.FC = () => {
  const { slug } = useParams();
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto py-16 sm:py-24 text-center">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Post not found</h2>
          <Link to="/blog" className="text-orange-600 hover:text-orange-800 dark:text-orange-400">
            ← Back to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <article className="max-w-4xl mx-auto py-16 sm:py-24">
        <Link to="/blog" className="text-orange-600 hover:text-orange-800 dark:text-orange-400 mb-8 block">
          ← Back to blog
        </Link>
        
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
            <time className="text-base">{post.date}</time>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="space-y-6">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({node, ...props}) => (
                <h1 className="text-3xl font-bold mt-12 mb-6 bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent" {...props} />
              ),
              h2: ({node, ...props}) => (
                <h2 className="text-2xl font-bold mt-10 mb-4 bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent" {...props} />
              ),
              h3: ({node, ...props}) => (
                <h3 className="text-xl font-bold mt-8 mb-3 text-gray-900 dark:text-white" {...props} />
              ),
              p: ({node, ...props}) => (
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed" {...props} />
              ),
              ul: ({node, ...props}) => (
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300" {...props} />
              ),
              ol: ({node, ...props}) => (
                <ol className="list-decimal pl-6 space-y-2 text-gray-700 dark:text-gray-300" {...props} />
              ),
              li: ({node, ...props}) => (
                <li className="text-lg leading-relaxed" {...props} />
              ),
              a: ({node, ...props}) => (
                <a className="text-orange-600 hover:text-orange-800 dark:text-orange-400 underline" {...props} />
              ),
              blockquote: ({node, ...props}) => (
                <blockquote className="border-l-4 border-orange-600 dark:border-orange-400 pl-4 py-1 my-6 text-gray-700 dark:text-gray-300 italic" {...props} />
              ),
              code: ({node, className, ...props}: any) => (
                className?.includes('inline') 
                  ? <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm" {...props} />
                  : <code className="block bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto" {...props} />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </main>
  );
};

export default BlogPost; 