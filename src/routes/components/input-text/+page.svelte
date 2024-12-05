<script lang="ts">
	import Input from '$lib/input.svelte';
	import Code from '$lib/components/site/code.svelte';
	import Screen from '$lib/screen.svelte';

	let value = 'lomer-ui';
</script>

<h1 class="font-mono text-3xl font-bold">Input Text</h1>
<p>A component that looks like an input text.</p>
<Code code={`import { Input } from 'lomer-ui'`} language="javascript" />

<p class="pb-1 text-xl font-semibold">Examples</p>
<Screen>
	<div class="grid pt-8 lg:grid-cols-2 lg:pt-0">
		<div class="grid w-full place-content-center gap-2">
			<Input bind:value />
			<p>Value: {value}</p>
		</div>
		<div class="grid items-center">
			<Code
				code={`<InputCheck bind:value>Check me!</InputCheck>` + `\n<p>Value: {value}</p>`}
				language="xml"
			/>
		</div>
	</div>
</Screen>

<p class="mb-1 pt-8 font-semibold">Disabled</p>
<Screen>
	<div class="grid pt-8 lg:grid-cols-2 lg:pt-0">
		<div class="grid w-full place-content-center">
			<Input disabled />
		</div>
		<div class="grid items-center">
			<Code code={`<InputCheck disabled>Check me!</InputCheck>`} language="xml" />
		</div>
	</div>
</Screen>
