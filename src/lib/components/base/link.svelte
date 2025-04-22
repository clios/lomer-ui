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
    'group relative rounded w-fit text-primary cursor-pointer', // base
    'underline-offset-2 hover:underline', // hovering
    'active:text-fg', // active
    className
  )}
  {...props}
>
  {@render children?.()}
</a>
