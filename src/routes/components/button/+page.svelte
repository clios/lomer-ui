<script lang="ts">
	import Button from '$lib/button.svelte';
	import Cli from '$site//cli.svelte';
	import Code from '$site//code.svelte';
	import PageHeader from '$site//page-header.svelte';
	import Prop from '$site//prop.svelte';
	import SubTitle from '$site//sub-title.svelte';
	import Title from '$site//title.svelte';
	import Val from '$site//val.svelte';
	import { scrollToId } from '$site/helper.ts';
	import Link from '$lib/link.svelte';
	import Screen from '$site/screen.svelte';
	import Icon from '@iconify/svelte';
</script>

<div class="sticky top-4">
	<aside class="absolute right-0 flex w-64 flex-col gap-2 text-sm">
		<p class="mb-1 text-left text-xl font-semibold">On this page</p>
		<button on:click={() => scrollToId('1')} class="text-left font-semibold"
			>Installation</button
		>
		<button on:click={() => scrollToId('2')} class="text-left font-semibold"
			>Usage</button
		>
		<button on:click={() => scrollToId('3')} class="text-left font-semibold"
			>Examples</button
		>
		<button on:click={() => scrollToId('3.1')} class="ml-4 text-left"
			>Primary</button
		>
		<button on:click={() => scrollToId('3.2')} class="ml-4 text-left"
			>Secondary</button
		>
		<button on:click={() => scrollToId('3.3')} class="ml-4 text-left"
			>Destructive</button
		>
		<button on:click={() => scrollToId('3.4')} class="ml-4 text-left"
			>Ghost</button
		>
		<button on:click={() => scrollToId('3.5')} class="ml-4 text-left"
			>Outline</button
		>
		<button on:click={() => scrollToId('3.6')} class="ml-4 text-left"
			>With Icon</button
		>
		<button on:click={() => scrollToId('3.7')} class="ml-4 text-left"
			>Icon</button
		>
		<button on:click={() => scrollToId('3.8')} class="ml-4 text-left"
			>Sharp edge</button
		>
		<button on:click={() => scrollToId('3.9')} class="ml-4 text-left"
			>Full round edge</button
		>
		<button on:click={() => scrollToId('3.10')} class="ml-4 text-left"
			>Loading</button
		>
		<button on:click={() => scrollToId('3.11')} class="ml-4 text-left"
			>Disabled</button
		>
		<button on:click={() => scrollToId('3.12')} class="ml-4 text-left"
			>Small</button
		>
	</aside>
</div>

<div class="flex flex-col gap-2 pr-80">
	<PageHeader
		title="Button"
		sub="Component"
		info="Click it and make actions happen."
	/>

	<Screen class="flex flex-wrap justify-center gap-4 p-8">
		<Button>Primary</Button>
		<Button variant="secondary">Secondary</Button>
		<Button variant="destructive">Destructive</Button>
		<Button variant="ghost">Ghost</Button>
		<Button variant="outline">Outline</Button>
		<Button>
			<Icon icon="mdi:power" width={24} height={24} /> Power
		</Button>
		<Button size="icon">
			<Icon icon="mdi:power" width={24} height={24} />
		</Button>
		<Button edge="sharp">Sharp</Button>
		<Button edge="circle">Full round</Button>
		<Button isLoading>Loading</Button>
		<Button isDisabled>Disabled</Button>
		<Button size="small">Small</Button>
	</Screen>

	<Title id="1">Installation</Title>
	<Cli code={`npx lomer-ui add button`} />
	<Button
		variant="secondary"
		size="small"
		on:click={() =>
			window.open(
				`https://github.com/clios/lomer-ui/blob/main/src/lib/button.svelte`,
				'_blank'
			)}
		class="w-min whitespace-nowrap"
		>Component Code <Icon icon="mdi:code" /></Button
	>

	<Title id="2">Usage</Title>
	<Code
		code={`import Button from '$lib/components/ui/button.svelte'`}
		language="javascript"
	/>
	<Code code={`<Button>Button</Button>`} language="xml" />

	<Title id="3">Examples</Title>
	<SubTitle id="3.1">Primary</SubTitle>
	<Screen
		class="flex justify-center rounded-md p-8 shadow dark:border dark:border-dotted dark:border-zinc-500"
	>
		<Button>Button</Button>
	</Screen>
	<Code code={`<Button>Button</Button>`} language="xml" />

	<SubTitle id="3.2">Secondary</SubTitle>
	<p>
		Add <Prop>variant</Prop> property with
		<Val>secondary</Val> value.
	</p>
	<Screen
		class="flex justify-center rounded-md p-8 shadow dark:border dark:border-dotted dark:border-zinc-500"
	>
		<Button variant="secondary">Button</Button>
	</Screen>
	<Code code={`<Button variant="secondary">Button</Button>`} language="xml" />

	<SubTitle id="3.3">Destructive</SubTitle>
	<p>
		Add <Prop>variant</Prop> property with
		<Val>destructive</Val> value.
	</p>
	<Screen
		class="flex justify-center rounded-md p-8 shadow dark:border dark:border-dotted dark:border-zinc-500"
	>
		<Button variant="destructive">Button</Button>
	</Screen>
	<Code code={`<Button variant="destructive">Button</Button>`} language="xml" />

	<SubTitle id="3.4">Ghost</SubTitle>
	<p>
		Add <Prop>variant</Prop> property with
		<Val>ghost</Val> value.
	</p>
	<Screen
		class="flex justify-center rounded-md p-8 shadow dark:border dark:border-dotted dark:border-zinc-500"
	>
		<Button variant="ghost">Button</Button>
	</Screen>
	<Code code={`<Button variant="ghost">Button</Button>`} language="xml" />

	<SubTitle id="3.5">Outline</SubTitle>
	<p>
		Add <Prop>variant</Prop> property with
		<Val>outline</Val> value.
	</p>
	<Screen
		class="flex justify-center rounded-md p-8 shadow dark:border dark:border-dotted dark:border-zinc-500"
	>
		<Button variant="outline">Button</Button>
	</Screen>
	<Code code={`<Button variant="outline">Button</Button>`} language="xml" />

	<SubTitle id="3.6">With Icon</SubTitle>
	<p>
		Insert Icon component inside button, use icons from <Link
			class="underline"
			target="_blank"
			href="https://icon-sets.iconify.design/"
			>Iconify
		</Link>
	</p>
	<Screen
		class="flex justify-center rounded-md p-8 shadow dark:border dark:border-dotted dark:border-zinc-500"
	>
		<Button>
			<Icon icon="mdi:power" width={24} height={24} /> Power
		</Button>
	</Screen>
	<Code code={`import Icon from '@iconify/svelte'`} language="javascript" />
	<Code
		code={`<Button>` +
			`\n\t<Icon icon="mdi:power" width={24} height={24} /> Power` +
			`\n</Button>`}
		language="xml"
	/>

	<SubTitle id="3.7">Icon</SubTitle>
	<p>
		Insert Icon component inside button, use icons from <Link
			class="underline"
			target="_blank"
			href="https://icon-sets.iconify.design/"
			>Iconify
		</Link>. Add <Prop>size</Prop> property with <Val>icon</Val> value.
	</p>
	<Screen
		class="flex justify-center rounded-md p-8 shadow dark:border dark:border-dotted dark:border-zinc-500"
	>
		<Button size="icon">
			<Icon icon="mdi:power" width={24} height={24} />
		</Button>
	</Screen>
	<Code code={`import Icon from '@iconify/svelte'`} language="javascript" />
	<Code
		code={`<Button size="icon">` +
			`\n\t<Icon icon="mdi:power" width={24} height={24} />` +
			`\n</Button>`}
		language="xml"
	/>

	<SubTitle id="3.8">Sharp edge</SubTitle>
	<p>
		Add <Prop>edge</Prop> property with
		<Val>sharp</Val> value.
	</p>
	<Screen
		class="flex justify-center rounded-md p-8 shadow dark:border dark:border-dotted dark:border-zinc-500"
	>
		<Button edge="sharp">Button</Button>
	</Screen>
	<Code code={`<Button edge="sharp">Button</Button>`} language="xml" />

	<SubTitle id="3.9">Full round edge</SubTitle>
	<p>
		Add <Prop>edge</Prop> property with
		<Val>circle</Val> value.
	</p>
	<Screen
		class="flex justify-center rounded-md p-8 shadow dark:border dark:border-dotted dark:border-zinc-500"
	>
		<Button edge="circle">Button</Button>
	</Screen>
	<Code code={`<Button edge="circle">Button</Button>`} language="xml" />

	<SubTitle id="3.10">Loading</SubTitle>
	<p>
		Add <Prop>isLoading</Prop> property.
	</p>
	<Screen
		class="flex justify-center rounded-md p-8 shadow dark:border dark:border-dotted dark:border-zinc-500"
	>
		<Button isLoading>Button</Button>
	</Screen>
	<Code code={`<Button isLoading>Button</Button>`} language="xml" />

	<SubTitle id="3.11">Disabled</SubTitle>
	<p>
		Add <Prop>isDisabled</Prop> property.
	</p>
	<Screen
		class="flex justify-center rounded-md p-8 shadow dark:border dark:border-dotted dark:border-zinc-500"
	>
		<Button isDisabled>Button</Button>
	</Screen>
	<Code code={`<Button isDisabled>Button</Button>`} language="xml" />

	<SubTitle id="3.12">Small</SubTitle>
	<p>
		Add <Prop>size</Prop> property with
		<Val>small</Val> value.
	</p>
	<Screen
		class="flex justify-center rounded-md p-8 shadow dark:border dark:border-dotted dark:border-zinc-500"
	>
		<Button size="small">Small</Button>
	</Screen>
	<Code code={`<Button size="small">Small</Button>`} language="xml" />
</div>
