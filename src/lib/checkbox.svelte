<script lang="ts">
	import type { Snippet } from 'svelte';
	import { circInOut } from 'svelte/easing';
	import { draw } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';

	type Props = {
		children?: Snippet;
		class?: string;
		isDisabled?: boolean;
		isLoading?: boolean;
		isReadOnly?: boolean;
		value?: boolean;
	};

	let {
		children,
		class: className,
		isDisabled = false,
		isLoading = false,
		isReadOnly = false,
		value = $bindable(false)
	}: Props = $props();

	function onclick() {
		if (isReadOnly) return;
		value = !value;
	}
</script>

<button
	type="button"
	class={twMerge(
		// BASE
		'group', // group
		'relative flex', // layout and positioning
		'text-left', // text
		'mt-[.4rem] rounded-sm pl-8', // box model
		'disabled:cursor-not-allowed', // disabled
		'focus:outline-hidden', // focusing

		// LOADING
		isLoading && 'disabled:text-zinc-500 dark:disabled:text-zinc-500',

		// READ ONLY
		isReadOnly && [
			'pointer-events-none cursor-default select-none hover:outline-0 focus:outline-0 active:outline-0'
		],

		// STYLE
		className
	)}
	tabindex={isReadOnly ? -1 : 0}
	disabled={isLoading || isDisabled}
	{onclick}
>
	<!-- BOX -->
	<div
		class={twMerge(
			// BASE
			'absolute top-0 left-0', // layout and positioning
			'size-[24px] rounded-sm border dark:border-zinc-700', // box model
			'cursor-pointer shadow-xs dark:shadow-none', // visual

			// GROUP
			'group-focus:outline group-focus:outline-offset-2 group-focus:outline-cyan-500', // focusing
			'group-hover:outline group-hover:outline-offset-2 group-hover:outline-cyan-500', // hovering
			'group-disabled:border-zinc-700/0 group-disabled:outline-hidden', // disabled

			// READ ONLY
			isReadOnly && [
				'pointer-events-none cursor-default select-none group-focus:outline-0 hover:outline-0 active:outline-0'
			]
		)}
	>
		{#if isLoading}
			<svg
				class="relative text-cyan-600 dark:text-cyan-500"
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
		{:else if value}
			<!-- CHECK MARK -->
			<svg
				class="relative top-1 left-1 text-teal-500 group-disabled:text-zinc-500"
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
					stroke="currentColor"
				/>
			</svg>
		{:else}
			<!-- X MARK -->
			<svg
				class="absolute top-1 left-1 text-red-500 group-disabled:text-zinc-500"
				width="14"
				height="14"
				viewBox="0 0 24 25"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					in:draw={{ duration: 150, easing: circInOut }}
					stroke-width="4"
					d="M0.5 1L23.5 24"
					stroke="currentColor"
				/>
				<path
					in:draw={{ delay: 150, duration: 150, easing: circInOut }}
					stroke-width="4"
					d="M23.5 1L0.5 24"
					stroke="currentColor"
				/>
			</svg>
		{/if}
	</div>
	{#if children}
		<div>
			{@render children?.()}
		</div>
	{/if}
</button>
