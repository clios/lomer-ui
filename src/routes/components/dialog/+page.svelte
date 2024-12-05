<script lang="ts">
	import Code from '$site//code.svelte';
	import Screen from '$lib/screen.svelte';
	import Button from '$lib/button.svelte';
	import { scrollToId } from '$site/helper.ts';
	import PageHeader from '$site//page-header.svelte';
	import Icon from '@iconify/svelte';
	import clsx from 'clsx';
	import Title from '$site//title.svelte';
	import Cli from '$site//cli.svelte';
	import Prop from '$site//prop.svelte';
	import SubTitle from '$site//sub-title.svelte';
	import Field from '$lib/field.svelte';
	import Input from '$lib/input.svelte';
	import Dialog from '$lib/dialog.svelte';

	let isOpen = false;
	let isDefaultDialogOpen = false;
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
	<PageHeader title="Dialog" sub="Components">
		<p>Displays a focused interface for user interaction.</p>
	</PageHeader>

	<Screen class="flex justify-center p-8">
		<!-- DIALOG CONTENT -->
		<div
			class={clsx(
				'relative z-10 w-screen rounded border border-zinc-200 shadow-md transition-all dark:border-zinc-800 dark:shadow-none sm:w-[500px]'
			)}
		>
			<!-- HEADER -->
			<div class="flex items-center justify-between rounded-t bg-white pr-4 pt-4 dark:bg-zinc-950">
				<p class="px-4 text-xl font-semibold">Wait wait wait</p>

				<button
					class={clsx(
						'absolute right-4 top-4 rounded-full',
						'bg-zinc-50/0 text-zinc-950 dark:bg-zinc-950/0 dark:text-zinc-50', // color
						'border border-zinc-50/0 dark:border-zinc-50/0', // color
						'active:outline-2 active:outline-offset-0', // color
						'outline-cyan-500 hover:outline hover:outline-1', // hover
						'focus:outline focus:outline-1 focus:outline-offset-2', // focus
						'focus:outline-cyan-500 focus:ring-offset-1', // focus
						'disabled:focus:outline-none' // focus
					)}
					on:click={() => (isOpen = false)}
				>
					<Icon icon="line-md:close-circle-filled" width={24} height={24} />
				</button>
			</div>
			<!-- BODY -->
			<div class={clsx('overflow-auto rounded-b bg-white px-4 pb-4 dark:bg-zinc-950')}>
				<p>Let me say something. Let me say something!</p>
				<div class="mt-8 flex justify-end gap-4">
					<Button variant="ghost">Throw him anyway</Button>
					<Button>Wait him</Button>
				</div>
			</div>
		</div>
	</Screen>

	<Title id="1">Installation</Title>
	<Cli code={`lomer-ui add dialog`} />
	<Button
		variant="secondary"
		size="fit"
		on:click={() =>
			window.open(`https://github.com/clios/lomer-ui/blob/main/src/lib/dialog.svelte`, '_blank')}
		class="w-min whitespace-nowrap">Component Code <Icon icon="mdi:code" /></Button
	>

	<Title id="2">Usage</Title>
	<p>Bind <Prop>isOpen</Prop> property to reflect dialog's open state.</p>
	<Code
		code={`import Dialog from '$lib/components/ui/dialog.svelte'` +
			`\nlet isOpen = false` +
			`\nconst openDialog = () => (isOpen = true)`}
		language="javascript"
	/>
	<Code
		code={`<Button on:click={openDialog}>Open dialog</Button>` +
			`\n<Dialog title="Title here" bind:isOpen>` +
			`\n\tContent here...` +
			`\n</Dialog>`}
		language="xml"
	/>

	<Title id="3">Examples</Title>
	<SubTitle id="3.1">Default</SubTitle>
	<Screen
		class="flex justify-center rounded-md p-8 shadow dark:border dark:border-dotted dark:border-zinc-500"
	>
		<Button on:click={() => (isDefaultDialogOpen = true)}>Open Dialog</Button>
		<Dialog title="Edit Profile" bind:isOpen={isDefaultDialogOpen}>
			<p class="text-zinc-500">Edit your profile and click 'Save'.</p>
			<div class="my-4 flex flex-col gap-4">
				<Field label="Name">
					<Input />
				</Field>
				<Field label="Email">
					<Input />
				</Field>
			</div>
			<div class="mt-8 flex justify-end gap-4">
				<Button variant="ghost">Cancel</Button>
				<Button>Save</Button>
			</div>
		</Dialog>
	</Screen>
	<Code
		code={`import Dialog from '$lib/components/ui/dialog.svelte'` +
			`\nimport Field from '$lib/components/ui/field.svelte'` +
			`\nimport Input from '$lib/components/ui/input.svelte'` +
			`\nimport Button from '$lib/components/ui/button.svelte'` +
			`\nlet isOpen = false` +
			`\nconst openDialog = () => (isOpen = true)`}
		language="javascript"
	/>
	<Code
		code={`<Dialog title="Edit Profile" bind:isOpen>` +
			`\n\t<p class="text-zinc-500">Edit your profile and click 'Save'.</p>` +
			`\n\t<div class="my-4 flex flex-col gap-4">` +
			`\n\t\t<Field label="Name">` +
			`\n\t\t\t<Input />` +
			`\n\t\t</Field>` +
			`\n\t\t<Field label="Email">` +
			`\n\t\t\t<Input type="email" />` +
			`\n\t\t</Field>` +
			`\n\t</div>` +
			`\n\t<div class="mt-8 flex justify-end gap-4">` +
			`\n\t\t<Button variant="ghost">Cancel</Button>` +
			`\n\t\t<Button>Save</Button>` +
			`\n\t</div>` +
			`\n</Dialog>`}
		language="xml"
	/>
</div>
