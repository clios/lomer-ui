<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	type Variant =
		| 'default'
		| 'primary'
		| 'secondary'
		| 'destructive'
		| 'outline'
		| 'ghost';

	type Props = {
		children?: Snippet;
		class?: string;
		edge?: 'default' | 'circle' | 'sharp';
		isDisabled?: boolean;
		isLoading?: boolean;
		size?: 'default' | 'icon' | 'small';
		type?: 'submit' | 'reset' | 'button';
		variant?: Variant;
	} & HTMLButtonAttributes;

	let {
		children,
		class: className,
		edge = 'default',
		isDisabled = false,
		isLoading = false,
		size = 'default',
		type = 'button',
		variant = 'default',
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
			'bg-foreground', // background
			'text-background', // text
			'border-primary', // border
			'outline-primary' // outline
		],

		// VARIANTS: PRIMARY
		variant === 'primary' && [
			'bg-primary', // background
			'text-primary-fg', // text
			'border-primary', // border
			'outline-primary' // outline
		],

		// VARIANTS: SECONDARY
		variant === 'secondary' && [
			'bg-secondary', // background
			'text-secondary-fg', // text
			'border-secondary', // border
			'outline-secondary' // outline
		],

		// VARIANTS: DESTRUCTIVE
		variant === 'destructive' && [
			'bg-destructive', // background
			'text-destructive-fg', // text
			'border-destructive', // border
			'outline-destructive' // outline
		],

		// VARIANTS: OUTLINE
		variant === 'outline' && [
			'text-foreground', // text
			'bg-none', // background
			'border-foreground active:border-primary', // border
			'focus:outline-primary', // focusing
			'hover:outline-primary' // hovering
		],

		// VARIANTS: GHOST
		variant === 'ghost' && [
			'bg-none', // background
			'text-foreground', // text
			'border-none', // border
			'focus:outline-primary', // focusing
			'hover:outline-primary' // hovering
		],

		// SIZES
		size === 'default' && 'px-3 py-1',
		size === 'icon' && 'p-1',
		size === 'small' && 'h-6 px-2 text-sm leading-6',

		// EDGES
		edge === 'default' && 'rounded',
		edge === 'circle' && 'rounded-full',
		edge === 'sharp' && 'rounded-none',

		// DISABLED
		'disabled:border-disabled', // border
		'disabled:bg-disabled', // background
		'disabled:text-disabled-fg', // text
		'disabled:cursor-not-allowed disabled:outline-hidden', // visual

		// LOADING
		isLoading && 'disabled:text-disabled',

		className
	)}
	{type}
	{...props}
	disabled={isLoading || isDisabled}
>
	{#if isLoading}
		<div
			class="text-spinner absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 animate-spin"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 16 16"
			>
				<path
					fill="currentColor"
					d={`M8 0A8 8 0 0 0 .002 7.812C.094 4.033 2.968 1 6.5 1C10.09 1 13 4.134 13 8a1.5 1.5 0 0 0 3 ` +
						`0a8 8 0 0 0-8-8m0 16a8 8 0 0 0 7.998-7.812C15.906 11.967 13.032 15 9.5 15C5.91 15 3 ` +
						`11.866 3 8a1.5 1.5 0 0 0-3 0a8 8 0 0 0 8 8`}
				/>
			</svg>
		</div>
	{/if}
	{@render children?.()}
</button>
