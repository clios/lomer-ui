<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';

  type Props = {
    class?: string;
    disabled?: boolean;
    value?: string;
  } & HTMLInputAttributes;

  let {
    class: className,
    disabled = false,
    value = $bindable(''),
    ...props
  }: Props = $props();
</script>

<input
  class={twMerge(
    'text-input-fg bg-input px-2 py-1', // base
    'rounded border hover:cursor-text', // border
    'outline-primary outline-offset-2 hover:outline focus:outline', // outline
    disabled && 'bg-disabled text-disabled-fg cursor-not-allowed outline-none',
    className
  )}
  {disabled}
  bind:value
  {...props}
/>
