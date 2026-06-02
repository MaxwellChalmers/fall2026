import Link from 'next/link';
import { getPostData, getQuizData } from '@/lib/markdown';
import MarkdownContent from '@/components/MarkdownContent';
import ContentLayout from '@/components/ContentLayout';
import ResourceQuiz from '@/components/ResourceQuiz';
import QuickLinksNav from '@/components/QuickLinksNav';
import { getTopics } from '@/lib/topics';

type SyllabusTopics = Awaited<ReturnType<typeof getTopics>>;

function splitContentAfterIntroTable(content: string) {
  const closingTableTag = '</table>';
  const tableEndIndex = content.toLowerCase().indexOf(closingTableTag);

  if (tableEndIndex === -1) {
    return {
      introContent: content,
      remainingContent: '',
    };
  }

  const splitIndex = tableEndIndex + closingTableTag.length;

  return {
    introContent: content.slice(0, splitIndex),
    remainingContent: content.slice(splitIndex),
  };
}

function SyllabusTopicList({ topics }: { topics: SyllabusTopics }) {
  return (
    // <section id="topic-list" className="my-10 rounded-2xl border border-sky-200 bg-sky-50/70 p-5 dark:border-sky-900 dark:bg-sky-950/20">
    //   <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0b5d8f] dark:text-[#8fc4ee]">
    //     Course Topics
    //   </p>
    //   <h2 className="m-0 text-2xl font-semibold tracking-tight text-gray-950 dark:text-gray-50">
    //     Topic List
    //   </h2>
    //   <p className="mb-0 mt-3 text-sm leading-6 text-gray-700 dark:text-gray-300">
    //     Each topic links to its course page and includes the scheduled meeting date.
    //   </p>

    <div className="mt-6 space-y-6">
        <h2>Schedule</h2>
      {topics.map(topic => (
        <section key={topic.id}>
          <div className="border-b border-gray-200 pt-1 pb-0 dark:border-gray-800">
            <h3 className="m-0 text-lg font-semibold text-gray-950 dark:text-gray-50">
              Module {topic.id}. {topic.title}
            </h3>
          </div>

          <ol className="m-0 divide-y divide-gray-200 p-0! dark:divide-gray-800">
            {topic.meetings.map((meeting, index) => {
              const topicHref = meeting.slug ? `/topics/${meeting.slug}` : undefined;

              return (
                <li
                  key={`${topic.id}-${meeting.slug || index}`}
                  className="grid gap-4 px-2 py-2 grid-cols-[6rem_minmax(0,1fr)]"
                >
                  <span className="text-sm text-gray-600 dark:text-gray-400">{meeting.date}</span>
                  {topicHref ? (
                    <Link
                      href={topicHref}
                      className="min-w-0 text-sm font-medium text-gray-950 no-underline hover:text-[#0b5d8f] dark:text-gray-100 dark:hover:text-[#8fc4ee]"
                    >
                      {meeting.topic}
                    </Link>
                  ) : (
                    <span className="min-w-0 text-sm font-medium text-gray-950 dark:text-gray-100">
                      {meeting.topic}
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </section>
      ))}
    </div>
    // </section>
  );
}

export default async function SyllabusPage() {
  const postData = await getPostData('syllabus');
  const { title, excerpt, heading_max_level } = postData;
  const quizData = getQuizData('syllabus');
  const topics = await getTopics();
  const { introContent, remainingContent } = splitContentAfterIntroTable(postData.content);

  return (
    <ContentLayout
      variant="detail-with-toc"
      leftNav={<QuickLinksNav />}
      showToc={postData.toc !== false}
      tocMaxLevel={heading_max_level || 2}
      fullWidth
      header={
        <header className="grid gap-6 border-b border-sky-200 bg-sky-50 px-4 py-12 dark:border-sky-900 dark:bg-sky-950/30 md:px-16">
          <div>
            <h1 className="m-0! max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight text-gray-950 dark:text-gray-50">
              {title}
            </h1>
            {excerpt && (
              <p className="mb-0 mt-5 max-w-4xl text-lg leading-8 text-gray-700 dark:text-gray-300">{excerpt}</p>
            )}
          </div>
        </header>
      }
    >
      <div className="max-w-4xl pr-8 pt-6">
        <MarkdownContent content={introContent} />
        <SyllabusTopicList topics={topics} />
        {remainingContent && <MarkdownContent content={remainingContent} />}

        {/* Quiz */}
        {quizData && <ResourceQuiz key="quiz-syllabus" quizData={quizData} resourceSlug="syllabus" variant="desktop" />}
      </div>
    </ContentLayout>
  );
}
