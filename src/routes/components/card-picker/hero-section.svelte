<script lang="ts">
	import CardPicker from '$lib/card-picker.svelte';
	import Icon from '@iconify/svelte';
	import Screen from '$site/screen.svelte';

	let value = $state('');
</script>

<Screen class="p-8 text-center">
	<p class="mb-4">Choose your clan</p>
	<div class="mb-2 flex w-full justify-center gap-4">
		<CardPicker bind:value cardValue="dragon">
			<Icon icon="game-icons:spiked-dragon-head" width={80} height={80} />
			<p>Dragon</p>
		</CardPicker>
		<CardPicker bind:value cardValue="serpent">
			<Icon icon="game-icons:snake-tongue" width={80} height={80} />
			<p>Serpent</p>
		</CardPicker>
		<CardPicker bind:value cardValue="wolf">
			<Icon icon="game-icons:wolf-head" width={80} height={80} />
			<p>Wolf</p>
		</CardPicker>
		<CardPicker bind:value cardValue="lotus">
			<Icon icon="game-icons:lotus" width={80} height={80} />
			<p>Lotus</p>
		</CardPicker>
	</div>

	<p>Value: {value || 'N/A'}</p>
</Screen>
