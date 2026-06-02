'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import {
  Bars3Icon,
  BookOpenIcon,
  CalendarDaysIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ClipboardDocumentListIcon,
  FolderIcon,
  HomeIcon,
  MoonIcon,
  ScaleIcon,
  SunIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { useDarkMode } from '@/hooks/useDarkMode';
import { readTopicCompletion, TOPIC_PROGRESS_EVENT } from '@/lib/topic-progress';

interface SidebarTopicItem {
  id: string;
  title: string;
  date: string;
  contentHref: string;
}

interface SidebarModuleItem {
  id: number;
  title: string;
  href: string;
  topics: SidebarTopicItem[];
}

interface SidebarNavClientProps {
  courseTitle: string;
  modules: SidebarModuleItem[];
}

const SIDEBAR_COLLAPSED_KEY = 'sidebar-collapsed';

function normalizePath(path: string) {
  return path.replace(/^\/fall2026/, '').replace(/\/$/, '') || '/';
}

function getTopicSlugFromHref(href: string) {
  return href.match(/\/topics\/([^/#?]+)/)?.[1] || null;
}

export default function SidebarNavClient({ courseTitle, modules }: SidebarNavClientProps) {
  const pathname = usePathname();
  const router = useRouter();
  const normalizedPath = normalizePath(pathname);
  const isDark = useDarkMode();
  const [mounted, setMounted] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [completedTopics, setCompletedTopics] = useState<Record<string, boolean>>({});
  const [modulesOpen, setModulesOpen] = useState(
    normalizedPath.startsWith('/modules') || normalizedPath.startsWith('/topics')
  );
  const [openModuleId, setOpenModuleId] = useState<number | null>(() => {
    const activeModule = modules.find(module =>
      module.topics.some(topic => normalizePath(topic.contentHref) === normalizedPath)
    );
    return activeModule?.id ?? modules[0]?.id ?? null;
  });

  useEffect(() => {
    setMounted(true);
    const savedCollapsed = localStorage.getItem(SIDEBAR_COLLAPSED_KEY);
    if (savedCollapsed !== null) {
      setCollapsed(savedCollapsed === 'true');
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const refreshCompletedTopics = () => {
      const nextCompletedTopics: Record<string, boolean> = {};

      modules.forEach(module => {
        module.topics.forEach(topic => {
          const topicSlug = getTopicSlugFromHref(topic.contentHref);
          if (topicSlug) {
            nextCompletedTopics[topicSlug] = readTopicCompletion(topicSlug);
          }
        });
      });

      setCompletedTopics(nextCompletedTopics);
    };

    const handleTopicProgressChanged = () => {
      refreshCompletedTopics();
    };

    const handleStorage = (event: StorageEvent) => {
      if (event.key?.startsWith('topic-complete-')) {
        refreshCompletedTopics();
      }
    };

    refreshCompletedTopics();
    window.addEventListener(TOPIC_PROGRESS_EVENT, handleTopicProgressChanged as EventListener);
    window.addEventListener('storage', handleStorage);

    return () => {
      window.removeEventListener(TOPIC_PROGRESS_EVENT, handleTopicProgressChanged as EventListener);
      window.removeEventListener('storage', handleStorage);
    };
  }, [modules]);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.style.setProperty('--app-sidebar-width', collapsed ? '5rem' : '18rem');
  }, [collapsed]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const activeModule = modules.find(module =>
      module.topics.some(topic => normalizePath(topic.contentHref) === normalizedPath)
    );

    if (activeModule) {
      setOpenModuleId(activeModule.id);
      setModulesOpen(true);
    }
  }, [modules, normalizedPath]);

  const activeTaxonomy = normalizedPath.startsWith('/planning/taxonomy');
  const activePatternGuide = normalizedPath.startsWith('/ethical-pattern-recognition-field-guide');
  const activeAssignments = normalizedPath === '/assignments' || normalizedPath.startsWith('/assignments/');
  const activeResources = normalizedPath === '/resources' || normalizedPath.startsWith('/resources/');
  const activeModules = normalizedPath === '/modules' || normalizedPath.startsWith('/topics/');
  const activeHome = normalizedPath === '/' || normalizedPath === '/syllabus';

  const navItems = useMemo(
    () => [
      { label: 'Home', href: '/', icon: HomeIcon, active: activeHome },
      { label: 'Course Schedule', href: '/modules', icon: CalendarDaysIcon, active: activeModules },
      { label: 'Resources', href: '/resources', icon: BookOpenIcon, active: activeResources },
      { label: 'Assignments', href: '/assignments', icon: ClipboardDocumentListIcon, active: activeAssignments },
      {
        label: 'Taxonomy',
        href: '/planning/taxonomy',
        icon: FolderIcon,
        active: activeTaxonomy,
      },
      {
        label: 'Ethical Pattern Recognition Field Guide',
        href: '/ethical-pattern-recognition-field-guide',
        icon: ScaleIcon,
        tone: 'violet' as const,
        active: activePatternGuide,
      },
    ],
    [activeAssignments, activeHome, activeModules, activePatternGuide, activeResources, activeTaxonomy]
  );

  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleCollapsed = () => {
    const newValue = !collapsed;
    setCollapsed(newValue);
    localStorage.setItem(SIDEBAR_COLLAPSED_KEY, String(newValue));

    if (newValue) {
      setModulesOpen(false);
      setOpenModuleId(null);
    }
  };

  const toggleModules = () => {
    if (collapsed) {
      setCollapsed(false);
      localStorage.setItem(SIDEBAR_COLLAPSED_KEY, 'false');
      setModulesOpen(true);
      setOpenModuleId(modules[0]?.id ?? null);
      router.push('/modules');
      return;
    }

    if (!modulesOpen) {
      if (openModuleId === null) {
        setOpenModuleId(modules[0]?.id ?? null);
      }
      setModulesOpen(true);
      router.push('/modules');
      return;
    }

    setModulesOpen(false);
  };

  const toggleModule = (moduleId: number) => {
    setOpenModuleId(current => {
      if (current === moduleId) {
        return null;
      }
      return moduleId;
    });
  };

  const baseLinkClass = 'flex items-center gap-3 px-3 py-2 text-sm transition-colors !no-underline !border-0';
  const activeTopLevelClass = 'bg-sky-100 font-semibold text-sky-900 dark:bg-sky-900/45 dark:text-sky-100';
  const activeVioletTopLevelClass =
    'bg-violet-100 font-semibold text-violet-900 dark:bg-violet-900/45 dark:text-violet-100';
  const inactiveTopLevelClass =
    'text-slate-700 hover:bg-slate-100/80 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900/70 dark:hover:text-slate-100';
  const activeNestedClass =
    'border-l-4 border-b border-l-sky-400 border-b-sky-200 bg-transparent font-semibold text-sky-950 dark:border-l-sky-500 dark:border-b-sky-900 dark:text-sky-100';
  const inactiveNestedClass =
    'border-l-4 border-transparent text-slate-700 hover:border-sky-200 hover:bg-sky-50/70 hover:text-sky-900 dark:text-slate-300 dark:hover:border-sky-800 dark:hover:bg-sky-950/30 dark:hover:text-sky-200';

  function getTopLevelItemClass(item: { active: boolean; tone?: 'violet' }) {
    if (!item.active) {
      return inactiveTopLevelClass;
    }

    return item.tone === 'violet' ? activeVioletTopLevelClass : activeTopLevelClass;
  }

  function renderNavContent(label: string, Icon: React.ComponentType<React.ComponentProps<'svg'>>) {
    return (
      <>
        <Icon className="h-5 w-5 shrink-0" />
        <span
          className={`min-w-0 truncate transition-[opacity,width] duration-300 ease-in-out ${
            collapsed ? 'w-0 opacity-0' : 'w-auto opacity-100'
          }`}
        >
          {label}
        </span>
      </>
    );
  }

  const sidebarInner = (
    <div
      className={`flex h-full flex-col border-r border-slate-200/80 bg-slate-50/80 dark:border-slate-800 dark:bg-slate-950 ${
        collapsed ? 'w-20' : 'w-72'
      } transition-[width] duration-300 ease-in-out`}
    >
      <div className="flex items-center justify-between border-b border-slate-200/80 px-4 py-4 dark:border-slate-800">
        <Link href="/" className="no-underline! border-0! min-w-0">
          <div className={`font-medium text-slate-900 dark:text-slate-100 ${collapsed ? 'text-sm' : 'text-base'}`}>
            {collapsed ? 'SYS' : courseTitle}
          </div>
        </Link>
        {!mobileOpen && mounted && (
          <button
            onClick={toggleCollapsed}
            className="hidden md:flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900"
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? <ChevronRightIcon className="h-5 w-5" /> : <ChevronDownIcon className="h-5 w-5 -rotate-90" />}
          </button>
        )}
        {mobileOpen && (
          <button
            onClick={() => setMobileOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900 md:hidden"
            aria-label="Close navigation"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto py-4 scrollbar-none [&::-webkit-scrollbar]:hidden">
        <nav className="divide-y divide-slate-200/80 overflow-hidden border-y border-slate-200/80 dark:divide-slate-800 dark:border-slate-800">
          {navItems.slice(0, 1).map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={`${baseLinkClass} ${getTopLevelItemClass(item)} ${collapsed ? 'justify-center' : ''}`}
            >
              {renderNavContent(item.label, item.icon)}
            </Link>
          ))}

          <div className="bg-slate-50/80 dark:bg-slate-950">
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={toggleModules}
                aria-expanded={modulesOpen}
                className={`${baseLinkClass} w-full ${
                  activeModules ? activeTopLevelClass : inactiveTopLevelClass
                } ${collapsed ? 'justify-center' : 'justify-between'}`}
              >
                <span className="flex min-w-0 items-center gap-3">
                  {renderNavContent('Course Schedule', CalendarDaysIcon)}
                </span>
                {!collapsed && (
                  <ChevronDownIcon
                    className={`h-4 w-4 shrink-0 text-slate-500 transition-transform dark:text-slate-400 ${
                      modulesOpen ? '' : '-rotate-90'
                    }`}
                  />
                )}
              </button>
            </div>

            {!collapsed && modulesOpen && (
              <div className="border-t border-sky-200/80 bg-sky-50/40 dark:border-sky-900/70 dark:bg-sky-950/20">
                <div className="divide-y divide-sky-200/60 dark:divide-sky-900/50">
                  {modules.map(module => {
                    const isOpen = openModuleId === module.id;

                    return (
                      <section key={module.id} className="bg-sky-50/20 transition-colors dark:bg-transparent">
                        <div className="flex items-center">
                          <button
                            type="button"
                            onClick={() => toggleModule(module.id)}
                            aria-expanded={isOpen}
                            className={`group flex w-full min-w-0 items-center gap-0 pl-6 pr-3 py-1.5 text-left text-sm transition-colors ${
                              isOpen
                                ? 'bg-white font-semibold text-sky-900 dark:bg-black dark:text-sky-100'
                                : 'bg-transparent text-slate-800 hover:bg-sky-50/80 hover:text-sky-900 dark:text-slate-200 dark:hover:bg-sky-950/30 dark:hover:text-sky-200'
                            }`}
                          >
                            {/* <span
                              className={`mr-4 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-center text-[12px] font-semibold ${
                                isOpen
                                  ? 'bg-sky-200 text-sky-900 ring-1 ring-sky-300 dark:bg-sky-800/70 dark:text-sky-100 dark:ring-sky-700'
                                  : 'bg-slate-50/90 text-slate-600 ring-1 ring-slate-200 group-hover:bg-sky-100 group-hover:text-sky-900 dark:bg-slate-950/80 dark:text-slate-400 dark:ring-slate-800 dark:group-hover:bg-sky-950/50 dark:group-hover:text-sky-200'
                              }`}
                            >
                              {module.id}
                            </span> */}
                            <span className="line-clamp-2 min-w-0 ml-5 leading-snug">
                              {module.id}. {module.title}
                            </span>
                            <ChevronDownIcon
                              className={`ml-auto h-3.5 w-3.5 shrink-0 text-slate-500 transition-transform dark:text-slate-400 ${
                                isOpen ? '' : '-rotate-90'
                              }`}
                            />
                          </button>
                        </div>

                        <div
                          className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
                            isOpen ? 'max-h-168 opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="border-t border-sky-200/70 bg-white dark:border-sky-900/50 dark:bg-black">
                            <div className="divide-y divide-sky-100 dark:divide-sky-900/40">
                              {module.topics.map(topic => {
                                const isTopicActive = normalizePath(topic.contentHref) === normalizedPath;
                                const topicSlug = getTopicSlugFromHref(topic.contentHref);
                                const isCompleted = topicSlug ? completedTopics[topicSlug] === true : false;

                                return (
                                  <Link
                                    key={topic.id}
                                    href={topic.contentHref}
                                    className={`block py-1.5 pl-15 pr-3 transition-colors no-underline! ${
                                      isTopicActive ? activeNestedClass : inactiveNestedClass
                                    }`}
                                  >
                                    <span className="min-w-0">
                                      <span
                                        className={`block min-w-0 text-sm leading-snug ${
                                          isTopicActive ? 'font-semibold' : 'font-normal'
                                        }`}
                                      >
                                        {topic.title}
                                      </span>
                                      {/* <span className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] font-normal text-gray-400 dark:text-gray-600">
                                        {isCompleted && (
                                          <i
                                            className="fa-solid fa-circle-check text-sm text-emerald-700 dark:text-emerald-400"
                                            aria-label="Completed"
                                            title="Completed"
                                          />
                                        )}
                                        <span>{topic.date}</span>
                                      </span> */}
                                    </span>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </section>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {navItems.slice(2).map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={`${baseLinkClass} ${getTopLevelItemClass(item)} ${collapsed ? 'justify-center' : ''}`}
            >
              {renderNavContent(item.label, item.icon)}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-slate-200/80 px-3 py-3 dark:border-slate-800">
        <button
          onClick={toggleDarkMode}
          className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900 ${
            collapsed ? 'justify-center' : ''
          }`}
        >
          {isDark ? <SunIcon className="h-5 w-5 shrink-0" /> : <MoonIcon className="h-5 w-5 shrink-0" />}
          <span
            className={`min-w-0 truncate transition-[opacity,width] duration-300 ease-in-out ${
              collapsed ? 'w-0 opacity-0' : 'w-auto opacity-100'
            }`}
          >
            {isDark ? 'Light Mode' : 'Dark Mode'}
          </span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      <div className="md:hidden sticky top-0 z-40 flex h-16 items-center justify-between border-b border-slate-200/80 bg-slate-50 px-4 dark:border-slate-800 dark:bg-slate-950">
        <button
          onClick={() => setMobileOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900"
          aria-label="Open navigation"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
        <Link href="/" className="text-sm font-medium text-slate-900 dark:text-slate-100 no-underline! border-0!">
          {courseTitle}
        </Link>
        <div className="w-10" aria-hidden="true" />
      </div>

      <aside className="hidden md:block md:h-screen md:shrink-0">{sidebarInner}</aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute inset-y-0 left-0">{sidebarInner}</div>
        </div>
      )}
    </>
  );
}
