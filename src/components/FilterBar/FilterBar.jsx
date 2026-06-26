import {
  PRIORITY_FILTER_OPTIONS,
  STATUS_FILTER_OPTIONS,
} from "../../constants";

function FilterBar() {
  return (
    <section
      aria-label="Task filters"
      className="flex flex-wrap items-start gap-lg px-md py-sm bg-surface-container-lowest border border-outline-variant rounded-xl"
    >
      <div className="flex flex-col gap-xs">
        <span className="text-label-sm-bold text-on-surface-variant">
          Status
        </span>
        <div className="flex flex-wrap gap-xs">
          {STATUS_FILTER_OPTIONS.map((status) => (
            <button
              key={status}
              type="button"
              className="text-label-sm text-on-surface-variant bg-surface-container rounded-full px-sm py-1 capitalize border border-outline-variant"
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-xs">
        <span className="text-label-sm-bold text-on-surface-variant">
          Priority
        </span>
        <div className="flex flex-wrap gap-xs">
          {PRIORITY_FILTER_OPTIONS.map((priority) => (
            <button
              key={priority}
              type="button"
              className="text-label-sm text-on-surface-variant bg-surface-container rounded-full px-sm py-1 capitalize border border-outline-variant"
            >
              {priority}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FilterBar;
