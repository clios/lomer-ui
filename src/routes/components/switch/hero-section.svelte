<script lang="ts">
	import Switch from '$lib/switch.svelte';
	import Screen from '$site/screen.svelte';

	let value = $state(false);
</script>

<Screen>
	<div class="flex w-full flex-col items-center gap-4">
		<Switch bind:value>Turn me on!</Switch>
		<p>Value: {value}</p>
	</div>
</Screen>
