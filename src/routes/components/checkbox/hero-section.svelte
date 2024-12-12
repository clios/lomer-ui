<script lang="ts">
	import Checkbox from '$lib/checkbox.svelte';
	import Screen from '$site/screen.svelte';
</script>

<Screen class="flex justify-center">
	<Checkbox>
		<p class="font-semibold">Terms & Conditions</p>
		<p class="text-zinc-600 dark:text-zinc-400">
			I Agree even without reading the terms and conditions.
		</p>
	</Checkbox>
</Screen>
