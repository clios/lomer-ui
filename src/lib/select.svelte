<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLSelectAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type Props = {
		children?: Snippet;
		class?: string;
		isDisabled?: boolean;
		isLoading?: boolean;
		isReadOnly?: boolean;
		placeholder?: string;
		value?: string;
	} & HTMLSelectAttributes;

	let {
		children,
		class: className,
		isDisabled = false,
		isLoading = false,
		isReadOnly = false,
		placeholder,
		value = $bindable(''),
		...props
	}: Props = $props();
</script>

<!-- SELECT CONTAINER -->
<div class={twMerge('relative w-full', className)}>
	<!-- SELECT -->
	<select
		class={twMerge(
			// BASE
			'mt-[.1rem] w-full min-w-max py-1 pl-2 pr-20', // width, padding, and margin
			'rounded-md border dark:border-zinc-700', // border
			'bg-white dark:bg-zinc-950', // background
			'shadow-sm dark:shadow-none', // shadow
			'appearance-none overflow-hidden', // visual
			'focus:outline focus:outline-1 focus:outline-offset-2 focus:outline-cyan-500', // focusing
			'disabled:cursor-default disabled:outline-0 disabled:hover:cursor-not-allowed', // disabled

			// READ ONLY
			isReadOnly && [
				'pointer-events-none cursor-default select-none hover:outline-0 focus:outline-0 active:outline-0'
			]
		)}
		bind:value
		tabindex={isReadOnly ? -1 : 0}
		disabled={isLoading || isDisabled}
		{...props}
	>
		<!-- PLACEHOLDER -->
		{#if placeholder}
			<option value="" disabled selected>{placeholder}</option>
		{/if}
		{@render children?.()}
	</select>

	{#if isLoading}
		<svg
			class="pointer-events-none absolute right-2 top-2 text-cyan-500"
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
			class="pointer-events-none absolute right-2 top-2 text-zinc-500"
			width="20"
			height="20"
			viewBox="0 0 24 24"
		>
			<path
				fill="currentColor"
				fill-rule="evenodd"
				d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m-4.906-3.68L18.32 7.094A8 8 0 0 1 7.094 18.32M5.68 16.906A8 8 0 0 1 16.906 5.68z"
			/>
		</svg>
	{:else}
		<!-- CHEVRON DOWN ICON -->
		<svg
			class="pointer-events-none absolute right-2 top-[.4rem] text-zinc-500"
			width="24"
			height="24"
			viewBox="0 0 24 24"
		>
			<path
				fill="currentColor"
				d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"
			/>
		</svg>
	{/if}
</div>
