<script lang="ts">
  import type { Snippet } from 'svelte';
  import { slide } from 'svelte/transition';
  import { twMerge } from 'tailwind-merge';

  type Props = {
    children?: Snippet;
    class?: string;
    group?: string;
    open?: boolean;
    value?: string;
  };

  let {
    children,
    class: className,
    group = $bindable(),
    open = false,
    value,
    ...props
  }: Props = $props();

  $effect(() => {
    if (!group && !value) return;
    open = group === value;
  });
</script>

{#if open && (!group || group === value)}
  <div class={twMerge(className)} transition:slide={{ duration: 150 }}>
    {@render children?.()}
  </div>
{/if}
