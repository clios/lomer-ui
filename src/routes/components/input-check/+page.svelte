<script lang="ts">
	import InputCheck from '$lib/input-check.svelte';
	import Code from '$lib/code.svelte';
	import Screen from '$lib/screen.svelte';

	let value = false;
</script>

<h1 class="font-mono text-3xl font-bold">Input Check</h1>
<p>A component that looks like an input check.</p>
<Code code={`import { InputCheck } from 'lomer-ui'`} language="javascript" />

<p class="pb-1 text-xl font-semibold">Examples</p>
<Screen>
	<div class="grid pt-8 lg:grid-cols-2 lg:pt-0">
		<div class="grid w-full place-content-center gap-2">
			<InputCheck bind:value>Check me!</InputCheck>
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

<p class="mb-1 pt-8 font-semibold">With Text</p>
<Screen>
	<div class="grid pt-8 lg:grid-cols-2 lg:pt-0">
		<div class="grid w-full place-content-center">
			<InputCheck>
				<p class="font-semibold">I Accept</p>
				<div>You accept our terms without reading.</div>
			</InputCheck>
		</div>
		<div class="grid items-center">
			<Code
				code={`<InputCheck>` +
					`\n\t<p class="font-semibold">I Accept</p>` +
					`\n\t<div>You accept our terms without reading.</div>` +
					`\n</InputCheck>`}
				language="xml"
			/>
		</div>
	</div>
</Screen>

<p class="mb-1 pt-8 font-semibold">Disabled</p>
<Screen>
	<div class="grid pt-8 lg:grid-cols-2 lg:pt-0">
		<div class="grid w-full place-content-center">
			<InputCheck disabled>Check me!</InputCheck>
		</div>
		<div class="grid items-center">
			<Code code={`<InputCheck disabled>Check me!</InputCheck>`} language="xml" />
		</div>
	</div>
</Screen>
