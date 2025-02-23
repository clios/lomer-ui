<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  type Props = {
    active?: string;
    children?: Snippet;
    class?: string;
    value?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    active = '',
    children,
    class: className,
    value = '',
    ...props
  }: Props = $props();
</script>

{#if active === value}
  <div class={twMerge('bg-bg text-fg p-2', className)} {...props}>
    {@render children?.()}
  </div>
{/if}
