<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  type Variant = 'default' | 'destructive';

  type Props = {
    children?: Snippet;
    class?: string | null;
    disabled?: boolean;
    loading?: boolean;
    variant?: Variant;
  } & HTMLButtonAttributes;

  let {
    children,
    class: className,
    disabled = false,
    loading = $bindable(false),
    variant = 'default',
    type = 'button',
    ...props
  }: Props = $props();
</script>

<button
  class={twMerge(
    'relative my-1 flex cursor-pointer items-center gap-1 rounded', // base
    'w-full py-1 pr-12 pl-3', // box model
    'outline-primary -outline-offset-1', // outline
    'hover:bg-primary/10 hover:outline', // hover
    'focus:bg-primary/10 focus:outline', // focus
    'active:outline-2 active:-outline-offset-2', // active

    variant === 'destructive' && [
      'text-destructive outline-destructive',
      'hover:bg-destructive/10 focus:bg-destructive/10'
    ],

    (loading || disabled) &&
      'text-disabled-fg pointer-events-none cursor-not-allowed',

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
    class="text-primary absolute right-3 bottom-1/2 size-4 translate-y-1/2 animate-spin"
    xmlns="http://www.w3.org/2000/svg"
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
