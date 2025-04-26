<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';

  type Props = HTMLAttributes<HTMLTableRowElement> & {
    children?: Snippet;
    class?: string;
    clickable?: boolean;
    highlightable?: boolean;
    onclick?: () => void;
  };

  let { children, class: className, clickable, highlightable, ...props }: Props = $props();

  function onclick() {
    if (!clickable) return;
    onclick;
  }
</script>

<tr
  class={twMerge(
    'outline-primary -outline-offset-1',
    clickable && 'hover:bg-primary/15 cursor-pointer hover:outline',
    clickable && 'focus-visible:bg-primary/15 focus-visible:outline',
    className
  )}
  tabindex={clickable ? 0 : -1}
  {onclick}
  {...props}
>
  {@render children?.()}
</tr>
