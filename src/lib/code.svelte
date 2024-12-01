<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import hljs from 'highlight.js';
	import Icon from '@iconify/svelte';
	import Button from './button.svelte';

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

<div class="relative flex flex-col justify-center overflow-auto pt-6">
	<!-- Copy Button -->
	<div class="absolute right-4 top-6">
		<Button size="icon" on:click={copyToClipboard}>
			{#if copyMessage}
				<Icon class="text-teal-500" icon="line-md:clipboard-check" width={24} height={24} />
			{:else}
				<Icon icon="line-md:clipboard-arrow" width={24} height={24} />
			{/if}
		</Button>
	</div>

	<!-- Highlighted Code -->
	<pre bind:this={pre}>
      <code class={language}>{code}</code>
    </pre>
</div>
