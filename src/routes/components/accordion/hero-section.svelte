<script lang="ts">
	import Accordion from '$lib/components/core/accordion.svelte';
	import Screen from '$lib/components/screen.svelte';
</script>

<Screen class="p-8">
	<Accordion title="How's the DX?">
		{#snippet icon()}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
			>
				<path
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.5"
					d="M13.5 6L10 18.5m-3.5-10L3 12l3.5 3.5m11-7L21 12l-3.5 3.5"
				/>
			</svg>
		{/snippet}
		Awesome! Less code, more joy.</Accordion
	>
	<Accordion title="Waiting for API request" isLoading></Accordion>
	<Accordion title="This is disabled" isDisabled></Accordion>
</Screen>
