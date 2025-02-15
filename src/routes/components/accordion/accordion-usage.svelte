<script lang="ts">
  import Accordion from '$lib/components/base/accordion.svelte';
</script>

<div class="w-full">
  <Accordion title="Basic Accordion">Content</Accordion>
  <Accordion title="Requesting..." loading>Content</Accordion>
  <Accordion title="Disabled" disabled>Content</Accordion>
</div>
