export function focusTrap(node: HTMLElement) {
  const focusableSelectors = [
    'a[href]',
    'button',
    'input',
    'textarea',
    'select',
    '[tabindex]:not([tabindex="-1"])'
  ];

  function getFocusableElements() {
    return Array.from(
      node.querySelectorAll<HTMLElement>(focusableSelectors.join(','))
    ).filter(
      (el) => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden')
    );
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key !== 'Tab') return;

    const focusableElements = getFocusableElements();
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement?.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement?.focus();
    }
  }

  $effect(() => {
    const focusableElements = getFocusableElements();
    focusableElements[0]?.focus();

    node.addEventListener('keydown', handleKeyDown);

    return () => {
      node.removeEventListener('keydown', handleKeyDown);
    };
  });
}
