<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  type Variant =
    | 'default'
    | 'inverted'
    | 'primary'
    | 'secondary'
    | 'destructive'
    | 'outline'
    | 'ghost';

  type Props = HTMLButtonAttributes & {
    children?: Snippet;
    class?: string | null;
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
    'h-min w-max', // size
    'relative flex items-center gap-1 hover:z-1', // layout and positioning
    'ring-primary ring-offset-bg hover:ring-primary ring', // ring
    '', // focus
    'cursor-pointer transition-all', // visual

    // VARIANT: DEFAULT
    variant === 'default' && [
      'text-bg bg-fg', // text and background
      'hover:ring-offset-2 focus:ring-offset-2', // hover and focus
      'active:ring-2 active:ring-offset-0' // active
    ],

    // VARIANT: INVERTED
    variant === 'inverted' && [
      'text-fg bg-bg', // text and background
      'hover:ring-offset-2 focus:ring-offset-2', // hover and focus
      'active:ring-2 active:ring-offset-0', // active
      'ring-border' // ring
    ],

    // VARIANT: PRIMARY
    variant === 'primary' && [
      'text-primary-fg bg-primary', // text and background
      'hover:ring-offset-2 focus:ring-offset-2', // hover and focus
      'active:ring-2 active:ring-offset-0' // active
    ],

    // VARIANT: SECONDARY
    variant === 'secondary' && [
      'text-secondary-fg bg-secondary', // text and background
      'hover:ring-offset-2 focus:ring-offset-2', // hover and focus
      'active:ring-2 active:ring-offset-0', // active
      'ring-border' // ring
    ],

    // VARIANT: DESTRUCTIVE
    variant === 'destructive' && [
      'text-destructive-fg bg-destructive', // text and background
      'hover:ring-destructive hover:ring-offset-2', // hover and focus
      'focus:ring-destructive focus:ring-offset-2', // hover and focus
      'active:ring-2 active:ring-offset-0', // active
      'ring-destructive' // ring
    ],

    // VARIANT: OUTLINE
    variant === 'outline' && [
      'text-fg bg-none', // text and background
      'hover:ring-offset-2 focus:ring-offset-2', // hover and focus
      'active:ring-2 active:ring-offset-0', // active
      'ring-fg' // ring
    ],

    // VARIANT: GHOST
    variant === 'ghost' && [
      'text-fg bg-none', // text and background
      '', // focus
      'hover:text-primary active:text-fg', // hover and active
      'ring-0' // ring
    ],

    // SIZES
    size === 'default' && 'px-3 py-1 text-base',
    size === 'icon' && 'p-1',
    size === 'small' && 'h-6 px-2 text-sm leading-6',
    size === 'fit' && 'p-0',

    // EDGES
    edge === 'default' && 'rounded',
    edge === 'circle' && 'rounded-full',
    edge === 'sharp' && 'rounded-none',

    // LOADING
    loading &&
      'ring-disabled text-disabled bg-disabled cursor-not-allowed outline-none',

    // DISABLED
    disabled && [
      'bg-disabled text-disabled-fg ring-disabled hover:ring-primary/0 hover:ring-offset-disabled cursor-not-allowed hover:ring-offset-1'
    ],

    className
  )}
  disabled={loading || disabled}
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
    class="text-primary absolute right-1/2 bottom-1/2 size-4 translate-x-1/2 translate-y-1/2 animate-spin"
    viewBox="0 0 16 16"
  >
    <path
      fill="currentColor"
      d={`M8 0A8 8 0 0 0 .002 7.812C.094 4.033 2.968 1 6.5 1C10.09 1 13 4.134 13 8a1.5 1.5 ` +
        `0 0 0 3 0a8 8 0 0 0-8-8m0 16a8 8 0 0 0 7.998-7.812C15.906 11.967 13.032 15 9.5 ` +
        `15C5.91 15 3 11.866 3 8a1.5 1.5 0 0 0-3 0a8 8 0 0 0 8 8`}
    />
  </svg>
{/snippet}
