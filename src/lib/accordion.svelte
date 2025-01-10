<script lang="ts">
	import type { Snippet } from 'svelte';
	import { slide } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';

	type Props = {
		children?: Snippet;
		class?: string;
		icon?: Snippet;
		id?: string;
		isDisabled?: boolean;
		isLoading?: boolean;
		isOpen?: boolean;
		name?: string;
		title?: string;
		value?: string;
	};

	let {
		children,
		class: className,
		icon,
		isDisabled = false,
		isLoading = false,
		isOpen = false,
		name,
		title,
		value = $bindable(),
		...props
	}: Props = $props();

	function onclick() {
		if (isLoading) return;
		isOpen = !isOpen;
		value = name;
	}

	$effect(() => {
		if (!value && !name) return;
		isOpen = value === name;
	});
</script>

<!-- CONTAINER -->
<div
	class={twMerge(
		'bg-bg text-fg px-2',
		// AS DROPDOWN ITEM
		'dropdown-item-accordion',
		className
	)}
	{...props}
>
	<!-- HEADER AS TOGGLE BUTTON -->
	<button
		class={twMerge(
			'group flex w-full items-center gap-2 p-2', // layout and positioning
			'focus:text-primary focus:outline-hidden', // focusing
			'hover:text-primary', // hovering
			'cursor-pointer', // cursor
			'disabled:text-disabled disabled:no-underline', // disabled text
			'disabled:cursor-not-allowed disabled:outline-hidden' // disabled visual
		)}
		{onclick}
		type="button"
		disabled={isLoading || isDisabled}
	>
		<!-- TITLE -->
		{@render icon?.()}
		<p class={twMerge('w-full text-left font-semibold')}>{title}</p>

		{#if isLoading}
			{@render IconLoading()}
		{:else if isDisabled}
			{@render IconDisabled()}
		{:else}
			{@render IconChevron()}
		{/if}
	</button>

	<!-- CONDITIONAL CONTENT -->
	{#if isOpen && (!value || value === name)}
		<div class="px-2 pb-4" transition:slide={{ duration: 150 }}>
			{@render children?.()}
		</div>
	{/if}
</div>

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
			d="M8 0A8 8 0 0 0 .002 7.812C.094 4.033 2.968 1 6.5 1C10.09 1 13 4.134 13 8a1.5 1.5 0 0 0 3 0a8 8 0 0 0-8-8m0 16a8 8 0 0 0 7.998-7.812C15.906 11.967 13.032 15 9.5 15C5.91 15 3 11.866 3 8a1.5 1.5 0 0 0-3 0a8 8 0 0 0 8 8"
		/>
	</svg>
{/snippet}

<!-- ICON DISABLED -->
{#snippet IconDisabled()}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="text-disabled"
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
{/snippet}

<!-- ICON CHEVRON -->
{#snippet IconChevron()}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class={twMerge(
			'transition-transform', // animate
			isOpen && 'rotate-180' // interaction
		)}
		width="14"
		height="8"
	>
		<path fill="currentColor" d="M7 7.5L0 0.5H14L7 7.5Z" />
	</svg>
{/snippet}
