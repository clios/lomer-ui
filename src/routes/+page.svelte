<script>
	import Accordion from '$lib/accordion.svelte';
	import Alert from '$lib/alert.svelte';
	import Button from '$lib/button.svelte';
	import Cli from '$site/cli.svelte';
	import Icon from '@iconify/svelte';
	import PreviewComponent from './preview-component.svelte';
	import { goto } from '$app/navigation';
	import { version } from '../../package.json';
	import CardPicker from '$lib/card-picker.svelte';
	import Checkbox from '$lib/checkbox.svelte';
	import Dialog from '$lib/dialog.svelte';
	import Drawer from '$lib/drawer.svelte';
	import Field from '$lib/field.svelte';
	import Input from '$lib/input.svelte';
	import Link from '$lib/link.svelte';
	import { Radio } from '$lib/index.js';
	import Select from '$lib/select.svelte';
	import Switch from '$lib/switch.svelte';
	import Textarea from '$lib/textarea.svelte';
	import Screen from '$site/screen.svelte';

	let cardValue = $state('');
	let checkboxValue = $state(false);
	let isDialogOpen = $state(false);
	const openDialog = () => (isDialogOpen = true);
	let isDrawerOpen = $state(false);
	const openDrawer = () => (isDrawerOpen = true);
	let radioValue = $state('');
	let selectValue = $state('');
</script>

<div class="p-8">
	<div class="flex justify-between">
		<p class="flex items-center gap-3">
			Svelte <span class="text-sm text-zinc-500"> & </span> Tailwind CSS
		</p>
		<p class="font-mono">v{version}</p>
	</div>

	<div class="my-32">
		<p class="text-center text-6xl">lomer-ui</p>
		<p class="text-center text-xl">Keep It Simply Styled</p>

		<div class="mt-16 flex justify-center gap-4">
			<Button onclick={() => goto('/docs/installation')}>Get Started</Button>
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
			<p class="text-center text-2xl">Choose Your Setup</p>
		</div>
	</div>

	<div class="mb-32 flex flex-col items-center gap-2">
		<p class="text-center text-xl">Build your components with the CLI,</p>
		<div class="w-80">
			<Cli code="npx lomer-ui add [component]" />
		</div>
		<p class="mt-4 text-center text-xl">
			<span class="text-zinc-500">Or</span> use the package to get started.
		</p>
		<div class="w-80">
			<Cli code="npm install lomer-ui" />
		</div>
	</div>

	<div class="flex justify-center">
		<div
			class="mb-8 flex w-[800px] flex-col justify-center border-b border-zinc-500 pb-1"
		>
			<p class="text-center text-2xl">Components</p>
		</div>
	</div>

	<div class="grid grid-cols-3 gap-4">
		<PreviewComponent title="Accordion" href="/components/accordion">
			<div class="w-96">
				<Accordion title="Open Source?">Yes!</Accordion>
				<Accordion title="Open Source?" isLoading>Yes!</Accordion>
				<Accordion title="Open Source?" isDisabled>Yes!</Accordion>
			</div>
		</PreviewComponent>

		<PreviewComponent title="Alert" href="/components/alert">
			<div class="w-96">
				<Alert class="flex gap-2">
					<Icon icon="mdi:terminal-line" width={24} />
					<div>
						<p class="font-semibold">Do it.</p>
						<p>Just do it!</p>
					</div>
				</Alert>
			</div>
		</PreviewComponent>

		<PreviewComponent title="Button" href="/components/button">
			<div class="flex w-96 flex-wrap justify-center gap-4">
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
			<div class="flex w-96 justify-center gap-4">
				<CardPicker bind:value={cardValue} cardValue="card 1">
					<Icon icon="game-icons:spiked-dragon-head" width={50} height={50} />
					<p>Dragon</p>
				</CardPicker>
				<CardPicker bind:value={cardValue} cardValue="card 2">
					<Icon icon="game-icons:snake-tongue" width={50} height={50} />
					<p>Serpent</p>
				</CardPicker>
				<CardPicker cardValue="card 2" isLoading>
					<Icon icon="game-icons:wolf-head" width={50} height={50} />
					<p>Wolf</p>
				</CardPicker>
				<CardPicker isDisabled>
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
				class="w-[400px]"
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
				<Radio bind:value={radioValue} radioValue="enterprise" isDisabled>
					Enterprise
				</Radio>
			</div>
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
