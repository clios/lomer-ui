<script lang="ts">
	import Alert from '$lib/components/ui/alert.svelte';
	import Button from '$lib/components/ui/button.svelte';
	import Screen from '$lib/components/screen.svelte';

	let isOpen = true;
</script>

<Screen class="flex justify-center p-8">
	{#if isOpen}
		<Alert title="Information" isClosable bind:isOpen>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, ipsam?
		</Alert>
	{:else}
		<Button onclick={() => (isOpen = true)}>Open alert</Button>
	{/if}
</Screen>
