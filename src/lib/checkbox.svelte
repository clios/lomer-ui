<script lang="ts">
	import { circInOut } from 'svelte/easing';
	import { draw } from 'svelte/transition';
	import { cn } from './utils.ts';
	import type { Snippet } from 'svelte';

	type Props = {
		children?: Snippet;
		class?: string;
		isDisabled?: boolean;
		label?: string;
		value?: boolean;
	};

	let {
		children,
		class: className,
		isDisabled = false,
		label,
		value = $bindable(false)
	}: Props = $props();

	function onclick() {
		value = !value;
	}
</script>

<button
	type="button"
	disabled={isDisabled}
	class={cn(
		// BASE
		'group', // group
		'relative flex', // layout and positioning
		'text-left', // text
		'rounded pl-8', // box model
		'disabled:cursor-not-allowed', // disabled
		'focus:outline-none', // focusing

		// STYLE
		className
	)}
	{onclick}
>
	<!-- BOX -->
	<div
		class={cn(
			// BASE
			'absolute left-0 top-0', // layout and positioning
			'size-[24px] rounded border dark:border-zinc-700', // box model
			'shadow-sm dark:shadow-none', // shadow
			'bg-zinc-50 dark:bg-zinc-950', // background

			// GROUP
			'group-focus:outline group-focus:outline-1 group-focus:outline-offset-2 group-focus:outline-cyan-500', // focusing
			'group-hover:outline group-hover:outline-1 group-hover:outline-offset-2 group-hover:outline-cyan-500', // hovering
			'group-disabled:border-zinc-700/0 group-disabled:bg-zinc-500/50 group-disabled:outline-none', // disabled

			// VALUE
			value ? 'bg-zinc-50 dark:bg-zinc-50' : 'dark:bg-zinc-950'
		)}
	>
		{#if value}
			<!-- CHECK MARK -->
			<svg
				class="relative left-1 top-1"
				width="14"
				height="14"
				viewBox="0 0 31 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					in:draw={{ duration: 300, easing: circInOut }}
					stroke-width="5"
					d="M1 16L8 23L30.5 0.5"
					stroke="#14B8A6"
				/>
			</svg>
		{:else}
			<!-- X MARK -->
			<svg
				class="absolute left-1 top-1"
				width="14"
				height="14"
				viewBox="0 0 24 25"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					in:draw={{ duration: 150, easing: circInOut }}
					stroke-width="4"
					d="M0.5 1L23.5 24"
					stroke="#EF4444"
				/>
				<path
					in:draw={{ delay: 150, duration: 150, easing: circInOut }}
					stroke-width="4"
					d="M23.5 1L0.5 24"
					stroke="#EF4444"
				/>
			</svg>
		{/if}
	</div>
	<div class="ml-1">
		{#if label}<p class="group-disabled:text-zinc-500">{label}</p>{/if}
		{@render children?.()}
	</div>
</button>
