import { Link } from 'react-router-dom';
import { optimizeImageUrl } from '../lib/imageOptimization';

export default function ProjectCard({
  title,
  description,
  techStack,
  gitLink,
  detailLink,
  mediaSrc,
}) {
  const cardContent = (
    <div className="flex h-full flex-col rounded-xl border border-gray-200 bg-white shadow-sm transition-transform hover:-translate-y-2 overflow-hidden">
      {mediaSrc && (
        <img
          src={optimizeImageUrl(mediaSrc, 500, 300)}
          alt={title}
          className="h-48 w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      )}
      <div className="flex flex-col gap-3 p-6">
        <h3 className="text-2xl group-hover:underline font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
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
      </div>
    
  );

  if (detailLink) {
    return (
      <Link to={detailLink} className="no-underline group">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
