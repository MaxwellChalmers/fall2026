import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';

const adminDirectory = path.join(process.cwd(), 'content', 'admin');

export async function getAdminGuide(contentType: string): Promise<string | null> {
  const filePath = path.join(adminDirectory, `${contentType}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { content } = matter(fileContents);

  const processed = await remark()
    .use(gfm)
    .use(html, { sanitize: false })
    .process(content);

  return processed.toString();
}
