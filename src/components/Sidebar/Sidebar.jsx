import {
  CalendarDays,
  CalendarRange,
  FolderKanban,
  Inbox,
} from 'lucide-react';
import { NAV_ITEMS, NAV_VIEWS } from '../../constants';
import { cn } from '../../utils/cn';

/**
 * Icon map lives here — not in constants — because React component
 * references are a UI concern, not a domain constant.
 */
const NAV_ICONS = {
  [NAV_VIEWS.INBOX]:    Inbox,
  [NAV_VIEWS.TODAY]:    CalendarDays,
  [NAV_VIEWS.UPCOMING]: CalendarRange,
  [NAV_VIEWS.PROJECTS]: FolderKanban,
};

/**
 * A single sidebar navigation row.
 * Defined locally because it is only ever used by Sidebar.
 *
 * @param {{ id: string, label: string, isActive: boolean, onClick: () => void }} props
 */
function NavItem({ id, label, isActive, onClick }) {
  const Icon = NAV_ICONS[id];
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'flex items-center gap-sm w-full px-sm py-xs rounded-md text-body-md transition-colors',
        isActive
          ? 'bg-primary-container text-on-primary-container font-bold'
          : 'text-on-surface-variant hover:bg-surface-container',
      )}
    >
      <Icon size={16} aria-hidden="true" />
      {label}
    </button>
  );
}

/**
 * @param {{ activeNav: string, onNavChange: (id: string) => void }} props
 */
function Sidebar({ activeNav, onNavChange }) {
  return (
    <aside className="w-60 shrink-0 h-full flex flex-col border-r border-outline-variant bg-surface-container-lowest">
      <div className="px-lg pt-md pb-lg">
        <h1 className="text-headline-md text-on-surface">Clearday</h1>
        <p className="text-label-sm text-on-surface-variant mt-1">Task Manager</p>
      </div>

      <nav className="flex flex-col gap-1 px-sm">
        {NAV_ITEMS.map(({ id, label }) => (
          <NavItem
            key={id}
            id={id}
            label={label}
            isActive={activeNav === id}
            onClick={() => onNavChange(id)}
          />
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
