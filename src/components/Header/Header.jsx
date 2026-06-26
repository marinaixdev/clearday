/**
 * @param {{ activeTaskCount: number }} props
 */
function Header({ activeTaskCount }) {
  return (
    <header className="flex items-start justify-between gap-md p-lg bg-surface-container-lowest border border-outline-variant rounded-xl">
      <div>
        <p className="text-label-sm text-on-surface-variant uppercase tracking-widest">
          Personal task manager
        </p>
        <h1 className="text-headline-md text-on-surface mt-xs">Clearday</h1>
        <p className="text-body-md text-on-surface-variant mt-xs max-w-sm">
          A calm workspace for tracking the tasks that matter today.
        </p>
      </div>

      <div className="flex flex-col items-center bg-surface-container-low border border-outline-variant rounded-lg px-md py-sm min-w-[96px] shrink-0">
        <span className="text-label-sm text-on-surface-variant">Active</span>
        <strong className="text-headline-md text-on-surface">
          {activeTaskCount}
        </strong>
      </div>
    </header>
  );
}

export default Header;
