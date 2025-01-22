<script lang="ts">
	import Tab from '$lib/components/ui/tab.svelte';
	import Tabs from '$lib/components/ui/tabs.svelte';
	import type { Snippet } from 'svelte';

	type Props = { preview?: Snippet; code?: Snippet; drag?: Snippet };

	let { preview, code }: Props = $props();

	let tabKey = $state('tab-1');
</script>

<Tabs>
	{#snippet trigger()}
		<Tab bind:tabKey key="tab-1">Preview</Tab>
		<Tab bind:tabKey key="tab-2">Code</Tab>
	{/snippet}
	{#if tabKey === 'tab-1'}
		{@render preview?.()}
	{:else if tabKey === 'tab-2'}
		{@render code?.()}
	{/if}
</Tabs>
