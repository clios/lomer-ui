<script lang="ts">
	import Icon from '@iconify/svelte';
	import clsx from 'clsx';

	export let type: 'submit' | 'reset' | 'button' = 'button';
	export let variant: 'default' | 'ghost' | 'danger' | 'inverted' = 'default';
	export let shape: 'default' | 'circle' | 'square' | 'none' = 'default';
	export let hidden = false;
	export let disabled = false;
	export let isLoading = false;
	export { className as class };

	let className = '';
</script>

<button
	class={clsx(
		'flex items-center gap-1 border outline-offset-2', // base
		'hover:outline-1 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-cyan-500', // focus
		'disabled:border-zinc-200 disabled:bg-zinc-200 disabled:text-zinc-400 disabled:hover:cursor-not-allowed disabled:hover:outline-none disabled:focus:outline-none disabled:active:scale-100 disabled:dark:border-zinc-900 disabled:dark:bg-zinc-900 disabled:dark:text-zinc-600',
		'transition-colors hover:outline focus:outline-2 focus:ring-offset-1 active:bg-cyan-500/20', // animations
		'outline-cyan-500', // light
		'dark:outline-cyan-500', // dark
		variant === 'default' &&
			'border-cyan-500 bg-zinc-950 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-950',
		variant === 'ghost' && 'border-transparent',
		variant === 'danger' && 'border-red-500 bg-red-800 text-red-50',
		variant === 'inverted' &&
			'border-cyan-200 bg-white text-zinc-950 dark:border-cyan-950 dark:bg-zinc-950 dark:text-zinc-50',
		shape === 'default' && 'rounded-md px-3 py-1',
		shape === 'circle' && 'rounded-full px-2 py-2',
		shape === 'square' && 'rounded-md p-1',
		shape === 'none' && 'rounded p-0',
		hidden && 'hidden',
		className
	)}
	{...$$restProps}
	{type}
	{disabled}
	on:click
>
	{#if isLoading}
		<div>
			<Icon class="text-cyan-500" icon="line-md:loading-twotone-loop" width="24" height="24" />
		</div>
	{:else}
		<slot />
	{/if}
</button>
