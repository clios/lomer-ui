<script lang="ts">
	import Select from '$lib/components/core/select.svelte';
	import Screen from '$lib/components/templates/screen.svelte';

	let value = $state('');
</script>

<Screen class="flex justify-center p-8">
	<div class="flex flex-col items-center gap-4">
		<Select bind:value placeholder="Select a game">
			<optgroup label="PC">
				<option value="dota 2">Dota 2</option>
				<option value="manor lords">Manor Lords</option>
			</optgroup>
			<optgroup label="Mobile">
				<option value="world of tanks blitz">World of Tanks Blitz</option>
				<option value="wuthering waves">Wuthering Waves</option>
			</optgroup>
		</Select>
		<p>Value: {value || 'N/A'}</p>
	</div>
</Screen>
