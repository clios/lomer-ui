<script lang="ts">
  import Textarea from '$lib/components/ui/textarea.svelte';
  import Screen from '$lib/components/screen.svelte';

  let value = $state('lomer-ui');
</script>

<Screen>
  <div class="flex h-40 flex-col items-center justify-center gap-4">
    <Textarea bind:value />
    <p>Value: {value || 'N/A'}</p>
  </div>
</Screen>
