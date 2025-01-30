<script lang="ts">
	import Accordion from '$lib/components/ui/accordion.svelte';
	import Icon from '@iconify/svelte';
</script>

<Accordion title="Title 1">
	{#snippet icon()}
		<Icon class="size-6" icon="fluent:shield-12-regular" />
	{/snippet}
	Content
</Accordion>
