<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/button.svelte';
	import Icon from '@iconify/svelte';

	type Props = {
		nextLabel?: string;
		nextLink?: string;
		prevLabel?: string;
		prevLink?: string;
	};

	let { nextLabel, prevLabel, nextLink = '', prevLink = '' }: Props = $props();
</script>

<div class="my-16 flex justify-between gap-2">
	{#if prevLabel || prevLink}
		<Button
			class="flex w-full flex-col items-start"
			variant="ghost"
			onclick={() => goto(prevLink)}
		>
			<p class="text-muted pl-2 text-sm">Previous</p>
			<div class="flex items-center">
				<Icon icon="mdi:chevron-left" width={24} />
				{prevLabel}
			</div>
		</Button>
	{:else}
		<div class="w-full"></div>
	{/if}
	{#if nextLabel || nextLink}
		<Button
			class="flex w-full flex-col items-end"
			variant="ghost"
			onclick={() => goto(nextLink)}
		>
			<p class="text-muted pr-2 text-sm">Next</p>
			<div class="flex items-center">
				{nextLabel}
				<Icon icon="mdi:chevron-right" width={24} />
			</div>
		</Button>
	{:else}
		<div class="w-full"></div>
	{/if}
</div>
