<script lang="ts">
	import Code from '$site//code.svelte';
	import Screen from '$lib/screen.svelte';
	import Alert from '$lib/alert.svelte';
	import { scrollToId } from '$site/helper.ts';
	import Cli from '$site//cli.svelte';
	import PageHeader from '$site/page-header.svelte';
	import Title from '$site//title.svelte';
	import SubTitle from '$site//sub-title.svelte';
	import Link from '$lib/link.svelte';
	import Button from '$lib/button.svelte';
	import Icon from '@iconify/svelte';
	import Prop from '$site//prop.svelte';
	import Val from '$site//val.svelte';

	let isClosableOpen = true;
	let isOpen = true;
</script>

<div class="sticky top-4">
	<aside class="absolute right-0 flex w-64 flex-col gap-2 text-sm">
		<p class="mb-1 text-left text-xl font-semibold">On this page</p>
		<button on:click={() => scrollToId('1')} class="text-left font-semibold">Installation</button>
		<button on:click={() => scrollToId('2')} class="text-left font-semibold">Usage</button>
		<button on:click={() => scrollToId('3')} class="text-left font-semibold">Examples</button>
		<button on:click={() => scrollToId('3.1')} class="ml-4 text-left">Default</button>
		<button on:click={() => scrollToId('3.2')} class="ml-4 text-left">Custom icon</button>
		<button on:click={() => scrollToId('3.3')} class="ml-4 text-left">Destructive</button>
		<button on:click={() => scrollToId('3.4')} class="ml-4 text-left">Open state</button>
		<button on:click={() => scrollToId('3.5')} class="ml-4 text-left">Closable</button>
	</aside>
</div>

<div class="flex flex-col gap-2 pr-80">
	<PageHeader title="Alert" sub="Components">
		<p>Grabs attention and delivers important information.</p>
	</PageHeader>

	<Screen class="p-8">
		<Alert title="Notice">Your bill is due tomorrow.</Alert>
	</Screen>

	<Title id="1">Installation</Title>
	<Cli code={`lomer-ui add alert`} />
	<Button
		variant="secondary"
		size="fit"
		on:click={() =>
			window.open(`https://github.com/clios/lomer-ui/blob/main/src/lib/alert.svelte`, '_blank')}
		class="w-min whitespace-nowrap">Component Code <Icon icon="mdi:code" /></Button
	>

	<Title id="2">Usage</Title>
	<Code code={`import Alert from '$lib/components/ui/alert.svelte'`} language="javascript" />
	<Code code={`<Alert title="Notice">Your bill is due tomorrow.</Alert>`} language="xml" />

	<Title id="3">Examples</Title>
	<SubTitle id="3.1">Default</SubTitle>
	<Screen class="rounded-md p-8 shadow dark:border dark:border-dotted dark:border-zinc-500">
		<Alert title="Notice">Your bill is due tomorrow.</Alert>
	</Screen>
	<Code code={`<Alert title="Notice">Your bill is due tomorrow.</Alert>`} language="xml" />

	<SubTitle id="3.2" class="mt-4">Custom icon</SubTitle>
	<p>
		Add <Prop>icon</Prop> property, use icons from <Link
			class="underline"
			target="_blank"
			href="https://icon-sets.iconify.design/"
			>Iconify
		</Link>
	</p>
	<Screen class="rounded-md p-8 shadow dark:border dark:border-dotted dark:border-zinc-500">
		<Alert title="Notice" icon="mdi:error-outline">Your bill is due tomorrow.</Alert>
	</Screen>
	<Code
		code={`<Alert title="Notice" icon="mdi:error-outline">Your bill is due tomorrow.</Alert>`}
		language="xml"
	/>

	<SubTitle id="3.3" class="mt-4">Destructive</SubTitle>
	<p>
		Add <Prop>variant</Prop> property with
		<Val>destructive</Val> value.
	</p>
	<Screen class="rounded-md p-8 shadow dark:border dark:border-dotted dark:border-zinc-500">
		<Alert title="Notice" variant="destructive">Your bill is due tomorrow.</Alert>
	</Screen>
	<Code
		code={`<Alert title="Notice" variant="destructive">` +
			`\n\tYour bill is due tomorrow.` +
			`\n</Alert>`}
		language="xml"
	/>

	<SubTitle id="3.4" class="mt-4">Open state</SubTitle>
	<p>
		Bind <Prop>isOpen</Prop> property to reflect alert's open state.
	</p>
	<Screen class="rounded-md p-8 shadow dark:border dark:border-dotted dark:border-zinc-500">
		<div class="mb-4 flex items-center gap-4">
			<Button on:click={() => (isOpen = !isOpen)}>Toggle alert</Button>
			<p>isOpen = {isOpen}</p>
		</div>
		<Alert bind:isOpen title="Notice">Your bill is due tomorrow.</Alert>
	</Screen>
	<Code code={`let isOpen = true`} language="javascript" />
	<Code
		code={`<div class="mb-4 flex items-center gap-4">` +
			`\n\t<Button on:click={() => (isOpen = !isOpen)}>Toggle alert</Button>` +
			`\n\t<p>isOpen = {isOpen}</p>` +
			`\n</div>` +
			`\n<Alert bind:isOpen title="Notice">Your bill is due tomorrow.</Alert>`}
		language="xml"
	/>

	<SubTitle id="3.5" class="mt-4">Closable</SubTitle>
	<p>
		Add <Prop>isClosable</Prop> property.
	</p>
	<Screen class="rounded-md p-8 shadow dark:border dark:border-dotted dark:border-zinc-500">
		{#if isClosableOpen}
			<Alert bind:isOpen={isClosableOpen} title="Notice" isClosable
				>Your bill is due tomorrow.</Alert
			>
		{:else}
			<Button on:click={() => (isClosableOpen = true)}>Open alert</Button>
		{/if}
	</Screen>
	<Code
		code={`<Alert title="Notice" isClosable>` + `\n\tYour bill is due tomorrow.` + `\n</Alert>`}
		language="xml"
	/>
</div>
