<script>
	import Accordion from '$lib/accordion.svelte';
	import Button from '$lib/button.svelte';
	import Checkbox from '$lib/checkbox.svelte';
	import Cli from '$site/cli.svelte';
	import Dialog from '$lib/dialog.svelte';
	import Dropdown from '$lib/dropdown.svelte';
	import Icon from '@iconify/svelte';
	import Input from '$lib/input.svelte';
	import Link from '$lib/link.svelte';
	import Radio from '$lib/radio.svelte';
	import Screen from '$site/screen.svelte';
	import Switch from '$lib/switch.svelte';
	import Syntax from '$site/syntax.svelte';
	import { goto } from '$app/navigation';

	let radioVal = $state('');
	let isOpenDialog = $state(false);
	let isOpenDropdown = $state(false);
</script>

<svelte:head>
	<title>lomer-ui</title>
</svelte:head>

<div class="lg:p-4">
	<div class="flex flex-wrap justify-between gap-x-8">
		<p class="flex items-end">
			Svelte<span class="text-primary mb-[1px] pl-1 text-sm">v5</span>
			<span class="text-muted px-2 text-sm"> & </span> Tailwind CSS
			<span class="text-primary mb-[1px] pl-1 text-sm">v4</span>
		</p>
		<Link
			class="hidden items-center no-underline sm:flex"
			href="https://github.com/sponsors/clios"
			target="_blank"
			>Sponsor <Icon
				class="text-primary inline"
				icon="mdi:heart-outline"
				width={20}
			/></Link
		>
	</div>

	<div class="text-muted my-16">
		<p class="mt-16 text-center sm:text-xl">
			<span class="text-fg font-semibold">Minimalist</span> UI library for Svelte
			powered by Tailwind CSS.
		</p>
		<Screen class="mt-8 grid place-content-center pb-8">
			<p class="text-fg text-center text-6xl">lomer-ui</p>
			<p class="text-primary text-center text-2xl">Keep It Simply Styled</p>
			<div class="my-8 flex justify-center gap-4">
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
		</Screen>
		<p class="mt-8 text-center sm:text-xl">
			A dead-simple <span class="text-fg font-semibold">CLI tool</span>
			to
			<span class="text-fg font-semibold">instant</span>ly kickstart your
			<span class="text-fg font-semibold">components</span>.
		</p>
		<p class="text-center sm:text-xl">
			No extra UI libraries required—just clean, standalone code
			<span class="text-fg font-semibold">ready to use</span>.
		</p>
	</div>

	<div
		class="text-muted mb-32 flex flex-col items-center gap-2 dark:text-zinc-400"
	>
		<p class="text-center text-xl">
			<span class="text-fg font-semibold">Start</span>
			building your own components
			<span class="text-fg font-semibold">with CLI</span>.
		</p>
		<div class="w-56">
			<Cli code="npx lomer-ui init" />
		</div>
		<p class="text-fg text-center text-xl">That's it!</p>
	</div>

	<p class="my-2 text-xl font-semibold">
		DX matters. <br class="sm:hidden" />
		<span class="text-muted font-medium">Easy component implementation.</span>
	</p>

	<div class="lg:flex lg:flex-row-reverse">
		<Screen class="grid grow place-content-center">
			<Button onclick={() => (isOpenDialog = true)}>Open</Button>
			<Dialog title="Title here" bind:isOpen={isOpenDialog}>
				Content here...
			</Dialog>
		</Screen>

		<Syntax
			canCopy
			class="grow"
			code={`<script\>
	import Button from '$lib/components/ui/button.svelte'
	import Dialog from '$lib/components/ui/dialog.svelte'
	let isOpen = $state(false)
</script>

<Button onclick={() => (isOpen = true)}>Open</Button>
<Dialog title="Title here" bind:isOpen>
	Content here...
</Dialog>`}
		/>
	</div>

	<p class="mt-32 text-xl font-semibold">
		Code is yours.
		<span class="text-muted font-medium">Customize components.</span>
	</p>
	<p class="text-muted mb-2">
		Take a peek at this button component's code structure.
	</p>

	<Syntax
		expandable
		highlightedLines={[14, 17, 20, 26]}
		code={`<script\ lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	type Props = { ... } & HTMLButtonAttributes;
	
	let { ... }: Props = $props();
</script>

<button
	class={twMerge(
		'tailwindcss_here', // base

		variant === 'default' && 'tailwindcss_here',
		// add more variants here...
		
		size === 'default' && 'tailwindcss_here',
		// add more sizes here...
		
		edge === 'default' && 'tailwindcss_here',
		// add more edges here...

		'disabled:tailwindcss_here',

		isLoading && 'tailwindcss_here',

		// add branding design here!

		className
	)}
>
	{#if isLoading}
		<div class="tailwindcss_here">
			{@render IconLoading()}
		</div>
	{/if}
	{@render children?.()}
</button>

<!-- ICON LOADING -->
{#snippet IconLoading()}
	<!-- SVG ELEMENT HERE -->
{/snippet}`}
	/>

	<p class="mt-32 mb-2 text-xl font-semibold">
		Reusable.
		<span class="text-muted font-medium">
			Combine to build more complex interfaces.
		</span>
	</p>
	<div class="xl:flex xl:flex-row-reverse">
		<Screen class="grid grow place-content-center">
			<div class="flex justify-center">
				<Button onclick={() => (isOpenDropdown = !isOpenDropdown)}>Menu</Button>
				<Dropdown bind:isOpen={isOpenDropdown}>
					<Input placeholder="Use input" />
					<Button>Use button</Button>
					<Checkbox>Use checkbox</Checkbox>
					<Radio bind:value={radioVal} radioValue="free">Use radio 1</Radio>
					<Radio bind:value={radioVal} radioValue="pro">Use radio 2</Radio>
					<Switch>Use switch</Switch>
					<Accordion title="Use accordion">
						<div>I don't even know if we need this one.</div>
					</Accordion>
					<Accordion title="Responsive btw">
						{#each Array(50) as _}
							<p>I don't even know if we need this one.</p>
						{/each}
					</Accordion>
				</Dropdown>
			</div>
		</Screen>

		<Syntax
			class="grow"
			expandable
			highlightedLines={[2, 3, 4, 5, 7, 8]}
			code={`<Button onclick={() => (isOpen = !isOpen)}>Menu</Button>
<Dropdown bind:isOpen>
	<Input placeholder="Use input" />
	<Button>Use button</Button>
	<Checkbox>Use checkbox</Checkbox>
	<Radio bind:value={radioVal} radioValue="free">Use radio 1</Radio>
	<Radio bind:value={radioVal} radioValue="pro">Use radio 2</Radio>
	<Switch>Use switch</Switch>
	<Accordion title="Use accordion">
		<div>I don't even know if we need this one.</div>
	</Accordion>
	<Accordion title="Responsive btw">
		{#each Array(50) as _}
			<p>I don't even know if we need this one.</p>
		{/each}
	</Accordion>
</Dropdown>`}
		/>
	</div>

	<div class="h-24"></div>
	<!-- 
	<p>Dynamic.</p>
	Can easily display loading states. -->
</div>
