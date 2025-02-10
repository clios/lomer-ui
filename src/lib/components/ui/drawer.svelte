<script lang="ts">
  import Button from '$lib/components/ui/button.svelte';
  import Close from '$lib/components/ui/close.svelte';
  import type { Snippet } from 'svelte';
  import { fade, slide } from 'svelte/transition';
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
      'fixed top-0 right-0 bottom-0 left-0 z-10', // position
      'bg-bg/80 backdrop-blur-xs', // background
      'bg-[radial-gradient(#D4D4D8_1px,transparent_1px)]', // light dots
      'dark:bg-[radial-gradient(#27272a_1px,transparent_1px)]', // dark dots
      '[background-size:16px_16px]' // dot size
    )}
  >
    <!-- DRAWER CONTAINER -->
    <div
      transition:slide={{
        axis: ['left', 'right'].includes(placement) ? 'x' : 'y',
        duration: 300,
        delay: 151
      }}
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
            <Close />
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
