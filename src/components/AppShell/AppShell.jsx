import AddTaskPanel from "../AddTaskPanel/AddTaskPanel";
import FilterBar from "../FilterBar/FilterBar";
import Header from "../Header/Header";
import TaskList from "../TaskList/TaskList";

/**
 * @param {{ tasks: Array<{id: string, title: string, note: string, priority: string, completed: boolean}> }} props
 */
function AppShell({ tasks }) {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl p-lg grid grid-cols-1 lg:grid-cols-[1fr_320px] items-start gap-lg">
        <main className="flex flex-col gap-lg">
          <Header activeTaskCount={2} />
          <FilterBar />
          <TaskList tasks={tasks} />
        </main>
        <AddTaskPanel />
      </div>
    </div>
  );
}

export default AppShell;
