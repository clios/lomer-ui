<script lang="ts">
	import Code from '$lib/code.svelte';
	import Screen from '$lib/screen.svelte';
	import Field from '$lib/field.svelte';
</script>

<h1 class="font-mono text-3xl font-bold">Field</h1>
<p>A component that looks like a field.</p>
<Code code={`import { Field } from 'lomer-ui'`} language="javascript" />

<p class="border-b pb-1 text-xl font-semibold">Example</p>

<Screen>
	<div class="grid pt-8 lg:grid-cols-3 lg:pt-0">
		<div class="grid w-full place-content-center">
			<Field label="Label" issue="Issue" helper="Helper">Content</Field>
		</div>
		<div class="grid items-center lg:col-span-2">
			<Code
				code={`<Field label="Label" helper="Helper" issue="Issue" >Content</Field>`}
				language="xml"
			/>
		</div>
	</div>
</Screen>
