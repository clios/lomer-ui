<script lang="ts">
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	type Props = { children: Snippet; final?: boolean };
	let { children, final }: Props = $props();
</script>

<div
	class={twMerge(
		// BASE
		'ml-2 flex flex-col gap-2  pb-8 pl-6',
		!final && 'border-l border-zinc-300 dark:border-zinc-700'
	)}
>
	{@render children?.()}
</div>
