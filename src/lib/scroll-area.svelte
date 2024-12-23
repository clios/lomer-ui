<script lang="ts">
	import type { Snippet } from 'svelte';
	import { mode } from 'mode-watcher';
	import { twMerge } from 'tailwind-merge';

	type Props = {
		children?: Snippet;
		class?: string;
		fadingBottom?: string;
	};

	let { children, class: className }: Props = $props();

	let hideScroll = $state(true);
	let timer: any;

	// Display then hide scroll
	function displayScroll() {
		clearTimeout(timer);
		hideScroll = false;
		timer = setTimeout(() => {
			hideScroll = true;
		}, 1000);
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class={twMerge(
		'scrollbar relative overflow-auto scroll-smooth',
		$mode === 'dark' ? 'thumb-dark' : 'thumb-light',
		hideScroll && 'thumb-hidden',
		className
	)}
	onmousemove={displayScroll}
	onscroll={displayScroll}
>
	{@render children?.()}
</div>

<style>
	.scrollbar::-webkit-scrollbar {
		width: 8px;
		height: 8px;
	}

	.thumb-light::-webkit-scrollbar-thumb {
		background-color: #d4d4d8;
		border-radius: 8px;
	}

	.thumb-dark::-webkit-scrollbar-thumb {
		background-color: #52525b;
		border-radius: 8px;
	}

	.thumb-hidden::-webkit-scrollbar-thumb {
		background-color: #d4d4d800;
		border-radius: 8px;
	}

	.scrollbar::-webkit-scrollbar-track {
		background-color: none;
	}
</style>
