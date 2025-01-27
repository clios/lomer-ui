<script lang="ts">
	import Alert from '$lib/components/ui/alert.svelte';
	import Icon from '@iconify/svelte';
</script>

<Alert title="Notice">
	{#snippet icon()}
		<Icon class="size-5" icon="mdi:terminal-line" />
	{/snippet}
	<p>Your bill is due tomorrow.</p>
</Alert>
