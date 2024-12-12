<script lang="ts">
	import Alert from '$lib/alert.svelte';
	import Button from '$lib/button.svelte';
	import Icon from '@iconify/svelte';
	import Screen from '$site/screen.svelte';

	let isOpen = true;
</script>

<Screen class="flex justify-center">
	{#if isOpen}
		<Alert class="flex w-full gap-4" isClosable bind:isOpen>
			<Icon icon="mdi:terminal-line" width={24} height={24} />
			<div>
				<p class="font-semibold">Notice</p>
				<p>Your bill is due tomorrow.</p>
			</div>
		</Alert>
	{:else}
		<Button on:click={() => (isOpen = true)}>Open alert</Button>
	{/if}
</Screen>
