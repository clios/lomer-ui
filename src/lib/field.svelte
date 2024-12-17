<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { fade, slide } from 'svelte/transition';
	import type { Snippet } from 'svelte';

	type Orientation = 'vertical' | 'horizontal';

	type Props = {
		children?: Snippet;
		class?: string;
		helper?: string;
		issue?: string;
		label?: string;
		optional?: boolean;
		orientation?: Orientation;
		required?: boolean;
	};

	let {
		children,
		class: className,
		helper,
		issue,
		label,
		optional = false,
		orientation = 'vertical',
		required = false
	}: Props = $props();
</script>

<div
	class={twMerge(
		// BASE
		'flex gap-1', // layout

		// ORIENTATION
		orientation === 'vertical' ? 'flex-col' : 'items-start',

		// STYLING
		className
	)}
>
	{#if label}
		<p
			class={twMerge(
				// BASE
				'semibold flex text-sm',

				// ORIENTATION
				orientation === 'vertical' ? 'text-left' : 'mr-2 mt-[.5rem] text-right'
			)}
		>
			{label}

			<!-- REQUIRED INDICATOR -->
			{#if required}<span class="ml-1 text-red-500">*</span>{/if}

			<!-- OPTIONAL INDICATOR -->
			{#if optional}
				<span
					class="ml-1 rounded bg-zinc-100 px-1 py-[2px] text-xs text-zinc-700 dark:bg-zinc-950 dark:text-zinc-300"
				>
					Optional
				</span>
			{/if}
		</p>
	{/if}

	<div class="flex flex-col gap-1">
		{@render children?.()}

		{#if helper}
			<p
				in:fade={{ delay: 200, duration: 200 }}
				out:slide={{ axis: 'x', duration: 1000 }}
				class="overflow-hidden text-nowrap text-left text-sm text-zinc-500 dark:text-zinc-300"
			>
				{helper}
			</p>
		{/if}

		{#if issue}
			<p
				in:fade={{ delay: 200, duration: 200 }}
				out:slide={{ axis: 'x', duration: 1000 }}
				class="overflow-hidden text-nowrap text-left text-sm text-red-500"
			>
				{issue}
			</p>
		{/if}
	</div>
</div>
