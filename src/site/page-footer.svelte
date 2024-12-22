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

<div class="mt-16 flex justify-between">
	{#if prevLabel || prevLink}
		<Button variant="ghost" onclick={() => goto(prevLink)}>
			<Icon icon="mdi:chevron-left" width={24} />
			{prevLabel}
		</Button>
	{:else}
		<div></div>
	{/if}
	{#if nextLabel || nextLink}
		<Button variant="ghost" onclick={() => goto(nextLink)}>
			{nextLabel}
			<Icon icon="mdi:chevron-right" width={24} />
		</Button>
	{:else}
		<div></div>
	{/if}
</div>
