<script lang="ts">
	import { InputRadio } from '$lib/index.js';
	import Code from '$lib/code.svelte';
	import Screen from '$lib/screen.svelte';
	import Icon from '@iconify/svelte';

	let value = 'dragon';
	let cardValue = 'dragon';
</script>

<h1 class="font-mono text-3xl font-bold">Input Radio</h1>
<p>A component that looks like an input radio.</p>
<Code code={`import { InputRadio } from 'lomer-ui'`} language="javascript" />

<p class="pb-1 text-xl font-semibold">Examples</p>
<Screen>
	<div class="grid pt-8 lg:pt-0">
		<div class="mt-8 grid w-full place-content-center gap-2">
			<InputRadio bind:value name="clan" radioValue="dragon" id="dragon">Dragon</InputRadio>
			<InputRadio bind:value name="clan" radioValue="serpent" id="serpent">Serpent</InputRadio>
			<InputRadio bind:value name="clan" radioValue="wolf" id="wolf">Wolf</InputRadio>
			<InputRadio bind:value name="clan" radioValue="lotus" id="lotus">Lotus</InputRadio>
			<p>Value: {value}</p>
		</div>
		<div class="ml-8 grid items-center">
			<Code
				code={`<InputRadio bind:groupValue={value} groupName="clan" value="dragon">Dragon</InputRadio>` +
					`\n<InputRadio bind:groupValue={value} groupName="clan" value="serpent">Serpent</InputRadio>` +
					`\n<InputRadio bind:groupValue={value} groupName="clan" value="wolf">Wolf</InputRadio>` +
					`\n<InputRadio bind:groupValue={value} groupName="clan" value="lotus">Lotus</InputRadio>` +
					`\n<p>Value: {value}</p>`}
				language="xml"
			/>
		</div>
	</div>
</Screen>

<p class="mb-1 pt-8 font-semibold">Card Picker</p>
<Screen>
	<div class="grid pt-8 lg:pt-0">
		<div class="mt-8 grid w-full place-content-center gap-2">
			<div class="flex gap-4">
				<InputRadio
					bind:value={cardValue}
					name="clan-picker"
					radioValue="dragon"
					id="dragon-card"
					variant="card-picker"
				>
					<div class="grid w-24 justify-items-center">
						<Icon icon="mdi:github" width={24} height={24} />
						<p>Github</p>
					</div>
				</InputRadio>
				<InputRadio
					bind:value={cardValue}
					name="clan-picker"
					radioValue="serpent"
					id="serpent-card"
					variant="card-picker"
					><div class="grid w-24 justify-items-center">
						<Icon icon="mdi:facebook" width={24} height={24} />
						<p>Facebook</p>
					</div></InputRadio
				>
				<InputRadio
					bind:value={cardValue}
					name="clan-picker"
					radioValue="wolf"
					id="wolf-card"
					variant="card-picker"
					><div class="grid w-24 justify-items-center">
						<Icon icon="mdi:google" width={24} height={24} />
						<p>Google</p>
					</div>
				</InputRadio>
			</div>
			<p>Value: {cardValue}</p>
		</div>
		<div class="ml-8 grid items-center">
			<Code
				code={`<InputRadio bind:groupValue={value} groupName="clan" value="dragon">Dragon</InputRadio>` +
					`\n<InputRadio bind:groupValue={value} groupName="clan" value="serpent">Serpent</InputRadio>` +
					`\n<InputRadio bind:groupValue={value} groupName="clan" value="wolf">Wolf</InputRadio>` +
					`\n<InputRadio bind:groupValue={value} groupName="clan" value="lotus">Lotus</InputRadio>` +
					`\n<p>Value: {value}</p>`}
				language="xml"
			/>
		</div>
	</div>
</Screen>

<!-- <p class="mb-1 pt-8 font-semibold">Disabled</p>
<Screen>
	<div class="grid pt-8 lg:grid-cols-3 lg:pt-0">
		<div class="grid w-full place-content-center">
			<InputRadio id="x" groupName="x" value="x" disabled>Disabled</InputRadio>
		</div>
		<div class="grid items-center lg:col-span-2">
			<Code
				code={`<InputRadio groupName="x" value="x" disabled>Disabled</InputRadio>`}
				language="xml"
			/>
		</div>
	</div>
</Screen> -->
