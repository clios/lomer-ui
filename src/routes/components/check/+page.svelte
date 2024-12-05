<script lang="ts">
	import Button from '$lib/button.svelte';
	import Check from '$lib/check.svelte';
	import Cli from '$lib/components/site/cli.svelte';
	import Code from '$lib/components/site/code.svelte';
	import PageHeader from '$lib/components/site/page-header.svelte';
	import Prop from '$lib/components/site/prop.svelte';
	import SubTitle from '$lib/components/site/sub-title.svelte';
	import Title from '$lib/components/site/title.svelte';
	import { scrollToId } from '$lib/helper.ts';
	import Screen from '$lib/screen.svelte';
	import Icon from '@iconify/svelte';

	let value = false;
</script>

<div class="sticky top-4">
	<aside class="absolute right-0 flex w-64 flex-col gap-2 text-sm">
		<p class="mb-1 text-left text-xl font-semibold">On this page</p>
		<button on:click={() => scrollToId('1')} class="text-left font-semibold">Installation</button>
		<button on:click={() => scrollToId('2')} class="text-left font-semibold">Usage</button>
		<button on:click={() => scrollToId('3')} class="text-left font-semibold">Example</button>
		<button on:click={() => scrollToId('3.1')} class="ml-4 text-left">Default</button>
		<button on:click={() => scrollToId('3.2')} class="ml-4 text-left">With info</button>
		<button on:click={() => scrollToId('3.3')} class="ml-4 text-left">Disabled</button>
	</aside>
</div>

<div class="flex flex-col gap-2 pr-80">
	<PageHeader title="Check" sub="Components">
		<p>Toggle options on or off.</p>
	</PageHeader>

	<Screen class="flex justify-center p-8">
		<Check>Click me!</Check>
	</Screen>

	<Title id="1">Installation</Title>
	<Cli code={`lomer-ui add check`} />
	<Button
		variant="secondary"
		size="fit"
		on:click={() =>
			window.open(`https://github.com/clios/lomer-ui/blob/main/src/lib/check.svelte`, '_blank')}
		class="w-min whitespace-nowrap">Component Code <Icon icon="mdi:code" /></Button
	>

	<Title id="2">Usage</Title>
	<p>Bind <Prop>value</Prop> property to reflect check's value.</p>
	<Code
		code={`import Check from '$lib/components/ui/check.svelte'` + `\nlet value = false`}
		language="javascript"
	/>
	<Code code={`<p>Value: {value}</p>` + `\n<Check bind:value>Check me!</Check>`} language="xml" />

	<Title id="3">Examples</Title>
	<SubTitle id="3.1">Default</SubTitle>
	<Screen
		class="flex flex-col items-center gap-4 rounded-md p-8 shadow dark:border dark:border-dotted dark:border-zinc-500"
	>
		<p>Value: {value}</p>
		<Check bind:value>Check me!</Check>
	</Screen>
	<Code code={`<p>Value: {value}</p>` + `\n<Check bind:value>Check me!</Check>`} language="xml" />

	<SubTitle id="3.2">With info</SubTitle>
	<Screen
		class="flex justify-center rounded-md p-8 shadow dark:border dark:border-dotted dark:border-zinc-500"
	>
		<Check>
			<p class="font-semibold">Terms & Conditions</p>
			<p class="text-zinc-500">I Agree even without reading terms and conditions.</p>
		</Check>
	</Screen>
	<Code
		code={`<Check>` +
			`\n\t<p class="font-semibold">Terms & Conditions</p>` +
			`\n\t<p class="text-zinc-500">I Agree even without reading terms and conditions.</p>` +
			`\n</Check>`}
		language="xml"
	/>

	<SubTitle id="3.3">Disabled</SubTitle>
	<Screen
		class="flex justify-center rounded-md p-8 shadow dark:border dark:border-dotted dark:border-zinc-500"
	>
		<Check disabled>Disabled</Check>
	</Screen>
	<Code code={`<Check disabled>Disabled</Check>`} language="xml" />
</div>
