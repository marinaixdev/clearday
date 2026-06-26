export const PRIORITY_LEVELS = {
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
};

export const STATUS_FILTERS = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
};

export const PRIORITY_FILTERS = {
  ALL: "all",
  LOW: PRIORITY_LEVELS.LOW,
  MEDIUM: PRIORITY_LEVELS.MEDIUM,
  HIGH: PRIORITY_LEVELS.HIGH,
};

export const LOCAL_STORAGE_KEYS = {
  TASKS: "clearday-tasks",
  THEME: "clearday-theme",
};

export const PRIORITY_OPTIONS = [
  PRIORITY_LEVELS.LOW,
  PRIORITY_LEVELS.MEDIUM,
  PRIORITY_LEVELS.HIGH,
];

export const STATUS_FILTER_OPTIONS = [
  STATUS_FILTERS.ALL,
  STATUS_FILTERS.ACTIVE,
  STATUS_FILTERS.COMPLETED,
];

export const PRIORITY_FILTER_OPTIONS = [
  PRIORITY_FILTERS.ALL,
  PRIORITY_FILTERS.LOW,
  PRIORITY_FILTERS.MEDIUM,
  PRIORITY_FILTERS.HIGH,
];

/**
 * Maps a priority level to its Tailwind bg utility class.
 * Full class names are written out so Tailwind's content scanner
 * can find them — dynamic strings like `bg-priority-${p}` would
 * be purged from the production build.
 */
export const PRIORITY_DOT_CLASS = {
  [PRIORITY_LEVELS.LOW]: "bg-priority-low",
  [PRIORITY_LEVELS.MEDIUM]: "bg-priority-medium",
  [PRIORITY_LEVELS.HIGH]: "bg-priority-high",
};
