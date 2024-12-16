<script lang="ts">
	import { circInOut } from 'svelte/easing';
	import { draw } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';

	type Props = {
		class?: string;
		isDisabled?: boolean;
		isSwitched?: boolean;
		value?: boolean;
	};

	let {
		class: className,
		isDisabled = false,
		isSwitched = false,
		value = $bindable(false)
	}: Props = $props();

	function onclick() {
		value = !value;
	}

	$effect(() => {
		isSwitched = value ? true : false;
	});
</script>

<!-- PILL -->
<button
	type="button"
	disabled={isDisabled}
	class={twMerge(
		// BASE
		'relative flex items-center', // layout and positioning
		'w-10 rounded-full p-[2px]', // box model
		'text-zinc-50 dark:text-zinc-950', // text
		'focus:outline focus:outline-1 focus:outline-offset-2 focus:outline-cyan-500', // focusing
		'hover:outline hover:outline-1 hover:outline-offset-2 hover:outline-cyan-500', // hovering
		'active:outline-2 active:outline-offset-0', // active

		// SWITCHED
		isSwitched
			? 'bg-zinc-900 dark:bg-zinc-100'
			: 'bg-zinc-200 dark:bg-zinc-700',

		// DISABLED
		'disabled:bg-zinc-500 disabled:dark:bg-zinc-500', // background
		'disabled:cursor-not-allowed disabled:outline-none', // visual

		// STYLE
		className
	)}
	{onclick}
>
	<!-- CIRCLE -->
	<div
		class={twMerge(
			'size-5 rounded-full  transition-all',
			isSwitched
				? 'translate-x-4 bg-zinc-50 dark:bg-zinc-950'
				: 'bg-zinc-100 dark:bg-zinc-900'
		)}
	></div>
</button>
