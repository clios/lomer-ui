<script lang="ts">
	import Field from '$lib/field.svelte';
	import { Button } from '$lib/index.js';
	import InputRadio from '$lib/input-radio.svelte';
	import InputSelect from '$lib/input-select.svelte';
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

	<div class="flex w-full gap-2">
		<InputRadio
			class="w-full"
			bind:value
			name="clan-picker"
			radioValue="dragon"
			id="dragon-card"
			variant="card-picker"
		>
			<div class="grid w-full justify-items-center">
				<Icon icon="f7:creditcard-fill" width={24} height={24} />
				<p>Card</p>
			</div>
		</InputRadio>
		<InputRadio
			class="w-full"
			bind:value
			name="clan-picker"
			radioValue="serpent"
			id="serpent-card"
			variant="card-picker"
			><div class="grid w-full justify-items-center">
				<Icon icon="mdi:paypal" width={24} height={24} />
				<p>Paypal</p>
			</div></InputRadio
		>
		<InputRadio
			class="w-full"
			bind:value
			name="clan-picker"
			radioValue="wolf"
			id="wolf-card"
			variant="card-picker"
			><div class="grid w-full justify-items-center">
				<Icon icon="mdi:apple" width={24} height={24} />
				<p>Apple</p>
			</div>
		</InputRadio>
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
