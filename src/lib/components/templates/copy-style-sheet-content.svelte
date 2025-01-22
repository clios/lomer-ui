<script lang="ts">
	import Button from '$lib/components/ui/button.svelte';
	import Highlight, { LineNumbers } from 'svelte-highlight';
	import Icon from '@iconify/svelte';
	import css from 'svelte-highlight/languages/css';
	import felipec from 'svelte-highlight/styles/felipec';
	import { twMerge } from 'tailwind-merge';

	type Props = {
		class?: string;
		code?: string;
		highlightedLines?: number[];
		startingLineNumber?: number;
	};

	let {
		class: className,
		code,
		highlightedLines,
		startingLineNumber
	}: Props = $props();

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

<div class={twMerge('relative flex flex-col text-sm', className)}>
	<div
		class="flex justify-between rounded-t border-x border-t py-1.5 pr-1.5 pl-2.5"
	>
		<p>lomer.css</p>

		<Button size="icon" variant="ghost" onclick={copyToClipboard}>
			{#if copyMessage}
				<Icon class="text-teal-500" icon="mdi:check" />
			{:else}
				<Icon class="text-zinc-50" icon="mdi:clipboard-outline" />
			{/if}
		</Button>
	</div>

	<div class="overflow-hidden rounded-b border-x border-b">
		<Highlight language={css} {code} let:highlighted>
			<LineNumbers
				wrapLines
				{highlighted}
				{highlightedLines}
				{startingLineNumber}
				--line-number-color="rgba(255, 255, 255, 0.3)"
				--border-color="rgba(255, 255, 255, 0.1)"
				--highlighted-background="rgba(6, 182, 212, 0.5)"
			/>
		</Highlight>
	</div>
</div>
