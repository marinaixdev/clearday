import { PRIORITY_OPTIONS } from "../../constants";

function AddTaskPanel() {
  return (
    <aside
      aria-label="Add task panel"
      className="lg:sticky lg:top-lg flex flex-col gap-md p-lg bg-surface-container-lowest border border-outline-variant rounded-xl shadow-level-2"
    >
      <div className="flex flex-col gap-xs">
        <p className="text-label-sm text-on-surface-variant uppercase tracking-widest">
          New task
        </p>
        <h2 className="text-headline-md text-on-surface">Add a task</h2>
        <p className="text-body-md text-on-surface-variant">
          This panel becomes a live form on Day 2.
        </p>
      </div>

      <div className="flex flex-col gap-xs">
        <label
          htmlFor="task-title"
          className="text-label-sm-bold text-on-surface-variant"
        >
          Title
        </label>
        <input
          id="task-title"
          type="text"
          placeholder="Write a task title…"
          disabled
          className="w-full border border-outline-variant rounded px-sm py-xs text-body-md text-on-surface-variant bg-surface-container-low"
        />
      </div>

      <div className="flex flex-col gap-xs">
        <label
          htmlFor="task-note"
          className="text-label-sm-bold text-on-surface-variant"
        >
          Note
        </label>
        <textarea
          id="task-note"
          rows={3}
          placeholder="Optional details…"
          disabled
          className="w-full border border-outline-variant rounded px-sm py-xs text-body-md text-on-surface-variant bg-surface-container-low resize-none"
        />
      </div>

      <div className="flex flex-col gap-xs">
        <span className="text-label-sm-bold text-on-surface-variant">
          Priority
        </span>
        <div className="flex gap-xs">
          {PRIORITY_OPTIONS.map((priority) => (
            <button
              key={priority}
              type="button"
              className="text-label-sm text-on-surface-variant bg-surface-container border border-outline-variant rounded-full px-sm py-1 capitalize"
            >
              {priority}
            </button>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="w-full bg-primary text-on-primary text-label-sm-bold rounded py-sm mt-xs"
      >
        Create task
      </button>
    </aside>
  );
}

export default AddTaskPanel;
