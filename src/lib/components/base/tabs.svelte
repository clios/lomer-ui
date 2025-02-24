<script lang="ts">
  import Button from '$lib/components/base/button.svelte';
  import { onMount, type Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  type Props = { children?: Snippet; class?: string };
  let { children, class: className }: Props = $props();

  let scrollContainer: HTMLDivElement;
  let canScrollLeft = $state(false);
  let canScrollRight = $state(false);
  let innerWidth = $state(0);

  function checkScroll() {
    if (scrollContainer) {
      canScrollLeft = scrollContainer.scrollLeft > 0;
      canScrollRight =
        scrollContainer.scrollWidth >
        scrollContainer.clientWidth + scrollContainer.scrollLeft;
    }
  }

  function scrollLeft() {
    scrollContainer?.scrollBy({ left: -150, behavior: 'smooth' });
    setTimeout(checkScroll, 300); // Allow time for scroll update
  }

  function scrollRight() {
    scrollContainer?.scrollBy({ left: 150, behavior: 'smooth' });
    setTimeout(checkScroll, 300);
  }

  onMount(() => {
    checkScroll(); // Check scrollability on mount
  });

  $effect(() => {
    if (innerWidth) checkScroll();
  });
</script>

<!-- Track screen size -->
<svelte:window bind:innerWidth />

<!-- CONTAINER -->
<div
  class={twMerge('bg-bg relative flex w-full items-center gap-2', className)}
>
  <!-- CONTENT -->
  <div
    bind:this={scrollContainer}
    class="scroll-container flex w-full gap-2 overflow-x-auto scroll-smooth py-4 pr-12 pl-4"
    onscroll={checkScroll}
  >
    {@render children?.()}
  </div>

  <!-- IF CAN SCROLL LEFT -->
  {#if canScrollLeft}
    <div
      class={twMerge(
        'absolute left-0 flex h-full w-20 items-center', // positioning and layout
        'from-bg/0 to-bg via-bg bg-gradient-to-l' // gradient
      )}
    >
      <Button
        class="absolute left-2"
        variant="outline"
        size="fit"
        onclick={scrollLeft}
      >
        {@render IconChevronLeft()}
      </Button>
    </div>
  {/if}

  <!-- IF CAN SCROLL RIGHT -->
  {#if canScrollRight}
    <div
      class={twMerge(
        'absolute right-0 flex h-full w-20 items-center', // positioning and layout
        'from-bg/0 to-bg via-bg bg-gradient-to-r' // gradient
      )}
    >
      <Button
        class="absolute right-2"
        variant="outline"
        size="fit"
        onclick={scrollRight}
      >
        {@render IconChevronRight()}
      </Button>
    </div>
  {/if}
</div>

{#snippet IconChevronLeft()}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="text-fg size-5"
    viewBox="0 0 24 24"
    ><path
      fill="currentColor"
      d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6z"
    />
  </svg>
{/snippet}

{#snippet IconChevronRight()}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="text-fg size-6"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"
    />
  </svg>
{/snippet}

<style>
  .scroll-container::-webkit-scrollbar {
    display: none;
    height: 0;
    width: 0;
  }
  .scroll-container {
    scrollbar-width: none;
  }
</style>
