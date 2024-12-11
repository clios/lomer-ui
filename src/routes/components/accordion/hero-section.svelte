<script lang="ts">
	import Accordion from '$lib/accordion.svelte';
	import Screen from '$site/screen.svelte';
</script>

<Screen>
	<Accordion title="How's the DX?">Awesome! Less code, more joy.</Accordion>
	<Accordion title="Why is it transparent?"
		>So it vibes with your colors.</Accordion
	>
	<Accordion title="Can I tweak the background?"
		>Your code, your rules!</Accordion
	>
</Screen>
