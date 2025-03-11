<script lang="ts">
  let { children } = $props();
</script>

<span class="text-primary font-mono text-lg">
  {@render children?.()}
</span>
