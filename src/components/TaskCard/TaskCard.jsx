import { Calendar, Check } from "lucide-react";
import { PRIORITY_DOT_CLASS } from "../../constants";
import { cn } from "../../utils/cn";
import { formatDueDate } from "../../utils/formatDueDate";

/**
 * @param {{
 *   title: string,
 *   note: string,
 *   priority: string,
 *   completed: boolean,
 *   dueDate: string | null
 * }} props
 */
function TaskCard({ title, note, priority, completed, dueDate }) {
  const formattedDate = formatDueDate(dueDate);
  const showDateRow = formattedDate || completed;

  return (
    <article className="relative flex items-start gap-sm px-md py-sm bg-surface-container-lowest border border-outline-variant rounded hover:bg-[rgba(0,0,0,0.02)] transition-colors">
      <button
        type="button"
        aria-label={completed ? "Mark as incomplete" : "Mark as complete"}
        className="mt-[2px] shrink-0"
      >
        {completed ? (
          <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center">
            <Check size={11} className="text-white" aria-hidden="true" />
          </div>
        ) : (
          <div className="w-5 h-5 rounded-full border-2 border-outline" />
        )}
      </button>

      <div className="flex-1 min-w-0 pr-lg">
        <p
          className={cn(
            "text-body-md text-on-surface",
            completed && "line-through text-on-surface-variant",
          )}
        >
          {title}
        </p>
        {note && (
          <p className="text-label-sm text-on-surface-variant mt-1">{note}</p>
        )}
        {showDateRow && (
          <div className="flex items-center gap-1 mt-xs">
            <Calendar
              size={12}
              className="text-on-surface-variant shrink-0"
              aria-hidden="true"
            />
            <span className="text-label-sm text-on-surface-variant">
              {completed ? "Completed today" : formattedDate}
            </span>
          </div>
        )}
      </div>

      {priority && (
        <div
          className={cn(
            "absolute top-md right-md w-2 h-2 rounded-full",
            PRIORITY_DOT_CLASS[priority],
          )}
          aria-label={`${priority} priority`}
        />
      )}
    </article>
  );
}

export default TaskCard;
