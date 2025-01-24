<script lang="ts">
	import Button from '$lib/components/core/button.svelte';
	import Highlight from 'svelte-highlight';
	import Icon from '@iconify/svelte';
	import bash from 'svelte-highlight/languages/bash';
	import felipec from 'svelte-highlight/styles/felipec';
	import { twMerge } from 'tailwind-merge';

	type Props = {
		class?: string;
		code?: string;
	};

	let { class: className, code }: Props = $props();

	// Copy code to clipboard
	async function copyToClipboard() {
		try {
			await navigator.clipboard.writeText(code || '');
			copyMessage = 'Copied!';
			setTimeout(() => (copyMessage = ''), 1000);
		} catch (err) {
			console.error('Failed to copy code:', err);
			copyMessage = 'Failed to copy!';
		}
	}

	let copyMessage = $state('');
</script>

<svelte:head>
	{@html felipec}
</svelte:head>

<div
	class={twMerge(
		'bg-fg dark:bg-bg flex h-10 w-full max-w-fit items-center gap-1 overflow-x-auto overflow-y-hidden rounded border pr-1 text-sm not-italic',
		className
	)}
>
	<Highlight language={bash} {code}></Highlight>

	<Button
		class="outline-none"
		size="icon"
		variant="ghost"
		onclick={copyToClipboard}
	>
		{#if copyMessage}
			<Icon class="text-teal-500" icon="mdi:check" />
		{:else}
			<Icon class="text-bg dark:text-fg" icon="mdi:clipboard-outline" />
		{/if}
	</Button>
</div>
