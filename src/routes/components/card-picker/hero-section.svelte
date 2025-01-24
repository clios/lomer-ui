<script lang="ts">
	import CardPicker from '$lib/components/core/card-picker.svelte';
	import Icon from '@iconify/svelte';
	import Screen from '$lib/components/templates/screen.svelte';

	let value = $state('');
</script>

<Screen class="p-8 text-center">
	<p class="mb-4">Choose your clan</p>
	<div class="mb-2 flex w-full flex-wrap justify-center gap-4">
		<CardPicker bind:value cardValue="dragon">
			<Icon icon="game-icons:spiked-dragon-head" width={70} height={70} />
			<p>Dragon</p>
		</CardPicker>
		<CardPicker bind:value cardValue="serpent">
			<Icon icon="game-icons:snake-tongue" width={70} height={70} />
			<p>Serpent</p>
		</CardPicker>
		<CardPicker bind:value cardValue="wolf">
			<Icon icon="game-icons:wolf-head" width={70} height={70} />
			<p>Wolf</p>
		</CardPicker>
		<CardPicker bind:value cardValue="lotus">
			<Icon icon="game-icons:lotus" width={70} height={70} />
			<p>Lotus</p>
		</CardPicker>
	</div>

	<p>Value: {value || 'N/A'}</p>
</Screen>
