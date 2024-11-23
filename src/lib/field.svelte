<script lang="ts">
	import clsx from 'clsx';
	import { fade, slide } from 'svelte/transition';

	export let label = '';
	export let issues = '';
	export { className as class };

	let className = '';
</script>

<div class={clsx('grid px-4 sm:px-8', className)}>
	{#if label}
		<p class="mb-1 flex justify-between text-left">
			{label}
		</p>
	{/if}
	<slot />

	{#if issues}
		<p
			in:fade={{ delay: 200, duration: 200 }}
			out:slide={{ axis: 'x', duration: 1000 }}
			class="overflow-hidden text-nowrap text-left text-red-500"
		>
			{issues}
		</p>
	{/if}
</div>
