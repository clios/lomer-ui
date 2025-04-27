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

  let { children, class: className, collapseClass, expandClass, open = $bindable(false) }: Props = $props();
</script>

<div
  class={twMerge(
    'box-border transition-all',
    open ? ['h-20 w-full opacity-100', expandClass] : ['h-0 w-full opacity-0', collapseClass],
    className
  )}
>
  {@render children?.()}
</div>
