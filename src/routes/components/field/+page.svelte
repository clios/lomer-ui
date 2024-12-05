<script lang="ts">
	import Code from '$lib/components/site/code.svelte';
	import Screen from '$lib/screen.svelte';
	import Field from '$lib/field.svelte';
	import { scrollToId } from '$lib/helper.ts';
	import PageHeader from '$lib/components/site/page-header.svelte';
	import Input from '$lib/input.svelte';
	import Title from '$lib/components/site/title.svelte';
	import Cli from '$lib/components/site/cli.svelte';
	import Button from '$lib/button.svelte';
	import Icon from '@iconify/svelte';
	import Prop from '$lib/components/site/prop.svelte';
	import SubTitle from '$lib/components/site/sub-title.svelte';

	let value = '';
</script>

<div class="sticky top-4">
	<aside class="absolute right-0 flex w-64 flex-col gap-2 text-sm">
		<p class="mb-1 text-left text-xl font-semibold">On this page</p>
		<button on:click={() => scrollToId('1')} class="text-left font-semibold">Installation</button>
		<button on:click={() => scrollToId('2')} class="text-left font-semibold">Usage</button>
		<button on:click={() => scrollToId('3')} class="text-left font-semibold">Example</button>
		<button on:click={() => scrollToId('3.1')} class="ml-4 text-left">Default</button>
	</aside>
</div>

<div class="flex flex-col gap-2 pr-80">
	<PageHeader title="Field" sub="Components">
		<p>Displays and/or collects data seamlessly.</p>
	</PageHeader>

	<Screen class="flex justify-center p-8">
		<Field label="Label here" helper="Helper here" issue="Issue here">
			<Input bind:value placeholder="Type something here..." />
		</Field>
	</Screen>

	<Title id="1">Installation</Title>
	<Cli code={`lomer-ui add field`} />
	<Button
		variant="secondary"
		size="fit"
		on:click={() =>
			window.open(`https://github.com/clios/lomer-ui/blob/main/src/lib/field.svelte`, '_blank')}
		class="w-min whitespace-nowrap">Component Code <Icon icon="mdi:code" /></Button
	>

	<Title id="2">Usage</Title>
	<p>Bind <Prop>value</Prop> property to reflect field's value.</p>
	<Code code={`import Field from '$lib/components/ui/field.svelte'`} language="javascript" />
	<Code
		code={`<Field label="Label here" helper="Helper here" issue="Issue here">` +
			`\n\tContent here...` +
			`\n</Field>`}
		language="xml"
	/>

	<Title id="3">Examples</Title>
	<SubTitle id="3.1">Default</SubTitle>
	<Screen
		class="flex flex-col items-center gap-4 rounded-md p-8 shadow dark:border dark:border-dotted dark:border-zinc-500"
	>
		<Field label="Label here" helper="Helper here" issue="Issue here">
			<Input bind:value placeholder="Type something here..." />
		</Field>
	</Screen>
	<Code
		code={`import Field from '$lib/components/ui/field.svelte'` +
			`\nimport Input from '$lib/components/ui/input.svelte'`}
		language="javascript"
	/>
	<Code
		code={`<Field label="Label here" helper="Helper here" issue="Issue here">` +
			`\n\t<Input  placeholder="Type something here..." />` +
			`\n</Field>`}
		language="xml"
	/>
</div>
