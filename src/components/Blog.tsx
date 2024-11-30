import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const Blog: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
        Blog Posts
      </h2>
      <div className="space-y-6">
        {blogPosts.map((post) => (
          <Link 
            to={`/blog/${post.slug}`}
            key={post.id}
            className="block p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{post.title}</h3>
              <span className="text-gray-600 dark:text-gray-400 text-sm whitespace-nowrap">{post.date}</span>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{post.excerpt}</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog; 