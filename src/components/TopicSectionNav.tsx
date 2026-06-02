'use client';

import { Children, ReactNode, useEffect, useMemo, useState } from 'react';

export interface TopicSectionNavItem {
  id: string;
  label: string;
  count?: number;
}

interface TopicSectionNavProps {
  items: TopicSectionNavItem[];
  children: ReactNode;
}

export default function TopicSectionNav({ items, children }: TopicSectionNavProps) {
  const [activeId, setActiveId] = useState(items[0]?.id || '');
  const panels = useMemo(() => Children.toArray(children), [children]);

  const activateTab = (id: string) => {
    setActiveId(id);

    if (typeof window === 'undefined') {
      return;
    }

    const nextUrl = `${window.location.pathname}${window.location.search}#${id}`;
    window.history.replaceState(null, '', nextUrl);
  };

  useEffect(() => {
    if (!items.some(item => item.id === activeId)) {
      setActiveId(items[0]?.id || '');
    }
  }, [activeId, items]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const syncActiveTabToHash = () => {
      const hashId = window.location.hash.replace(/^#/, '');
      if (hashId && items.some(item => item.id === hashId)) {
        setActiveId(hashId);
        return;
      }

      if (!hashId && items[0]?.id) {
        setActiveId(items[0].id);
      }
    };

    syncActiveTabToHash();
    window.addEventListener('hashchange', syncActiveTabToHash);
    window.addEventListener('beforeprint', syncActiveTabToHash);

    return () => {
      window.removeEventListener('hashchange', syncActiveTabToHash);
      window.removeEventListener('beforeprint', syncActiveTabToHash);
    };
  }, [items]);

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="topic-section-nav space-y-8">
      <div
        className="topic-section-tablist sticky top-0 z-10 border-b border-gray-200 bg-white/95 backdrop-blur dark:border-gray-800 dark:bg-black/95"
        role="tablist"
        aria-label="Topic sections"
      >
        <div className="flex overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-none [&::-webkit-scrollbar]:hidden">
          {items.map(item => {
            const isActive = activeId === item.id;

            return (
              <button
                key={item.id}
                id={`${item.id}-tab`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`${item.id}-panel`}
                onClick={() => activateTab(item.id)}
                className={`relative -mb-px shrink-0 whitespace-nowrap border-b-3 px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? 'border-[#0b5d8f] text-[#0b5d8f] dark:border-[#8fc4ee] dark:text-[#8fc4ee]'
                    : 'border-transparent text-gray-600 hover:border-gray-300 hover:text-[#0b5d8f] dark:text-gray-400 dark:hover:border-gray-700 dark:hover:text-[#8fc4ee]'
                }`}
              >
                {item.label}
                {typeof item.count === 'number' && (
                  <span className="ml-1 opacity-75">({item.count})</span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {items.map((item, index) => {
        const isActive = activeId === item.id;

        return (
          <div
            key={item.id}
            id={`${item.id}-panel`}
            role="tabpanel"
            aria-labelledby={`${item.id}-tab`}
            className="topic-section-panel"
            data-active={isActive ? 'true' : 'false'}
            hidden={!isActive}
          >
            {panels[index]}
          </div>
        );
      })}
    </div>
  );
}
