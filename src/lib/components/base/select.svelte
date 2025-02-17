<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLSelectAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';

  type Props = {
    children?: Snippet;
    class?: string;
    disabled?: boolean;
    open?: boolean;
    value?: any;
  } & HTMLSelectAttributes;

  let {
    children,
    class: className,
    disabled = false,
    value = $bindable(),
    ...props
  }: Props = $props();
</script>

<div class="text-input-fg bg-input relative flex w-fit items-center rounded">
  <select
    class={twMerge(
      'w-fit appearance-none py-1 pr-10 pl-2', // base
      'cursor-pointer rounded border',
      'outline-primary outline-offset-2 hover:outline focus:outline', // outline
      disabled &&
        'bg-disabled text-disabled-fg cursor-not-allowed outline-none',

      '[&>option]:bg-input',
      '[&>option]:text-input-fg',

      '[&>optgroup]:bg-input',
      '[&>optgroup]:text-primary',
      '[&>optgroup]:text-xs',

      '[&>optgroup>option]:text-input-fg',
      '[&>optgroup>option]:text-base',
      '[&>optgroup>option:disabled]:text-disabled-fg',

      className
    )}
    {disabled}
    {...props}
    bind:value
  >
    {@render children?.()}
  </select>

  {@render ArrowDown()}
</div>

{#snippet ArrowDown()}
  <svg
    class="text-fg pointer-events-none absolute right-2 size-5"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      d="m6 9l6 6l6-6"
    />
  </svg>
{/snippet}
