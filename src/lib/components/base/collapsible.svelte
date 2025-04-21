<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = HTMLAttributes<HTMLDivElement> & {
    children?: Snippet;
    class?: string;
    collapseClass?: string;
    expandClass?: string;
    open?: boolean;
  };

  let { children, class: className, collapseClass, expandClass, open = $bindable() }: Props = $props();
</script>

<div
  class={twMerge(
    'box-border transition-all',
    open ? ['h-0 w-full opacity-0', collapseClass] : ['h-20 w-full opacity-100', expandClass],
    className
  )}
>
  {@render children?.()}
</div>
