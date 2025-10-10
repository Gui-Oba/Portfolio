
export default function SkillCard({
  title,
  techStack,
  demoLink,
  repoLink,
  blogLink,
}) {
  return (
    <div className="bg-white rounded-2xl transition-transform hover:-translate-y-1 shadow-lg p-6 flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
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
    </div>
  );
}
