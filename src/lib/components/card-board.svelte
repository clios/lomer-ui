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
  class="relative bg-[size:10px_10px] bg-fixed shadow-md my-2 [--color-border:var(--color-fg)]/10 bg-[image:repeating-linear-gradient(315deg,_var(--color-border)_0,_var(--color-border)_1px,_transparent_0,_transparent_50%)] border dark:[--color-border:var(--color-fg)]/10 dark:border-muted-fg w-full h-full overflow-hidden"
>
  <div class={twMerge('flex p-2 sm:p-4 md:p-6', className)}>
    {@render children?.()}
  </div>
</div>
