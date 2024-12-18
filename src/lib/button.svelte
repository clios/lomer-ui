<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	const theme = {
		light: 'zinc-50',
		dark: 'zinc-950',
		motif: 'cyan-500',
		complimentary: 'red-500'
	};

	type Variant = 'primary' | 'secondary' | 'outline' | 'destructive' | 'ghost';

	type Props = {
		children?: Snippet;
		class?: string;
		edge?: 'rounded' | 'circle' | 'sharp';
		isDisabled?: boolean;
		isLoading?: boolean;
		size?: 'text' | 'icon' | 'small';
		type?: 'submit' | 'reset' | 'button';
		variant?: Variant;
	} & HTMLButtonAttributes;

	let {
		children,
		class: className,
		edge = 'rounded',
		isDisabled = false,
		isLoading = false,
		size = 'text',
		type = 'button',
		variant = 'primary',
		...props
	}: Props = $props();
</script>

<button
	class={twMerge(
		// BASE
		`relative flex items-center gap-1`, // layout and positioning
		`rounded border border-${theme.motif} px-3 py-1`, // box model
		`bg-${theme.dark} dark:bg-${theme.light}`, // background
		`text-${theme.light} dark:text-${theme.dark}`, // text
		`focus:outline focus:outline-1 focus:outline-offset-2 focus:outline-${theme.motif}`, // focusing
		`hover:outline hover:outline-1 hover:outline-offset-2 hover:outline-${theme.motif}`, // hovering
		`active:outline-2 active:outline-offset-0`, // active

		// VARIANTS: SECONDARY
		variant === 'secondary' && [
			`text-${theme.dark} dark:text-${theme.light}`, // text
			`bg-${theme.light} dark:bg-zinc-900`, // background
			`border-zinc-200 dark:border-zinc-800` // border
		],

		// VARIANTS: DESTRUCTIVE
		variant === 'destructive' && [
			`text-${theme.light} dark:text-${theme.complimentary}`, // text
			`bg-${theme.complimentary} dark:bg-${theme.complimentary}`, // background
			`border-${theme.complimentary} dark:border-${theme.complimentary}`, // border
			`focus:outline-${theme.complimentary}`, // focusing
			`hover:outline-${theme.complimentary}` // hovering
		],

		// VARIANTS: GHOST
		variant === 'ghost' && [
			`text-${theme.dark} dark:text-${theme.light}`, // text
			`bg-${theme.dark}/0 dark:bg-${theme.light}/0`, // background
			`border-zinc-500/0 dark:border-zinc-500/0` // border
		],

		// VARIANTS: OUTLINE
		variant === 'outline' && [
			`text-${theme.dark} dark:text-${theme.light}`, // text
			`bg-${theme.dark}/0 dark:bg-${theme.light}/0`, // background
			`border-${theme.dark} dark:border-${theme.light}` // border
		],

		// SIZES
		size === 'text' && 'px-3 py-1',
		size === 'icon' && 'p-1',
		size === 'small' && 'h-6 px-2 text-sm leading-6',

		// EDGES
		edge === 'rounded' && 'rounded',
		edge === 'circle' && 'rounded-full',
		edge === 'sharp' && 'rounded-none',

		// DISABLED
		`disabled:border-zinc-700 disabled:dark:border-zinc-700`, // border
		`disabled:bg-zinc-700 disabled:dark:bg-zinc-700`, // background
		`disabled:text-zinc-400 disabled:dark:text-zinc-400`, // text
		`disabled:cursor-not-allowed disabled:outline-none`, // visual

		// LOADING
		isLoading && `disabled:text-zinc-500/0 disabled:dark:text-zinc-500/0`,

		className
	)}
	{type}
	{...props}
	disabled={isLoading || isDisabled}
>
	{#if isLoading}
		<svg
			class="absolute right-1/2 translate-x-1/2"
			width="24"
			height="24"
			viewBox="0 0 24 24"
		>
			<path
				fill={theme.motif}
				d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z"
				opacity="0.5"
			/>
			<path fill={theme.motif} d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z">
				<animateTransform
					attributeName="transform"
					dur="1s"
					from="0 12 12"
					repeatCount="indefinite"
					to="360 12 12"
					type="rotate"
				/>
			</path>
		</svg>
	{/if}
	{@render children?.()}
</button>
