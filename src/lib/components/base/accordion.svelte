<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { slide } from 'svelte/transition';
  import { twMerge } from 'tailwind-merge';

  // We need group and value props for single mode accordion, just like input radio.
  type Props = HTMLAttributes<HTMLDivElement> & {
    children?: Snippet;
    class?: string;
    disabled?: boolean;
    group?: string;
    loading?: boolean;
    open?: boolean;
    title?: string;
    value?: string;
  };

  let {
    children,
    class: className,
    disabled = false,
    group = $bindable(),
    loading = false,
    open = false,
    title,
    value,
    ...props
  }: Props = $props();

  let expand = $derived(open && (!group || group === value));

  function onclick() {
    open = !open;
    group = value;
  }
</script>

<!-- Customize container here -->
<div class={twMerge('bg-bg text-fg h-min w-full', className)} {...props}>
  <!-- Customize header here -->
  <button
    class={twMerge(
      'hover:text-primary flex w-full cursor-pointer items-center gap-1 px-3 py-2',
      (loading || disabled) && 'text-disabled-fg pointer-events-none'
    )}
    disabled={loading || disabled}
    type="button"
    {onclick}
  >
    <!-- Customize title here -->
    <div class="w-full text-left font-semibold">{title}</div>

    <!-- Customize icon snippets below  -->
    {#if loading}
      {@render IconSpinner()}
    {:else}
      {@render IconChevron()}
    {/if}
  </button>

  {#if expand}
    <!-- Customize content here -->
    <div class="px-3 pb-4" transition:slide={{ duration: 150 }}>
      {@render children?.()}
    </div>
  {/if}
</div>

<!-- Customize icon for loading -->
{#snippet IconSpinner()}
  <svg xmlns="http://www.w3.org/2000/svg" class="text-primary mr-0.5 size-4 animate-spin" viewBox="0 0 16 16">
    <path
      fill="currentColor"
      d="M8 0A8 8 0 0 0 .002 7.812C.094 4.033 2.968 1 6.5 1C10.09 1 13 4.134 13 8a1.5 1.5 0 0 0 3 0a8 8 0 0 0-8-8m0 16a8 8 0 0 0 7.998-7.812C15.906 11.967 13.032 15 9.5 15C5.91 15 3 11.866 3 8a1.5 1.5 0 0 0-3 0a8 8 0 0 0 8 8"
    />
  </svg>
{/snippet}

<!-- Customize icon for indicator -->
{#snippet IconChevron()}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class={twMerge('size-5 transition-transform', expand && 'rotate-180')}
    viewBox="0 0 24 24"
  >
    <path fill="currentColor" d="M18.53 9.53a.75.75 0 0 0 0-1.06H5.47a.75.75 0 0 0 0 1.06l6 6a.75.75 0 0 0 1.06 0z" />
  </svg>
{/snippet}
