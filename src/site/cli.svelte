<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';
	import Button from '$lib/button.svelte';
	import clsx from 'clsx';

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
	<div class="absolute right-2">
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
		class={clsx(
			'border border-zinc-300 dark:border-zinc-700',
			'overflow-hidden rounded-md bg-zinc-200 px-4 py-2 dark:bg-zinc-800'
		)}
		bind:this={pre}><p>{code}</p></pre>
</div>
