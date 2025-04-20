<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  type Variant = 'default' | 'inverted' | 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost';

  type Props = HTMLButtonAttributes & {
    children?: Snippet;
    class?: string;
    disabled?: boolean;
    edge?: 'default' | 'circle' | 'sharp';
    loading?: boolean;
    size?: 'default' | 'icon' | 'small' | 'fit';
    variant?: Variant;
  };

  let {
    children,
    class: className,
    disabled = false,
    edge = 'default',
    loading = $bindable(false),
    size = 'default',
    variant = 'default',
    ...props
  }: Props = $props();
</script>

<button
  class={twMerge(
    'px-3 py-1 text-base', // box sizing
    'relative flex h-min w-max items-center gap-1', // layout and positioning
    'outline-primary text-bg bg-fg border-primary rounded border transition-all', // base style
    'focus-visible:z-1 focus-visible:outline-2 focus-visible:outline-offset-2', // focus-visible
    'cursor-pointer hover:z-1 hover:outline-2 hover:outline-offset-2', // hover
    'active:outline-offset-0', // active

    // // VARIANTS
    variant === 'inverted' && 'text-fg bg-bg border-border', // base style
    variant === 'primary' && 'text-primary-fg bg-primary border-primary', // base style
    variant === 'secondary' && 'text-secondary-fg bg-secondary border-secondary', // base style
    variant === 'destructive' && 'outline-destructive text-destructive-fg bg-destructive border-destructive', // base style
    variant === 'outline' && 'text-fg bg-primary/0 border-fg', // base style
    variant === 'ghost' && 'text-fg bg-primary/0 border-fg/0', // base style

    // SIZES
    size === 'icon' && 'p-1',
    size === 'small' && 'h-6 px-2 text-sm leading-6',
    size === 'fit' && 'p-0',

    // EDGES
    edge === 'circle' && 'rounded-full',
    edge === 'sharp' && 'rounded-none',

    // DISABLED
    disabled && 'bg-disabled text-disabled-fg border-disabled cursor-default outline-none',

    // LOADING
    loading && 'bg-disabled text-disabled border-disabled cursor-default outline-none',

    className
  )}
  disabled={disabled || loading}
  {...props}
>
  {#if loading}
    {@render IconSpinner()}
  {/if}
  {@render children?.()}
</button>

{#snippet IconSpinner()}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="right-1/2 bottom-1/2 absolute size-4 text-primary translate-x-1/2 translate-y-1/2 animate-spin"
    viewBox="0 0 16 16"
  >
    <path
      fill="currentColor"
      d="M8 0A8 8 0 0 0 .002 7.812C.094 4.033 2.968 1 6.5 1C10.09 1 13 4.134 13 8a1.5 1.5 0 0 0 3 0a8 8 0 0 0-8-8m0 16a8 8 0 0 0 7.998-7.812C15.906 11.967 13.032 15 9.5 15C5.91 15 3 11.866 3 8a1.5 1.5 0 0 0-3 0a8 8 0 0 0 8 8"
    />
  </svg>
{/snippet}
