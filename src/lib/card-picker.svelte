<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';
	import { cn } from './utils.ts';

	type Props = {
		children?: Snippet;
		class?: string;
		groupValue: string;
		isSelected?: boolean;
		itemValue: string;
	} & HTMLButtonAttributes;

	let {
		children,
		class: className,
		groupValue = $bindable(),
		isSelected = false,
		itemValue,
		...props
	}: Props = $props();

	function onclick() {
		groupValue = itemValue;
	}

	$effect(() => {
		isSelected = itemValue === groupValue;
	});
</script>

<button
	class={cn(
		// BASE
		'bg-white dark:bg-zinc-950', // background
		'p-2', // box model
		'rounded border dark:border-zinc-700', // border
		'shadow dark:shadow-none', // visual

		// SELECTED
		isSelected
			? 'outline' // outline
			: [
					'active:outline-2 active:outline-offset-0', // active
					'focus:outline focus:outline-1 focus:outline-offset-2 focus:outline-cyan-500', // focusing
					'hover:outline hover:outline-1 hover:outline-offset-2 hover:outline-cyan-500' // hovering
				],

		// STYLING
		className
	)}
	{onclick}
	{...props}
>
	{@render children?.()}
</button>
