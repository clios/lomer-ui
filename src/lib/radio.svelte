<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import { fade } from 'svelte/transition';

	type Props = {
		children?: Snippet;
		class?: string;
		value?: string;
		isDisabled?: boolean;
		isLoading?: boolean;
		isReadOnly?: boolean;
		isSelected?: boolean;
		radioValue?: string;
	} & HTMLButtonAttributes;

	let {
		children,
		class: className,
		value = $bindable(),
		isDisabled = false,
		isLoading = false,
		isReadOnly = false,
		isSelected = false,
		radioValue,
		...props
	}: Props = $props();

	function onclick() {
		if (isReadOnly) return;
		if (value === radioValue) return (value = '');
		value = radioValue;
	}

	$effect(() => {
		isSelected = radioValue === value;
	});
</script>

<button
	type="button"
	class={twMerge(
		// BASE
		'group', // group
		'relative', // positioning
		'mt-[.3rem] pl-8 text-left', // text, padding, and margin
		'focus:outline-hidden', // focusing
		'cursor-pointer', // cursor

		// DISABLED
		'disabled:border-zinc-700 dark:disabled:border-zinc-700', // border
		'disabled:text-zinc-400 dark:disabled:text-zinc-400', // text
		'disabled:cursor-not-allowed disabled:outline-hidden', // visual

		// LOADING
		isLoading && '',

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
	<!-- DOT -->
	{#if isLoading}
		<svg
			class="absolute left-0 text-cyan-500"
			width="22"
			height="22"
			viewBox="0 0 24 24"
		>
			<path
				fill="currentColor"
				d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z"
				opacity="0.5"
			/>
			<path
				fill="currentColor"
				d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"
			>
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
	{:else if isDisabled}
		<svg
			class={twMerge(
				'absolute left-0', // layout and positioning
				'text-zinc-500' // color
			)}
			width="22"
			height="22"
			viewBox="0 0 24 24"
		>
			<path
				fill="currentColor"
				fill-rule="evenodd"
				d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m-4.906-3.68L18.32 7.094A8 8 0 0 1 7.094 18.32M5.68 16.906A8 8 0 0 1 16.906 5.68z"
			/>
		</svg>
	{:else if isSelected}
		<div
			transition:fade={{ duration: 150 }}
			class={twMerge(
				'absolute top-1 left-1 size-4', // layout and positioning
				'rounded-full border-4 border-zinc-50 dark:border-zinc-950', // border
				'bg-zinc-950 dark:bg-zinc-50', // background

				// DISABLED
				isDisabled && 'group-disabled:bg-zinc-500'
			)}
		></div>
	{/if}

	<!-- OUTER CIRCLE -->
	<div
		class={twMerge(
			// BASE
			'pointer-events-none absolute top-1 left-1 size-4 rounded-full border border-zinc-950 dark:border-white',
			'group-focus:outline group-focus:outline-offset-2 group-focus:outline-cyan-500', // focusing
			'group-hover:outline group-hover:outline-offset-2 group-hover:outline-cyan-500', // hovering
			'border dark:border-zinc-700', // border
			'shadow-xs dark:shadow-none', // shadow

			// LOADING
			isLoading && 'border-none group-hover:group-disabled:outline-0',

			// DISABLED
			isDisabled && 'border-none group-hover:group-disabled:outline-0'
		)}
	></div>

	{@render children?.()}
</button>
