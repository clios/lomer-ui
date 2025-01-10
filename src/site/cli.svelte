<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';
	import Button from '$lib/button.svelte';
	import { twMerge } from 'tailwind-merge';

	export let code = '';

	let pre;

	// Copy code to clipboard
	async function copyToClipboard() {
		try {
			await navigator.clipboard.writeText(code);
			copyMessage = 'Copied!';
			setTimeout(() => (copyMessage = ''), 2000); // Reset message after 2 seconds
		} catch (err) {
			console.error('Failed to copy code:', err);
			copyMessage = 'Failed to copy!';
		}
	}

	let copyMessage = '';
</script>

<div class="relative flex flex-col justify-center">
	<!-- Copy Button -->
	<div class="absolute top-2 right-2">
		<Button size="icon" variant="ghost" onclick={copyToClipboard}>
			{#if copyMessage}
				<Icon class="text-teal-500" icon="mdi:check" />
			{:else}
				<Icon icon="mdi:clipboard-outline" />
			{/if}
		</Button>
	</div>

	<!-- Highlighted Code -->
	<pre
		class={twMerge('border', 'rounded-card bg-card overflow-hidden px-4 py-2')}
		bind:this={pre}><p>{code}</p></pre>
</div>
