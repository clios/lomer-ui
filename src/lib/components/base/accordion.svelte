<script lang="ts">
  import type { Snippet } from 'svelte';
  import { slide } from 'svelte/transition';
  import { twMerge } from 'tailwind-merge';

  type Props = {
    children?: Snippet;
    class?: string;
    disabled?: boolean;
    group?: string;
    loading?: boolean;
    name?: string;
    open?: boolean;
    title?: string;
    value?: string;
  };

  let {
    children,
    class: className,
    disabled = false,
    group = $bindable(),
    loading = $bindable(false),
    name,
    open = false,
    title,
    value,
    ...props
  }: Props = $props();

  function onclick() {
    if (loading) return;
    open = !open;
    group = value;
  }

  $effect(() => {
    if (!group && !value) return;
    open = group === value;
  });
</script>

<!-- CONTAINER -->
<div class={twMerge('bg-bg text-fg w-full', className)} {...props}>
  <!-- HEADER -->
  <button
    class={twMerge(
      'relative flex w-full items-center gap-1 px-3 py-1', // layout and positioning
      'focus:text-primary hover:text-primary cursor-pointer rounded outline-none', // visual
      (loading || disabled) &&
        'text-disabled-fg pointer-events-none cursor-not-allowed',
      className
    )}
    disabled={loading || disabled}
    type="button"
    {onclick}
  >
    <p class="w-full text-left font-semibold">{title}</p>

    <!-- ICON DISPLAYED -->
    {#if loading}
      {@render IconSpinner()}
    {:else}
      {@render IconChevron()}
    {/if}
  </button>

  <!-- CONTENT -->
  {#if open && (!group || group === value)}
    <div class="px-3 pb-4" transition:slide={{ duration: 150 }}>
      {@render children?.()}
    </div>
  {/if}
</div>

{#snippet IconSpinner()}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="text-primary mr-0.5 size-4 animate-spin"
    viewBox="0 0 16 16"
  >
    <path
      fill="currentColor"
      d={`M8 0A8 8 0 0 0 .002 7.812C.094 4.033 2.968 1 6.5 1C10.09 1 13 4.134 13 8a1.5 1.5 ` +
        `0 0 0 3 0a8 8 0 0 0-8-8m0 16a8 8 0 0 0 7.998-7.812C15.906 11.967 13.032 15 9.5 ` +
        `15C5.91 15 3 11.866 3 8a1.5 1.5 0 0 0-3 0a8 8 0 0 0 8 8`}
    />
  </svg>
{/snippet}

{#snippet IconChevron()}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class={twMerge('size-5 transition-transform', open && 'rotate-180')}
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M18.53 9.53a.75.75 0 0 0 0-1.06H5.47a.75.75 0 0 0 0 1.06l6 6a.75.75 0 0 0 1.06 0z"
    />
  </svg>
{/snippet}
