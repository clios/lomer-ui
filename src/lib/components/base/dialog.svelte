<script lang="ts">
  import type { Snippet } from 'svelte';
  import { fade, scale } from 'svelte/transition';
  import { twMerge } from 'tailwind-merge';
  import Button from '$lib/components/base/button.svelte';
  import { escapeKey } from '$lib/actions/escape-key.svelte.ts';
  import { focusTrap } from '$lib/actions/focus-trap.svelte.ts';

  type Props = {
    children?: Snippet;
    class?: string;
    open: boolean;
    title?: string;
  };

  let {
    children,
    class: className,
    open = $bindable(false),
    title = ''
  }: Props = $props();
</script>

{#if open}
  <!-- BACKDROP -->
  <div
    in:fade={{ duration: 75 }}
    out:fade={{ duration: 75 }}
    class={twMerge(
      'grid place-content-center', // layout
      'fixed top-0 right-0 bottom-0 left-0 z-[999999999]', // position
      'bg-bg/80 backdrop-blur-xs', // background
      'bg-[radial-gradient(#D4D4D8_1px,transparent_1px)]', // light dots
      'dark:bg-[radial-gradient(#27272a_1px,transparent_1px)]', // dark dots
      '[background-size:16px_16px]' // dot size
    )}
  >
    <!-- DIALOG CONTAINER -->
    <div
      use:focusTrap
      use:escapeKey={() => (open = false)}
      in:scale={{ duration: 75, delay: 75, start: 0.9 }}
      out:scale={{ duration: 75, start: 0.9 }}
      class={twMerge(
        'relative z-10', // layout and positioning
        'w-screen sm:w-max sm:min-w-80', // width
        'text-fg bg-bg text-left', // background and text
        'shadow-md dark:shadow-none', // shadow
        'sm:rounded-card border-y p-4 sm:border', // border

        // STYLING
        className
      )}
    >
      <!-- CLOSE BUTTON -->
      <Button
        class="absolute top-3 right-3"
        variant="ghost"
        size="icon"
        onclick={() => (open = false)}
      >
        {@render IconClose()}
      </Button>

      <!-- HEADER -->
      {#if title}<p class="font-semibold">{title}</p>{/if}

      <!-- BODY -->
      {@render children?.()}
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
