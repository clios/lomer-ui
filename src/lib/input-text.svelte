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
		'rounded-md bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900', // base
		'focus:cursor-text focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-cyan-500', // focus
		'disabled:cursor-default disabled:outline-0 disabled:hover:cursor-not-allowed', // disabled
		'border px-2 py-1',
		className
	)}
	bind:value
	{name}
	{...$$restProps}
/>
