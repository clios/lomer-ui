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
		'group relative flex', // base
		'text-left', // text
		'mt-[.4rem] rounded-sm pl-8', // box model
		'focus:outline-hidden', // focusing
		'cursor-pointer disabled:cursor-not-allowed', // cursor

		// LOADING
		isLoading && 'disabled:text-disabled',

		// READ ONLY
		isReadOnly && [
			'pointer-events-none cursor-default select-none hover:outline-0 focus:outline-0 active:outline-0'
		],

		// AS DROPDOWN ITEM
		'dropdown-item-checkbox',

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
			'size-[24px] rounded-sm border', // box model
			'outline-primary cursor-pointer outline-offset-2', // visual

			// GROUP
			'group-hover:outline group-focus:outline', // focus and hover
			'group-disabled:border-disabled group-disabled:cursor-not-allowed group-disabled:outline-hidden', // disabled

			// READ ONLY
			isReadOnly && ['pointer-events-none cursor-default outline-0 select-none']
		)}
	>
		{#if isLoading}
			{@render IconLoading()}
		{:else if value}
			{@render IconCheck()}
		{:else}
			{@render IconX()}
		{/if}
	</div>
	{#if children}
		<div>
			{@render children?.()}
		</div>
	{/if}
</button>

<!-- ICON LOADING -->
{#snippet IconLoading()}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="text-spinner relative top-1 left-1 animate-spin"
		viewBox="0 0 16 16"
		width="14"
		height="14"
	>
		<rect width="14" height="14" fill="none" />
		<path
			fill="currentColor"
			d={`M8 0A8 8 0 0 0 .002 7.812C.094 4.033 2.968 1 6.5 1C10.09 1 13 4.134 13 8a1.5 1.5 ` +
				`0 0 0 3 0a8 8 0 0 0-8-8m0 16a8 8 0 0 0 7.998-7.812C15.906 11.967 13.032 15 9.5 ` +
				`15C5.91 15 3 11.866 3 8a1.5 1.5 0 0 0-3 0a8 8 0 0 0 8 8`}
		/>
	</svg>
{/snippet}

<!-- ICON CHECK -->
{#snippet IconCheck()}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="text-primary group-disabled:text-disabled relative top-1 left-1"
		width="14"
		height="14"
		viewBox="0 0 31 24"
		fill="none"
	>
		<path
			in:draw={{ duration: 150, easing: circInOut }}
			stroke-width="5"
			d="M1 16L8 23L30.5 0.5"
			stroke="currentColor"
		/>
	</svg>
{/snippet}

{#snippet IconX()}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="group-disabled:text-disabled text-muted absolute top-1 left-1"
		width="14"
		height="14"
		viewBox="0 0 24 25"
		fill="none"
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
{/snippet}
