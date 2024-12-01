<script lang="ts">
	import clsx from 'clsx';
	import { fade, slide } from 'svelte/transition';

	export let label = '';
	export let helper = '';
	export let issue = '';
	export { className as class };

	let className = '';
</script>

<div class={clsx('grid', className)}>
	{#if label}
		<p class="mb-[2px] flex justify-between text-left font-semibold">
			{label}
		</p>
	{/if}
	<slot />

	{#if helper}
		<p
			in:fade={{ delay: 200, duration: 200 }}
			out:slide={{ axis: 'x', duration: 1000 }}
			class="overflow-hidden text-nowrap text-left text-sm"
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
