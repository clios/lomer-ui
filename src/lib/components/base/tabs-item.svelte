<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  type Props = {
    active?: string;
    children?: Snippet;
    class?: string;
    disabled?: boolean;
    value?: string;
  } & HTMLButtonAttributes;

  let {
    active = $bindable(),
    children,
    class: className,
    disabled = false,
    value = '',
    ...props
  }: Props = $props();

  function onclick() {
    if (disabled) return;
    if (active || value) {
      active = value;
    }
    onclick;
  }
</script>

<button
  class={twMerge(
    'text-fg relative rounded px-3 pt-1 pb-2 text-nowrap',
    !disabled && 'cursor-pointer',
    !disabled && 'hover:bg-primary/15',
    !disabled && 'focus:bg-primary/15',
    active === value && 'text-primary',
    disabled && 'text-disabled-fg',
    className
  )}
  {onclick}
  {...props}
>
  {@render children?.()}
  {#if value === active}
    <div class="border-primary absolute bottom-0 left-0 w-full border-b"></div>
  {/if}
</button>
