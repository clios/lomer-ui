<script lang="ts">
	import type { Snippet } from 'svelte';
	import { slide } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';

	type Props = {
		children?: Snippet;
		class?: string;
		id?: string;
		isOpen?: boolean;
		name?: string;
		title: string;
		value?: string;
	};

	let {
		children,
		class: className,
		id,
		isOpen = false,
		name,
		title,
		value = $bindable()
	}: Props = $props();

	function toggleAccordion() {
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
		class={twMerge(
			'group', // group
			'w-full px-2 py-4', // box model
			'flex items-center justify-between', // layout and positioning
			'focus:underline focus:outline-none', // focusing
			'hover:underline' // hovering
		)}
		onclick={toggleAccordion}
	>
		<!-- TITLE -->
		<p class={twMerge('font-semibold')}>{title}</p>

		<!-- ICON -->
		<svg
			class={twMerge(
				'fill-zinc-950 dark:fill-zinc-50', // fill
				'transition-transform group-hover:fill-cyan-500 group-focus:fill-cyan-500', // animation
				isOpen && 'rotate-180' // interacting
			)}
			width="14"
			height="8"
		>
			<path d="M7 7.5L0 0.5H14L7 7.5Z" />
		</svg>
	</button>

	<!-- CONDITIONAL CONTENT -->
	<!-- If value and name is truthy, it will compare them before opening -->
	{#if isOpen && (!value || value === name)}
		<div class="px-2 pb-4" transition:slide={{ duration: 150 }}>
			{@render children?.()}
		</div>
	{/if}
</div>
