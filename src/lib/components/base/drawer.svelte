<script lang="ts">
  import type { Snippet } from 'svelte';
  import { escapeKey } from '$lib/actions/escape-key.svelte.ts';
  import { fade, slide } from 'svelte/transition';
  import { focusTrap } from '$lib/actions/focus-trap.svelte.ts';
  import { twMerge } from 'tailwind-merge';

  type Props = {
    children?: Snippet;
    class?: string;
    open: boolean;
    title?: string;
    placement?: 'left' | 'right';
  };

  let { children, class: className, open = $bindable(false), title = '', placement = 'right' }: Props = $props();
</script>

{#if open}
  <!-- Customize backdrop here -->
  <div
    in:fade={{ duration: 150 }}
    out:fade={{ duration: 150 }}
    class={twMerge(
      'fixed top-0 right-0 bottom-0 left-0 z-[999999999]', // position
      'bg-bg/80 backdrop-blur-xs', // background
      'bg-[radial-gradient(#D4D4D8_1px,transparent_1px)]', // light dots
      'dark:bg-[radial-gradient(#27272a_1px,transparent_1px)]', // dark dots
      '[background-size:16px_16px]' // dot size
    )}
  >
    <!-- Customize drawer container here -->
    <div
      use:focusTrap
      use:escapeKey={() => (open = false)}
      transition:slide={{ axis: 'x', duration: 300, delay: 151 }}
      class={twMerge(
        'bg-bg text-fg absolute', // base
        'shadow-md dark:shadow-none', // shadow
        'overflow-auto transition-all', // animation
        placement === 'left' && 'left-0 h-screen border-r',
        placement === 'right' && 'right-0 h-screen border-l'
      )}
    >
      <!-- Customize header here -->
      <div
        in:fade={{ delay: 300 }}
        out:fade={{ duration: 150 }}
        class="bg-bg/80 sticky top-0 z-10 flex h-10 items-center justify-between border-b px-4 backdrop-blur-xs"
      >
        <!-- Customize title here -->
        {#if title}
          <p class="font-semibold">{title}</p>
        {/if}

        <!-- Customize close button here -->
        <button
          class="outline-primary absolute top-2 right-2 cursor-pointer rounded p-1 hover:outline"
          onclick={() => (open = false)}
        >
          {@render IconClose()}
        </button>
      </div>

      <!-- Customize content here -->
      <div in:fade={{ delay: 450 }} out:fade={{ duration: 150 }} class={twMerge('relative w-72 p-4', className)}>
        {@render children?.()}
      </div>
    </div>
  </div>
{/if}

<!-- Customize icon for closing -->
{#snippet IconClose()}
  <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
    <path fill="none" stroke="currentColor" stroke-width="2" d="M12 12l7 7M12 12l-7 -7M12 12l-7 7M12 12l7 -7" />
  </svg>
{/snippet}
