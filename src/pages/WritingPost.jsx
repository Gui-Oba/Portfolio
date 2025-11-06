import { useEffect, useState } from 'react';
import { Buffer } from 'buffer';
import { useParams, Link } from 'react-router-dom';
import matter from 'gray-matter';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import ReactMarkdown from 'react-markdown';
import '../App.css';
import Header from '../components/Header';
import { getWritingPostMeta } from '../data/writingPosts';

const postModules = import.meta.glob('../content/writing/*.md', {
  import: 'default',
  query: '?raw',
});

export default function WritingPost() {
  const { slug } = useParams();
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const moduleEntry = Object.entries(postModules).find(([path]) => {
      const normalizedPath = path.replace(/\?.*$/u, '');
      return normalizedPath.endsWith(`${slug}.md`);
    });

    if (!moduleEntry) {
      setError('not-found');
      return;
    }

    const [, loader] = moduleEntry;

    loader()
      .then((raw) => {
        const parsed = matter(raw);
        setContent(parsed.content);
      })
      .catch(() => {
        setError('load-failed');
      });
  }, [slug]);

  const meta = getWritingPostMeta(slug);

  const renderBody = () => {
    if (error === 'not-found') {
      return (
        <div className="max-w-3xl mx-auto py-24 text-center text-gray-600">
          <h1 className="text-3xl font-semibold mb-4">Post not found</h1>
          <p className="mb-8">The article you were looking for doesn&apos;t exist—or it was moved.</p>
          <Link to="/writing" className="underline text-gray-800">
            Back to writing
          </Link>
        </div>
      );
    }

    if (error === 'load-failed') {
      return (
        <div className="max-w-3xl mx-auto py-24 text-center text-gray-600">
          <h1 className="text-3xl font-semibold mb-4">We had trouble loading this post.</h1>
          <p className="mb-8">Please try again later.</p>
          <Link to="/writing" className="underline text-gray-800">
            Back to writing
          </Link>
        </div>
      );
    }

    if (!content) {
      return (
        <div className="max-w-3xl mx-auto py-24 text-center text-gray-600">
          <p>Loading article…</p>
        </div>
      );
    }

    const markdownComponents = {
      h1: ({ node, ...props }) => (
        <h1 className="text-3xl font-bold text-gray-900 mt-10 mb-4" {...props} />
      ),
      h2: ({ node, ...props }) => (
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3" {...props} />
      ),
      h3: ({ node, ...props }) => (
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2" {...props} />
      ),
      p: ({ node, ...props }) => (
        <p className="text-base leading-relaxed text-gray-800 mt-4" {...props} />
      ),
      ul: ({ node, ordered, ...props }) => (
        <ul className="list-disc pl-6 space-y-2 text-gray-800 mt-4" {...props} />
      ),
      ol: ({ node, ordered, ...props }) => (
        <ol className="list-decimal pl-6 space-y-2 text-gray-800 mt-4" {...props} />
      ),
      blockquote: ({ node, ...props }) => (
        <blockquote
          className="border-l-4 border-gray-200 pl-4 italic text-gray-600 mt-6"
          {...props}
        />
      ),
      code: ({ node, inline, className, children, ...props }) => (
        <code
          className={`rounded bg-gray-100 px-1 py-0.5 text-sm font-mono text-gray-800 ${className ?? ''}`}
          {...props}
        >
          {children}
        </code>
      ),
      pre: ({ node, children, ...props }) => (
        <pre
          className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm mt-6"
          {...props}
        >
          {children}
        </pre>
      ),
      a: ({ node, ...props }) => (
        <a className="text-gray-900 underline hover:text-gray-700" {...props} />
      ),
    };

    return (
      <article className="max-w-3xl mx-auto text-left">
        <header className="mb-10">
          <p className="text-sm uppercase tracking-widest text-gray-400">
            {meta?.date}
          </p>
          <h1 className="text-4xl font-bold text-gray-900">{meta?.title ?? slug}</h1>
          {meta?.description && (
            <p className="mt-4 text-lg text-gray-600">{meta.description}</p>
          )}
        </header>
        <div className="space-y-6 leading-relaxed text-gray-800">
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
            components={markdownComponents}
          >
            {content}
          </ReactMarkdown>
        </div>
      </article>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow py-16 bg-white font-arial px-6">
        <div className="container mx-auto">
          <Link to="/writing" className="text-sm text-gray-500 hover:text-gray-700 mb-8 inline-block">
            ← Back to writing
          </Link>
          {renderBody()}
        </div>
      </main>
    </div>
  );
}
if (typeof globalThis !== 'undefined' && globalThis.Buffer === undefined) {
  globalThis.Buffer = Buffer;
}
