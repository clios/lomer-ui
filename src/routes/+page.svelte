<script>
	import Accordion from '$lib/accordion.svelte';
	import Alert from '$lib/alert.svelte';
	import Button from '$lib/button.svelte';
	import CardPicker from '$lib/card-picker.svelte';
	import Checkbox from '$lib/checkbox.svelte';
	import Cli from '$site/cli.svelte';
	import Code from '$site/code.svelte';
	import Dialog from '$lib/dialog.svelte';
	import Drawer from '$lib/drawer.svelte';
	import Field from '$lib/field.svelte';
	import Icon from '@iconify/svelte';
	import Input from '$lib/input.svelte';
	import Link from '$lib/link.svelte';
	import PreviewComponent from './preview-component.svelte';
	import Radio from '$lib/radio.svelte';
	import Select from '$lib/select.svelte';
	import Switch from '$lib/switch.svelte';
	import Textarea from '$lib/textarea.svelte';
	import { goto } from '$app/navigation';
	import ScrollArea from '$lib/scroll-area.svelte';

	let cardValue = $state('');
	let checkboxValue = $state(false);
	let isDialogOpen = $state(false);
	const openDialog = () => (isDialogOpen = true);
	let isDrawerOpen = $state(false);
	const openDrawer = () => (isDrawerOpen = true);
	let radioValue = $state('');
	let selectValue = $state('');
</script>

<svelte:head>
	<title>lomer-ui</title>
</svelte:head>

<div class="lg:p-4">
	<div class="flex flex-wrap justify-between gap-x-8">
		<p class="flex items-end">
			Svelte<span class="mb-[1px] pl-1 text-sm text-cyan-700 dark:text-cyan-500"
				>v5</span
			>
			<span class="px-2 text-sm text-zinc-500"> & </span> Tailwind CSS
			<span class="mb-[1px] pl-1 text-sm text-cyan-700 dark:text-cyan-500"
				>v4</span
			>
		</p>
		<Link
			class="hidden items-center no-underline sm:flex"
			href="https://github.com/sponsors/clios"
			target="_blank"
			>Sponsor <Icon
				class="inline text-cyan-700 dark:text-cyan-500"
				icon="mdi:heart-outline"
				width={20}
			/></Link
		>
	</div>

	<div class="my-16 text-zinc-500 dark:text-zinc-400">
		<p class="mt-16 text-center text-xl">
			<span class="font-semibold text-zinc-950 dark:text-white">Minimalist</span
			> UI library for Svelte powered by Tailwind CSS.
		</p>
		<p class="mt-16 text-center text-6xl text-zinc-950 dark:text-white">
			lomer-ui
		</p>
		<p class="text-center text-2xl text-zinc-500 dark:text-zinc-400">
			Keep It Simply Styled
		</p>
		<p class="mt-16 text-center text-xl">
			A dead-simple <span class="font-semibold text-zinc-950 dark:text-white"
				>CLI tool</span
			>
			to
			<span class="font-semibold text-zinc-950 dark:text-white">instant</span>ly
			kickstart your
			<span class="font-semibold text-zinc-950 dark:text-white">components</span
			>.
		</p>
		<p class="text-center text-xl">
			No extra UI libraries required—just clean, standalone code <span
				class="font-semibold text-zinc-950 dark:text-white">ready to use</span
			>.
		</p>

		<div class="mt-16 flex justify-center gap-4">
			<Button onclick={() => goto('/docs/introduction')}>Get Started</Button>
			<Button
				variant="secondary"
				onclick={() =>
					window.open('https://github.com/clios/lomer-ui', '_blank')}
			>
				<Icon icon="mdi:github" width={24} height={24} />
				GitHub</Button
			>
		</div>
	</div>

	<div class="mt-16 flex justify-center">
		<div
			class="mb-8 flex w-[800px] flex-col justify-center border-b border-zinc-500 pb-1"
		>
			<p class="text-center text-2xl text-zinc-500 dark:text-zinc-400">
				Minimal Setup
			</p>
		</div>
	</div>

	<div
		class="mb-32 flex flex-col items-center gap-2 text-zinc-500 dark:text-zinc-400"
	>
		<p class="text-center text-xl">
			Make sure you enabled <span
				class="font-semibold text-zinc-950 dark:text-white">Dark Mode</span
			> to your TailwindCSS.
		</p>
		<ScrollArea
			class="w-[calc(100vw-2rem)] overflow-x-auto rounded sm:w-[420px]"
		>
			<div class="w-full">
				<Code
					code={`@variant dark (&:where(.dark, .dark *));`}
					language="less"
				/>
			</div>
		</ScrollArea>
		<p class="mt-8 text-center text-xl">That's it!</p>
		<p class="text-center text-xl">
			<span class="font-semibold text-zinc-950 dark:text-white">Start</span>
			building your own components
			<span class="font-semibold text-zinc-950 dark:text-white">with CLI</span>.
		</p>
		<div class="w-56">
			<Cli code="npx lomer-ui add" />
		</div>
	</div>

	<div
		class="sm:flex sm:flex-col sm:items-center lg:grid lg:grid-cols-2 lg:gap-4 2xl:grid-cols-3"
	>
		<PreviewComponent title="Accordion" href="/components/accordion">
			<div class="w-full">
				<Accordion title="Open Source?">Yes!</Accordion>
				<Accordion title="Open Source?" isLoading>Yes!</Accordion>
				<Accordion title="Open Source?" isDisabled>Yes!</Accordion>
			</div>
		</PreviewComponent>

		<PreviewComponent title="Alert" href="/components/alert">
			<div class="w-full">
				<Alert title="Try it." class="flex gap-2">
					<p>Just try it!</p>
				</Alert>
			</div>
		</PreviewComponent>

		<PreviewComponent title="Button" href="/components/button">
			<div class="flex flex-wrap justify-center gap-4">
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
			</div>
		</PreviewComponent>

		<PreviewComponent title="Card Picker" href="/components/card-picker">
			<div class="flex flex-wrap justify-center gap-4">
				<CardPicker bind:value={cardValue} cardValue="card 1">
					<Icon icon="game-icons:spiked-dragon-head" width={50} height={50} />
					<p>Dragon</p>
				</CardPicker>
				<CardPicker bind:value={cardValue} cardValue="card 2">
					<Icon icon="game-icons:snake-tongue" width={50} height={50} />
					<p>Serpent</p>
				</CardPicker>
				<CardPicker cardValue="card 3" isLoading>
					<Icon icon="game-icons:wolf-head" width={50} height={50} />
					<p>Wolf</p>
				</CardPicker>
				<CardPicker cardValue="card 4" isDisabled>
					<Icon icon="game-icons:lotus" width={50} height={50} />
					<p>Lotus</p>
				</CardPicker>
			</div>
		</PreviewComponent>

		<PreviewComponent title="Checkbox" href="/components/checkbox">
			<div class="flex flex-col gap-4">
				<Checkbox bind:value={checkboxValue}>Hit me!</Checkbox>
				<Checkbox isLoading>Hit me!</Checkbox>
				<Checkbox isDisabled>Hit me!</Checkbox>
				<Checkbox value={true} isDisabled>Hit me!</Checkbox>
			</div>
		</PreviewComponent>

		<PreviewComponent title="Dialog" href="/components/dialog">
			<Button onclick={openDialog}>Open dialog</Button>
			<Dialog title="How is it?" bind:isOpen={isDialogOpen}>
				<p class="mt-2">Don't hesitate to reach me out.</p>
				<p class="italic">clios1208@gmail.com</p>
			</Dialog>
		</PreviewComponent>

		<PreviewComponent title="Drawer" href="/components/drawer">
			<Button onclick={openDrawer}>Open drawer</Button>
			<Drawer
				class="w-screen sm:w-[400px]"
				title="How does it feel?"
				bind:isOpen={isDrawerOpen}
			>
				<p class="mt-2">Feel free to reach me out.</p>
				<p class="italic">clios1208@gmail.com</p>
			</Drawer>
		</PreviewComponent>

		<PreviewComponent title="Field" href="/components/field">
			<Field label="Username" issue="Already in used." required>
				<Input value="NoobMaster69" />
			</Field>
		</PreviewComponent>

		<PreviewComponent title="Input" href="/components/input">
			<div class="flex flex-col gap-4">
				<Input value="NoobMaster69" />
				<Input value="NoobMaster69" isLoading />
				<Input value="NoobMaster69" isDisabled />
			</div>
		</PreviewComponent>

		<PreviewComponent title="Link" href="/components/link">
			<div class="flex flex-col gap-4">
				<Link href="#">lomer-ui</Link>
				<Link href="#" class="no-underline" caret>lomer-ui</Link>
				<Link href="#" class="no-underline" isLoading>lomer-ui</Link>
			</div>
		</PreviewComponent>

		<PreviewComponent title="Radio" href="/components/radio">
			<div class="flex flex-col">
				<Radio bind:value={radioValue} radioValue="free">Free</Radio>
				<Radio bind:value={radioValue} radioValue="pro">Pro</Radio>
				<Radio bind:value={radioValue} radioValue="premium" isLoading>
					Premium
				</Radio>
				<Radio value={'enterprise'} radioValue="enterprise" isDisabled>
					Enterprise
				</Radio>
			</div>
		</PreviewComponent>

		<PreviewComponent title="Scroll Area" href="/components/scroll-area">
			<ScrollArea class="h-40 w-52 rounded border dark:border-zinc-700">
				<p class="my-2 pl-4">Start</p>
				{#each Array(20) as _, i}
					<p class="my-2 pl-4">Line {i}</p>
				{/each}
				<p class="my-2 pl-4">End</p>
			</ScrollArea>
		</PreviewComponent>

		<PreviewComponent title="Select" href="/components/select">
			<div class="flex flex-col gap-2">
				<div class="flex flex-col items-center gap-4">
					<Select bind:value={selectValue} placeholder="Select a game">
						<optgroup label="PC">
							<option value="dota 2">Dota 2</option>
							<option value="manor lords">Manor Lords</option>
						</optgroup>
						<optgroup label="Mobile">
							<option value="world of tanks blitz">World of Tanks Blitz</option>
							<option value="wuthering waves">Wuthering Waves</option>
						</optgroup>
					</Select>
					<Select value="dota 2" isLoading>
						<option value="dota 2">Dota 2</option>
					</Select>
					<Select value="dota 2" isDisabled>
						<option value="dota 2">Dota 2</option>
					</Select>
				</div>
			</div>
		</PreviewComponent>

		<PreviewComponent title="Switch" href="/components/switch">
			<div class="flex flex-col gap-2">
				<Switch>Free</Switch>
				<Switch isLoading>Pro</Switch>
				<Switch value={true} isLoading>Pro</Switch>
				<Switch isDisabled>Premium</Switch>
				<Switch value={true} isDisabled>Premium</Switch>
			</div>
		</PreviewComponent>

		<PreviewComponent title="Textarea" href="/components/textarea">
			<div class="flex flex-col gap-2">
				<Textarea value="lomer-ui"></Textarea>
				<Textarea value="lomer-ui" isLoading></Textarea>
				<Textarea value="lomer-ui" isDisabled></Textarea>
			</div>
		</PreviewComponent>
	</div>
</div>
