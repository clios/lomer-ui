<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLSelectAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type Props = {
		children?: Snippet;
		class?: string;
		placeholder?: string;
		value?: string;
	} & HTMLSelectAttributes;

	let {
		children,
		class: className,
		placeholder,
		value = $bindable(''),
		...props
	}: Props = $props();
</script>

<!-- SELECT CONTAINER -->
<div class={twMerge('relative w-full', className)}>
	<!-- SELECT -->
	<select
		class={twMerge(
			'w-full min-w-max py-1 pl-2 pr-20', // width and padding
			'rounded-md border dark:border-zinc-700', // border
			'bg-white dark:bg-zinc-950', // background
			'shadow-sm dark:shadow-none', // shadow
			'appearance-none', // visual
			'focus:outline focus:outline-1 focus:outline-offset-2 focus:outline-cyan-500', // focusing
			'disabled:cursor-default disabled:outline-0 disabled:hover:cursor-not-allowed' // disabled
		)}
		bind:value
		{...props}
	>
		{#if placeholder}<option value=""></option>{/if}
		{@render children?.()}
	</select>

	<!-- PLACEHOLDER -->
	{#if placeholder && !value}
		<p
			class="pointer-events-none absolute left-2 top-1 select-none text-zinc-500"
		>
			{placeholder}
		</p>
	{/if}

	<!-- CHEVRON DOWN ICON -->
	<svg
		class="pointer-events-none absolute right-2 top-1 text-zinc-500"
		width="24"
		height="24"
		viewBox="0 0 24 24"
	>
		<path
			fill="currentColor"
			d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"
		/>
	</svg>
</div>
