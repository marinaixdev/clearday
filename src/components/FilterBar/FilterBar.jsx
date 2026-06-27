import { useState } from "react";
import { STATUS_FILTER_OPTIONS, STATUS_FILTERS } from "../../constants";
import { cn } from "../../utils/cn";

function FilterBar() {
  const [activeFilter, setActiveFilter] = useState(STATUS_FILTERS.ALL);

  return (
    <div className="flex items-center justify-between px-lg py-sm border-b border-outline-variant shrink-0">
      <div className="flex gap-xs">
        {STATUS_FILTER_OPTIONS.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={cn(
              "text-label-sm rounded-full px-sm py-1 capitalize transition-colors",
              activeFilter === filter
                ? "bg-primary text-on-primary"
                : "border border-outline-variant text-on-surface-variant hover:bg-surface-container",
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <select
        aria-label="Filter by priority"
        className="text-label-sm text-on-surface-variant border border-outline-variant rounded px-sm py-1 bg-surface-container-lowest cursor-pointer"
      >
        <option value="all">All priorities</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  );
}

export default FilterBar;
