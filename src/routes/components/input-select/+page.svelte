<script lang="ts">
	import InputSelect from '$lib/input-select.svelte';
	import Code from '$site//code.svelte';
	import Screen from '$lib/screen.svelte';

	let value = '';
</script>

<h1 class="font-mono text-3xl font-bold">Input Select</h1>
<p>A component that looks like an input select.</p>
<Code code={`import { InputSelect } from 'lomer-ui'`} language="javascript" />

<p class="pb-1 text-xl font-semibold">Examples</p>
<Screen>
	<div class="grid pt-8 lg:grid-cols-2 lg:pt-0">
		<div class="mt-8 grid w-full place-content-center gap-2">
			<InputSelect bind:value>
				<option value="dragon">Dragon</option>
				<option value="serpent">Serpent</option>
				<option value="wolf">Wolf</option>
				<option value="lotus">Lotus</option>
			</InputSelect>
			<p>Value: {value}</p>
		</div>
		<div class="ml-8 grid items-center">
			<Code
				code={`<InputSelect bind:value>` +
					`\n\t<option value="dragon">Dragon</option>` +
					`\n\t<option value="serpent">Serpent</option>` +
					`\n\t<option value="wolf">Wolf</option>` +
					`\n\t<option value="lotus">Lotus</option>` +
					`\n</InputSelect>` +
					`\n<p>Value: {value}</p>`}
				language="xml"
			/>
		</div>
	</div>
</Screen>

<p class="mb-1 pt-8 font-semibold">Disabled</p>
<Screen>
	<div class="grid pt-8 lg:grid-cols-2 lg:pt-0">
		<div class="mt-8 grid w-full place-content-center gap-2">
			<InputSelect disabled>
				<option value="dragon">Dragon</option>
				<option value="serpent">Serpent</option>
				<option value="wolf">Wolf</option>
				<option value="lotus">Lotus</option>
			</InputSelect>
		</div>
		<div class="ml-8 grid items-center">
			<Code code={`<InputSelect disabled>` + `\n\t...` + `\n</InputSelect>`} language="xml" />
		</div>
	</div>
</Screen>
