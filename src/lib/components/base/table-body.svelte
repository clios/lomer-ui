<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  type Props = {
    children?: Snippet;
    class?: string;
    zebra?: boolean;
    outline?: boolean;
  };

  let {
    children,
    class: className,
    outline,
    zebra,
    ...props
  }: Props = $props();
</script>

<tbody
  class={twMerge(
    zebra && '[&_tr:nth-child(odd)]:bg-fg/5',
    zebra && '[&_tr:nth-child(odd):hover]:bg-primary/15',
    zebra && '[&_tr:nth-child(odd):focus]:bg-primary/15',
    zebra && '[&_tr:hover]:bg-primary/15',
    outline && '[&_tr]:border-t',
    className
  )}
  {...props}
>
  {@render children?.()}
</tbody>
