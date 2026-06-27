import AddButton from '../AddButton/AddButton';
import FilterBar from '../FilterBar/FilterBar';
import MainHeader from '../MainHeader/MainHeader';
import TaskList from '../TaskList/TaskList';
import {
  EMPTY_STATE_MESSAGES,
  NAV_ITEMS,
  NAV_VIEWS,
} from '../../constants';

/**
 * @param {{ activeNav: string, tasks: Array<object> }} props
 */
function MainView({ activeNav, tasks }) {
  const visibleTasks = activeNav === NAV_VIEWS.INBOX ? tasks : [];
  const activeTaskCount = visibleTasks.filter((task) => !task.completed).length;

  const viewTitle = NAV_ITEMS.find((item) => item.id === activeNav)?.label ?? activeNav;
  const emptyMessage = EMPTY_STATE_MESSAGES[activeNav];

  return (
    <div className="flex-1 flex flex-col overflow-hidden relative">
      <MainHeader title={viewTitle} taskCount={activeTaskCount} />
      <FilterBar />
      <div className="flex-1 overflow-y-auto p-lg">
        <TaskList tasks={visibleTasks} emptyMessage={emptyMessage} />
      </div>
      <AddButton />
    </div>
  );
}

export default MainView;
