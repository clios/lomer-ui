<script lang="ts">
  import Button from '$lib/components/base/button.svelte';
  import Dropdown from '$lib/components/base/dropdown.svelte';

  let openLeft = $state(false);
  let openCenter = $state(false);
  let openRight = $state(false);
</script>

<!-- Left -->
<Button onclick={() => (openLeft = true)}>Left</Button>
<Dropdown placement="left" bind:open={openLeft}>
  <div class="h-56 w-36">Content</div>
</Dropdown>

<!-- Center -->
<Button onclick={() => (openCenter = true)}>Center</Button>
<Dropdown placement="center" bind:open={openCenter}>
  <div class="h-56 w-36">Content</div>
</Dropdown>

<!-- Right -->
<Button onclick={() => (openRight = true)}>Right</Button>
<Dropdown placement="right" bind:open={openRight}>
  <div class="h-56 w-36">Content</div>
</Dropdown>
