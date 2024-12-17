<script lang="ts">
	import Input from '$lib/input.svelte';
	import Screen from '$site/screen.svelte';

	let value = $state('');
</script>

<Screen class="flex justify-center">
	<div class="text-center">
		<Input bind:value placeholder="Type something here..." />
		<p class="mt-2">{value}</p>
	</div>
</Screen>
