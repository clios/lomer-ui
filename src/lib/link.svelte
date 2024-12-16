<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	type Props = {
		caret?: boolean;
		children?: Snippet;
		class?: string;
	} & HTMLAnchorAttributes;

	let { caret = false, children, class: className, ...props }: Props = $props();
</script>

<a
	class={twMerge(
		// BASE
		'group', // group
		'relative', // positioning
		'underline', // text
		'focus:text-cyan-500 focus:outline-none', // focusing
		'hover:text-cyan-500', // hovering
		'active:outline-2 active:outline-offset-0', // active

		// DISABLED
		'disabled:border-zinc-700 disabled:dark:border-zinc-700', // border
		'disabled:bg-zinc-700 disabled:dark:bg-zinc-700', // background
		'disabled:text-zinc-400 disabled:dark:text-zinc-400', // text
		'disabled:cursor-not-allowed disabled:outline-none', // visual

		className
	)}
	{...props}
>
	<span class="relative">
		{#if caret}
			<!-- CARET ICON -->
			<svg
				class="absolute -left-6 hidden group-hover:block group-focus:block"
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="18"
				viewBox="0 0 24 24"
				><path fill="currentColor" d="m12 8l10 8l-10 8z" /></svg
			>
		{/if}
		{@render children?.()}
	</span>
</a>
