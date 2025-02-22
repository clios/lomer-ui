<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLThAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';

  type Props = {
    children?: Snippet;
    class?: string;
  } & HTMLThAttributes;

  let { class: className, children, ...props }: Props = $props();
</script>

<th
  class={twMerge(
    'text-muted min-w-max px-4 py-2 text-left font-normal text-nowrap',
    className
  )}
  {...props}
>
  {@render children?.()}
</th>
