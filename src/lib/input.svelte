<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { HTMLInputAttributes } from 'svelte/elements';

	type Props = {
		class?: string;
		isDisabled?: boolean;
		isLoading?: boolean;
		isReadOnly?: boolean;
		value?: string;
	} & HTMLInputAttributes;

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
	<input
		class={twMerge(
			// BASE
			'mt-[.1rem] px-2 py-1', // margin and padding
			'text-input-fg bg-input', // bg and text
			'border-input-border rounded border', // border
			'outline-primary outline-offset-2', // outline
			'hover:cursor-text hover:outline focus:outline', // hover and focus
			'disabled:cursor-default disabled:outline-0 disabled:hover:cursor-not-allowed', // disabled

			// LOADING
			isLoading && 'disabled:text-disabled',

			// DISABLED
			'disabled:border-disabled-fg', // border
			'disabled:text-disabled-fg', // text
			'disabled:cursor-not-allowed disabled:outline-hidden', // visual

			// READ ONLY
			isReadOnly && 'pointer-events-none cursor-default outline-0 select-none',

			// STYLING
			className
		)}
		tabindex={isReadOnly ? -1 : 0}
		disabled={isDisabled}
		bind:value
		{onclick}
		{...props}
	/>
	{#if isLoading}
		{@render IconLoading()}
	{:else if isDisabled}
		{@render IconDisabled()}
	{/if}
</div>

<!-- ICON LOADING -->
{#snippet IconLoading()}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="text-spinner pointer-events-none absolute top-2.5 right-2.5 animate-spin"
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

<!-- ICON DISABLED -->
{#snippet IconDisabled()}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="text-disabled-fg pointer-events-none absolute top-1.5 right-2"
		width="22"
		height="22"
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
