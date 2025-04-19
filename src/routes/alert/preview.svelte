<script lang="ts">
  import Alert from '$lib/components/base/alert.svelte';
</script>

<!-- Simple Alert -->
<Alert title="Simple Alert">
  <p>Content here...</p>
</Alert>

<!-- Closable Alert -->
<Alert title="Closable Alert" closable>
  <p>Content here...</p>
</Alert>

<!-- Destructive Alert -->
<Alert title="Destructive Alert" variant="destructive">
  <p>Content here...</p>
</Alert>
