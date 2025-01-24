<script lang="ts">
	import Input from '$lib/components/core/input.svelte';
	import Screen from '$lib/components/templates/screen.svelte';

	let value = $state('lomer-ui');
</script>

<Screen>
	<div class="flex flex-col items-center gap-4">
		<Input bind:value />
		<p>Value: {value || 'N/A'}</p>
	</div>
</Screen>
