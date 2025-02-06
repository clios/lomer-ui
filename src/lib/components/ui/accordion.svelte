<script lang="ts">
  import Button from '$lib/components/ui/button.svelte';
  import Collapsible from '$lib/components/ui/collapsible.svelte';
  import Spinner from '$lib/components/ui/spinner.svelte';
  import type { Snippet } from 'svelte';
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
  <Button
    class={twMerge(
      'hover:text-primary focus:text-primary w-full justify-between py-2 outline-none',
      loading && 'hover:text-disabled-fg focus:text-disabled-fg-fg',
      disabled && 'hover:text-disabled-fg focus:text-disabled-fg-fg'
    )}
    variant="ghost"
    disabled={loading || disabled}
    {onclick}
  >
    <p class="w-full text-left font-semibold">{title}</p>

    <!-- ICON DISPLAYED -->
    {#if loading}
      <Spinner />
    {:else}
      {@render IconChevron()}
    {/if}
  </Button>

  <!-- CONTENT -->
  <Collapsible class="px-3 pb-4" {open} {group} {value}>
    {@render children?.()}
  </Collapsible>
</div>

<!-- ICON CHEVRON -->
{#snippet IconChevron()}
  <svg
    class={twMerge(
      'size-6 transition-transform', // animate
      open && 'rotate-180' // interaction
    )}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      d="M18.53 9.53a.75.75 0 0 0 0-1.06H5.47a.75.75 0 0 0 0 1.06l6 6a.75.75 0 0 0 1.06 0z"
    />
  </svg>
{/snippet}
