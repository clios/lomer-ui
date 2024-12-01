<script lang="ts">
	import clsx from 'clsx';
	import Icon from '@iconify/svelte';

	export let value = '';
	export let placeholder = '';
	export let name = undefined;
	export { className as class };

	let className = '';
</script>

<div class={clsx('relative w-full', className)}>
	<select
		class={clsx(
			'appearance-none rounded-md ', // base
			'bg-white dark:bg-zinc-950', // color
			'border dark:border-zinc-700', // border
			'shadow-sm dark:shadow-none', // shadow
			'focus:outline focus:outline-1 focus:outline-offset-2 focus:outline-cyan-500', // focus
			'disabled:cursor-default disabled:outline-0 disabled:hover:cursor-not-allowed', // disabled
			'w-full min-w-max border py-1 pl-2 pr-12'
		)}
		bind:value
		on:change
		{name}
		{...$$restProps}
	>
		{#if placeholder}
			<option value="" disabled selected>{placeholder}</option>
		{/if}
		<slot />
	</select>
	<Icon
		class="pointer-events-none absolute right-2 top-1 text-zinc-500"
		icon="line-md:chevron-down"
		width="24"
	/>
</div>
