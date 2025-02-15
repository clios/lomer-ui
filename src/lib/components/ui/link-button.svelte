<script lang="ts">
  import type { Snippet } from 'svelte';
  import Button from '../base/button.svelte';
  import Link from './link.svelte';
  import type { HTMLAnchorAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';

  type Variant =
    | 'default'
    | 'inverted'
    | 'primary'
    | 'secondary'
    | 'destructive'
    | 'outline'
    | 'ghost';

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
    loading = false,
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
