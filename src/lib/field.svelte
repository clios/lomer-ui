<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { fade, slide } from 'svelte/transition';
	import type { Snippet } from 'svelte';

	type Props = {
		children?: Snippet;
		class?: string;
		helper?: string;
		issue?: string;
		label?: string;
	};

	let { children, class: className, helper, issue, label }: Props = $props();
</script>

<div class={twMerge('flex flex-col', className)}>
	{#if label}
		<p class="mb-[2px] flex justify-between text-left font-semibold">
			{label}
		</p>
	{/if}

	{@render children?.()}

	{#if helper}
		<p
			in:fade={{ delay: 200, duration: 200 }}
			out:slide={{ axis: 'x', duration: 1000 }}
			class="overflow-hidden text-nowrap text-left text-sm text-zinc-500"
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
