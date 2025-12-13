import { useEffect, useState } from 'react';
import { Buffer } from 'buffer';
import { Link, useParams } from 'react-router-dom';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import '../App.css';
import Header from '../components/Header';
import { getProjectMeta } from '../data/projects';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const projectModules = import.meta.glob('../content/projects/*.md', {
  import: 'default',
  query: '?raw',
});

export default function ProjectPost() {
  const { slug } = useParams();
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const moduleEntry = Object.entries(projectModules).find(([path]) => {
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

  const meta = getProjectMeta(slug);

  const resolveMediaSrc = () => {
    const source = meta?.mediaSrc?.trim();
    if (!source) return '';

    if (/^https?:\/\//u.test(source)) {
      return source;
    }

    if (source.startsWith('/')) {
      return source;
    }

    return `/project-media/${source}`;
  };

  const getYouTubeEmbedUrl = (url) => {
    const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  };

  const renderMedia = () => {
    const src = resolveMediaSrc();
    if (!src) return null;

    if (meta.mediaType === 'video') {
      const youtubeUrl = getYouTubeEmbedUrl(src);
      if (youtubeUrl) {
        return (
          <iframe
            src={youtubeUrl}
            title={meta?.title ?? slug}
            className="h-auto w-full rounded-3xl border border-slate-200 aspect-video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        );
      }

      return (
        <video
          src={src}
          controls
          preload="metadata"
          className="h-auto w-full rounded-3xl border border-slate-200"
          poster={meta.poster ?? '/project-media/stitch-thumbnail.png'}
        />
      );
    }

    return (
      <img
        src={src}
        alt={meta?.title ?? slug}
        className="h-auto w-full rounded-3xl border border-slate-200 object-cover"
      />
    );
  };

  const renderBody = () => {
    if (error === 'not-found') {
      return (
        <div className="mx-auto max-w-3xl py-24 text-center text-gray-600">
          <h1 className="mb-4 text-3xl font-semibold">Project not found</h1>
          <p className="mb-8">The project you were looking for doesn&apos;t exist—or it was moved.</p>
          <Link to="/projects" className="text-gray-800 underline">
            Back to projects
          </Link>
        </div>
      );
    }

    if (error === 'load-failed') {
      return (
        <div className="mx-auto max-w-3xl py-24 text-center text-gray-600">
          <h1 className="mb-4 text-3xl font-semibold">We had trouble loading this project.</h1>
          <p className="mb-8">Please try again later.</p>
          <Link to="/projects" className="text-gray-800 underline">
            Back to projects
          </Link>
        </div>
      );
    }

    if (!content) {
      return (
        <div className="mx-auto max-w-3xl py-24 text-center text-gray-600">
          <p>Loading project…</p>
        </div>
      );
    }

    const markdownComponents = {
      h1: ({ node, ...props }) => (
        <h1 className="mt-10 mb-4 text-3xl font-bold text-gray-900" {...props} />
      ),
      h2: ({ node, ...props }) => (
        <h2 className="mt-8 mb-3 text-2xl font-semibold text-gray-900" {...props} />
      ),
      h3: ({ node, ...props }) => (
        <h3 className="mt-6 mb-2 text-xl font-semibold text-gray-900" {...props} />
      ),
      p: ({ node, ...props }) => (
        <p className="mt-4 text-base leading-relaxed text-gray-800" {...props} />
      ),
      ul: ({ node, ordered, ...props }) => (
        <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-800" {...props} />
      ),
      ol: ({ node, ordered, ...props }) => (
        <ol className="mt-4 list-decimal space-y-2 pl-6 text-gray-800" {...props} />
      ),
      blockquote: ({ node, ...props }) => (
        <blockquote
          className="mt-6 border-l-4 border-gray-200 pl-4 italic text-gray-600"
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
          className="mt-6 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100"
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
      <article className="mx-auto max-w-3xl text-left">
        <header className="mb-10">
          <p className="text-sm uppercase tracking-widest text-gray-400">{meta?.date}</p>
          <h1 className="text-4xl font-bold text-gray-900">{meta?.title ?? slug}</h1>
          {meta?.description ? (
            <p className="mt-4 text-lg text-gray-600">{meta.description}</p>
          ) : null}
          {meta?.techStack?.length ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {meta.techStack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          ) : null}
          {meta?.demoLink || meta?.repoLink ? (
            <div className="mt-6 flex flex-wrap gap-3">
              {meta.demoLink ? (
                <a
                  href={meta.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-700"
                >
                  Visit Site
                </a>
              ) : null}
              {meta.repoLink ? (
                <a
                  href={meta.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600"
                >
                  View Code &lt;&#47;&gt;
                </a>
              ) : null}
            </div>
          ) : null}
        </header>
        <div className="mb-10">{renderMedia()}</div>
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
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-grow bg-white px-6 py-16">
        <div className="container mx-auto">
          <Link to="/projects" className="mb-8 inline-block text-sm text-gray-500 hover:text-gray-700">
            ← Back to projects
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
