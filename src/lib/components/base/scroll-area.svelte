<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  type Props = {
    children?: Snippet;
    class?: string;
    edge?: 'default' | 'circle' | 'sharp';
  };

  let {
    children,
    class: className,
    edge = 'default',
    ...props
  }: Props = $props();
</script>

<div
  class={twMerge(
    'relative overflow-auto scroll-smooth',
    '[&::-webkit-scrollbar]:w-0',
    '[&::-webkit-scrollbar]:h-2',
    'hover:[&::-webkit-scrollbar]:w-2',
    '[&::-webkit-scrollbar-track]:rounded',
    '[&::-webkit-scrollbar-track]:bg-bg',
    'hover:[&::-webkit-scrollbar-track]:bg-border',
    '[&::-webkit-scrollbar-thumb]:rounded',
    '[&::-webkit-scrollbar-thumb]:bg-bg',
    'hover:[&::-webkit-scrollbar-thumb]:bg-fg/50',
    'hover:[&::-webkit-scrollbar-thumb]:cursor-pointer',

    // EDGES
    edge === 'default' && 'rounded',
    edge === 'circle' && 'rounded-full',
    edge === 'sharp' && 'rounded-none',

    className
  )}
  {...props}
>
  {@render children?.()}
</div>
