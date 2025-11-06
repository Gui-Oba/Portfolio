import { Buffer } from 'buffer';
import matter from 'gray-matter';

if (typeof globalThis !== 'undefined' && globalThis.Buffer === undefined) {
  globalThis.Buffer = Buffer;
}

const projectModules = import.meta.glob('../content/projects/*.md', {
  eager: true,
  import: 'default',
  query: '?raw',
});

const projects = Object.entries(projectModules)
  .map(([path, rawContent]) => {
    const { data } = matter(rawContent);
    const fileNameWithQuery = path.split('/').pop() ?? '';
    const fileName = fileNameWithQuery.split('?')[0];
    const slug = fileName.replace(/\.md$/u, '');

    const normalizedDate =
      data.date instanceof Date
        ? data.date.toISOString().slice(0, 10)
        : data.date ?? '';

    return {
      slug,
      title: data.title ?? slug,
      description: data.description ?? '',
      date: normalizedDate,
      techStack: Array.isArray(data.techStack) ? data.techStack : [],
      repoLink: data.repoLink ?? '',
      demoLink: data.demoLink ?? '',
      mediaType: data.mediaType ?? '',
      mediaSrc: data.mediaSrc ?? '',
    };
  })
  .sort((a, b) => {
    const dateA = a.date ? new Date(a.date) : 0;
    const dateB = b.date ? new Date(b.date) : 0;
    return dateB - dateA;
  });

export function getProjects() {
  return projects;
}

export function getProjectMeta(slug) {
  return projects.find((project) => project.slug === slug);
}
