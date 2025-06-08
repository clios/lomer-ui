<script lang="ts">
  import { type Snippet } from "svelte";
  import { twMerge } from "tailwind-merge";
  import { fade } from "svelte/transition";
  import { escapeKey } from "$lib/actions/escape-key.svelte.ts";
  import { focusTrap } from "$lib/actions/focus-trap.svelte.ts";
  import { verticalNavigation } from "$lib/actions/vertical-navigation.svelte.ts";

  type SelectOption = { value?: string; label?: string };

  type Props = {
    children?: Snippet;
    class?: string;
    value?: string;
    options: SelectOption[];
    placement?: "left" | "right" | "center";
  };

  let {
    class: className,
    options,
    placement = "center",
    value,
  }: Props = $props();

  let open = $state(false);

  let contentEl: HTMLDivElement | null = $state(null);
  let innerWidth = $state(0);
  let innerHeight = $state(0);
  let contentBoxSize = $state(); // State to track content element's size (for positioning)

  // Function to adjust the content element's position based on trigger and window size
  function adjustPosition() {
    if (!contentEl) return;
    if (!contentEl?.parentElement?.previousElementSibling) return;

    // Get the trigger element (the element before the content's parent)
    const triggerEl = contentEl.parentElement.previousElementSibling;
    // Get size and position of trigger and content elements
    const triggerRect = triggerEl.getBoundingClientRect();
    const contentRect = contentEl.getBoundingClientRect();

    // If content extends beyond bottom, move to top
    if (triggerRect.bottom + contentRect.height + 16 > innerHeight) {
      // If content is larger than screen, set top and bottom limit
      if (triggerRect.top - 16 < contentRect.height) {
        contentEl.style.top = 16 + "px";
        contentEl.style.bottom = 16 + "px";
      } // If content fits in the top, display on top
      else {
        contentEl.style.top = triggerRect.top - contentRect.height - 4 + "px";
      }
    } // If content fits within the container, display normally
    else {
      contentEl.style.top = triggerRect.bottom + 4 + "px";
    }

    if (placement === "left") {
      contentEl.style.left = triggerRect.left + "px";
    } else if (placement === "right") {
      contentEl.style.left = triggerRect.right - contentRect.width + "px";
    } else {
      contentEl.style.left =
        triggerRect.left + (triggerRect.width - contentRect.width) / 2 + "px";
    }
  }

  $effect(() => {
    if (contentBoxSize) adjustPosition();
  });
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<button
  type="button"
  class={twMerge(
    "px-2 py-1 h-fit cursor-pointer", // box sizing
    "text-input-fg bg-input outline-primary", // colors
    "outline-offset-2 hover:outline focus-visible:outline", // outline
    "rounded border", // border
    // disabled && "bg-disabled text-disabled-fg cursor-not-allowed outline-none",
    className,
  )}
  onkeydown={(event: KeyboardEvent) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      open = true;
    }
  }}
  onclick={() => (open = true)}>{value || "Please select an option"}</button
>

<!-- Customize backdrop here -->
<div
  class={twMerge(
    "top-0 right-0 bottom-0 left-0 z-[999999999] fixed bg-bg/30",
    open ? "fixed" : "hidden",
  )}
>
  <!-- Customize content here -->
  <div
    use:focusTrap
    use:verticalNavigation
    use:escapeKey={() => (open = false)}
    bind:this={contentEl}
    bind:contentBoxSize
    transition:fade={{ duration: 75 }}
    class={twMerge(
      "flex flex-col gap-1",
      "fixed bg-bg border rounded h-fit max-h-[calc(100vh-2rem)]",
      "text-fg pointer-events-auto overflow-auto px-1 shadow",
      className,
    )}
  >
    <button
      type="button"
      class="hover:bg-primary/30 text-left"
      onclick={() => {
        value = undefined;
        open = false;
      }}
    >
      Null
    </button>
    {#each options as option}
      <button
        type="button"
        class="hover:bg-primary/30 text-left"
        onclick={() => {
          value = option.value;
          open = false;
        }}
      >
        {option.label}
      </button>
    {/each}
  </div>
</div>

{#if value !== undefined}
  <select name="color">
    {#each options as option}
      {@const selected = option.value === value ? true : false}
      <option value={option.value} {selected}></option>
    {/each}
  </select>
{/if}
