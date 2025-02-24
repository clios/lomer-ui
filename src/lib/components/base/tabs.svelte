<script lang="ts">
  import { onMount, type Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import Button from '$lib/components/base/button.svelte';

  type Props = { children?: Snippet; class?: string };
  let { children, class: className }: Props = $props();

  let scrollContainer: HTMLDivElement;
  let canScrollLeft = $state(false);
  let canScrollRight = $state(false);

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
</script>

<!-- CONTAINER -->
<div
  class={twMerge(
    'bg-bg relative flex w-full items-center gap-2 p-2',
    className
  )}
>
  <!-- CONTENT -->
  <div
    bind:this={scrollContainer}
    class="scroll-container flex w-full gap-2 overflow-x-auto scroll-smooth"
    onscroll={checkScroll}
  >
    {@render children?.()}
  </div>

  {#if canScrollLeft}
    <div
      class="from-bg to-bg/0 via-bg absolute left-0 flex h-full w-20 items-center bg-gradient-to-r"
    >
      <button
        class="outline-primary active:bg-fg/20 pointer-events-auto absolute left-2 cursor-pointer rounded p-1 -outline-offset-1 hover:outline focus:outline"
        onclick={scrollLeft}
      >
        {@render IconChevronLeft()}
      </button>
    </div>
  {/if}

  {#if canScrollRight}
    <div
      class="from-bg/0 to-bg via-bg absolute right-0 flex h-full w-20 items-center bg-gradient-to-r"
    >
      <button
        class="outline-primary active:bg-fg/20 pointer-events-auto absolute right-2 cursor-pointer rounded p-1 -outline-offset-1 hover:outline focus:outline"
        onclick={scrollRight}
      >
        {@render IconChevronRight()}
      </button>
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
    class="text-fg size-5"
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
    display: none; /* Works better across different browsers */
  }
</style>
