<script lang="ts">
  import Accordion from './base/accordion.svelte';
  import type { Snippet } from 'svelte';

  type Props = {
    preview?: Snippet;
    children?: Snippet;
    expand?: boolean;
  };

  let { preview, children, expand = false }: Props = $props();
</script>

<div class="">
  <div class="border-b">
    <p class="text-fg mt-2 ml-2 font-semibold">Preview</p>
    {@render preview?.()}
  </div>
  <Accordion title="Code" open={expand}>
    {@render children?.()}
  </Accordion>
</div>
