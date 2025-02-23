<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  type Props = {
    children?: Snippet;
    class?: string;
    clickable?: boolean;
    highlightable?: boolean;
    onclick?: () => void;
  };

  let {
    children,
    class: className,
    clickable = false,
    highlightable = false,
    ...props
  }: Props = $props();

  function onclick() {
    if (!clickable) return;
    onclick;
  }
</script>

<tr
  class={twMerge(
    'outline-primary -outline-offset-1',
    clickable && 'hover:bg-primary/15 cursor-pointer hover:outline',
    clickable && 'focus:bg-primary/15 focus:outline',
    className
  )}
  tabindex={clickable ? 0 : -1}
  {onclick}
  {...props}
>
  {@render children?.()}
</tr>
