<script lang="ts">
	import CardPicker from '$lib/components/ui/card-picker.svelte';
	import Icon from '@iconify/svelte';

	let group = $state('');
</script>

<div class="flex gap-4">
	<CardPicker
		class="grid w-24 justify-items-center gap-2"
		bind:group
		value="male"
	>
		<Icon class="size-12" icon="mdi:gender-male" />
		Male
	</CardPicker>
	<CardPicker
		class="grid w-24 justify-items-center gap-2"
		bind:group
		value="female"
	>
		<Icon class="size-12" icon="mdi:gender-female" />
		Female
	</CardPicker>
</div>

<p class="text-primary mt-4">Group: {group}</p>
