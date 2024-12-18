<script lang="ts">
	import Checkbox from '$lib/checkbox.svelte';
	import Screen from '$site/screen.svelte';

	let value = $state(false);
</script>

<Screen>
	<div class="flex w-full flex-col items-center gap-4">
		<Checkbox bind:value>
			<p class="font-semibold">Terms & Conditions</p>
			<p class="text-zinc-600 dark:text-zinc-400">
				I Agree even without reading the terms and conditions.
			</p>
		</Checkbox>
		<p>Value: {value}</p>
	</div>
</Screen>
