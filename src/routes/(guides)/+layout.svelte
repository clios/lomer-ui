<script lang="ts">
  import Shell from '../shell.svelte';
  let { children } = $props();
</script>

<Shell>
  {@render children()}
</Shell>
