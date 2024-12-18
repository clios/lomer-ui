<script lang="ts">
	import Textarea from '$lib/textarea.svelte';
	import Screen from '$site/screen.svelte';

	let value = $state('lomer-ui');
</script>

<Screen>
	<div class="flex flex-col items-center gap-4">
		<Textarea bind:value />
		<p>Value: {value || 'N/A'}</p>
	</div>
</Screen>
