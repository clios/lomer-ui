<script>
  import Button from '$lib/components/base/button.svelte';
  import Collapsible from '$lib/components/base/collapsible.svelte';
  let open = $state(false);
</script>

<Button onclick={() => (open = !open)}>Toggle</Button>
<Collapsible class="border" bind:open>Content</Collapsible>
