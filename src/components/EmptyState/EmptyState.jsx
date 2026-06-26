function EmptyState() {
  return (
    <section className="flex flex-col items-center justify-center py-xxl px-lg border border-dashed border-outline-variant rounded-xl text-center">
      <h2 className="text-headline-md text-on-surface">No tasks yet</h2>
      <p className="text-body-md text-on-surface-variant mt-sm max-w-xs">
        Add your first task using the panel on the right.
      </p>
    </section>
  );
}

export default EmptyState;
