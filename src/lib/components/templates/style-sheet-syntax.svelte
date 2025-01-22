<script lang="ts">
	import Highlight from 'svelte-highlight';
	import css from 'svelte-highlight/languages/css';
	import felipec from 'svelte-highlight/styles/felipec';
	import { LineNumbers } from 'svelte-highlight';
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

<div class={twMerge('overflow-auto rounded text-left text-sm', className)}>
	<Highlight language={css} {code} let:highlighted>
		<LineNumbers
			{highlighted}
			{highlightedLines}
			{startingLineNumber}
			--line-number-color="rgba(255, 255, 255, 0.3)"
			--border-color="rgba(255, 255, 255, 0.1)"
			--highlighted-background="rgba(6, 182, 212, 0.5)"
		/>
	</Highlight>
</div>
