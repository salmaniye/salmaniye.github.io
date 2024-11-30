import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-12 sm:py-16 px-4 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 dark:text-white animate-slide-in">Blog</h2>
        <div className="grid gap-6 sm:gap-8 animate-fade-in">
          {blogPosts.map((post) => (
            <Link 
              to={`/blog/${post.slug}`}
              key={post.id}
              className="block p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-4">
                <h3 className="text-lg sm:text-xl font-semibold dark:text-white">{post.title}</h3>
                <span className="text-gray-600 dark:text-gray-400 text-sm whitespace-nowrap">{post.date}</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm sm:text-base">{post.excerpt}</p>
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog; 