import fs from 'fs';
import path from 'path';

const publicDirectory = path.join(process.cwd(), 'public');
const basePath = '/fall2026';

export function normalizeFeaturedImagePath(src?: string): string | undefined {
  if (!src) return undefined;
  if (/^(https?:)?\/\//.test(src) || src.startsWith('data:')) return src;
  return src.startsWith('/') ? src : `/${src}`;
}

function getPublicFilePath(src: string): string | undefined {
  const pathname = src.split(/[?#]/)[0];
  const publicPathname = pathname.startsWith(`${basePath}/`) ? pathname.slice(basePath.length) : pathname;
  const filePath = path.join(publicDirectory, publicPathname);
  const relativePath = path.relative(publicDirectory, filePath);
  if (relativePath.startsWith('..') || path.isAbsolute(relativePath)) return undefined;
  return filePath;
}

export function getDarkFeaturedImagePath(src?: string): string | undefined {
  const normalizedSrc = normalizeFeaturedImagePath(src);
  if (!normalizedSrc || /^(https?:)?\/\//.test(normalizedSrc) || normalizedSrc.startsWith('data:')) return undefined;
  const [pathname, suffix = ''] = normalizedSrc.split(/([?#].*)/, 2);
  const extension = path.posix.extname(pathname);
  if (!extension) return undefined;
  const darkSrc = `${pathname.slice(0, -extension.length)}.dark${extension}${suffix}`;
  const darkFilePath = getPublicFilePath(darkSrc);
  return darkFilePath && fs.existsSync(darkFilePath) ? darkSrc : undefined;
}
