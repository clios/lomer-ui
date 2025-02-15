const activeModals: Set<HTMLElement> = new Set();

export function escapeKey(
  node: HTMLElement,
  callback: (event: KeyboardEvent) => void
) {
  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      const modals = Array.from(activeModals);
      const topmostModal = modals[modals.length - 1];

      if (node === topmostModal) {
        callback(event);
      }
    }
  }

  $effect(() => {
    activeModals.add(node);
    document.addEventListener('keydown', handleKeydown);

    return () => {
      activeModals.delete(node);
      document.removeEventListener('keydown', handleKeydown);
    };
  });
}
