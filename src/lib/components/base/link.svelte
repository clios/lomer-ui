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
    'group relative w-fit cursor-pointer rounded', // base
    'hover:text-primary', // hovering
    'active:text-fg', // active
    className
  )}
  {...props}
>
  {@render children?.()}
</a>
