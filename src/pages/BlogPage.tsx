import Blog from '../components/Blog'

function BlogPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-32">
        <section>
          <Blog />
        </section>
      </div>
    </main>
  )
}

export default BlogPage 