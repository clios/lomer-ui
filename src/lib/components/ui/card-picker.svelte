<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	type Props = {
		value?: string;
		children?: Snippet;
		class?: string;
		isDisabled?: boolean;
		isLoading?: boolean;
		isReadOnly?: boolean;
		isSelected?: boolean;
		group?: string;
	} & HTMLButtonAttributes;

	let {
		value,
		children,
		class: className,
		isDisabled = false,
		isLoading = false,
		isReadOnly = false,
		isSelected = false,
		group = $bindable(),
		...props
	}: Props = $props();

	function onclick() {
		if (isReadOnly) return;
		if (group === value) return (group = '');
		group = value;
	}

	$effect(() => {
		isSelected = value === group;
	});
</script>

<button
	type="button"
	class={twMerge(
		// BASE
		'relative p-2', // positioning and padding
		'bg-input text-fg', // background
		'rounded border', // border
		'cursor-pointer', // visual

		// SELECTED
		isSelected && group
			? 'outline-primary bg-primary/15 border-primary outline backdrop-blur-3xl' // outline
			: [
					'active:outline-2 active:outline-offset-0', // active
					'focus:outline-primary focus:outline focus:outline-offset-2', // focusing
					'hover:outline-primary hover:outline hover:outline-offset-2' // hovering
				],

		// DISABLED
		'disabled:bg-disabled-fg', // border
		'disabled:bg-disabled', // background
		'disabled:text-disabled-fg', // text
		'disabled:text-disabled-fg disabled:border-disabled', // border
		'disabled:cursor-not-allowed disabled:outline-hidden', // visual

		// LOADING
		isLoading && 'disabled:text-disabled-fg',

		// READ ONLY
		isReadOnly && ['pointer-events-none cursor-default outline-0 select-none'],

		// STYLING
		className
	)}
	tabindex={isReadOnly ? -1 : 0}
	disabled={isLoading || isDisabled}
	{onclick}
	{...props}
>
	{#if isLoading}
		<div class="absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2">
			{@render IconLoading()}
		</div>
	{/if}
	{@render children?.()}
</button>

<!-- ICON LOADING -->
{#snippet IconLoading()}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="text-spinner animate-spin"
		viewBox="0 0 16 16"
		width="16"
		height="16"
	>
		<rect width="16" height="16" fill="none" />
		<path
			fill="currentColor"
			d={`M8 0A8 8 0 0 0 .002 7.812C.094 4.033 2.968 1 6.5 1C10.09 1 13 4.134 13 8a1.5 1.5 ` +
				`0 0 0 3 0a8 8 0 0 0-8-8m0 16a8 8 0 0 0 7.998-7.812C15.906 11.967 13.032 15 9.5 ` +
				`15C5.91 15 3 11.866 3 8a1.5 1.5 0 0 0-3 0a8 8 0 0 0 8 8`}
		/>
	</svg>
{/snippet}
