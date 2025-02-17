<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { circInOut } from 'svelte/easing';
  import { draw } from 'svelte/transition';
  import { twMerge } from 'tailwind-merge';

  type Props = {
    children?: Snippet;
    class?: string;
    disabled?: boolean;
    label?: string;
  } & HTMLInputAttributes;

  let {
    checked = $bindable(false),
    children,
    class: className,
    disabled = false,
    label = '',
    ...props
  }: Props = $props();
</script>

<!-- CONTAINER -->
<div>
  <!-- HIDE CHECKBOX -->
  <input
    type="checkbox"
    class="hidden appearance-none"
    {disabled}
    bind:checked
    {...props}
  />

  <!-- MIMIC CHECKBOX -->
  <label
    class={twMerge(
      'text-fg flex w-fit cursor-pointer items-center',
      disabled && 'text-disabled-fg cursor-not-allowed'
    )}
  >
    <!-- BOX -->
    <button
      class={twMerge(
        'mr-2 grid min-h-6 min-w-6 place-content-center', // layout and positioning
        'outline-primary outline-offset-2 hover:outline focus:outline', // outline
        'cursor-pointer rounded border', // visual
        checked && 'bg-primary',
        disabled && 'bg-bg cursor-not-allowed outline-none'
      )}
      onclick={() => (checked = !checked)}
      {disabled}
    >
      <div class="pointer-events-none">
        {#if checked}
          <span
            class={twMerge(disabled ? 'text-disabled-fg' : 'text-primary-fg')}
          >
            {@render CheckMark()}
          </span>
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
    <div class={twMerge('text-muted ml-8', disabled && 'text-disabled-fg')}>
      {@render children?.()}
    </div>
  {/if}
</div>

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
    class="size-2.5"
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
