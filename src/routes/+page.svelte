<script>
	import Alert from '$lib/alert.svelte';
	import Button from '$lib/button.svelte';
	import Screen from '$lib/screen.svelte';
	import Icon from '@iconify/svelte';

	import Dialog from '$lib/dialog.svelte';
	import Drawer from '$lib/drawer.svelte';
	import Field from '$lib/field.svelte';
	import InputCheck from '$lib/input-check.svelte';
	import InputRadio from '$lib/input-radio.svelte';
	import InputSelect from '$lib/input-select.svelte';
	import InputText from '$lib/input-text.svelte';
	import Link from '$lib/link.svelte';
	import CardNotifications from './card__notifications.svelte';
	import CardCreateAnAccount from './card__create-an-account.svelte';
	import CardPaymentMethod from './card__payment-method.svelte';

	let isDialogOpen = false;
	let isDrawerOpen = false;
	let value = '';

	function openDialog() {
		isDialogOpen = true;
	}

	function openDrawer() {
		isDrawerOpen = true;
	}
</script>

<Screen class="p-8" lineColor="#71717A10">
	<p class="font-semibold">Beta Version</p>
	<p class="font-mono text-6xl">lo<span class="font-serif">m</span>er-ui</p>
	<p class="text-2xl font-semibold">Install as package or build your component.</p>
	<p class="mt-16 flex items-center text-4xl font-semibold">
		<Icon icon="devicon:svelte" />
		<span>SvelteKit + </span>
		<Icon class="ml-4 mr-2" icon="devicon:tailwindcss" />
		<span>Tailwind CSS</span>
	</p>

	<p class="mb-2 mt-16 text-xl">Examples</p>
	<div class="flex gap-4">
		<CardNotifications />
		<CardCreateAnAccount />
		<CardPaymentMethod />
	</div>
	<!-- <Link href="/components/alert" class="mt-16 text-xl" variant="list-item">Alerts</Link>
	<div
		class="flex flex-wrap items-center gap-4 rounded border border-dotted border-zinc-950 p-4 dark:border-zinc-50"
	>
		<Alert class="max-w-80" title="Notice">Your bill is due tomorrow.</Alert>
		<Alert class="max-w-80" title="Important" variant="destructive">Your bill is due today</Alert>
		<Alert class="max-w-96" title="Notice" isClosable
			>Your bill has been paid today, thank you.</Alert
		>
	</div>

	<p class="mt-8 text-xl">Buttons</p>
	<div
		class="flex flex-wrap items-center gap-4 rounded border border-dotted border-zinc-950 p-4 dark:border-zinc-50"
	>
		<Button class="h-min">Primary</Button>
		<Button class="h-min" variant="secondary">Secondary</Button>
		<Button class="h-min" variant="outline">Outline</Button>
		<Button class="h-min" variant="ghost">Ghost</Button>
		<Button class="h-min" variant="destructive">Destructive</Button>
		<Button class="h-min" size="fit">Button</Button>
		<Button class="h-min">
			<Icon icon="mdi:power" width={24} height={24} /> Shutdown
		</Button>
		<Button class="h-min" size="icon">
			<Icon icon="mdi:power" width={24} height={24} />
		</Button>
		<Button class="h-min" size="icon" edge="circle">
			<Icon icon="mdi:power" width={24} height={24} />
		</Button>
		<Button class="h-min" size="icon" edge="sharp">
			<Icon icon="mdi:power" width={24} height={24} />
		</Button>
		<Button class="h-min" isLoading>Button</Button>
		<Button class="h-min" isDisabled>Disabled</Button>
	</div>

	<div class="my-8 flex flex-wrap items-center gap-4">
		<Button on:click={openDialog}>Open dialog</Button>
		<Dialog title="Let me say something" bind:isOpen={isDialogOpen}>
			<p>Your bill is due tomorrow.</p>
			<div class="mt-4 flex justify-end gap-2">
				<Button variant="outline">Yes</Button>
				<Button>Pay now</Button>
			</div>
		</Dialog>
		<Button class="h-min" on:click={openDrawer}>Open drawer</Button>
		<Drawer title="Let me say something" bind:isOpen={isDrawerOpen}>
			<p class="p-8">Your bill is due tomorrow.</p>
			<div class="flex justify-end gap-4 px-8 pb-4">
				<Button variant="outline">Yes</Button>
				<Button>Pay now</Button>
			</div>
		</Drawer>
		<Field label="Label" helper="Helper" issue="Issue">Content</Field>
		<InputCheck>
			<p class="font-semibold">I Accept</p>
			<div>You accept our terms without reading.</div>
		</InputCheck>
		<div>
			<InputRadio bind:groupValue={value} groupName="clan" value="dragon">Dragon</InputRadio>
			<InputRadio bind:groupValue={value} groupName="clan" value="serpent">Serpent</InputRadio>
			<InputRadio bind:groupValue={value} groupName="clan" value="wolf">Wolf</InputRadio>
			<InputRadio bind:groupValue={value} groupName="clan" value="lotus">Lotus</InputRadio>
		</div>
		<InputSelect class="w-min" value="dragon">
			<option value="dragon">Dragon</option>
			<option value="serpent">Serpent</option>
			<option value="wolf">Wolf</option>
			<option value="lotus">Lotus</option>
		</InputSelect>
		<InputText value="lomer-ui"></InputText>
		<Link href="#">Link</Link>
		<div>
			<Link href="#" variant="list-item">List Item 1</Link>
			<Link href="#" variant="list-item">List Item 2</Link>
			<Link href="#" variant="list-item">List Item 3</Link>
		</div>
	</div> -->
</Screen>

<!-- <p>
	Feel free to grab one and make it your own. Don’t worry, I also "borrow" a few codes from others
	😉.
</p>
<h1 class="mt-4 text-2xl font-semibold">Before you start;</h1>
<p>Not yet for official use but good for messing around.</p>
<p>Open source, opinionated, copy-paste, with minimal docs.</p>
<h1 class="mt-4 text-2xl font-semibold">Do not use if you don't use;</h1>
<p>SvelteKit and Tailwind CSS.</p> -->
