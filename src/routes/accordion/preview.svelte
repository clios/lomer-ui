<script lang="ts">
  import Accordion from '$lib/components/base/accordion.svelte';

  // Create group state for single mode
  let group = $state('');
</script>

<!-- Simple Accordion -->
<Accordion title="Simple Accordion">Content...</Accordion>

<!-- Single mode accordion -->
<div>
  <Accordion title="Single Mode Accordion 1" value="1" bind:group>Content...</Accordion>
  <Accordion title="Single Mode Accordion 2" value="2" bind:group>Content...</Accordion>
  <Accordion title="Single Mode Accordion 3" value="3" bind:group>Content...</Accordion>
</div>

<!-- Loading Accordion -->
<Accordion title="Loading Accordion" loading>Content...</Accordion>

<!-- Disabled Accordion -->
<Accordion title="Disabled Accordion" disabled>Content...</Accordion>
