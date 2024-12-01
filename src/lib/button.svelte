<script lang="ts">
	import Icon from '@iconify/svelte';
	import clsx from 'clsx';

	export let type: 'submit' | 'reset' | 'button' = 'button';
	export let variant: 'primary' | 'secondary' | 'outline' | 'destructive' | 'ghost' = 'primary';
	export let size: 'text' | 'icon' | 'fit' = 'text';
	export let edge: 'rounded' | 'circle' | 'sharp' = 'rounded';
	export let isDisabled = false;
	export let isLoading = false;
	export { className as class };

	let className = '';
</script>

<button
	class={clsx(
		'flex items-center gap-1 outline-offset-2', // base

		// Variant: Primary
		variant === 'primary' && 'bg-zinc-950 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-950', // color
		variant === 'primary' && 'border border-cyan-500', // color
		variant === 'primary' && 'active:outline-2 active:outline-offset-0', // color
		variant === 'primary' && 'outline-cyan-500 hover:outline hover:outline-1', // hover
		variant === 'primary' && 'focus:outline focus:outline-1 focus:outline-offset-2', // focus
		variant === 'primary' && 'focus:outline-cyan-500 focus:ring-offset-1', // focus
		variant === 'primary' && 'disabled:focus:outline-none', // focus
		variant === 'primary' && 'disabled:border-zinc-200 disabled:bg-zinc-200', // disabled
		variant === 'primary' && ' disabled:text-zinc-400 disabled:hover:cursor-not-allowed', // disabled
		variant === 'primary' && 'disabled:hover:outline-none disabled:active:scale-100', // disabled
		variant === 'primary' && 'disabled:dark:border-zinc-900 disabled:dark:bg-zinc-900 ', // disabled
		variant === 'primary' && 'disabled:dark:text-zinc-600', // disabled

		// Variant: Secondary
		variant === 'secondary' && 'bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50', // color
		variant === 'secondary' && 'border border-zinc-200 dark:border-zinc-800', // color
		variant === 'secondary' && 'active:outline-2 active:outline-offset-0', // color
		variant === 'secondary' && 'outline-cyan-500 hover:outline hover:outline-1', // hover
		variant === 'secondary' && 'focus:outline focus:outline-1 focus:outline-offset-2', // focus
		variant === 'secondary' && 'focus:outline-cyan-500 focus:ring-offset-1', // focus
		variant === 'secondary' && 'disabled:focus:outline-none', // focus
		variant === 'secondary' && 'disabled:border-zinc-200 disabled:bg-zinc-200', // disabled
		variant === 'secondary' && ' disabled:text-zinc-400 disabled:hover:cursor-not-allowed', // disabled
		variant === 'secondary' && 'disabled:hover:outline-none disabled:active:scale-100', // disabled
		variant === 'secondary' && 'disabled:dark:border-zinc-900 disabled:dark:bg-zinc-900 ', // disabled
		variant === 'secondary' && 'disabled:dark:text-zinc-600', // disabled

		// Variant: Outline
		variant === 'outline' && 'bg-zinc-50/0 text-zinc-950 dark:bg-zinc-950/0 dark:text-zinc-50', // color
		variant === 'outline' && 'border border-zinc-950 dark:border-cyan-50', // color
		variant === 'outline' && 'active:outline-2 active:outline-offset-0', // color
		variant === 'outline' && 'outline-cyan-500 hover:outline hover:outline-1', // hover
		variant === 'outline' && 'focus:outline focus:outline-1 focus:outline-offset-2', // focus
		variant === 'outline' && 'focus:outline-cyan-500 focus:ring-offset-1', // focus
		variant === 'outline' && 'disabled:focus:outline-none', // focus
		variant === 'outline' && 'disabled:border-zinc-200 disabled:bg-zinc-200', // disabled
		variant === 'outline' && ' disabled:text-zinc-400 disabled:hover:cursor-not-allowed', // disabled
		variant === 'outline' && 'disabled:hover:outline-none disabled:active:scale-100', // disabled
		variant === 'outline' && 'disabled:dark:border-zinc-900 disabled:dark:bg-zinc-900 ', // disabled
		variant === 'outline' && 'disabled:dark:text-zinc-600', // disabled

		// Variant: Ghost
		variant === 'ghost' && 'bg-zinc-50/0 text-zinc-950 dark:bg-zinc-950/0 dark:text-zinc-50', // color
		variant === 'ghost' && 'border border-zinc-50/0 dark:border-zinc-50/0', // color
		variant === 'ghost' && 'active:outline-2 active:outline-offset-0', // color
		variant === 'ghost' && 'outline-cyan-500 hover:outline hover:outline-1', // hover
		variant === 'ghost' && 'focus:outline focus:outline-1 focus:outline-offset-2', // focus
		variant === 'ghost' && 'focus:outline-cyan-500 focus:ring-offset-1', // focus
		variant === 'ghost' && 'disabled:focus:outline-none', // focus
		variant === 'ghost' && 'disabled:border-zinc-200 disabled:bg-zinc-200', // disabled
		variant === 'ghost' && ' disabled:text-zinc-400 disabled:hover:cursor-not-allowed', // disabled
		variant === 'ghost' && 'disabled:hover:outline-none disabled:active:scale-100', // disabled
		variant === 'ghost' && 'disabled:dark:border-zinc-900 disabled:dark:bg-zinc-900 ', // disabled
		variant === 'ghost' && 'disabled:dark:text-zinc-600', // disabled

		// Variant: Destructive
		variant === 'destructive' && 'bg-red-500 text-zinc-50 dark:bg-red-900 dark:text-zinc-50', // color
		variant === 'destructive' && 'border border-red-500 dark:border-red-900', // color
		variant === 'destructive' && 'active:outline-2 active:outline-offset-0', // color
		variant === 'destructive' && 'outline-red-500 hover:outline hover:outline-1', // hover
		variant === 'destructive' && 'focus:outline focus:outline-1 focus:outline-offset-2', // focus
		variant === 'destructive' && 'focus:outline-red-500 focus:ring-offset-1', // focus
		variant === 'destructive' && 'disabled:focus:outline-none', // focus
		variant === 'destructive' && 'disabled:border-zinc-200 disabled:bg-zinc-200', // disabled
		variant === 'destructive' && ' disabled:text-zinc-400 disabled:hover:cursor-not-allowed', // disabled
		variant === 'destructive' && 'disabled:hover:outline-none disabled:active:scale-100', // disabled
		variant === 'destructive' && 'disabled:dark:border-zinc-900 disabled:dark:bg-zinc-900 ', // disabled
		variant === 'destructive' && 'disabled:dark:text-zinc-600', // disabled

		// Sizes
		size === 'text' && 'px-3 py-1',
		size === 'icon' && 'p-1',
		size === 'fit' && 'px-2 text-sm leading-6',

		// Edges
		edge === 'rounded' && 'rounded',
		edge === 'circle' && 'rounded-full',
		edge === 'sharp' && 'rounded-none',

		className
	)}
	{...$$restProps}
	{type}
	disabled={isLoading || isDisabled}
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
