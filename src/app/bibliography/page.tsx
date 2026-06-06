import ContentLayout from '@/components/ContentLayout';
import QuickLinksNav from '@/components/QuickLinksNav';
import TopLevelPageHeader from '@/components/TopLevelPageHeader';
import BibliographyListClient from '@/components/bibliography/BibliographyListClient';
import { getResourceLinksConfig, type ResourceLink } from '@/lib/resource-links';
import { getAllReadings } from '@/lib/readings';

export default function BibliographyPage() {
  const { tagGroups } = getResourceLinksConfig();
  const links: ResourceLink[] = getAllReadings().map(r => ({
    id: r.id,
    title: r.title,
    url: r.url,
    authors: r.authors || undefined,
    tags: r.tags,
    type: r.type || undefined,
    published: r.published || undefined,
    notes: r.notes || undefined,
  }));

  return (
    <ContentLayout
      variant="list"
      leftNav={<QuickLinksNav />}
      header={
        <TopLevelPageHeader
          label="Bibliography"
          title="Bibliography"
          description="Curated readings, articles, and reference links for the course."
          tone="slate"
        />
      }
    >
      <div className="space-y-6">
        <BibliographyListClient links={links} tagGroups={tagGroups} />
      </div>
    </ContentLayout>
  );
}
