const activeKeyListeners: Set<HTMLElement> = new Set();

export function escapeKey(
  node: HTMLElement,
  callback: (event: KeyboardEvent) => void
) {
  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      const elements = Array.from(activeKeyListeners);
      const topmostElement = elements[elements.length - 1];

      if (node === topmostElement) {
        callback(event);
      }
    }
  }

  $effect(() => {
    activeKeyListeners.add(node);
    document.addEventListener('keydown', handleKeydown);

    return () => {
      activeKeyListeners.delete(node);
      document.removeEventListener('keydown', handleKeydown);
    };
  });
}
