<script>
  import Button from '$lib/components/base/button.svelte';
  import Collapsible from '$lib/components/base/collapsible.svelte';
  let open = $state(false);
</script>

<Button onclick={() => (open = !open)}>Toggle</Button>
<Collapsible class="border" collapseClass="mt-0" expandClass="mt-2" bind:open>Content</Collapsible>
