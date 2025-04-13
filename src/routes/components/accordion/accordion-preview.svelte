<script lang="ts">
  import Accordion from '$lib/components/base/accordion.svelte';
  let group = $state('');
</script>

<Accordion title="Title 1" value="1" bind:group>Content</Accordion>
<Accordion title="Title 2" value="2" bind:group>Content</Accordion>
<Accordion title="Title 3" value="3" bind:group>Content</Accordion>
<Accordion title="Requesting..." loading>Content</Accordion>
<Accordion title="Disabled" disabled>Content</Accordion>
