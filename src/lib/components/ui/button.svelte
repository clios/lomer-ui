<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import Spinner from './spinner.svelte';

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
    size?: 'default' | 'icon' | 'small';
    variant?: Variant;
  } & HTMLButtonAttributes;

  let {
    children,
    class: className,
    disabled = false,
    edge = 'default',
    loading = false,
    size = 'default',
    variant = 'default',
    ...props
  }: Props = $props();
</script>

<button
  class={twMerge(
    'relative flex items-center gap-1', // layout and positioning
    'outline-offset-2 hover:outline focus:outline active:outline-2 active:outline-offset-0', // outline
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
  {...props}
>
  {#if loading}
    <Spinner
      class="absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2"
    />
  {/if}
  {@render children?.()}
</button>
