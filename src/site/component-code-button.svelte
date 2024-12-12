<script lang="ts">
	import Button from '$lib/button.svelte';
	import Icon from '@iconify/svelte';

	export let link;
</script>

<div class="mt-1 flex gap-2">
	<p>Or copy-paste the</p>
	<Button
		variant="outline"
		size="small"
		onclick={() => window.open(link, '_blank')}
		class="w-min whitespace-nowrap"
		>Component Code <Icon icon="mdi:code" /></Button
	>
</div>
