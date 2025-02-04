<script lang="ts">
  import Switch from '$lib/components/ui/switch.svelte';
  import Screen from '$lib/components/screen.svelte';

  let value = $state(false);
</script>

<Screen>
  <div class="flex h-32 w-full flex-col items-center justify-center gap-4">
    <Switch bind:value>Turn me on!</Switch>
    <p>Value: {value}</p>
  </div>
</Screen>
