<script lang="ts">
  import { type Snippet } from 'svelte';
  import { slide } from 'svelte/transition';
  import { twMerge } from 'tailwind-merge';
  import { outsideClick } from '$lib/actions/outsideClick.svelte.ts';

  type Props = {
    children?: Snippet;
    class?: string;
    open: boolean;
    placement?: 'left' | 'right';
  };

  let {
    children,
    class: className,
    open = $bindable(false),
    placement = 'left'
  }: Props = $props();

  let contentEl: HTMLDivElement | null = $state(null);
  let innerWidth = $state(0);
  let innerHeight = $state(0);
  let contentBoxSize = $state();

  function adjustPosition() {
    if (!contentEl) return;
    if (!contentEl?.parentElement?.previousElementSibling) return;

    const triggerEl = contentEl.parentElement.previousElementSibling;
    const triggerRect = triggerEl.getBoundingClientRect();
    const contentRect = contentEl.getBoundingClientRect();

    // content extends beyond bottom, move to top
    if (triggerRect.bottom + contentRect.height + 16 > innerHeight) {
      // content is larger than screen, set top and bottom limit
      if (triggerRect.top - 16 < contentRect.height) {
        contentEl.style.top = 16 + 'px';
        contentEl.style.bottom = 16 + 'px';
      }
      // content fits in the top, display on top
      else {
        contentEl.style.top = triggerRect.top - contentRect.height - 8 + 'px';
      }
    }
    // content fits within the container, display normally
    else {
      contentEl.style.top = triggerRect.bottom + 8 + 'px';
    }

    if (placement === 'left') {
      contentEl.style.left = triggerRect.left + 'px';
    } else {
      contentEl.style.left = triggerRect.right - contentRect.width + 'px';
    }
  }

  $effect(() => {
    if (contentBoxSize) adjustPosition();
  });
</script>

<svelte:window bind:innerWidth bind:innerHeight />

{#if open}
  <!-- BACKDROP -->
  <div class="bg-bg/0 fixed top-0 right-0 bottom-0 left-0 z-10">
    <!-- CONTENT -->
    <div
      use:outsideClick={() => (open = false)}
      bind:this={contentEl}
      bind:contentBoxSize
      transition:slide={{ axis: 'y', duration: 75 }}
      class={twMerge(
        'bg-bg fixed h-fit max-h-[calc(100vh-2rem)] rounded border',
        'text-fg overflow-auto',
        className
      )}
    >
      {@render children?.()}
    </div>
  </div>
{/if}
