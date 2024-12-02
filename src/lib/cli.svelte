<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import hljs from 'highlight.js';
	import Icon from '@iconify/svelte';
	import Button from './button.svelte';
	import clsx from 'clsx';

	export let code = ''; // The code to highlight
	export let language = ''; // Optional: specify the language
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

	onMount(() => {
		if (language) {
			hljs.highlightElement(pre.querySelector('code'));
		} else {
			hljs.highlightBlock(pre);
		}
	});
</script>

<div class="relative flex flex-col justify-center">
	<!-- Copy Button -->
	<div class="absolute right-2">
		<Button size="icon" variant="ghost" on:click={copyToClipboard}>
			{#if copyMessage}
				<Icon class="text-teal-500" icon="mdi:check" width={24} height={24} />
			{:else}
				<Icon class="text-zinc-50" icon="mdi:clipboard-outline" width={24} height={24} />
			{/if}
		</Button>
	</div>

	<!-- Highlighted Code -->
	<pre class="overflow-hidden rounded-md" bind:this={pre}><code class={language}>{code}</code></pre>
</div>
