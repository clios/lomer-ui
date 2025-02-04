<script lang="ts">
  import Button from '$lib/components/ui/button.svelte';
  import Icon from '@iconify/svelte';

  export let name;
</script>

<div class="mt-1 flex gap-2">
  <p class="text-muted font-mono">Recipe: {name}</p>
</div>
