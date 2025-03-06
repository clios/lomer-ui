type Options = {
  code: string;
  onKeydown: (event: KeyboardEvent) => void;
  ctrlKey?: boolean;
  metaKey?: boolean;
  shiftKey?: boolean;
  altKey?: boolean;
};

export function hotkey(node: HTMLElement, options: Options) {
  const {
    code,
    onKeydown,
    ctrlKey = false,
    metaKey = false,
    shiftKey = false,
    altKey = false
  } = options;

  function handleKeydown(event: KeyboardEvent) {
    if (
      // This is because shift key changes the event key
      event.code === code &&
      event.ctrlKey == ctrlKey &&
      event.metaKey == metaKey &&
      event.shiftKey == shiftKey &&
      event.altKey == altKey
    ) {
      event.preventDefault();
      onKeydown(event);
    }
  }

  $effect(() => {
    document.addEventListener('keydown', handleKeydown, true);
    return () => document.removeEventListener('keydown', handleKeydown, true);
  });
}
