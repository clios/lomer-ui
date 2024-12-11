<script lang="ts">
	import Code from '$site//code.svelte';
	import Screen from '$site/screen.svelte';
	import Drawer from '$lib/drawer.svelte';
	import Button from '$lib/button.svelte';
	import { scrollToId } from '$site/helper.ts';
	import PageHeader from '$site//page-header.svelte';
	import clsx from 'clsx';
	import Icon from '@iconify/svelte';
	import Check from '$lib/check.svelte';
	import Title from '$site//title.svelte';
	import Cli from '$site//cli.svelte';
	import Prop from '$site//prop.svelte';
	import SubTitle from '$site//sub-title.svelte';

	let isOpen = false;
	let isDefaultDrawerOpen = false;
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
			>Example</button
		>
		<button on:click={() => scrollToId('3.1')} class="ml-4 text-left"
			>Default</button
		>
	</aside>
</div>

<div class="flex flex-col gap-2 pr-80">
	<PageHeader title="Drawer" sub="Component">
		<p>Slide-out panel for navigation or content.</p>
	</PageHeader>

	<Screen class="flex justify-end pl-8 ">
		<!-- DIALOG CONTENT -->
		<div
			class={clsx(
				'pointer-events-auto',
				'shadow-md dark:shadow-none',
				'z-100 relative border-l transition-all dark:border-zinc-800',
				'w-full sm:w-[400px]', // responsiveness
				'bg-white/80 dark:bg-zinc-950/50',
				'bg-white/95 backdrop-blur-sm dark:bg-zinc-950/90'
			)}
		>
			<!-- HEADER -->
			<div
				class="flex items-center justify-between bg-white px-4 pr-2 dark:bg-zinc-950 sm:pl-4 sm:pr-4"
			>
				<p
					class="px-4 pt-4 text-2xl font-semibold text-zinc-950 dark:text-zinc-50"
				>
					Notifications
				</p>
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
			<div class="h-[500px] overflow-auto bg-white dark:bg-zinc-950">
				<!-- SLOT -->
				<div class="px-8">
					<p class="mb-4 text-zinc-500">You have 3 unread messages.</p>

					<Check class="rounded border p-4 dark:border-zinc-700">
						<p class="font-semibold">Push Notifications</p>
						<div class="text-zinc-500">Send notifications to device.</div>
					</Check>

					<div class="my-4 flex items-start">
						<Icon
							class="text-cyan-500"
							icon="icon-park-outline:dot"
							height="24"
						/>
						<div>
							<p class="font-semibold">Your call has been confirmed.</p>
							<div class="text-zinc-500">1 hour ago</div>
						</div>
					</div>
					<div class="my-4 flex items-start">
						<Icon
							class="text-cyan-500"
							icon="icon-park-outline:dot"
							height="24"
						/>
						<div>
							<p class="font-semibold">You have a new message!</p>
							<div class="text-zinc-500">1 hour ago</div>
						</div>
					</div>
					<div class="my-4 flex items-start">
						<Icon
							class="text-cyan-500"
							icon="icon-park-outline:dot"
							height="24"
						/>
						<div>
							<p class="font-semibold">Your subscription is expiring soon!</p>
							<div class="text-zinc-500">2 hours ago</div>
						</div>
					</div>

					<Button class="w-full justify-center">
						<Icon icon="material-symbols:check" width={24} height={24} /> Mark all
						as read
					</Button>
				</div>
			</div>
		</div>
	</Screen>

	<Title id="1">Installation</Title>
	<Cli code={`npx lomer-ui add drawer`} />
	<Button
		variant="secondary"
		size="small"
		on:click={() =>
			window.open(
				`https://github.com/clios/lomer-ui/blob/main/src/lib/drawer.svelte`,
				'_blank'
			)}
		class="w-min whitespace-nowrap"
		>Component Code <Icon icon="mdi:code" /></Button
	>

	<Title id="2">Usage</Title>
	<p>Bind <Prop>isOpen</Prop> property to reflect drawer's open state.</p>
	<p>
		Specify width in <Prop>class</Prop> property, by default it will cover the entire
		screen
	</p>
	<Code
		code={`import Drawer from '$lib/components/ui/drawer.svelte'` +
			`\nlet isOpen = false` +
			`\nconst openDrawer = () => (isOpen = true)`}
		language="javascript"
	/>
	<Code
		code={`<Button on:click={openDrawer}>Open drawer</Button>` +
			`\n<Drawer class="w-[400px]" title="Title here" bind:isOpen>` +
			`\n\tContent here...` +
			`\n</Drawer>`}
		language="xml"
	/>

	<Title id="3">Examples</Title>
	<SubTitle id="3.1">Default</SubTitle>
	<Screen
		class="flex justify-center rounded-md p-8 shadow dark:border dark:border-dotted dark:border-zinc-500"
	>
		<Button on:click={() => (isDefaultDrawerOpen = true)}>Open Drawer</Button>
		<Drawer
			class="w-[400px]"
			title="Notifications"
			bind:isOpen={isDefaultDrawerOpen}
		>
			<div class="px-8">
				<p class="mb-4 text-zinc-500">You have 3 unread messages.</p>

				<Check class="rounded border p-4 dark:border-zinc-700">
					<p class="font-semibold">Push Notifications</p>
					<div class="text-zinc-500">Send notifications to device.</div>
				</Check>

				<div class="my-4 flex items-start">
					<Icon
						class="text-cyan-500"
						icon="icon-park-outline:dot"
						height="24"
					/>
					<div>
						<p class="font-semibold">Your call has been confirmed.</p>
						<div class="text-zinc-500">1 hour ago</div>
					</div>
				</div>
				<div class="my-4 flex items-start">
					<Icon
						class="text-cyan-500"
						icon="icon-park-outline:dot"
						height="24"
					/>
					<div>
						<p class="font-semibold">You have a new message!</p>
						<div class="text-zinc-500">1 hour ago</div>
					</div>
				</div>
				<div class="my-4 flex items-start">
					<Icon
						class="text-cyan-500"
						icon="icon-park-outline:dot"
						height="24"
					/>
					<div>
						<p class="font-semibold">Your subscription is expiring soon!</p>
						<div class="text-zinc-500">2 hours ago</div>
					</div>
				</div>

				<Button class="w-full justify-center">
					<Icon icon="material-symbols:check" width={24} height={24} /> Mark all
					as read
				</Button>
			</div>
		</Drawer>
	</Screen>
	<Code
		code={`import Drawer from '$lib/components/ui/drawer.svelte'` +
			`\nimport Check from '$lib/components/ui/check.svelte'` +
			`\nimport Button from '$lib/components/ui/button.svelte'` +
			`\nimport Icon from '@iconify/svelte'` +
			`\nlet isOpen = false` +
			`\nconst openDrawer = () => (isOpen = true)`}
		language="javascript"
	/>
	<Code
		code={`<Button on:click={openDrawer}>Open Drawer</Button>` +
			`\n<Drawer class="w-[400px]" title="Notifications" bind:isOpen>` +
			`\n\t<div class="px-8">` +
			`\n\t\t<p class="mb-4 text-zinc-500">You have 3 unread messages.</p>` +
			`\n\t\t<Check class="rounded border p-4 dark:border-zinc-700">` +
			`\n\t\t\t<p class="font-semibold">Push Notifications</p>` +
			`\n\t\t\t<div class="text-zinc-500">Send notifications to device.</div>` +
			`\n\t\t</Check>` +
			`\n\t\t<div class="my-4 flex items-start">` +
			`\n\t\t\t<Icon class="text-cyan-500" icon="icon-park-outline:dot" height="24" />` +
			`\n\t\t\t<div>` +
			`\n\t\t\t\t<p class="font-semibold">Your call has been confirmed.</p>` +
			`\n\t\t\t\t<div class="text-zinc-500">1 hour ago</div>` +
			`\n\t\t\t</div>` +
			`\n\t\t</div>` +
			`\n\t\t<div class="my-4 flex items-start">` +
			`\n\t\t\t<Icon class="text-cyan-500" icon="icon-park-outline:dot" height="24" />` +
			`\n\t\t\t<div>` +
			`\n\t\t\t\t<p class="font-semibold">You have a new message!</p>` +
			`\n\t\t\t\t<div class="text-zinc-500">1 hour ago</div>` +
			`\n\t\t\t</div>` +
			`\n\t\t</div>` +
			`\n\t\t<div class="my-4 flex items-start">` +
			`\n\t\t\t<Icon class="text-cyan-500" icon="icon-park-outline:dot" height="24" />` +
			`\n\t\t\t<div>` +
			`\n\t\t\t\t<p class="font-semibold">Your subscription is expiring soon!</p>` +
			`\n\t\t\t\t<div class="text-zinc-500">2 hours ago</div>` +
			`\n\t\t\t</div>` +
			`\n\t\t</div>` +
			`\n\t\t<Button class="w-full justify-center">` +
			`\n\t\t\t<Icon icon="material-symbols:check" width={24} height={24} /> Mark all as read` +
			`\n\t\t</Button>` +
			`\n\t</div>` +
			`\n</Drawer>`}
		language="xml"
	/>
</div>
