<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  type Props = HTMLAttributes<HTMLElementTagNameMap['p']> & {
    children?: Snippet;
    class?: string;
  };

  let { children, class: className, ...props }: Props = $props();
</script>

<p class={twMerge('mt-2 text-muted text-base', className)} {...props}>
  {@render children?.()}
</p>
