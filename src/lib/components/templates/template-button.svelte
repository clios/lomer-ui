<script lang="ts">
  import Button from '$lib/components/ui/button.svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';

  type Props = {
    // Additional props here
  } & HTMLButtonAttributes;

  let { children, ...props }: Props = $props();
</script>

<Button {...props}>
  {@render children?.()}
</Button>
