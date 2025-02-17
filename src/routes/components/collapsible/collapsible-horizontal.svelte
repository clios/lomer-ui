<script>
  import Button from '$lib/components/base/button.svelte';
  import Collapsible from '$lib/components/base/collapsible.svelte';
  let open = $state(false);
</script>

<div class="flex">
  <Collapsible
    class="border"
    bind:open
    collapseClass="w-0 h-40 mr-0"
    expandClass="w-32 h-40 mr-2"
  >
    Content
  </Collapsible>
  <Button onclick={() => (open = !open)}>Toggle</Button>
</div>
