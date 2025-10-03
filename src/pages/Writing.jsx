import '../App.css';
import Header from '../components/Header';
import BlogCard from '../components/BlogCard';
import { getWritingPosts } from '../data/writingPosts';

export default function Writing() {
  const posts = getWritingPosts();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Writing</h1>
            <p className="text-gray-600 mb-10 text-md">
              I  write here about my projects or about whatever topics I'm currently interested in.
            </p>

            <div className="grid gap-6 sm:grid-cols-1">
              {posts.map((post) => (
                <BlogCard
                  key={post.slug}
                  title={post.title}
                  date={post.date}
                  description={post.description}
                  to={`/writing/${post.slug}`}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-white mt-auto">
        <div className="container mx-auto px-6 py-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Gui Oba. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
