export function verticalNavigation(node: HTMLElement) {
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
    const focusableElements = getFocusableElements();
    const currentIndex = focusableElements.indexOf(
      document.activeElement as HTMLElement
    );

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      const nextIndex = (currentIndex + 1) % focusableElements.length;
      focusableElements[nextIndex]?.focus();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      const prevIndex =
        (currentIndex - 1 + focusableElements.length) %
        focusableElements.length;
      focusableElements[prevIndex]?.focus();
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
