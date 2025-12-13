
import { Link } from 'react-router-dom';

export default function BlogCard({ title, description, date, to }) {
  return (
    <Link
      to={to}
      className="group block bg-white border-black border-2 rouded-2xl shadow-lg transition-transform hover:-translate-y-1 p-6 text-left"
    >
      <h3 className="text-xl font-semibold text-gray-900 -hovergroup:underline">{title}</h3>
      {date && <p className="text-xs text-stone-400 mt-2 mb-3">{date}</p>}
      {description && <p className="text-gray-700 text-sm leading-relaxed">{description}</p>}
    </Link>
  );
}
