<script lang="ts">
	import felipec from 'svelte-highlight/styles/felipec';
	import { HighlightSvelte, LineNumbers } from 'svelte-highlight';
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
</script>

<svelte:head>
	{@html felipec}
</svelte:head>

<div
	class={twMerge('overflow-hidden rounded border text-left text-sm', className)}
>
	<HighlightSvelte {code} let:highlighted>
		<LineNumbers
			{highlighted}
			{highlightedLines}
			{startingLineNumber}
			--line-number-color="rgba(255, 255, 255, 0.3)"
			--border-color="rgba(255, 255, 255, 0.1)"
			--highlighted-background="rgba(6, 182, 212, 0.5)"
		/>
	</HighlightSvelte>
</div>
