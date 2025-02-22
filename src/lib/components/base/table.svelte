<script lang="ts">
  import type { HTMLTableAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  type Props = {
    children?: Snippet;
    class?: string;
  } & HTMLTableAttributes;

  let { class: className, children, ...props }: Props = $props();
</script>

<table
  class={twMerge('bg-bg w-full min-w-max border-collapse', className)}
  {...props}
>
  {@render children?.()}
</table>
