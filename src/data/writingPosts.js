import { Buffer } from 'buffer';
import matter from 'gray-matter';

if (typeof globalThis !== 'undefined' && globalThis.Buffer === undefined) {
  globalThis.Buffer = Buffer;
}

const postModules = import.meta.glob('../content/writing/*.md', {
  eager: true,
  import: 'default',
  query: '?raw',
});

const posts = Object.entries(postModules)
  .map(([path, rawContent]) => {
    const { data } = matter(rawContent);
    const fileNameWithQuery = path.split('/').pop() ?? '';
    const fileName = fileNameWithQuery.split('?')[0];
    const slug = fileName.replace(/\.md$/u, '');

    const rawDate = data.date ?? '';
    const normalizedDate = rawDate instanceof Date
      ? rawDate.toISOString().slice(0, 10)
      : rawDate || '';

    return {
      slug,
      title: data.title ?? slug,
      description: data.description ?? '',
      date: normalizedDate,
    };
  })
  .sort((a, b) => {
    const dateA = a.date ? new Date(a.date) : 0;
    const dateB = b.date ? new Date(b.date) : 0;
    return dateB - dateA;
  });

export function getWritingPosts() {
  return posts;
}

export function getWritingPostMeta(slug) {
  return posts.find((post) => post.slug === slug);
}
