<script lang="ts">
	import Field from '$lib/field.svelte';
	import Button from '$lib/button.svelte';
	import CardPicker from '$lib/card-picker.svelte';
	import InputSelect from '$lib/select.svelte';
	import Input from '$lib/input.svelte';
	import Icon from '@iconify/svelte';

	let value = '';
</script>

<div
	class="w-96 rounded-md border bg-white p-4 dark:border-zinc-700 dark:bg-zinc-950"
>
	<div>
		<p class="text-xl font-semibold">Payment Method</p>
		<p class="mb-4 text-zinc-500">Add a new payment method to your account.</p>
	</div>

	<div class="flex w-full gap-4">
		<CardPicker
			class="w-full"
			bind:value
			name="clan-picker"
			cardValue="dragon"
			id="dragon-card"
		>
			<div class="grid w-full justify-items-center">
				<Icon icon="f7:creditcard-fill" width={24} height={24} />
				<p>Card</p>
			</div>
		</CardPicker>
		<CardPicker
			class="w-full"
			bind:value
			name="clan-picker"
			cardValue="serpent"
			id="serpent-card"
			><div class="grid w-full justify-items-center">
				<Icon icon="mdi:paypal" width={24} height={24} />
				<p>Paypal</p>
			</div></CardPicker
		>
		<CardPicker
			class="w-full"
			bind:value
			name="clan-picker"
			cardValue="wolf"
			id="wolf-card"
			><div class="grid w-full justify-items-center">
				<Icon icon="mdi:apple" width={24} height={24} />
				<p>Apple</p>
			</div>
		</CardPicker>
	</div>

	<div class="my-4 flex flex-col gap-2">
		<Field label="Name">
			<Input placeholder="First Last" />
		</Field>
		<Field label="Card Number">
			<Input />
		</Field>
	</div>

	<div class="my-4 flex gap-4">
		<Field class="w-full" label="Expires">
			<InputSelect placeholder="Month">
				<option>January</option>
				<option>February</option>
			</InputSelect>
		</Field>
		<Field class="w-full" label="Year">
			<InputSelect placeholder="Year">
				<option>2025</option>
				<option>2026</option>
			</InputSelect>
		</Field>
		<Field class="w-full" label="CVC">
			<Input class="w-full" placeholder="CVC" />
		</Field>
	</div>

	<Button class="w-full justify-center">Continue</Button>
</div>
