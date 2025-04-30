<script lang="ts">
  import type { Snippet } from 'svelte';
  import { escapeKey } from '$lib/actions/escape-key.svelte.ts';
  import { fade, scale } from 'svelte/transition';
  import { focusTrap } from '$lib/actions/focus-trap.svelte.ts';
  import { twMerge } from 'tailwind-merge';

  type Props = {
    children?: Snippet;
    class?: string;
    open: boolean;
    title?: string;
  };

  let { children, class: className, open = $bindable(false), title = '' }: Props = $props();
</script>

{#if open}
  <!-- Customize backdrop here -->
  <div
    in:fade={{ duration: 75 }}
    out:fade={{ duration: 75 }}
    class={twMerge(
      'place-content-center grid', // layout
      'fixed top-0 right-0 bottom-0 left-0 z-[999999999]', // position
      'bg-bg/80 backdrop-blur-xs', // background
      'bg-[radial-gradient(#D4D4D8_1px,transparent_1px)]', // light dots
      'dark:bg-[radial-gradient(#27272a_1px,transparent_1px)]', // dark dots
      '[background-size:16px_16px]' // dot size
    )}
  >
    <!-- Customize dialog container here -->
    <div
      use:focusTrap
      use:escapeKey={() => (open = false)}
      in:scale={{ duration: 75, delay: 75, start: 0.9 }}
      out:scale={{ duration: 75, start: 0.9 }}
      class={twMerge(
        'z-10 relative', // layout and positioning
        'w-screen sm:w-max sm:min-w-80', // width
        'text-fg bg-bg text-left', // background and text
        'shadow-md dark:shadow-none', // shadow
        'sm:rounded border-y p-4 sm:border', // border
        className // override
      )}
    >
      <!-- Customize close button here -->
      <button
        class="top-4 right-4 absolute p-1 rounded hover:outline outline-primary cursor-pointer"
        onclick={() => (open = false)}
      >
        {@render IconClose()}
      </button>

      <!-- Customize title here -->
      {#if title}<p class="font-semibold">{title}</p>{/if}

      <!-- Customize content here -->
      {@render children?.()}
    </div>
  </div>
{/if}

<!-- Customize icon for closing -->
{#snippet IconClose()}
  <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
    <path fill="none" stroke="currentColor" stroke-width="2" d="M12 12l7 7M12 12l-7 -7M12 12l-7 7M12 12l7 -7" />
  </svg>
{/snippet}
