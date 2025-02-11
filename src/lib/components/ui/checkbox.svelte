<script lang="ts">
  import Spinner from './spinner.svelte';
  import type { HTMLInputAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { circInOut } from 'svelte/easing';
  import { draw } from 'svelte/transition';
  import { twMerge } from 'tailwind-merge';

  type Props = {
    children?: Snippet;
    class?: string;
    loading?: boolean;
    disabled?: boolean;
    label?: string;
  } & HTMLInputAttributes;

  let {
    children,
    class: className,
    loading = false,
    disabled = false,
    checked = $bindable(false),
    label,
    ...props
  }: Props = $props();
</script>

<!-- CONTAINER -->
<div class={twMerge('text-fg', (loading || disabled) && 'text-disabled')}>
  <!-- HIDE CHECKBOX -->
  <input
    type="checkbox"
    class="hidden appearance-none"
    disabled={loading || disabled}
    bind:checked
    {...props}
  />

  <!-- MIMIC CHECKBOX -->
  <label class="flex cursor-pointer items-center">
    <!-- BOX -->
    <button
      class={twMerge(
        'mr-2 grid min-h-6 min-w-6 place-content-center', // layout and positioning
        'outline-primary outline-offset-2 hover:outline focus:outline', // outline
        'cursor-pointer rounded border', // visual
        (loading || disabled) && 'outline-none'
      )}
      onclick={() => (checked = !checked)}
      disabled={loading || disabled}
    >
      <div class="pointer-events-none">
        {#if loading}
          <Spinner />
        {:else if checked}
          {@render CheckMark()}
        {:else}
          {@render CrossMark()}
        {/if}
      </div>
    </button>

    <!-- LABEL -->
    {label}
  </label>

  <!-- DESCRIPTION -->
  {#if children}
    <div
      class={twMerge(
        'text-muted ml-8',
        (loading || disabled) && 'text-disabled'
      )}
    >
      {@render children?.()}
    </div>
  {/if}
</div>

{#snippet CheckMark()}
  <svg
    class={twMerge('size-4', disabled ? 'text-disabled' : 'text-primary')}
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
    class="size-3.5"
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
