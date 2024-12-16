<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import { draw } from 'svelte/transition';
	import { circInOut } from 'svelte/easing';

	type Props = {
		children?: Snippet;
		class?: string;
		groupValue: string;
		isSelected?: boolean;
		hasCheckMark?: boolean;
		cardValue: string;
	} & HTMLButtonAttributes;

	let {
		children,
		class: className,
		groupValue = $bindable(),
		isSelected = false,
		hasCheckMark = false,
		cardValue,
		...props
	}: Props = $props();

	function onclick() {
		groupValue = cardValue;
	}

	$effect(() => {
		isSelected = cardValue === groupValue;
	});
</script>

<button
	class={twMerge(
		// BASE
		'relative p-2', // positioning and padding
		'bg-white dark:bg-zinc-950', // background
		'rounded border dark:border-zinc-700', // border
		'shadow dark:shadow-none', // visual

		// SELECTED
		isSelected
			? 'outline outline-1' // outline
			: [
					'active:outline-2 active:outline-offset-0', // active
					'focus:outline focus:outline-1 focus:outline-offset-2 focus:outline-cyan-500', // focusing
					'hover:outline hover:outline-1 hover:outline-offset-2 hover:outline-cyan-500' // hovering
				],

		// STYLING
		className
	)}
	{onclick}
	{...props}
>
	{#if isSelected && hasCheckMark}
		<!-- CHECK MARK -->
		<svg
			class="absolute right-1 top-1"
			width="14"
			height="14"
			viewBox="0 0 31 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				in:draw={{ duration: 300, easing: circInOut }}
				stroke-width="5"
				d="M1 16L8 23L30.5 0.5"
				stroke="#14B8A6"
			/>
		</svg>
	{/if}

	{@render children?.()}
</button>
