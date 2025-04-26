<script lang="ts">
  import Button from './button.svelte';
  import Link from './link.svelte';
  import type { HTMLAnchorAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  type Variant = 'default' | 'inverted' | 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost';

  type Props = {
    children?: Snippet;
    class?: string;
    variant?: Variant;
    disabled?: boolean;
    edge?: 'default' | 'circle' | 'sharp';
    loading?: boolean;
    size?: 'default' | 'icon' | 'small';
  } & HTMLAnchorAttributes;

  let {
    children,
    class: className,
    disabled = false,
    edge = 'default',
    loading = $bindable(false),
    size = 'default',
    variant = 'default',
    ...props
  }: Props = $props();
</script>

<Link class={twMerge(className)} {...props}>
  <Button {variant} {disabled} {edge} {loading} {size}>
    {@render children?.()}
  </Button>
</Link>
