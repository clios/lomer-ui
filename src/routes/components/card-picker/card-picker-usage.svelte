<script lang="ts">
	import CardPicker from '$lib/components/ui/card-picker.svelte';
	import Field from '$lib/components/ui/field.svelte';
	import Input from '$lib/components/ui/input.svelte';
	import Icon from '@iconify/svelte';

	let group = $state('');
</script>

<Field class="flex gap-2" label="Sex">
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
</Field>
<Field label="Value:" orientation="horizontal">
	<Input value={group} isReadOnly />
</Field>
