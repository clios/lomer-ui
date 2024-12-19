<script lang="ts">
	import type { Snippet } from 'svelte';
	import { slide } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';

	type Props = {
		children?: Snippet;
		class?: string;
		id?: string;
		isDisabled?: boolean;
		isLoading?: boolean;
		isOpen?: boolean;
		name?: string;
		title: string;
		value?: string;
	};

	let {
		children,
		class: className,
		id,
		isDisabled = false,
		isLoading = false,
		isOpen = false,
		name,
		title,
		value = $bindable()
	}: Props = $props();

	function onclick() {
		isOpen = !isOpen;
		value = name;
	}

	$effect(() => {
		if (!value && !name) return;
		isOpen = value === name;
	});
</script>

<!-- CONTAINER -->
<div {id} class={twMerge('border-b dark:border-zinc-700', className)}>
	<!-- HEADER AS TOGGLE BUTTON -->
	<button
		type="button"
		class={twMerge(
			// BASE
			'group', // group
			'w-full px-2 py-4', // box model
			'flex items-center justify-between', // layout and positioning
			'focus:underline focus:outline-none', // focusing
			'hover:underline', // hovering

			// LOADING
			isLoading && 'disabled:text-zinc-500 disabled:dark:text-zinc-500',

			// DISABLED
			'disabled:text-zinc-400 disabled:dark:text-zinc-400', // text
			'disabled:cursor-not-allowed disabled:outline-none' // visual
		)}
		{onclick}
		disabled={isDisabled}
	>
		<!-- TITLE -->
		<p class={twMerge('font-semibold')}>{title}</p>

		{#if isLoading}
			<svg class="text-cyan-500" width="22" height="22" viewBox="0 0 24 24">
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
			<svg width="22" height="22" viewBox="0 0 24 24">
				<path
					fill="currentColor"
					fill-rule="evenodd"
					d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m-4.906-3.68L18.32 7.094A8 8 0 0 1 7.094 18.32M5.68 16.906A8 8 0 0 1 16.906 5.68z"
				/>
			</svg>
		{:else}
			<!-- ICON -->
			<svg
				class={twMerge(
					'fill-zinc-950 dark:fill-zinc-50', // fill
					'transition-transform', // animation
					isOpen && 'rotate-180' // interacting
				)}
				width="14"
				height="8"
			>
				<path d="M7 7.5L0 0.5H14L7 7.5Z" />
			</svg>
		{/if}
	</button>

	<!-- CONDITIONAL CONTENT -->
	<!-- If value and name is truthy, it will compare them before opening -->
	{#if isOpen && (!value || value === name)}
		<div class="px-2 pb-4" transition:slide={{ duration: 150 }}>
			{@render children?.()}
		</div>
	{/if}
</div>
