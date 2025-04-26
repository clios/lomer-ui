<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { fade } from 'svelte/transition';
  import { twMerge } from 'tailwind-merge';

  type Props = {
    children?: Snippet;
    class?: string;
    disabled?: boolean;
    label?: string;
    group?: string | null;
    value?: string | null;
  } & HTMLInputAttributes;

  let {
    children,
    class: className,
    disabled = false,
    group = $bindable(''),
    value,
    label = '',
    ...props
  }: Props = $props();

  let selected = $derived(group === value);

  function onclick() {
    if (selected) {
      group = null;
    } else {
      group = value;
    }
  }
</script>

<div>
  <!-- Hide input radio -->
  <input type="radio" class="hidden appearance-none" {disabled} bind:group {...props} />

  <!-- Customize radio container here -->
  <label
    class={twMerge('text-fg flex w-fit cursor-pointer items-center', disabled && 'text-disabled-fg cursor-not-allowed')}
  >
    <!-- Customize outer circle here -->
    <button
      class={twMerge(
        'mr-2 grid min-h-5 min-w-5 place-content-center', // layout and positioning
        'outline-primary outline-offset-2 hover:outline focus:outline', // outline
        'cursor-pointer rounded-full border', // visual
        disabled && 'cursor-not-allowed outline-none'
      )}
      {onclick}
      {disabled}
    >
      {#if selected}
        <!-- Customize selected indicator here -->
        <div
          transition:fade={{ duration: 150 }}
          class={twMerge(
            'bg-primary size-3.5 rounded-full', // layout and positioning
            disabled && 'bg-disabled cursor-not-allowed'
          )}
        ></div>
      {/if}
    </button>

    <!-- Customize label here -->
    {label}
  </label>

  {#if children}
    <!-- Customize description here -->
    <div class={twMerge('text-muted ml-8', disabled && 'text-disabled-fg')}>
      {@render children?.()}
    </div>
  {/if}
</div>
