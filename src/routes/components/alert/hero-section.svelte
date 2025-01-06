<script lang="ts">
	import Alert from '$lib/alert.svelte';
	import Button from '$lib/button.svelte';
	import Screen from '$site/screen.svelte';

	let isOpen = true;
</script>

<Screen class="flex justify-center">
	{#if isOpen}
		<Alert title="Information" isClosable bind:isOpen>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum soluta
			voluptates quaerat sint quos reiciendis blanditiis voluptatibus tempora
			iusto necessitatibus corrupti error, nisi quisquam, dolorem aliquam harum
			nihil debitis.
		</Alert>
	{:else}
		<Button onclick={() => (isOpen = true)}>Open alert</Button>
	{/if}
</Screen>
