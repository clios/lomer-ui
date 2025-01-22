<script lang="ts">
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	type Props = {
		children?: Snippet;
		class?: string;
		fadingBottom?: string;
	};

	let { children, class: className }: Props = $props();
</script>

<div
	class={twMerge(
		'relative overflow-auto scroll-smooth',
		'[&::-webkit-scrollbar]:w-1',
		'[&::-webkit-scrollbar-track]:rounded-full',
		'[&::-webkit-scrollbar-track]:bg-none',
		'hover:[&::-webkit-scrollbar-track]:bg-border',
		'[&::-webkit-scrollbar-thumb]:rounded-full',
		'[&::-webkit-scrollbar-thumb]:bg-none',
		'hover:[&::-webkit-scrollbar-thumb]:bg-fg/50',
		className
	)}
>
	{@render children?.()}
</div>
