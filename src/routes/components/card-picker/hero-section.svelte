<script lang="ts">
	import CardPicker from '$lib/card-picker.svelte';
	import Icon from '@iconify/svelte';
	import Screen from '$site/screen.svelte';

	let groupValue = $state('');
</script>

<Screen class="p-8 text-center">
	<p class="mb-4">Choose your clan</p>
	<div class="mb-2 flex w-full justify-center gap-8">
		<CardPicker bind:groupValue cardValue="dragon" hasCheckMark>
			<Icon icon="game-icons:spiked-dragon-head" width={100} height={100} />
			<p>Dragon</p>
		</CardPicker>
		<CardPicker bind:groupValue cardValue="serpent" hasCheckMark>
			<Icon icon="game-icons:snake-tongue" width={100} height={100} />
			<p>Serpent</p>
		</CardPicker>
		<CardPicker bind:groupValue cardValue="wolf" hasCheckMark>
			<Icon icon="game-icons:wolf-head" width={100} height={100} />
			<p>Wolf</p>
		</CardPicker>
		<CardPicker bind:groupValue cardValue="lotus" hasCheckMark>
			<Icon icon="game-icons:lotus" width={100} height={100} />
			<p>Lotus</p>
		</CardPicker>
	</div>
</Screen>
