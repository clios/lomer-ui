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

		// LOADING
		isLoading && 'pointer-events-none',

		// READ ONLY
		isReadOnly && [
			'pointer-events-none cursor-default select-none hover:outline-0 focus:outline-0 active:outline-0'
		],

		// AS DROPDOWN ITEM
		'dropdown-item-radio',

		// STYLING
		className
	)}
	tabindex={isReadOnly ? -1 : 0}
	disabled={isLoading || isDisabled}
	{onclick}
	{...props}
>
	<!-- OUTER CIRCLE -->
	<div
		class={twMerge(
			'pointer-events-none absolute top-0.5 left-1 size-5 rounded-full', // base
			'flex items-center justify-center', // positioning
			'border-input-border border', // border
			'shadow-xs dark:shadow-none', // shadow
			'outline-primary outline-offset-2', // outline
			'group-focus:outline', // focusing
			'group-hover:outline', // hovering
			'group-disabled:outline-none' // disabled
		)}
	>
		<!-- DOT -->
		{#if isLoading}
			{@render IconLoading()}
		{:else if isDisabled}
			{@render IconDisabled()}
		{:else if isSelected}
			<div
				transition:fade={{ duration: 150 }}
				class={twMerge(
					'size-3', // layout and positioning
					'rounded-full', // border
					'bg-primary', // background

					// DISABLED
					isDisabled &&
						'group-disabled:bg-disabled group-disabled:cursor-not-allowed'
				)}
			></div>
		{/if}
	</div>

	{@render children?.()}
</button>

<!-- ICON LOADING -->
{#snippet IconLoading()}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="text-spinner pointer-events-none animate-spin"
		viewBox="0 0 16 16"
		width="12"
		height="12"
	>
		<rect width="12" height="12" fill="none" />
		<path
			fill="currentColor"
			d={`M8 0A8 8 0 0 0 .002 7.812C.094 4.033 2.968 1 6.5 1C10.09 1 13 4.134 13 8a1.5 1.5 ` +
				`0 0 0 3 0a8 8 0 0 0-8-8m0 16a8 8 0 0 0 7.998-7.812C15.906 11.967 13.032 15 9.5 ` +
				`15C5.91 15 3 11.866 3 8a1.5 1.5 0 0 0-3 0a8 8 0 0 0 8 8`}
		/>
	</svg>
{/snippet}

<!-- ICON DISABLED -->
{#snippet IconDisabled()}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class={twMerge(
			'pointer-events-none rounded-full',
			isSelected && 'bg-primary text-primary-fg'
		)}
		width="16"
		height="16"
		viewBox="0 0 24 24"
	>
		<path
			fill="currentColor"
			fill-rule="evenodd"
			d={`M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m-4.906-3.68L18.32 ` +
				`7.094A8 8 0 0 1 7.094 18.32M5.68 16.906A8 8 0 0 1 16.906 5.68z`}
		/>
	</svg>
{/snippet}
