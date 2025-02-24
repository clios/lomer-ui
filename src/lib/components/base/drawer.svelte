<script lang="ts">
  import Button from '$lib/components/base/button.svelte';
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

  let {
    children,
    class: className,
    open = $bindable(false),
    title = '',
    placement = 'right'
  }: Props = $props();
</script>

{#if open}
  <!-- BACKDROP -->
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
    <!-- DRAWER CONTAINER -->
    <div
      use:focusTrap
      use:escapeKey={() => (open = false)}
      transition:slide={{ axis: 'x', duration: 300, delay: 151 }}
      class={twMerge(
        'bg-bg text-fg absolute', // base
        'shadow-md dark:shadow-none', // shadow
        'overflow-auto transition-all', // animation

        // PLACEMENT
        placement === 'left' && 'left-0 h-screen border-r',
        placement === 'right' && 'right-0 h-screen border-l'
      )}
    >
      <!-- HEADER -->
      {#if title}
        <p
          in:fade={{ delay: 200 }}
          out:fade={{ duration: 150 }}
          class="bg-bg/80 sticky top-0 z-10 flex h-10 items-center justify-between border-b px-4 font-semibold backdrop-blur-xs"
        >
          <!-- TITLE -->
          {title}

          <!-- CLOSE BUTTON -->
          <Button variant="ghost" size="icon" onclick={() => (open = false)}>
            {@render IconClose()}
          </Button>
        </p>
      {/if}

      <!-- BODY -->
      {#if children}
        <div
          in:fade={{ delay: 200 }}
          out:fade={{ duration: 150 }}
          class={twMerge('relative p-4', className)}
        >
          {@render children?.()}
        </div>
      {/if}
    </div>
  </div>
{/if}

{#snippet IconClose()}
  <svg
    class="size-4"
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
  >
    <rect width="24" height="24" fill="none" />
    <path
      fill="none"
      stroke="currentColor"
      stroke-dasharray="12"
      stroke-dashoffset="12"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M12 12l7 7M12 12l-7 -7M12 12l-7 7M12 12l7 -7"
    >
      <animate
        fill="freeze"
        attributeName="stroke-dashoffset"
        dur="0.3s"
        values="12;0"
      />
    </path>
  </svg>
{/snippet}
