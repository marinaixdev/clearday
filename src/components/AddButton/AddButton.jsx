import { Plus } from 'lucide-react';

function AddButton() {
  return (
    <button
      type="button"
      aria-label="Add new task"
      className="fixed bottom-xl right-xl w-14 h-14 rounded-full bg-primary text-on-primary shadow-level-2 flex items-center justify-center hover:brightness-110 transition-all"
    >
      <Plus size={24} aria-hidden="true" />
    </button>
  );
}

export default AddButton;
