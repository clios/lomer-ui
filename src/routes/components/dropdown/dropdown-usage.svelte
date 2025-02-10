<script lang="ts">
  import Button from '$lib/components/ui/button.svelte';
  import Dropdown from '$lib/components/ui/dropdown.svelte';

  let open = $state(false);
</script>

<Button onclick={() => (open = true)}>Dropdown</Button>
<Dropdown bind:open>
  <div class="h-24 w-72">Content</div>
</Dropdown>
