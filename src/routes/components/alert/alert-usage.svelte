<script lang="ts">
  import Alert from '$lib/components/base/alert.svelte';
  import Icon from '@iconify/svelte';
</script>

<div class="grid w-full gap-4">
  <Alert title="Notice">
    <p>Your bill is due tomorrow.</p>
  </Alert>

  <!-- Closable -->
  <Alert title="Notice" closable>
    <p>Closable alert.</p>
  </Alert>

  <!-- Destructive -->
  <Alert title="Notice" variant="destructive">
    <p>Destructive alert.</p>
  </Alert>

  <!-- Custom Icon -->
  <Alert title="Notice">
    {#snippet icon()}
      <Icon class="size-6" icon="mdi:terminal-line" />
    {/snippet}
    <p>Alert with custom icon.</p>
  </Alert>
</div>
