<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	type Tone = 'light' | 'light-mid' | 'mid' | 'dark-mid' | 'dark';
	type Palette = 'primary' | 'secondary' | 'destructive';
	type Variant = 'default' | 'ghost' | 'outline' | Palette;

	type Props = {
		children?: Snippet;
		class?: string;
		edge?: 'default' | 'circle' | 'sharp';
		isDisabled?: boolean;
		isLoading?: boolean;
		outline?: Palette;
		size?: 'text' | 'icon' | 'small';
		text?: Tone | Palette;
		type?: 'submit' | 'reset' | 'button';
		variant?: Variant;
	} & HTMLButtonAttributes;

	let {
		children,
		class: className,
		edge = 'default',
		isDisabled = false,
		isLoading = false,
		size = 'text',
		type = 'button',
		variant = 'default',
		outline,
		text,
		...props
	}: Props = $props();
</script>

<button
	class={twMerge(
		// BASE
		'relative flex items-center gap-1', // layout and positioning
		'border', // border
		'focus:outline focus:outline-offset-2', // focusing
		'hover:outline hover:outline-offset-2', // hovering
		'active:outline-2 active:outline-offset-0', // active
		'cursor-pointer', // cursor

		// VARIANTS: DEFAULT
		variant === 'default' && [
			'bg-dark dark:bg-light', // background
			'text-light dark:text-dark', // text
			'border-none', // border
			'outline-primary' // outline
		],

		// VARIANTS: SECONDARY
		variant === 'secondary' && [
			'bg-secondary dark:bg-secondary', // background
			'text-light', // text
			'border-secondary', // border
			'outline-secondary' // outline
		],

		// VARIANTS: PRIMARY
		variant === 'primary' && [
			'text-light', // text
			'bg-primary', // background
			'border-primary', // border
			'outline-primary' // outline
		],

		// VARIANTS: DESTRUCTIVE
		variant === 'destructive' && [
			'text-light', // text
			'bg-destructive', // background
			'border-destructive', // border
			'outline-destructive' // outline
		],

		// VARIANTS: GHOST
		variant === 'ghost' && [
			'text-dark dark:text-light', // text
			'bg-none', // background
			'border-none', // border
			'focus:outline-primary', // focusing
			'hover:outline-primary' // hovering
		],

		// VARIANTS: OUTLINE
		variant === 'outline' && [
			'text-dark dark:text-light', // text
			'bg-none', // background
			'border-dark dark:border-light active:border-primary', // border
			'focus:outline-primary', // focusing
			'hover:outline-primary' // hovering
		],

		// OUTLINE COLOR
		outline === 'primary' &&
			'border-primary dark:border-primary text-primary dark:text-primary',
		outline === 'destructive' &&
			'border-destructive dark:border-destructive text-destructive dark:text-destructive hover:outline-destructive active:outline-destructive focus:outline-destructive active:border-destructive',

		// TEXT
		text === 'light' && 'text-light dark:text-light',
		text === 'light-mid' && 'text-light-mid dark:text-light-mid',
		text === 'mid' && 'text-mid dark:text-mid',
		text === 'dark-mid' && 'text-dark-mid dark:text-dark-mid',
		text === 'dark' && 'text-dark dark:text-dark',
		text === 'primary' && 'text-primary dark:text-primary',
		text === 'destructive' && 'text-destructive dark:text-destructive',

		// SIZES
		size === 'text' && 'px-3 py-1',
		size === 'icon' && 'p-1',
		size === 'small' && 'h-6 px-2 text-sm leading-6',

		// EDGES
		edge === 'default' && 'rounded-theme',
		edge === 'circle' && 'rounded-full',
		edge === 'sharp' && 'rounded-none',

		// DISABLED
		'disabled:border-dark dark:disabled:border-dark', // border
		'disabled:bg-darker dark:disabled:bg-darker', // background
		'disabled:text-lighter dark:disabled:text-lighter', // text
		'disabled:cursor-not-allowed disabled:outline-hidden', // visual

		// LOADING
		isLoading && 'disabled:text-zinc-500/0 dark:disabled:text-zinc-500/0',

		className
	)}
	{type}
	{...props}
	disabled={isLoading || isDisabled}
>
	{#if isLoading}
		<div
			class="text-primary absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 animate-spin"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 16 16"
			>
				<path
					fill="currentColor"
					d="M8 0A8 8 0 0 0 .002 7.812C.094 4.033 2.968 1 6.5 1C10.09 1 13 4.134 13 8a1.5 1.5 0 0 0 3 0a8 8 0 0 0-8-8m0 16a8 8 0 0 0 7.998-7.812C15.906 11.967 13.032 15 9.5 15C5.91 15 3 11.866 3 8a1.5 1.5 0 0 0-3 0a8 8 0 0 0 8 8"
				/>
			</svg>
		</div>
	{/if}
	{@render children?.()}
</button>
