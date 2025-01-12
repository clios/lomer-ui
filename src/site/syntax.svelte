<script lang="ts">
	import Button from '$lib/button.svelte';
	import felipec from 'svelte-highlight/styles/felipec';
	import type { Snippet } from 'svelte';
	import { HighlightSvelte, LineNumbers } from 'svelte-highlight';
	import { twMerge } from 'tailwind-merge';

	type Props = {
		class?: string;
		children?: Snippet;
		code?: string;
		highlightedLines?: number[];
		expandable?: boolean;
	};

	let {
		children,
		highlightedLines,
		class: className,
		code,
		expandable = false
	}: Props = $props();

	let isOpen = $state(false);
</script>

<svelte:head>
	{@html felipec}
</svelte:head>

<div class="relative">
	<div class="rounded-card overflow-hidden">
		<div
			class={twMerge(
				'rounded-card overflow-hidden text-sm',
				'scroll-smooth ',
				'[&::-webkit-scrollbar]:w-1',
				'[&::-webkit-scrollbar-track]:rounded-full',
				'[&::-webkit-scrollbar-track]:bg-none',
				'hover:[&::-webkit-scrollbar-track]:bg-border',
				'[&::-webkit-scrollbar-thumb]:rounded-full',
				'[&::-webkit-scrollbar-thumb]:bg-none',
				'hover:[&::-webkit-scrollbar-thumb]:bg-fg/50',

				expandable && 'h-72',

				isOpen ? 'h-72 overflow-auto' : '',

				className
			)}
		>
			<HighlightSvelte {code} let:highlighted>
				<LineNumbers
					{highlighted}
					{highlightedLines}
					--line-number-color="rgba(255, 255, 255, 0.3)"
					--border-color="rgba(255, 255, 255, 0.1)"
					--highlighted-background="rgba(6, 182, 212, 0.3)"
				/>
			</HighlightSvelte>
		</div>
	</div>

	{#if expandable}
		<div
			class={twMerge(
				'to-bg absolute bottom-0 z-10 flex w-full justify-center bg-gradient-to-b from-transparent',
				isOpen ? 'h-0' : 'h-56'
			)}
		>
			<Button
				onclick={() => (isOpen = !isOpen)}
				class={twMerge('absolute ', isOpen ? '-bottom-12' : 'bottom-8')}
				variant="inverted"
			>
				{#if isOpen}
					Collapse
				{:else}
					Expand
				{/if}
			</Button>
		</div>
	{/if}
</div>
