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
    class?: string;
    edge?: 'default' | 'circle' | 'sharp';
    isDisabled?: boolean;
    isLoading?: boolean;
    size?: 'default' | 'icon' | 'small';
    type?: 'submit' | 'reset' | 'button';
    variant?: Variant;
    value?: string;
    group?: string;
  } & HTMLButtonAttributes;

  let {
    children,
    class: className,
    edge = 'default',
    isDisabled = false,
    isLoading = false,
    size = 'default',
    type = 'button',
    variant = 'default',
    value = '',
    group = $bindable(''),
    ...props
  }: Props = $props();

  function onclick() {
    group = value;
  }
</script>

<button
  class={twMerge(
    // BASE
    'relative flex items-center gap-1', // layout and positioning
    'rounded-t', // outline
    'cursor-pointer border-b', // visual

    // VARIANTS: DEFAULT
    variant === 'default' && [
      'bg-none', // background
      'text-fg', // text
      'focus:bg-fg/10', // focusing
      'hover:bg-fg/10', // hovering
      'active:bg-fg/5' // active
    ],

    // SIZES
    size === 'default' &&
      'px-[14px] py-[6px] text-sm sm:px-3 sm:py-1 sm:text-base',
    size === 'icon' && 'p-[6px] sm:p-1',
    size === 'small' && 'h-6 px-2 text-sm leading-6',

    // DISABLED
    'disabled:border-disabled', // border
    'disabled:bg-disabled', // background
    'disabled:text-disabled-fg', // text
    'disabled:cursor-not-allowed disabled:outline-hidden', // visual

    // LOADING
    isLoading && '',

    group === value ? 'border-primary' : 'border-primary/0',

    className
  )}
  {type}
  {onclick}
  {...props}
  disabled={isLoading || isDisabled}
>
  {#if isLoading}
    <div class="absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2">
      {@render IconLoading()}
    </div>
  {/if}
  {@render children?.()}
</button>

<!-- ICON LOADING -->
{#snippet IconLoading()}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="text-spinner animate-spin"
    viewBox="0 0 16 16"
    width="16"
    height="16"
  >
    <rect width="16" height="16" fill="none" />
    <path
      fill="currentColor"
      d={`M8 0A8 8 0 0 0 .002 7.812C.094 4.033 2.968 1 6.5 1C10.09 1 13 4.134 13 8a1.5 1.5 ` +
        `0 0 0 3 0a8 8 0 0 0-8-8m0 16a8 8 0 0 0 7.998-7.812C15.906 11.967 13.032 15 9.5 ` +
        `15C5.91 15 3 11.866 3 8a1.5 1.5 0 0 0-3 0a8 8 0 0 0 8 8`}
    />
  </svg>
{/snippet}
