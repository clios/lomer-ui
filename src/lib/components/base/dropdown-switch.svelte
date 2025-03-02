<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { circInOut } from 'svelte/easing';
  import { draw } from 'svelte/transition';
  import { twMerge } from 'tailwind-merge';

  type Props = {
    children?: Snippet;
    class?: string;
    checked?: boolean;
    disabled?: boolean;
    edge?: 'default' | 'circle' | 'sharp';
    label?: string;
    loading?: boolean;
    onchange?: () => void;
  } & HTMLButtonAttributes;

  let {
    checked = $bindable(false),
    children,
    class: className,
    disabled = false,
    edge = 'default',
    label = '',
    loading = $bindable(false),
    onchange,
    ...props
  }: Props = $props();
</script>

<!-- SWITCH -->
<button
  class={twMerge(
    'relative flex w-full cursor-pointer items-center justify-between gap-4 rounded', // base
    'my-1 w-full py-1 pr-1 pl-3', // box model
    'outline-primary -outline-offset-1', // outline
    'hover:bg-primary/10 hover:outline', // hover
    'focus:bg-primary/10 focus:outline', // focus
    'active:outline-2 active:-outline-offset-2', // active
    disabled && 'text-disabled-fg'
  )}
  onclick={() => {
    checked = !checked;
    onchange?.();
  }}
  disabled={loading || disabled}
  {...props}
>
  <!-- LABEL -->
  {label}

  <!-- BOX -->
  <div
    class={twMerge(
      'relative mr-2 flex max-h-6 min-h-6 max-w-12 min-w-12 items-center', // layout and positioning
      'outline-primary outline-offset-2', // outline
      'cursor-pointer rounded border-y transition-all', // visual
      checked ? 'bg-primary border-primary border-l' : 'border-r',
      disabled && 'bg-disabled border-disabled cursor-not-allowed outline-none',
      loading && 'cursor-not-allowed outline-none',
      // EDGES
      edge === 'default' && 'rounded',
      edge === 'circle' && 'rounded-full',
      edge === 'sharp' && 'rounded-none'
    )}
  >
    <div class={twMerge('transition-all', checked ? 'w-6' : 'w-0')}></div>
    <div
      class={twMerge(
        'bg-fg text-bg pointer-events-none grid size-6 place-content-center rounded border',
        checked ? 'border-primary' : ' border-fg',
        disabled && 'border-disabled text-disabled bg-disabled-fg',
        // EDGES
        edge === 'default' && 'rounded',
        edge === 'circle' && 'rounded-full',
        edge === 'sharp' && 'rounded-none'
      )}
    >
      {#if loading}
        {@render IconSpinner()}
      {:else if checked}
        {@render CheckMark()}
      {:else}
        {@render CrossMark()}
      {/if}
    </div>
  </div>
</button>

{#snippet CheckMark()}
  <svg
    class="size-3"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -4 32 31"
    fill="none"
  >
    <path
      in:draw={{ duration: 150, easing: circInOut }}
      stroke-width="5"
      d="M1 16L8 23L30.5 0.5"
      stroke="currentColor"
    />
  </svg>
{/snippet}

{#snippet CrossMark()}
  <svg
    class="size-2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 25"
    fill="none"
  >
    <path
      in:draw={{ duration: 100, easing: circInOut }}
      stroke-width="4"
      d="M0.5 1L23.5 24"
      stroke="currentColor"
    />
    <path
      in:draw={{ delay: 100, duration: 100, easing: circInOut }}
      stroke-width="4"
      d="M23.5 1L0.5 24"
      stroke="currentColor"
    />
  </svg>
{/snippet}

{#snippet IconSpinner()}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="text-bg size-4 animate-spin"
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
