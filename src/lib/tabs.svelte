<script lang="ts">
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	type Props = {
		children?: Snippet;
		trigger?: Snippet;
		class?: string;
	};
	let { children, trigger, class: className }: Props = $props();
</script>

<div class="flex flex-col gap-1">
	<div class={twMerge('bg-border rounded-card flex gap-1 p-1', className)}>
		{@render trigger?.()}
	</div>
	<div class="rounded-card overflow-hidden border">
		{@render children?.()}
	</div>
</div>
