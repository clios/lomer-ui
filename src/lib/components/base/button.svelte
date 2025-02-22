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

  type Props = {
    children?: Snippet;
    class?: string | null;
    disabled?: boolean;
    edge?: 'default' | 'circle' | 'sharp';
    loading?: boolean;
    size?: 'default' | 'icon' | 'small' | 'fit';
    variant?: Variant;
  } & HTMLButtonAttributes;

  let {
    children,
    class: className,
    disabled = false,
    edge = 'default',
    loading = $bindable(false),
    size = 'default',
    variant = 'default',
    type = 'button',
    ...props
  }: Props = $props();
</script>

<button
  class={twMerge(
    'relative flex items-center gap-1 transition-all', // layout and positioning
    '-outline-offset-1 hover:outline focus:outline active:outline-2 active:outline-offset-0', // outline
    'hover:outline-offset-2 focus:outline-offset-2 active:outline-offset-0', // outline
    'outline-primary h-min w-max cursor-pointer border', // visual

    // VARIANTS
    variant === 'default' && 'bg-fg text-bg border-primary',
    variant === 'inverted' && 'bg-bg text-fg',
    variant === 'primary' && 'bg-primary text-primary-fg border-primary',
    variant === 'secondary' &&
      'bg-secondary text-secondary-fg border-secondary',
    variant === 'destructive' &&
      'bg-destructive text-destructive-fg border-destructive outline-destructive',
    variant === 'outline' && 'text-fg border-fg bg-none',
    variant === 'ghost' && 'text-fg border-none bg-none',

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
      'border-disabled text-disabled bg-disabled cursor-not-allowed outline-none',

    // DISABLED
    disabled &&
      'border-disabled text-disabled-fg bg-disabled cursor-not-allowed outline-none',

    className
  )}
  disabled={loading || disabled}
  {type}
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
