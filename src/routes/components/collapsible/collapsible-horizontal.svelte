<script>
  import Button from '$lib/components/base/button.svelte';
  import Collapsible from '$lib/components/base/collapsible.svelte';
  let open = $state(false);
</script>

<div class="flex gap-2">
  <Collapsible
    class="border"
    bind:open
    collapseClass="w-0 h-40"
    expandClass="w-32 h-40"
  >
    Content
  </Collapsible>
  <Button onclick={() => (open = !open)}>Toggle</Button>
</div>
