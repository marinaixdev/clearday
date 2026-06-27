/**
 * Parses a YYYY-MM-DD date string as a local-timezone Date.
 *
 * new Date('2024-10-12') parses as UTC midnight, which shifts the
 * displayed date backwards in any timezone west of UTC. The three-
 * argument constructor always uses the local timezone instead.
 *
 * @param {string} dateStr  e.g. "2024-10-12"
 * @returns {Date}
 */
function parseLocalDate(dateStr) {
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day);
}

/**
 * Formats a YYYY-MM-DD date string as a human-readable relative label.
 *
 * Returns "Today", "Tomorrow", a short absolute date like "Oct 12",
 * or null when no date string is provided.
 *
 * @param {string | null | undefined} dateStr
 * @returns {string | null}
 */
export function formatDueDate(dateStr) {
  if (!dateStr) return null;

  const due = parseLocalDate(dateStr);

  const now = new Date();
  const todayMidnight    = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const tomorrowMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  const dueTime      = due.getTime();
  const todayTime    = todayMidnight.getTime();
  const tomorrowTime = tomorrowMidnight.getTime();

  if (dueTime === todayTime)    return 'Today';
  if (dueTime === tomorrowTime) return 'Tomorrow';

  return due.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}
