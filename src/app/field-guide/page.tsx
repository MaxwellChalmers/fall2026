import type { Metadata } from 'next';
import Link from 'next/link';
import ContentLayout from '@/components/ContentLayout';
import ThemedImage from '@/components/ThemedImage';
import { getPostData, type PostData } from '@/lib/markdown';
import { normalizeFeaturedImagePath, getDarkFeaturedImagePath } from '@/lib/featured-image';

export const metadata: Metadata = {
  title: 'Field Guide — AI & Society',
  description: 'Tools for noticing, analyzing, and making sense of AI in everyday life.',
};

export default async function FieldGuideLandingPage() {
  const [recognitionPost, conceptPost, examplesPost] = await Promise.all([
    getPostData('index', 'recognition-guide'),
    getPostData('index', 'concept-guide'),
    getPostData('index', 'examples'),
  ]);

  const sections = [
    {
      label: 'Recognition Cards',
      href: '/field-guide/recognition',
      post: recognitionPost,
    },
    {
      label: 'Concept Cards',
      href: '/field-guide/concepts',
      post: conceptPost,
    },
    {
      label: 'Examples',
      href: '/field-guide/examples',
      post: examplesPost,
    },
  ];

  return (
    <ContentLayout
      variant="list"
      fullWidth
      contentPadding={false}
      header={
        <header className="border-y border-violet-200 bg-violet-50 px-4 py-16 dark:border-violet-900 dark:bg-violet-950/30 md:px-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-violet-700 dark:text-violet-300">
            Field Guide
          </p>
          <h1 className="m-0! max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight text-gray-950 dark:text-gray-50">
            AI in the Wild
          </h1>
          <p className="mb-0 mt-5 max-w-4xl text-lg leading-8 text-gray-700 dark:text-gray-300">
            Tools for noticing patterns, asking better questions, and making sense of AI in everyday life.
          </p>
        </header>
      }
    >
      <div className="grid grid-cols-1 gap-6 px-4 py-12 md:grid-cols-3 md:px-16">
        {sections.map(section => {
          const title = (section.post as PostData & { title?: string }).title ?? section.label;
          const subtitle = (section.post as PostData & { subtitle?: string }).subtitle;
          const rawImage = (section.post as PostData & { featured_image?: string }).featured_image;
          const imageSrc = normalizeFeaturedImagePath(rawImage);
          const imageDarkSrc = getDarkFeaturedImagePath(rawImage);

          return (
            <Link
              key={section.href}
              href={section.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white no-underline shadow-sm transition-all hover:border-violet-300 hover:shadow-md dark:border-gray-800 dark:bg-black dark:hover:border-violet-700"
            >
              {imageSrc && (
                <div className="overflow-hidden">
                  <ThemedImage
                    src={imageSrc}
                    darkSrc={imageDarkSrc}
                    className="w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              )}
              <div className="flex flex-col gap-2 p-5">
                <p className="mb-0 text-xs font-semibold uppercase tracking-widest text-violet-700 dark:text-violet-300">
                  {section.label}
                </p>
                <h2 className="m-0 text-lg font-semibold leading-snug text-gray-950 group-hover:text-violet-700 dark:text-gray-50 dark:group-hover:text-violet-300">
                  {title}
                </h2>
                {subtitle && (
                  <p className="mb-0 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {subtitle}
                  </p>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </ContentLayout>
  );
}
