<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import hljs from 'highlight.js';
	import Icon from '@iconify/svelte';
	import Button from '$lib/components/ui/button.svelte';
	import { twMerge } from 'tailwind-merge';

	export let code = ''; // The code to highlight
	export let language = 'xml'; // Optional: specify the language
	export { className as class };

	let className = '';
	let pre;

	// Copy code to clipboard
	async function copyToClipboard() {
		try {
			await navigator.clipboard.writeText(code);
			copyMessage = 'Copied!';
			setTimeout(() => (copyMessage = ''), 1000);
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

<div class={twMerge('relative flex flex-col justify-center', className)}>
	<!-- Copy Button -->
	<div class="absolute top-2 right-2">
		<Button size="icon" variant="ghost" onclick={copyToClipboard}>
			{#if copyMessage}
				<Icon class="text-teal-500" icon="mdi:check" />
			{:else}
				<Icon class="text-zinc-50" icon="mdi:clipboard-outline" />
			{/if}
		</Button>
	</div>

	<!-- Highlighted Code -->
	<pre
		class="overflow-hidden rounded-md border border-zinc-300 dark:border-zinc-700"
		bind:this={pre}><code class={language}>{code}</code></pre>
</div>
