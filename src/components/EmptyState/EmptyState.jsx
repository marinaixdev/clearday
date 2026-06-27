/**
 * @param {{ message: string }} props
 */
function EmptyState({ message }) {
  return (
    <section className="flex flex-col items-center justify-center py-xxl px-lg border border-dashed border-outline-variant rounded-xl text-center">
      <h2 className="text-headline-md text-on-surface">Nothing here</h2>
      <p className="text-body-md text-on-surface-variant mt-sm max-w-xs">
        {message}
      </p>
    </section>
  );
}

export default EmptyState;
