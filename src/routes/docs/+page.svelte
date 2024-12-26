<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		goto('/docs/introduction');
	});
</script>

<svelte:head>
	<title>Docs . lomer-ui</title>
</svelte:head>
