<script lang="ts">
  import IconChevron from './icon-chevron.svelte';
  import Spinner from '$lib/components/ui/spinner.svelte';
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
    loading = false,
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
      <Spinner class="mr-0.5 size-4" />
    {:else}
      <IconChevron
        class={twMerge('size-5 transition-transform', open && 'rotate-180')}
      />
    {/if}
  </button>

  <!-- CONTENT -->
  {#if open && (!group || group === value)}
    <div class="px-3 pb-4" transition:slide={{ duration: 150 }}>
      {@render children?.()}
    </div>
  {/if}
</div>
