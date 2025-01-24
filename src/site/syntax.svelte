<script lang="ts">
	import Button from '$lib/components/core/button.svelte';
	import Icon from '@iconify/svelte';
	import felipec from 'svelte-highlight/styles/felipec';
	import { HighlightSvelte, LineNumbers } from 'svelte-highlight';
	import { fade } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';

	type Props = {
		canCopy?: boolean;
		class?: string;
		code: string;
		expandable?: boolean;
		highlightedLines?: number[];
		startingLineNumber?: number;
	};

	let {
		canCopy,
		class: className,
		code,
		expandable = false,
		highlightedLines,
		startingLineNumber
	}: Props = $props();

	let isOpen = $state(false);
	let copyMessage = $state('');

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
</script>

<svelte:head>
	{@html felipec}
</svelte:head>

<div class="relative">
	<div class="rounded-card overflow-hidden">
		<div
			class={twMerge(
				'rounded-card overflow-hidden text-sm',

				expandable && 'h-72',

				isOpen ? 'h-72' : '',

				className
			)}
		>
			<HighlightSvelte {code} let:highlighted>
				<LineNumbers
					{highlighted}
					{highlightedLines}
					{startingLineNumber}
					--line-number-color="rgba(255, 255, 255, 0.3)"
					--border-color="rgba(255, 255, 255, 0.1)"
					--highlighted-background="rgba(6, 182, 212, 0.3)"
				/>
			</HighlightSvelte>
		</div>
	</div>

	<!-- {#if expandable}
		<div
			class={twMerge(
				'to-bg absolute bottom-0 z-10 flex w-full justify-center bg-gradient-to-b from-transparent',
				isOpen ? 'h-0' : 'h-72'
			)}
		></div>
		<Button
			onclick={() => (isOpen = !isOpen)}
			class={twMerge('', isOpen ? '-bottom-12' : 'bottom-8')}
			variant="inverted"
		>
			{#if isOpen}
				Collapse
			{:else}
				Expand
			{/if}
		</Button>
	{/if} -->

	<!-- {#if canCopy}
		<Button
			class="outline-none"
			variant="ghost"
			size="icon"
			onclick={copyToClipboard}
		>
			{#if copyMessage}
				<div in:fade class="flex items-center gap-1 text-sm">
					<Icon class="text-teal-500" icon="mdi:check" />
				</div>
			{:else}
				<div in:fade={{ delay: 300 }}>
					<Icon icon="mdi:clipboard-outline" />
				</div>
			{/if}
		</Button>
	{/if} -->
</div>
