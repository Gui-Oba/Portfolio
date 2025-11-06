import { Link } from 'react-router-dom';

export default function ProjectCard({
  title,
  description,
  techStack,
  demoLink,
  repoLink,
  blogLink,
  detailLink,
}) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1">
      <div className="flex flex-col gap-3">
        <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
        {techStack?.length ? (
          <ul className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700"
              >
                {tech}
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="mt-auto flex flex-wrap gap-3 pt-6">
        {detailLink ? (
          <Link
            to={detailLink}
            className="inline-flex items-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            View Project
          </Link>
        ) : null}
        {demoLink ? (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-700"
          >
            Visit Site
          </a>
        ) : null}
        {repoLink ? (
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-900 transition hover:bg-gray-200"
          >
            View Code
          </a>
        ) : null}
        {blogLink ? (
          <a
            href={blogLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 underline-offset-2 transition hover:underline"
          >
            How I Did It
          </a>
        ) : null}
      </div>
    </div>
  );
}
