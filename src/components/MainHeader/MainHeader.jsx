import { Moon } from 'lucide-react';

/**
 * @param {{ title: string, taskCount: number }} props
 */
function MainHeader({ title, taskCount }) {
  return (
    <header className="flex items-center justify-between px-lg py-md border-b border-outline-variant shrink-0">
      <h2 className="text-headline-md text-on-surface">{title}</h2>

      <div className="flex items-center gap-sm">
        <span className="text-label-sm bg-primary-container text-on-primary-container rounded-full px-sm py-1">
          {taskCount} {taskCount === 1 ? 'task' : 'tasks'} left
        </span>

        <button
          type="button"
          aria-label="Toggle dark mode (coming soon)"
          className="p-1 rounded text-on-surface-variant hover:bg-surface-container transition-colors"
        >
          <Moon size={18} aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}

export default MainHeader;
