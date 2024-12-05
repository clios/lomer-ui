<script lang="ts">
	import clsx from 'clsx';
	import type { HTMLInputAttributes } from 'svelte/elements';

	type $$Props = HTMLInputAttributes;

	export let value: $$Props['value'] = '';
	export let name: $$Props['name'] = undefined;
	export { className as class };

	let className: $$Props['class'] = '';
</script>

<input
	class={clsx(
		'rounded-md px-2 py-1', // base
		'bg-white dark:bg-zinc-950', // color
		'border dark:border-zinc-700', // border
		'shadow-sm dark:shadow-none', // shadow
		'focus:cursor-text focus:outline focus:outline-1 focus:outline-offset-2 focus:outline-cyan-500', // focus
		'disabled:cursor-default disabled:outline-0 disabled:hover:cursor-not-allowed', // disabled
		className
	)}
	bind:value
	{name}
	{...$$restProps}
/>
