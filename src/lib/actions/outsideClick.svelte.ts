export function outsideClick(
  node: HTMLElement,
  callback: (event: MouseEvent) => void
) {
  function handleClick(event: MouseEvent) {
    if (!node.contains(event.target as Node)) {
      callback(event);
    }
  }

  $effect(() => {
    document.addEventListener('click', handleClick, true);
    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  });
}
