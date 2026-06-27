import { useState } from "react";
import MainView from "./components/MainView/MainView";
import Sidebar from "./components/Sidebar/Sidebar";
import { NAV_VIEWS, PRIORITY_LEVELS } from "./constants";

/**
 * Builds a YYYY-MM-DD string for a date offset from today,
 * using local-timezone arithmetic so the string always matches
 * what formatDueDate() will compare against.
 *
 * @param {number} daysOffset
 * @returns {string}
 */
function localDateStr(daysOffset) {
  const d = new Date();
  d.setDate(d.getDate() + daysOffset);
  return [
    d.getFullYear(),
    String(d.getMonth() + 1).padStart(2, "0"),
    String(d.getDate()).padStart(2, "0"),
  ].join("-");
}

const SAMPLE_TASKS = [
  {
    id: "task-1",
    title: "Plan the week ahead",
    note: "Review priorities and block time for focused work.",
    priority: PRIORITY_LEVELS.HIGH,
    completed: false,
    dueDate: localDateStr(0),
  },
  {
    id: "task-2",
    title: "Refill water bottle",
    note: "",
    priority: PRIORITY_LEVELS.LOW,
    completed: true,
    dueDate: localDateStr(0),
  },
  {
    id: "task-3",
    title: "Prepare project notes",
    note: "Capture context before starting the next feature session.",
    priority: PRIORITY_LEVELS.MEDIUM,
    completed: false,
    dueDate: localDateStr(1),
  },
  {
    id: "task-4",
    title: "Review pull request",
    note: "",
    priority: PRIORITY_LEVELS.HIGH,
    completed: false,
    dueDate: localDateStr(5),
  },
];

function App() {
  const [activeNav, setActiveNav] = useState(NAV_VIEWS.INBOX);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar activeNav={activeNav} onNavChange={setActiveNav} />
      <MainView activeNav={activeNav} tasks={SAMPLE_TASKS} />
    </div>
  );
}

export default App;
