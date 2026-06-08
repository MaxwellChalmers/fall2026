import { getCourseConfig } from '@/lib/config';

interface StatusBannerProps {
  section?: 'fieldGuide' | 'topicsAndAssignments';
  status?: 'verified' | 'in-progress' | 'unverified' | string;
  status_reviewer?: string;
  status_date?: string;
  status_notes?: string;
}

export default function StatusBanner({
  section = 'fieldGuide',
  status = 'unverified',
  status_reviewer,
  status_date,
  status_notes,
}: StatusBannerProps) {
  const { statusBanners } = getCourseConfig();
  if (!statusBanners[section]) return null;

  const reviewerLine =
    status_reviewer && status_date
      ? ` Last reviewed by ${status_reviewer} on ${status_date}.`
      : status_reviewer
        ? ` Last reviewed by ${status_reviewer}.`
        : status_date
          ? ` Last reviewed on ${status_date}.`
          : '';

  if (status === 'verified') {
    return (
      <div className="border-b border-green-300 bg-green-100 px-4 py-3 dark:border-green-800 dark:bg-green-950/50 md:px-16">
        <div className="flex items-center gap-2 text-sm font-medium text-green-900 dark:text-green-200">
          <span className="leading-none">✅</span>
          <span><strong>VERIFIED</strong> — This card has been reviewed for accuracy and completeness.{reviewerLine}</span>
        </div>
        {status_notes && (
          <p className="mb-0 mt-1 pl-6 text-xs text-green-800 dark:text-green-300">{status_notes}</p>
        )}
      </div>
    );
  }

  if (status === 'in-progress') {
    return (
      <div className="border-b border-blue-300 bg-blue-100 px-4 py-3 dark:border-blue-800 dark:bg-blue-950/50 md:px-16">
        <div className="flex items-center gap-2 text-sm font-medium text-blue-900 dark:text-blue-200">
          <span className="leading-none">🔄</span>
          <span><strong>IN PROGRESS</strong> — This card is currently being reviewed or revised.{reviewerLine}</span>
        </div>
        {status_notes && (
          <p className="mb-0 mt-1 pl-6 text-xs text-blue-800 dark:text-blue-300">{status_notes}</p>
        )}
      </div>
    );
  }

  return (
    <div className="border-b border-amber-300 bg-amber-100 px-4 py-3 dark:border-amber-800 dark:bg-amber-950/50 md:px-16">
      <div className="flex items-center gap-2 text-sm font-medium text-amber-900 dark:text-amber-200">
        <span className="leading-none">⚠️</span>
        <span><strong>DRAFT</strong> — This card has not been reviewed for accuracy or completeness.</span>
      </div>
    </div>
  );
}
