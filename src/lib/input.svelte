<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { HTMLInputAttributes } from 'svelte/elements';

	type Props = { value?: string } & HTMLInputAttributes;

	let { class: className, value = $bindable(''), ...props }: Props = $props();
</script>

<input
	class={twMerge(
		'mt-[.1rem] px-2 py-1', // margin and padding
		'bg-white dark:bg-zinc-950', // background
		'rounded-md border dark:border-zinc-700', // border
		'shadow-sm dark:shadow-none', // shadow
		'focus:cursor-text focus:outline focus:outline-1 focus:outline-offset-2 focus:outline-cyan-500', // focusing
		'hover:cursor-text hover:outline hover:outline-1 hover:outline-offset-2 hover:outline-cyan-500', // focusing
		'disabled:cursor-default disabled:outline-0 disabled:hover:cursor-not-allowed', // disabled
		className
	)}
	bind:value
	{...props}
/>
