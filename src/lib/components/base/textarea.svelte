<script lang="ts">
  import type { HTMLTextareaAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';

  type Props = {
    class?: string;
    disabled?: boolean;
    value?: string;
  } & HTMLTextareaAttributes;

  let {
    class: className,
    disabled = false,
    value = $bindable(''),
    ...props
  }: Props = $props();
</script>

<textarea
  class={twMerge(
    'text-input-fg bg-input field-sizing-content min-w-52 px-2 py-1', // base
    'rounded border hover:cursor-text', // border
    'outline-primary outline-offset-2 hover:outline focus:outline', // outline
    disabled && 'bg-disabled text-disabled-fg cursor-not-allowed outline-none',
    className
  )}
  {disabled}
  bind:value
  {...props}
></textarea>
