<script lang="ts">
	import Form from '$lib/form.svelte';
	import Code from '$site//code.svelte';
	import Screen from '$lib/screen.svelte';
	import Alert from '$lib/alert.svelte';
</script>

<h1 class="font-mono text-3xl font-bold">Form</h1>
<p>A component that looks like a form.</p>
<Code code={`import { Form } from 'lomer-ui'`} language="javascript" />

<Alert class="mb-8 animate-pulse" title="Work in progress"
	>This documentation will be updated soon.</Alert
>

<p class="pb-1 text-xl font-semibold">Examples</p>
<Screen>
	<div class="grid pt-8 lg:grid-cols-3 lg:pt-0">
		<div class="grid w-full place-content-center">
			<Form>content</Form>
		</div>
		<div class="grid items-center lg:col-span-2">
			<Code code={`<Form>content</Form>`} language="xml" />
		</div>
	</div>
</Screen>
