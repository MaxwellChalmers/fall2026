import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const modulesDirectory = path.join(process.cwd(), 'content', 'modules');

export interface ModuleMarkdownMetadata {
  contentId: string;
  id: number;
  slug: string;
  title: string;
  excerpt?: string;
  unitFocus: string;
  braidElsiArc?: string;
}

function asString(value: unknown, fallback = '') {
  return typeof value === 'string' ? value : fallback;
}

function asNumber(value: unknown, fallback: number) {
  return typeof value === 'number' ? value : fallback;
}

function getOrderFromFilename(fileName: string, fallback: number) {
  const match = fileName.match(/^(\d+)_/);
  return match ? Number.parseInt(match[1], 10) : fallback;
}

function readModuleMarkdownMetadata(fileName: string, fallbackOrder: number): ModuleMarkdownMetadata {
  const contentId = fileName.replace(/\.md$/, '');
  const fullPath = path.join(modulesDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const data = matterResult.data;
  const slug = asString(data.slug);

  if (!slug) {
    throw new Error(`Missing slug frontmatter in module markdown file "${fileName}"`);
  }

  return {
    contentId,
    id: asNumber(data.id, getOrderFromFilename(fileName, fallbackOrder)),
    slug,
    title: asString(data.title, slug),
    excerpt: asString(data.excerpt) || undefined,
    unitFocus: asString(data.unit_focus),
    braidElsiArc: asString(data.braid_elsi_arc) || undefined,
  };
}

export function getAllModuleMarkdownMetadata(): ModuleMarkdownMetadata[] {
  if (!fs.existsSync(modulesDirectory)) {
    return [];
  }

  return fs
    .readdirSync(modulesDirectory)
    .filter(fileName => fileName.endsWith('.md'))
    .map((fileName, index) => readModuleMarkdownMetadata(fileName, index + 1))
    .sort((a, b) => a.id - b.id || a.contentId.localeCompare(b.contentId));
}

export function getModuleMarkdownBySlug(slug: string) {
  return getAllModuleMarkdownMetadata().find(module => module.slug === slug) || null;
}
