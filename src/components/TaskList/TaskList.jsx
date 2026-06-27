import EmptyState from "../EmptyState/EmptyState";
import TaskCard from "../TaskCard/TaskCard";

/**
 * @param {{
 *   tasks: Array<{id: string, title: string, note: string, priority: string, completed: boolean, dueDate: string}>,
 *   emptyMessage: string
 * }} props
 */
function TaskList({ tasks, emptyMessage }) {
  if (!tasks.length) {
    return <EmptyState message={emptyMessage} />;
  }

  return (
    <section aria-label="Task list" className="flex flex-col gap-xs">
      {tasks.map(({ id, title, note, priority, completed, dueDate }) => (
        <TaskCard
          key={id}
          title={title}
          note={note}
          priority={priority}
          completed={completed}
          dueDate={dueDate}
        />
      ))}
    </section>
  );
}

export default TaskList;
