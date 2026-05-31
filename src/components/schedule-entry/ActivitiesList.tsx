'use client'

import Link from 'next/link';
import { Activity } from './types';

interface ActivitiesListProps {
  activities: Activity[];
  meetingKey: string;
  checklist: {
    isChecked: (key: string) => boolean;
    toggleChecked: (key: string) => void;
  };
  enableChecklist: boolean;
  isDark: boolean;
}

export default function ActivitiesList({
  activities,
  meetingKey,
  checklist,
  enableChecklist,
  isDark,
}: ActivitiesListProps) {
  // Filter out excluded activities
  const filteredActivities = activities.filter(activity => !(activity.excluded === 1));
  
  if (filteredActivities.length === 0) {
    return null;
  }

  function renderStatusBadge(activity: Activity) {
    if (activity.draft !== 0 && activity.draft !== 1) {
      return null;
    }

    const isDraft = activity.draft === 1;
    const label = isDraft ? 'Draft' : 'Published';
    const className = isDraft
      ? 'inline-block px-1.5 py-0.5 text-[11px] font-medium rounded uppercase bg-amber-50 border border-amber-200 text-gray-700 dark:bg-amber-950 dark:border-amber-900 dark:text-gray-300'
      : 'inline-block px-1.5 py-0.5 text-[11px] font-medium rounded uppercase bg-green-50 border border-green-200 text-gray-700 dark:bg-green-950 dark:border-green-900 dark:text-gray-300';

    return <span className={className}>{label}</span>;
  }

  function renderActivity(activity: Activity, index: number) {
    const isDraft = activity.draft && activity.draft === 1;
    const itemKey = `${meetingKey}-activity-${index}`;
    const isChecked = enableChecklist && !isDraft ? checklist.isChecked(itemKey) : false;
    
    return (
      <div className="flex items-start gap-2">
        {!isDraft && (
          <input
            type="checkbox"
            aria-label={`Mark activity "${activity.title}" as ${isChecked ? 'uncompleted' : 'completed'}`}
            checked={isChecked}
            onChange={() => enableChecklist && checklist.toggleChecked(itemKey)}
            disabled={!enableChecklist}
            onClick={(e) => e.stopPropagation()}
            className="mt-1 w-4 h-4 rounded border-2 border-gray-300 dark:border-gray-600 accent-blue-600 dark:accent-blue-400 cursor-pointer flex-shrink-0"
            style={isDark ? { 
              backgroundColor: isChecked ? '#3b82f6' : '#1f2937',
              borderColor: isChecked ? '#3b82f6' : '#4b5563'
            } : undefined}
          />
        )}
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            {isDraft ? (
              <span>{activity.title}</span>
            ) : (
              <>
                {(() => {
                  const isExternalLink = activity.url?.startsWith('https');
                  const url = activity.url || '#';
                  const linkClass = `text-blue-600 dark:text-blue-400 hover:underline ${isChecked ? '!line-through opacity-60' : ''}`;

                  if (isExternalLink) {
                    return (
                      <Link href={url} target="_blank" className={linkClass} onClick={(e) => e.stopPropagation()}>
                        {activity.title}
                      </Link>
                    );
                  }
                  return (
                    <Link href={url} className={linkClass} onClick={(e) => e.stopPropagation()}>
                      {activity.title}
                    </Link>
                  );
                })()}
              </>
            )}
            {renderStatusBadge(activity)}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-6">
      <strong className="text-gray-700 dark:text-gray-300" style={isDark ? { color: '#d1d5db' } : undefined}>Slides / Activities</strong>
      <ul className="!list-none !pl-4">
        {filteredActivities.map((activity, filteredIndex) => {
          // Find the original index in the full activities array for the itemKey
          const originalIndex = activities.findIndex(a => a === activity) ?? filteredIndex;
          return (
            <li key={filteredIndex} className="text-gray-700 dark:text-gray-300">
              {renderActivity(activity, originalIndex)}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
