<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import { draw } from 'svelte/transition';
	import { circInOut } from 'svelte/easing';

	type Props = {
		cardValue?: string;
		children?: Snippet;
		class?: string;
		indicator?: boolean;
		isDisabled?: boolean;
		isLoading?: boolean;
		isReadOnly?: boolean;
		isSelected?: boolean;
		value?: string;
	} & HTMLButtonAttributes;

	let {
		cardValue,
		children,
		class: className,
		indicator = false,
		isDisabled = false,
		isLoading = false,
		isReadOnly = false,
		isSelected = false,
		value = $bindable(),
		...props
	}: Props = $props();

	function onclick() {
		if (isReadOnly) return;
		if (value === cardValue) return (value = '');
		value = cardValue;
	}

	$effect(() => {
		isSelected = cardValue === value;
	});
</script>

<button
	type="button"
	class={twMerge(
		// BASE
		'relative p-2', // positioning and padding
		'bg-white dark:bg-zinc-950', // background
		'rounded-sm border dark:border-zinc-700', // border
		'cursor-pointer shadow-xs dark:shadow-none', // visual

		// SELECTED
		isSelected
			? 'outline' // outline
			: [
					'active:outline-2 active:outline-offset-0', // active
					'focus:outline focus:outline-offset-2 focus:outline-cyan-500', // focusing
					'hover:outline hover:outline-offset-2 hover:outline-cyan-500' // hovering
				],

		// DISABLED
		'disabled:border-zinc-700 dark:disabled:border-zinc-700', // border
		'disabled:bg-zinc-700 dark:disabled:bg-zinc-700', // background
		'disabled:text-zinc-400 dark:disabled:text-zinc-400', // text
		'disabled:cursor-not-allowed disabled:outline-hidden', // visual

		// LOADING
		isLoading && 'disabled:text-zinc-950/20 dark:disabled:text-zinc-50/20',

		// READ ONLY
		isReadOnly && [
			'pointer-events-none cursor-default select-none hover:outline-0 focus:outline-0 active:outline-0'
		],

		// STYLING
		className
	)}
	tabindex={isReadOnly ? -1 : 0}
	disabled={isLoading || isDisabled}
	{onclick}
	{...props}
>
	{#if isSelected && indicator}
		<!-- CHECK MARK -->
		<svg
			class="absolute -top-5 right-1/2 translate-x-1/2"
			width="14"
			height="14"
			viewBox="0 0 31 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				in:draw={{ duration: 150, easing: circInOut }}
				stroke-width="5"
				d="M1 16L8 23L30.5 0.5"
				stroke="#14B8A6"
			/>
		</svg>
	{/if}

	{#if isLoading}
		<svg
			class="absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2"
			width="24"
			height="24"
			viewBox="0 0 24 24"
		>
			<path
				fill="#67E8F9"
				d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z"
				opacity="0.5"
			/>
			<path fill="#67E8F9" d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z">
				<animateTransform
					attributeName="transform"
					dur="1s"
					from="0 12 12"
					repeatCount="indefinite"
					to="360 12 12"
					type="rotate"
				/>
			</path>
		</svg>
	{/if}
	{@render children?.()}
</button>
