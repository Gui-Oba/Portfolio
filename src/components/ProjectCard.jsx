
export default function ProjectCard({ title, description, techStack, demoLink, repoLink, blogLink }) {
  return (
    <div className="bg-white rounded-2xl transition-transform  hover:-translate-y-1 shadow-lg p-6 flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        {techStack && (
          <ul className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech) => (
              <li
                key={tech}
                className="bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-800"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="mt-4 flex space-x-4">
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition"
          >
            Visit Site
          </a>
        )}
        {repoLink && (
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition"
          >
            View Code
          </a>
        )}
        {blogLink && (
          <a
            href={blogLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
          >
            How I Did It
          </a>
        )}
      </div>
    </div>
  );
}
