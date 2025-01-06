<script lang="ts">
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	type Props = {
		children?: Snippet;
		class?: string;
		isDisabled?: boolean;
		isLoading?: boolean;
		isReadOnly?: boolean;
		isSwitched?: boolean;
		value?: boolean;
	};

	let {
		children,
		class: className,
		isDisabled = false,
		isLoading = false,
		isReadOnly = false,
		isSwitched = false,
		value = $bindable(false)
	}: Props = $props();

	function onclick() {
		if (isReadOnly) return;
		value = !value;
	}

	$effect(() => {
		isSwitched = value ? true : false;
	});
</script>

<!-- CONTAINER -->
<div class={twMerge('flex items-start gap-4', isReadOnly && 'select-none')}>
	<!-- PILL -->
	<button
		type="button"
		class={twMerge(
			// BASE
			'relative flex items-center', // layout and positioning
			'mt-[.4rem] w-[40px] max-w-[40px] min-w-[40px] rounded-full p-[2px]', // box model
			'shadow-xs', // shadow
			'text-fg', // text
			'outline-primary outline-offset-2', // outline
			'focus:outline', // focusing
			'hover:outline', // hovering
			'active:outline-2 active:outline-offset-0', // active
			'cursor-pointer', // cursor

			// SWITCHED
			isSwitched ? 'bg-primary' : 'bg-muted',

			// DISABLED
			'disabled:bg-disabled', // background
			'disabled:cursor-not-allowed disabled:outline-hidden', // visual

			// LOADING
			isLoading && 'disabled:text-disabled',

			// READ ONLY
			isReadOnly && [
				'pointer-events-none cursor-default select-none hover:outline-0 focus:outline-0 active:outline-0'
			],

			// STYLE
			className
		)}
		{onclick}
		tabindex={isReadOnly ? -1 : 0}
		disabled={isLoading || isDisabled}
	>
		{#if isLoading}
			{@render IconLoading()}
		{:else if isDisabled}
			{@render IconDisabled()}
		{:else if isReadOnly}
			<div
				class={twMerge(
					'size-5 rounded-full transition-all',
					isSwitched ? 'bg-bg dark:bg-fg  translate-x-4' : 'bg-border'
				)}
			></div>
		{:else}
			<!-- CIRCLE -->
			<div
				class={twMerge(
					'size-5 rounded-full transition-all',
					isSwitched ? 'bg-bg dark:bg-fg  translate-x-4' : 'bg-border'
				)}
			></div>
		{/if}
	</button>

	{#if children}
		<div class="mt-[.4rem]">
			{@render children?.()}
		</div>
	{/if}
</div>

<!-- ICON LOADING -->
{#snippet IconLoading()}
	<svg
		class={twMerge(
			'text-primary bg-bg dark:bg-fg border-primary/0 size-5 animate-spin rounded-full border-3 transition-all',
			isSwitched && 'translate-x-4'
		)}
		width="16"
		height="16"
		viewBox="0 0 16 16"
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
		class={twMerge(
			'text-muted-fg bg-muted size-5 rounded-full transition-all',
			isSwitched && 'translate-x-4'
		)}
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
