<script lang="ts">
  import Drawer from '$lib/components/ui/drawer.svelte';
  import Button from '$lib/components/base/button.svelte';

  let open = $state(false);
</script>

<Button onclick={() => (open = true)}>Open drawer</Button>
<Drawer class="w-96" title="Title here" bind:open>
  <p>Content here...</p>
</Drawer>
