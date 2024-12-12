<script lang="ts">
	import { slide } from 'svelte/transition';
	import { cn } from './utils.ts';

	interface Props {
		children: any;
		class?: string;
		isOpen?: boolean;
		name?: string;
		title: string;
		value?: string;
	}

	let {
		children,
		class: className,
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
<div class={cn('border dark:border-zinc-700', className)}>
	<!-- HEADER AS TOGGLE BUTTON -->
	<button
		class={cn(
			'group', // group
			'w-full px-4 py-2', // box model
			'flex items-center justify-between', // layout and positioning
			'bg-white dark:bg-zinc-950', // background
			'focus:outline focus:outline-1 focus:outline-offset-2 focus:outline-cyan-500', // focusing
			'hover:outline hover:outline-1 hover:outline-offset-2 hover:outline-cyan-500' // hovering
		)}
		onclick={toggleAccordion}
	>
		<!-- TITLE -->
		<p class={cn('font-semibold', isOpen && 'underline')}>{title}</p>

		<!-- ICON -->
		<svg
			class={cn(
				'fill-zinc-950 transition-transform dark:fill-zinc-50',
				isOpen && 'rotate-180' // interacting
			)}
			width="14"
			height="8"
		>
			<path d="M7 7.5L0 0.5H14L7 7.5Z" />
		</svg>
	</button>

	<!-- CONDITIONAL CONTENT -->
	{#if isOpen && (!value || value === name)}
		<div
			class="overflow-hidden border-t p-4 dark:border-zinc-700"
			transition:slide={{ duration: 150 }}
		>
			{@render children?.()}
		</div>
	{/if}
</div>
