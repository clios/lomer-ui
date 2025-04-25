<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { circInOut } from 'svelte/easing';
  import { draw } from 'svelte/transition';
  import { twMerge } from 'tailwind-merge';

  type Props = HTMLInputAttributes & {
    children?: Snippet;
    class?: string;
    disabled?: boolean;
    label?: string;
  };

  let {
    checked = $bindable(false),
    children,
    class: className,
    disabled = false,
    label = '',
    ...props
  }: Props = $props();
</script>

<div>
  <!-- Hide input checkbox -->
  <input class="hidden appearance-none" type="checkbox" bind:checked {disabled} {...props} />

  <!-- Customize checkbox container here -->
  <label class={twMerge('flex items-center w-fit text-fg cursor-pointer', disabled && 'text-disabled-fg')}>
    <!-- Customize box here -->
    <button
      class={twMerge(
        'place-content-center grid mr-2 min-w-6 min-h-6', // layout and positioning
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
          <!-- Customize icon snippet below -->
          <span class={twMerge(disabled ? 'text-disabled-fg' : 'text-primary-fg')}>
            {@render CheckMark()}
          </span>
        {:else}
          <!-- Customize icon snippet below -->
          {@render CrossMark()}
        {/if}
      </div>
    </button>

    <!-- Customize label here -->
    {label}
  </label>

  {#if children}
    <!-- Customize description here -->
    <div class={twMerge('ml-8 text-muted', disabled && 'text-disabled-fg')}>
      {@render children?.()}
    </div>
  {/if}
</div>

<!-- Customize icon for check mark -->
{#snippet CheckMark()}
  <svg class="size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 -4 32 31" fill="none">
    <path
      in:draw={{ duration: 150, easing: circInOut }}
      stroke-width="5"
      d="M1 16L8 23L30.5 0.5"
      stroke="currentColor"
    />
  </svg>
{/snippet}

<!-- Customize icon for cross mark -->
{#snippet CrossMark()}
  <svg class="size-2.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" fill="none">
    <path in:draw={{ duration: 100, easing: circInOut }} stroke-width="4" d="M0.5 1L23.5 24" stroke="currentColor" />
    <path
      in:draw={{ delay: 100, duration: 100, easing: circInOut }}
      stroke-width="4"
      d="M23.5 1L0.5 24"
      stroke="currentColor"
    />
  </svg>
{/snippet}
