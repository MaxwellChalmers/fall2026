import ContentLayout from '@/components/ContentLayout';
import PageHeader from '@/components/PageHeader';
import { getTopicModules } from '@/lib/topic-config';

export default function ModulesPage() {
  const modules = getTopicModules();

  return (
    <ContentLayout variant="list" fullWidth>
      <div className="space-y-7">
        <PageHeader
          title="Modules"
          excerpt="A semester overview of the six core modules, their main questions, and the topic sequence inside each one."
        />

        <section className="grid gap-5 lg:grid-cols-2">
          {modules.map((module) => {
            const patternCount = module.ethicalPatterns.length + (module.recognitionPatternNotes?.length || 0);

            return (
              <article
                key={module.slug}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-black"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-600 dark:text-gray-400">
                      Module {module.id}
                    </p>
                    <h2 className="m-0 text-2xl font-bold text-gray-900 dark:text-gray-100">
                      {module.title}
                    </h2>
                  </div>
                  <span className="rounded-full border border-gray-200 px-2.5 py-1 text-xs font-medium text-gray-700 dark:border-gray-800 dark:text-gray-300">
                    {module.meetings.length} topics
                  </span>
                </div>

                <p className="mb-0 mt-4 text-sm leading-6 text-gray-700 dark:text-gray-300">
                  {module.unitFocus}
                </p>

                {module.braidElsiArc && (
                  <p className="mb-0 mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    <span className="font-semibold text-gray-800 dark:text-gray-200">BRAID / ELSI arc:</span>{' '}
                    {module.braidElsiArc}
                  </p>
                )}

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full border border-gray-200 px-2.5 py-1 text-xs font-medium text-gray-700 dark:border-gray-800 dark:text-gray-300">
                    {patternCount} recognition patterns
                  </span>
                  <span className="rounded-full border border-gray-200 px-2.5 py-1 text-xs font-medium text-gray-700 dark:border-gray-800 dark:text-gray-300">
                    {module.themes.length} linked themes
                  </span>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </ContentLayout>
  );
}
