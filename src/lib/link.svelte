<script lang="ts">
	import Icon from '@iconify/svelte';
	import clsx from 'clsx';

	export let variant: 'default' | 'list-item' = 'default';
	export let href: string;
	export { className as class };

	let className = '';
</script>

<a
	class={clsx(
		'flex items-center gap-1 outline-offset-2', // base

		// Variant: Link
		variant === 'default' && 'underline', // base
		variant === 'default' && 'bg-zinc-50/0 text-zinc-950 dark:bg-zinc-950/0 dark:text-zinc-50', // color
		variant === 'default' && 'border border-zinc-50/0 dark:border-zinc-50/0', // color
		variant === 'default' && 'active:outline-2 active:outline-offset-0', // color
		variant === 'default' && 'hover:animate-pulse hover:text-cyan-500 dark:hover:text-cyan-500', // hover
		variant === 'default' && 'focus:animate-pulse  focus:outline-none', // focus
		variant === 'default' && 'focus:text-cyan-500 focus:dark:text-cyan-500', // focus
		variant === 'default' && 'disabled:focus:outline-none', // disabled
		variant === 'default' && 'disabled:border-zinc-200 disabled:bg-zinc-200', // disabled
		variant === 'default' && ' disabled:text-zinc-400 disabled:hover:cursor-not-allowed', // disabled
		variant === 'default' && 'disabled:hover:outline-none disabled:active:scale-100', // disabled
		variant === 'default' && 'disabled:dark:border-zinc-900 disabled:dark:bg-zinc-900 ', // disabled
		variant === 'default' && 'disabled:dark:text-zinc-600', // disabled

		// Variant: Link
		variant === 'list-item' && 'group relative flex items-center', // color
		variant === 'list-item' && 'bg-zinc-50/0 text-zinc-950 dark:bg-zinc-950/0 dark:text-zinc-50', // color
		variant === 'list-item' && 'border border-zinc-50/0 dark:border-zinc-50/0', // color
		variant === 'list-item' && 'active:outline-2 active:outline-offset-0', // color
		variant === 'list-item' && 'hover:text-cyan-500', // color
		variant === 'list-item' && 'focus:animate-pulse  focus:outline-none', // focus
		variant === 'list-item' && 'focus:text-cyan-500 focus:dark:text-cyan-500', // focus
		variant === 'list-item' && 'disabled:focus:outline-none', // disabled
		variant === 'list-item' && 'disabled:border-zinc-200 disabled:bg-zinc-200', // disabled
		variant === 'list-item' && ' disabled:text-zinc-400 disabled:hover:cursor-not-allowed', // disabled
		variant === 'list-item' && 'disabled:hover:outline-none disabled:active:scale-100', // disabled
		variant === 'list-item' && 'disabled:dark:border-zinc-900 disabled:dark:bg-zinc-900 ', // disabled
		variant === 'list-item' && 'disabled:dark:text-zinc-600', // disabled

		className
	)}
	{...$$restProps}
	{href}
>
	<div class="relative flex items-center">
		<Icon
			class="absolute -left-5 hidden group-hover:block group-focus:block"
			icon="carbon:caret-right"
			width="24"
			height="24"
		/>
	</div>
	<slot />
</a>
