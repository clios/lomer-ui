<script lang="ts">
	import clsx from 'clsx';
	import Icon from '@iconify/svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';

	type $$Props = HTMLInputAttributes;

	export let value: $$Props['value'] = '';
	export let name: $$Props['name'] = undefined;
	export { className as class };

	let className: $$Props['class'] = undefined;
</script>

<div class={clsx('relative w-full', className)}>
	<select
		class={clsx(
			'appearance-none rounded-md bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900', // base
			'focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-cyan-500', // focus
			'disabled:cursor-default disabled:outline-0 disabled:hover:cursor-not-allowed disabled:hover:px-0 disabled:hover:py-0', // disabled
			'w-full border px-2 py-1'
		)}
		bind:value
		on:change
		{name}
		{...$$restProps}
	>
		<slot />
	</select>
	<Icon class="pointer-events-none absolute right-2 top-1" icon="line-md:chevron-down" width="24" />
</div>
