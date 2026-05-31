import type { Metadata } from 'next';
import taxonomyData from '../../../../content/config/taxonomy.json';
import ContentLayout from '@/components/ContentLayout';
import PageHeader from '@/components/PageHeader';
import QuickLinksNav from '@/components/QuickLinksNav';

interface TaxonomyEntry {
  slug?: string;
  title: string;
  shortDescription?: string;
  group?: string;
  order?: number;
  dialoguesWith?: string[];
  relatedThemes?: string[];
  description?: string;
  key?: string;
}

interface TaxonomyData {
  version: number;
  description: string;
  suggestedFrontmatter: Record<string, string>;
  themes: TaxonomyEntry[];
  ethicalPatterns: TaxonomyEntry[];
  braidTopics: TaxonomyEntry[];
  careerReadinessTopics: TaxonomyEntry[];
  governanceFrameworks: TaxonomyEntry[];
  relationshipTypes: TaxonomyEntry[];
}

export const metadata: Metadata = {
  title: 'Planning Taxonomy',
  description: 'Planning view for the SYS/BRAID taxonomy.',
  robots: {
    index: false,
    follow: false,
  },
};

const taxonomy = taxonomyData as TaxonomyData;

function groupEntries(entries: TaxonomyEntry[]) {
  const groups = new Map<string, TaxonomyEntry[]>();

  entries.forEach(entry => {
    const key = entry.group ?? 'other';
    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key)!.push(entry);
  });

  return Array.from(groups.entries())
    .map(([group, items]) => ({
      group,
      items: items.sort((a, b) => (a.order ?? 999) - (b.order ?? 999)),
    }))
    .sort((a, b) => (a.items[0]?.order ?? 999) - (b.items[0]?.order ?? 999));
}

function formatGroupLabel(group: string) {
  return group
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block px-1.5 py-0.5 text-[11px] font-medium rounded uppercase bg-gray-50 border border-gray-200 text-gray-700 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300">
      {children}
    </span>
  );
}

function SummaryCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-800 px-3 py-2 bg-white dark:bg-black">
      <p className="text-xs uppercase tracking-wide text-gray-600 dark:text-gray-400 m-0">{label}</p>
      <p className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-1 mb-0">{value}</p>
    </div>
  );
}

const patternCardStyles = [
  'border-[#0b5d8f]/25 dark:border-[#2f80d7]/50',
  'border-[#ffd966]/70 dark:border-[#ffd966]/50',
  'border-[#c72026]/25 dark:border-[#c72026]/50',
  'border-[#2f80d7]/25 dark:border-[#2f80d7]/50',
  'border-[#8c6aa8]/30 dark:border-[#8c6aa8]/60',
  'border-[#e8e5df] dark:border-[#e8e5df]/30',
];

const patternImageStyles = [
  'bg-[#f3f3f0] dark:bg-[#10283b]',
  'bg-[#fff1b8] dark:bg-[#3a2f13]',
  'bg-[#f9e7e5] dark:bg-[#3a1719]',
  'bg-[#eaf3fb] dark:bg-[#10283b]',
  'bg-[#eee7f3] dark:bg-[#251f31]',
  'bg-white dark:bg-[#111827]',
];

const patternImageMap: Record<string, { src: string; position: string }> = {
  'ai-systems-are-socio-technical-systems': {
    src: '/fall2026/images/taxonomy-patterns/recognition-patterns-sheet.png',
    position: '0% 0%',
  },
  'classification-is-not-neutral': {
    src: '/fall2026/images/taxonomy-patterns/recognition-patterns-sheet.png',
    position: '100% 0%',
  },
  'data-is-produced-not-found': {
    src: '/fall2026/images/taxonomy-patterns/recognition-patterns-sheet.png',
    position: '0% 100%',
  },
  'thresholds-distribute-harm': {
    src: '/fall2026/images/taxonomy-patterns/recognition-patterns-sheet.png',
    position: '100% 100%',
  },
};

function PatternIllustration({ index, slug, title }: { index: number; slug?: string; title: string }) {
  const imageConfig = slug ? patternImageMap[slug] : undefined;

  if (imageConfig) {
    return (
      <div
        aria-hidden="true"
        className={`relative min-h-36 w-28 shrink-0 overflow-hidden sm:w-40 ${patternImageStyles[index % patternImageStyles.length]}`}
        style={{
          backgroundImage: `url(${imageConfig.src})`,
          backgroundSize: '200% 200%',
          backgroundPosition: imageConfig.position,
          backgroundRepeat: 'no-repeat',
        }}
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      className={`relative min-h-36 w-28 shrink-0 overflow-hidden sm:w-40 ${patternImageStyles[index % patternImageStyles.length]}`}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="50" y="18" width="62" height="42" rx="6" fill="#ffd966" transform="rotate(-6 50 18)" />
        <path d="M77 30L94 41L78 53L77 30Z" fill="white" stroke="#0b5d8f" strokeWidth="4" strokeLinejoin="round" />
        <circle cx="39" cy="91" r="10" fill="white" stroke="#0b5d8f" strokeWidth="4" />
        <circle cx="62" cy="86" r="12" fill="white" stroke="black" strokeWidth="4" />
        <circle cx="91" cy="79" r="12" fill="white" stroke="black" strokeWidth="4" />
        <circle cx="117" cy="90" r="8" fill="white" stroke="black" strokeWidth="4" />
        <path d="M24 127C26 111 34 102 46 102C58 102 66 111 68 127H24Z" fill="#2f80d7" />
        <path d="M45 127C48 107 60 97 75 97C90 97 101 107 104 127H45Z" fill="#c72026" />
        <path d="M82 127C84 106 96 94 111 94C126 94 137 106 140 127H82Z" fill="#ffd966" />
        <path d="M108 127C110 114 118 107 128 107C138 107 146 114 148 127H108Z" fill="#8c6aa8" />
        <rect x="57" y="126" width="48" height="14" fill="#2f80d7" opacity="0.18" />
        <path d="M37 35C22 49 18 64 23 80" stroke="#0b5d8f" strokeWidth="5" strokeLinecap="round" opacity="0.45" />
        <path d="M119 42C134 47 143 58 145 73" stroke="#0b5d8f" strokeWidth="5" strokeLinecap="round" opacity="0.45" />
      </svg>
    </div>
  );
}

function RecognitionPatternCards({ patterns }: { patterns: TaxonomyEntry[] }) {
  const sortedPatterns = [...patterns].sort((a, b) => (a.order ?? 999) - (b.order ?? 999));

  return (
    <section className="space-y-4">
      <div className="border-b border-gray-200 dark:border-gray-800 pb-2">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 m-0">Ethical Recognition Patterns</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 mb-0">
          Short recurring patterns students can learn to notice across AI systems, labs, and governance cases.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sortedPatterns.map((pattern, index) => (
          <article
            key={pattern.slug ?? pattern.title}
            className={`flex overflow-hidden rounded-xl border bg-white shadow-sm dark:bg-black ${patternCardStyles[index % patternCardStyles.length]}`}
          >
            <PatternIllustration index={index} slug={pattern.slug} title={pattern.title} />

            <div className="flex-1 bg-white p-4 text-gray-900 dark:bg-black dark:text-gray-100">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold leading-snug text-[#0b5d8f] m-0 dark:text-[#8fc4ee]">
                  {pattern.title}
                </h3>
                {pattern.order && (
                  <span className="shrink-0 rounded-full bg-white/70 px-2 py-0.5 text-xs font-semibold text-gray-700 ring-1 ring-black/5 dark:bg-black/25 dark:text-gray-200 dark:ring-white/10">
                    {pattern.order}
                  </span>
                )}
              </div>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {pattern.group && (
                  <span className="rounded-full bg-white/70 px-2 py-0.5 text-xs font-medium text-gray-700 ring-1 ring-black/5 dark:bg-black/25 dark:text-gray-200 dark:ring-white/10">
                    {formatGroupLabel(pattern.group)}
                  </span>
                )}
                {pattern.relatedThemes?.map(theme => (
                  <span
                    key={theme}
                    className="rounded-full bg-white/50 px-2 py-0.5 text-xs font-medium text-gray-600 ring-1 ring-black/5 dark:bg-black/20 dark:text-gray-300 dark:ring-white/10"
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function TaxonomySection({
  title,
  description,
  groups,
  showDialogues = false,
}: {
  title: string;
  description: string;
  groups: Array<{ group: string; items: TaxonomyEntry[] }>;
  showDialogues?: boolean;
}) {
  return (
    <section className="space-y-4">
      <div className="border-b border-gray-200 dark:border-gray-800 pb-2">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 m-0">{title}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 mb-0">{description}</p>
      </div>

      <div className="space-y-5">
        {groups.map(({ group, items }) => (
          <div key={group} className="space-y-2">
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 m-0">{formatGroupLabel(group)}</h3>
              <Badge>{items.length}</Badge>
            </div>

            <div className="rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden bg-white dark:bg-black">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse my-0">
                  <thead>
                    <tr>
                      <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                        Term
                      </th>
                      <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                        Slug
                      </th>
                      <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                        Description
                      </th>
                      {showDialogues && (
                        <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                          Dialogue
                        </th>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {items.map(entry => (
                      <tr
                        key={entry.slug ?? entry.key ?? entry.title}
                        className="align-top border-b border-gray-200 dark:border-gray-800 last:border-b-0"
                      >
                        <td className="px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-100">
                          {entry.title}
                        </td>
                        <td className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300">
                          {entry.slug && <Badge>{entry.slug}</Badge>}
                          {entry.key && <Badge>{entry.key}</Badge>}
                        </td>
                        <td className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300">
                          {entry.shortDescription ?? entry.description ?? ''}
                        </td>
                        {showDialogues && (
                          <td className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300">
                            {entry.dialoguesWith && entry.dialoguesWith.length > 0 ? (
                              <div className="flex flex-wrap gap-1.5">
                                {entry.dialoguesWith.map(item => (
                                  <Badge key={item}>{item}</Badge>
                                ))}
                              </div>
                            ) : (
                              <span className="text-gray-400 dark:text-gray-500">-</span>
                            )}
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function PlanningTaxonomyPage() {
  const themeGroups = groupEntries(taxonomy.themes);
  const braidGroups = groupEntries(taxonomy.braidTopics);
  const careerGroups = groupEntries(taxonomy.careerReadinessTopics);

  return (
    <ContentLayout variant="list" leftNav={<QuickLinksNav />} fullWidth>
      <div className="space-y-7">
        <PageHeader
          title="Planning Taxonomy"
          excerpt="Temporary planning view for the controlled vocabulary that links course themes, BRAID topics, frameworks, and cross-reference patterns."
        />

        <section className="space-y-3">
          <div className="rounded-lg border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950 px-4 py-3">
            <p className="m-0 text-sm text-gray-800 dark:text-gray-200">
              Planning-only vocabulary view. Kept compact for course design work.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-6">
            <SummaryCard label="Course Themes" value={taxonomy.themes.length} />
            <SummaryCard label="Patterns" value={taxonomy.ethicalPatterns.length} />
            <SummaryCard label="BRAID Topics" value={taxonomy.braidTopics.length} />
            <SummaryCard label="Career Topics" value={taxonomy.careerReadinessTopics.length} />
            <SummaryCard label="Frameworks" value={taxonomy.governanceFrameworks.length} />
            <SummaryCard label="Relationship Types" value={taxonomy.relationshipTypes.length} />
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 m-0">Suggested Frontmatter</h2>
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white dark:bg-black">
            <dl className="grid gap-3 md:grid-cols-2 m-0">
              {Object.entries(taxonomy.suggestedFrontmatter).map(([key, value]) => (
                <div key={key}>
                  <dt className="font-mono text-sm text-gray-900 dark:text-gray-100">{key}</dt>
                  <dd className="text-sm text-gray-700 dark:text-gray-300 mt-1 ml-0">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <TaxonomySection
          title="Course Themes"
          description="Broad conceptual lenses for the SYS course. These are the main reusable ideas that can connect multiple labs, readings, and project pages."
          groups={themeGroups}
          showDialogues
        />

        <TaxonomySection
          title="BRAID Topics"
          description="Technical and governance topics specific to the BRAID case study and optional hardware-facing modules."
          groups={braidGroups}
        />

        <TaxonomySection
          title="Career Readiness Topics"
          description="Professional development topics for the required career-readiness strand, kept separate from the conceptual course-theme taxonomy."
          groups={careerGroups}
        />

        <TaxonomySection
          title="Governance Frameworks"
          description="Frameworks to reference when they clarify governance questions without forcing them into every page."
          groups={[
            {
              group: 'frameworks',
              items: taxonomy.governanceFrameworks,
            },
          ]}
        />

        <TaxonomySection
          title="Relationship Types"
          description="First-class page relationships that are stronger than simple tags and useful for course navigation."
          groups={[
            {
              group: 'page-relationships',
              items: taxonomy.relationshipTypes,
            },
          ]}
        />

        <RecognitionPatternCards patterns={taxonomy.ethicalPatterns} />
      </div>
    </ContentLayout>
  );
}
