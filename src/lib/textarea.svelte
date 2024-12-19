<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { HTMLTextareaAttributes } from 'svelte/elements';

	type Props = {
		class?: string;
		isDisabled?: boolean;
		isLoading?: boolean;
		isReadOnly?: boolean;
		value?: string;
	} & HTMLTextareaAttributes;

	let {
		class: className,
		isDisabled = false,
		isLoading = false,
		isReadOnly = false,
		value = $bindable(''),
		...props
	}: Props = $props();

	function onclick() {
		if (isReadOnly) return;
	}
</script>

<div class="relative">
	<textarea
		class={twMerge(
			// BASE
			'mt-[.1rem] resize px-2 py-1', // margin and padding
			'bg-white dark:bg-zinc-950', // background
			'rounded-md border dark:border-zinc-700', // border
			'shadow-sm dark:shadow-none', // shadow
			'focus:cursor-text focus:outline focus:outline-1 focus:outline-offset-2 focus:outline-cyan-500', // focusing
			'hover:cursor-text hover:outline hover:outline-1 hover:outline-offset-2 hover:outline-cyan-500', // focusing
			'disabled:cursor-default disabled:outline-0 disabled:hover:cursor-not-allowed', // disabled

			// LOADING
			isLoading && 'disabled:text-zinc-500 disabled:dark:text-zinc-500',

			// DISABLED
			'disabled:border-zinc-700 disabled:dark:border-zinc-700', // border
			'disabled:bg-zinc-700 disabled:dark:bg-zinc-700', // background
			'disabled:text-zinc-400 disabled:dark:text-zinc-400', // text
			'disabled:cursor-not-allowed disabled:resize-none disabled:outline-none', // visual

			// READ ONLY
			isReadOnly && [
				'pointer-events-none cursor-default select-none hover:outline-0 focus:outline-0 active:outline-0'
			],

			// STYLING
			className
		)}
		tabindex={isReadOnly ? -1 : 0}
		disabled={isDisabled}
		bind:value
		{onclick}
		{...props}
	></textarea>
	{#if isLoading}
		<svg
			class="absolute right-2 top-2 text-cyan-600 dark:text-cyan-500"
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
			class="absolute right-2 top-2 text-zinc-500"
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
	{/if}
</div>
