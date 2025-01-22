<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fade } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';

	type Props = {
		children?: Snippet;
		value?: string;
		panelValue?: string;
		isOpen?: boolean;
		class?: string;
	};

	let {
		class: className,
		value = $bindable(''),
		panelValue = '',
		isOpen = $bindable(false),
		children
	}: Props = $props();
</script>

{#if value === panelValue}
	<div in:fade class={twMerge('', className)}>
		{@render children?.()}
	</div>
{/if}
