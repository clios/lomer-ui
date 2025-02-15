<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';
  import Spinner from '$lib/components/ui/spinner.svelte';

  type Variant = 'default' | 'destructive';

  type Props = {
    children?: Snippet;
    class?: string | null;
    disabled?: boolean;
    loading?: boolean;
    variant?: Variant;
  } & HTMLButtonAttributes;

  let {
    children,
    class: className,
    disabled = false,
    loading = false,
    variant = 'default',
    type = 'button',
    ...props
  }: Props = $props();
</script>

<button
  class={twMerge(
    'relative flex cursor-pointer items-center gap-1 rounded ', // base
    'w-full py-1 pr-12 pl-3', // box model
    'outline-primary -outline-offset-1', // outline
    'hover:outline', // hover
    'focus:outline', // focus
    'active:outline-2 active:-outline-offset-2', // active

    variant === 'destructive' && 'text-destructive outline-destructive',

    (loading || disabled) &&
      'text-disabled-fg pointer-events-none cursor-not-allowed',

    className
  )}
  disabled={loading || disabled}
  {type}
  {...props}
>
  {#if loading}
    <Spinner class="absolute right-3 bottom-1/2 size-4 translate-y-1/2" />
  {/if}
  {@render children?.()}
</button>
