<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  type Props = {
    children?: Snippet;
    class?: string;
  };

  let { class: className, children, ...props }: Props = $props();
</script>

<thead class={twMerge('peer', className)} {...props}>
  {@render children?.()}
</thead>
