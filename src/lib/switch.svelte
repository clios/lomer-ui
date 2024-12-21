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
			'text-zinc-50 dark:text-zinc-950', // text
			'focus:outline focus:outline-offset-2 focus:outline-cyan-500', // focusing
			'hover:outline hover:outline-offset-2 hover:outline-cyan-500', // hovering
			'active:outline-2 active:outline-offset-0', // active

			// SWITCHED
			isSwitched
				? 'bg-zinc-900 dark:bg-zinc-100'
				: 'bg-zinc-200 dark:bg-zinc-700',

			// DISABLED
			'disabled:bg-zinc-500 dark:disabled:bg-zinc-500', // background
			'disabled:cursor-not-allowed disabled:outline-hidden', // visual

			// LOADING
			isLoading && 'disabled:text-zinc-500 dark:disabled:text-zinc-500',

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
			<svg
				class={twMerge(
					'size-5 rounded-full text-cyan-500 transition-all',
					isSwitched
						? 'translate-x-4 bg-zinc-50 dark:bg-zinc-950'
						: 'bg-zinc-100 dark:bg-zinc-900'
				)}
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
				class={twMerge(
					'size-5 rounded-full text-zinc-500 transition-all',
					isSwitched
						? 'translate-x-4 bg-zinc-50 dark:bg-zinc-950'
						: 'bg-zinc-100 dark:bg-zinc-900'
				)}
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
		{:else if isReadOnly}
			<div
				class={twMerge(
					'size-5 rounded-full transition-all',
					isSwitched
						? 'translate-x-4 bg-zinc-50 dark:bg-zinc-950'
						: 'bg-zinc-100 dark:bg-zinc-900'
				)}
			></div>
		{:else}
			<!-- CIRCLE -->
			<div
				class={twMerge(
					'size-5 rounded-full transition-all',
					isSwitched
						? 'translate-x-4 bg-zinc-50 dark:bg-zinc-950'
						: 'bg-zinc-100 dark:bg-zinc-900'
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
