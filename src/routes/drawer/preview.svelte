<script>
  import Button from '$lib/components/base/button.svelte';
  import Drawer from '$lib/components/base/drawer.svelte';

  let open = $state(false);
</script>

<Button onclick={() => (open = true)}>Open drawer</Button>
<Drawer bind:open title="Title here">Content here...</Drawer>
