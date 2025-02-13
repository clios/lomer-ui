<script lang="ts">
  import type { HTMLAnchorAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  type Props = {
    children?: Snippet;
    class?: string;
  } & HTMLAnchorAttributes;

  let { children, class: className, ...props }: Props = $props();
</script>

<a
  class={twMerge(
    'group text-primary relative w-fit cursor-pointer rounded', // base
    'focus:text-primary focus:outline-hidden', // focusing
    'hover:text-primary', // hovering
    'active:outline-2 active:outline-offset-0', // active
    className
  )}
  {...props}
>
  {@render children?.()}
</a>
