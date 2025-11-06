import '../App.css';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import { getProjects } from '../data/projects';

export default function Projects() {
  const projects = getProjects();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-grow bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h1 className="mb-2 text-4xl font-extrabold text-gray-900">Projects</h1>
            <p className="text-md mb-10 text-gray-600">
              A collection of experiments, collaborations, and longer-term builds. Click through to explore the full
              write-ups with context, media, and technical notes.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                demoLink={project.demoLink}
                repoLink={project.repoLink}
                detailLink={`/projects/${project.slug}`}
              />
            ))}
          </div>
        </div>
      </main>
      <footer className="mt-auto bg-white">
        <div className="container mx-auto px-6 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Gui Oba. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
