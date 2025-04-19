<script lang="ts">
  import Accordion from '$lib/components/base/accordion.svelte';

  // Create group state for single mode
  let group = $state('');
</script>

<!-- Basic accordion -->
<Accordion title="Basic accordion">Content</Accordion>

<!-- Single mode accordion -->
<div>
  <Accordion title="Single mode accordion 1" value="1" bind:group>Content</Accordion>
  <Accordion title="Single mode accordion 2" value="2" bind:group>Content</Accordion>
  <Accordion title="Single mode accordion 3" value="3" bind:group>Content</Accordion>
</div>

<!-- Loading -->
<Accordion title="Requesting..." loading>Content</Accordion>

<!-- Disabled -->
<Accordion title="Disabled" disabled>Content</Accordion>
