<script lang="ts">
	import Radio from '$lib/radio.svelte';
	import Code from '$site//code.svelte';
	import Screen from '$site/screen.svelte';

	let groupValue = $state('dragon');
</script>

<h1 class="font-mono text-3xl font-bold">Input Radio</h1>
<p>A component that looks like an input radio.</p>
<Code code={`import { Radio } from 'lomer-ui'`} language="javascript" />

<p class="pb-1 text-xl font-semibold">Examples</p>
<Screen>
	<div class="mt-8 grid w-full place-content-center gap-2">
		<Radio bind:groupValue name="clan" radioValue="dragon" id="dragon"
			>Dragon</Radio
		>
		<Radio bind:groupValue name="clan" radioValue="serpent" id="serpent"
			>Serpent</Radio
		>
		<Radio bind:groupValue name="clan" radioValue="wolf" id="wolf">Wolf</Radio>
		<Radio bind:groupValue name="clan" radioValue="lotus" id="lotus"
			>Lotus</Radio
		>
		<p>Value: {groupValue}</p>
	</div>
</Screen>
