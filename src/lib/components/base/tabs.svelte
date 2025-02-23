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

<div
  class={twMerge(
    'bg-bg relative flex w-full items-center gap-2 px-2 pt-2',
    className
  )}
>
  {#if canScrollLeft}
    <div
      class="from-bg to-bg/0 via-bg pointer-events-none absolute left-0 z-20 flex h-full w-20 items-center bg-gradient-to-r"
    >
      <Button
        class="pointer-events-auto absolute left-2"
        variant="ghost"
        size="icon"
        onclick={scrollLeft}
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          ><path
            fill="currentColor"
            d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6z"
          /></svg
        ></Button
      >
    </div>
  {/if}

  <div
    bind:this={scrollContainer}
    class="z-10 flex w-full gap-2 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:h-0"
    onscroll={checkScroll}
  >
    {@render children?.()}
  </div>

  {#if canScrollRight}
    <div
      class="from-bg/0 to-bg via-bg pointer-events-none absolute right-0 z-20 flex h-full w-20 items-center bg-gradient-to-r"
    >
      <Button
        class="pointer-events-auto absolute right-2"
        variant="ghost"
        size="icon"
        onclick={scrollRight}
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-5"
          viewBox="0 0 24 24"
          ><path
            fill="currentColor"
            d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"
          /></svg
        ></Button
      >
    </div>
  {/if}

  <div class="absolute bottom-0 left-0 w-full border-b"></div>
</div>
