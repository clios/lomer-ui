<script lang="ts">
	import Input from '$lib/input.svelte';
	import Screen from '$site/screen.svelte';

	let value = $state('lomer-ui');
</script>

<Screen>
	<div class="flex flex-col items-center gap-4">
		<Input bind:value />
		<p>Value: {value || 'N/A'}</p>
	</div>
</Screen>
