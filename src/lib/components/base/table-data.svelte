<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLTdAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';

  type Props = {
    children?: Snippet;
    class?: string;
  } & HTMLTdAttributes;

  let { class: className, children, ...props }: Props = $props();
</script>

<td class={twMerge('text-fg px-4 py-2 align-top ', className)} {...props}>
  {@render children?.()}
</td>
