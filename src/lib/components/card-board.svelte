<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  type Props = {
    children?: Snippet;
    class?: string;
  };

  let { class: className, children }: Props = $props();
</script>

<div
  class={twMerge(
    'dark:border-muted-fg relative mb-4 h-full w-full overflow-hidden border border-dotted bg-[image:repeating-linear-gradient(315deg,_var(--color-border)_0,_var(--color-border)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed shadow-xs [--color-border:var(--color-fg)]/10 dark:[--color-border:var(--color-fg)]/5'
  )}
>
  <div class={twMerge('flex p-2 sm:p-4 md:p-6', className)}>
    {@render children?.()}
  </div>
</div>
