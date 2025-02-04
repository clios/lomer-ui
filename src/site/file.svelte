<script lang="ts">
  import type { Snippet } from 'svelte';

  type Props = { children: Snippet };
  let { children }: Props = $props();
</script>

<span class="font-mono text-orange-600 italic dark:text-orange-400">
  {@render children?.()}
</span>
