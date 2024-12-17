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
		radioValue: string;
	} & HTMLButtonAttributes;

	let {
		children,
		class: className,
		groupValue = $bindable(),
		isSelected = false,
		radioValue,
		...props
	}: Props = $props();

	function onclick() {
		groupValue = radioValue;
	}

	$effect(() => {
		isSelected = radioValue === groupValue;
	});
</script>

<button
	class={twMerge(
		// BASE
		'group', // group
		'relative', // positioning
		'mt-[.3rem] pl-8 text-left', // text, padding, and margin
		'focus:text-cyan-500 focus:outline-none', // focusing
		'hover:text-cyan-500', // focusing

		// STYLING
		className
	)}
	{onclick}
	{...props}
>
	<!-- CIRCLE -->
	{#if isSelected}
		<svg
			class={twMerge(
				'pointer-events-none absolute left-1 top-1 peer-checked:block'
			)}
			width="18"
			height="14"
			viewBox="0 0 31 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				stroke-width="3"
				d="M1 16L8 23L30.5 0.5"
				stroke="#14B8A6"
				in:draw={{ duration: 300, easing: circInOut }}
			/>
		</svg>
	{:else}
		<div
			class={twMerge(
				'pointer-events-none absolute left-1 top-1 size-4 rounded-full border border-zinc-500',
				'group-focus:outline group-focus:outline-1 group-focus:outline-offset-2 group-focus:outline-cyan-500', // focusing
				'group-hover:outline group-hover:outline-1 group-hover:outline-offset-2 group-hover:outline-cyan-500', // hovering
				'border dark:border-zinc-700', // border
				'shadow-sm dark:shadow-none' // shadow
			)}
		></div>
	{/if}

	{@render children?.()}
</button>
