import AppShell from "./components/AppShell/AppShell";
import { PRIORITY_LEVELS } from "./constants";

const SAMPLE_TASKS = [
  {
    id: "task-1",
    title: "Plan the week ahead",
    note: "Review priorities and block time for focused work.",
    priority: PRIORITY_LEVELS.HIGH,
    completed: false,
  },
  {
    id: "task-2",
    title: "Refill water bottle",
    note: "",
    priority: PRIORITY_LEVELS.LOW,
    completed: true,
  },
  {
    id: "task-3",
    title: "Prepare project notes",
    note: "Capture context before starting the next feature session.",
    priority: PRIORITY_LEVELS.MEDIUM,
    completed: false,
  },
];

function App() {
  return <AppShell tasks={SAMPLE_TASKS} />;
}

export default App;
