import EmptyState from "../EmptyState/EmptyState";
import TaskCard from "../TaskCard/TaskCard";

/**
 * @param {{ tasks: Array<{id: string, title: string, note: string, priority: string, completed: boolean}> }} props
 */
function TaskList({ tasks }) {
  if (!tasks.length) {
    return <EmptyState />;
  }

  return (
    <section aria-label="Task list" className="flex flex-col gap-xs">
      {tasks.map(({ id, title, note, priority, completed }) => (
        <TaskCard
          key={id}
          title={title}
          note={note}
          priority={priority}
          completed={completed}
        />
      ))}
    </section>
  );
}

export default TaskList;
