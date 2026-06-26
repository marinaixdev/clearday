import { PRIORITY_DOT_CLASS } from "../../constants";
import { cn } from "../../utils/cn";

/**
 * @param {{ title: string, note: string, priority: string, completed: boolean }} props
 */
function TaskCard({ title, note, priority, completed }) {
  return (
    <article className="flex items-start gap-sm px-md py-sm bg-surface-container-lowest border border-outline-variant rounded hover:bg-[rgba(0,0,0,0.02)] transition-colors">
      <div className="mt-[3px] shrink-0">
        <div
          className={cn("w-2 h-2 rounded-full", PRIORITY_DOT_CLASS[priority])}
        />
      </div>

      <div className="flex-1 min-w-0">
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
      </div>

      <span
        className={cn(
          "shrink-0 text-label-sm rounded-full px-xs py-1",
          completed
            ? "bg-secondary-container text-secondary"
            : "bg-primary-container text-on-primary-container",
        )}
      >
        {completed ? "Completed" : "Active"}
      </span>
    </article>
  );
}

export default TaskCard;
