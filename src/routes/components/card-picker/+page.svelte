<script lang="ts">
	import CardPicker from '$lib/card-picker.svelte';
	import { scrollToId } from '$site/helper.ts';
	import PageHeader from '$site/page-header.svelte';
	import Screen from '$site/screen.svelte';
	import Icon from '@iconify/svelte';
	import { Button } from '$lib/index.ts';
	import Cli from '$site/cli.svelte';
	import Code from '$site/code.svelte';
	import Title from '$site/title.svelte';
	import SubTitle from '$site/sub-title.svelte';
	import Prop from '$site/prop.svelte';

	let value = '';
	let defaultValue = '';
	let previewValue = '';
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
			>Default</button
		>
		<button on:click={() => scrollToId('3.2')} class="ml-4 text-left"
			>Customize</button
		>
	</aside>
</div>

<div class="flex flex-col gap-2 pr-80">
	<PageHeader title="Card Picker" sub="Component">
		<p>Select items with a stylish card interface.</p>
	</PageHeader>

	<Screen class="p-8 text-center">
		<p class="mb-4">Choose your clan</p>
		<div class="flex w-full justify-center gap-8">
			<CardPicker
				class="bg-white dark:bg-zinc-950"
				bind:value={previewValue}
				name="preview-clan-picker"
				radioValue="dragon"
			>
				<Icon icon="game-icons:spiked-dragon-head" width={100} height={100} />
				<p>Dragon</p>
			</CardPicker>
			<CardPicker
				class="bg-white dark:bg-zinc-950"
				bind:value={previewValue}
				name="preview-clan-picker"
				radioValue="serpent"
			>
				<Icon icon="game-icons:snake-tongue" width={100} height={100} />
				<p>Serpent</p>
			</CardPicker>
			<CardPicker
				class="bg-white dark:bg-zinc-950"
				bind:value={previewValue}
				name="preview-clan-picker"
				radioValue="wolf"
			>
				<Icon icon="game-icons:wolf-head" width={100} height={100} />
				<p>Wolf</p>
			</CardPicker>
			<CardPicker
				class="bg-white dark:bg-zinc-950"
				bind:value={previewValue}
				name="preview-clan-picker"
				radioValue="lotus"
			>
				<Icon icon="game-icons:lotus" width={100} height={100} />
				<p>Lotus</p>
			</CardPicker>
		</div>
	</Screen>

	<Title id="1">Installation</Title>
	<Cli code={`npx lomer-ui add card-picker`} />
	<Button
		variant="secondary"
		size="small"
		on:click={() =>
			window.open(
				`https://github.com/clios/lomer-ui/blob/main/src/lib/card-picker.svelte`,
				'_blank'
			)}
		class="w-min whitespace-nowrap"
		>Component Code <Icon icon="mdi:code" /></Button
	>

	<Title id="2">Usage</Title>
	<Code
		code={`import CardPicker from '$lib/components/ui/card-picker.svelte'` +
			`\nlet value = ''`}
		language="javascript"
	/>
	<Code
		code={`<CardPicker bind:value name="group-name-here" radioValue="value-here">` +
			`\n\tContent here...` +
			`\n</CardPicker>`}
		language="xml"
	/>

	<Title id="3">Examples</Title>
	<SubTitle id="3.1">Default</SubTitle>
	<Screen
		class="rounded-md p-8 shadow dark:border dark:border-dotted dark:border-zinc-500"
	>
		<div class="flex w-full justify-center gap-8">
			<CardPicker
				bind:value={defaultValue}
				name="action-picker"
				radioValue="medical-aid"
			>
				Content here...
			</CardPicker>
			<CardPicker
				bind:value={defaultValue}
				name="action-picker"
				radioValue="fire-rescue"
			>
				Content here...
			</CardPicker>
			<CardPicker
				bind:value={defaultValue}
				name="action-picker"
				radioValue="police-assistance"
			>
				Content here...
			</CardPicker>
		</div>
	</Screen>
	<Code
		code={`<div class="flex w-full justify-center gap-8">` +
			`\n\t<CardPicker bind:value name="group-name" radioValue="specific-value">` +
			`\n\t\tContent here...` +
			`\n\t</CardPicker>` +
			`\n\t<CardPicker bind:value name="group-name" radioValue="specific-value">` +
			`\n\t\tContent here...` +
			`\n\t</CardPicker>` +
			`\n\t<CardPicker bind:value name="group-name" radioValue="specific-value">` +
			`\n\t\tContent here...` +
			`\n\t</CardPicker>` +
			`\n</div>`}
		language="xml"
	/>

	<SubTitle id="3.2">Customize</SubTitle>
	<p>Just create a parent element and set background, border, shadow, etc..</p>
	<p>You can also use <Prop>class</Prop> property to fine tune your design.</p>
	<Screen
		class="rounded-md p-8 shadow dark:border dark:border-dotted dark:border-zinc-500"
	>
		<div class="flex w-full justify-center gap-8">
			<CardPicker
				class="bg-white dark:bg-zinc-950"
				bind:value
				name="clan-picker"
				radioValue="dragon"
			>
				<Icon icon="game-icons:spiked-dragon-head" width={100} height={100} />
				<p>Dragon</p>
			</CardPicker>
			<CardPicker
				class="bg-white dark:bg-zinc-950"
				bind:value
				name="clan-picker"
				radioValue="serpent"
			>
				<Icon icon="game-icons:snake-tongue" width={100} height={100} />
				<p>Serpent</p>
			</CardPicker>
			<CardPicker
				class="bg-white dark:bg-zinc-950"
				bind:value
				name="clan-picker"
				radioValue="wolf"
			>
				<Icon icon="game-icons:wolf-head" width={100} height={100} />
				<p>Wolf</p>
			</CardPicker>
			<CardPicker
				class="bg-white dark:bg-zinc-950"
				bind:value
				name="clan-picker"
				radioValue="lotus"
			>
				<Icon icon="game-icons:lotus" width={100} height={100} />
				<p>Lotus</p>
			</CardPicker>
		</div>
	</Screen>
	<Code
		code={`<div class="flex w-full justify-center gap-8">` +
			`\n\t<CardPicker` +
			`\n\t\tclass="bg-white dark:bg-zinc-950"` +
			`\n\t\tbind:value` +
			`\n\t\tname="clan-picker"` +
			`\n\t\tradioValue="dragon"` +
			`\n\t>` +
			`\n\t\t<Icon icon="game-icons:spiked-dragon-head" width={100} height={100} />` +
			`\n\t\t<p>Dragon</p>` +
			`\n\t</CardPicker>` +
			`\n\t<CardPicker` +
			`\n\t\tclass="bg-white dark:bg-zinc-950"` +
			`\n\t\tbind:value` +
			`\n\t\tname="clan-picker"` +
			`\n\t\tradioValue="serpent"` +
			`\n\t>` +
			`\n\t\t<Icon icon="game-icons:snake-tongue" width={100} height={100} />` +
			`\n\t\t<p>Serpent</p>` +
			`\n\t</CardPicker>` +
			`\n\t<CardPicker class="bg-white dark:bg-zinc-950" bind:value name="clan-picker" radioValue="wolf">` +
			`\n\t\t<Icon icon="game-icons:wolf-head" width={100} height={100} />` +
			`\n\t\t<p>Wolf</p>` +
			`\n\t</CardPicker>` +
			`\n\t<CardPicker` +
			`\n\t\tclass="bg-white dark:bg-zinc-950"` +
			`\n\t\tbind:value` +
			`\n\t\tname="clan-picker"` +
			`\n\t\tradioValue="lotus"` +
			`\n\t>` +
			`\n\t\t<Icon icon="game-icons:lotus" width={100} height={100} />` +
			`\n\t\t<p>Lotus</p>` +
			`\n\t</CardPicker>` +
			`\n</div>`}
		language="xml"
	/>
</div>
