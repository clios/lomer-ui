<script lang="ts">
	import '../app.css';
	import CardToggleTheme from '$site/card__toggle-theme.svelte';
	import Link from '$lib/link.svelte';
	import SidebarLink from './sidebar-link.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import { afterNavigate } from '$app/navigation';
	import { twMerge } from 'tailwind-merge';
	import Drawer from '$lib/drawer.svelte';
	import Button from '$lib/button.svelte';
	import Icon from '@iconify/svelte';
	import ScrollGradientFooter from '$site/scroll-gradient-footer.svelte';

	let { children } = $props();
	let elPage: HTMLDivElement;
	let isOpen = $state(false);

	afterNavigate(() => {
		elPage.scrollIntoView();
	});
</script>

{#snippet sidebar()}
	<div class="mt-4 ml-4 flex items-center lg:mt-8">
		<div class="relative mr-4">
			<img class="relative size-7 min-w-7" src="/favicon.png" alt="lomer" />
			<div
				class="absolute top-0 size-7 rotate-45 outline -outline-offset-2"
			></div>
		</div>

		<Link href="/" class="font-mono text-xl leading-3 no-underline">
			lomer-ui
		</Link>
	</div>

	<CardToggleTheme />

	<p class="mt-4 pl-4 font-semibold">Getting Started</p>
	<SidebarLink href="/docs/introduction" label="Introduction" />
	<SidebarLink href="/docs/installation" label="Installation" />
	<SidebarLink href="/docs/dark-mode" label="Dark Mode" />
	<SidebarLink href="/docs/cli" label="CLI" />

	<p class="mt-4 pl-4 font-semibold">Components</p>
	<SidebarLink href="/components/accordion" label="Accordion" />
	<SidebarLink href="/components/alert" label="Alert" />
	<SidebarLink href="/components/button" label="Button" />
	<SidebarLink href="/components/card-picker" label="Card Picker" />
	<SidebarLink href="/components/checkbox" label="Checkbox" />
	<SidebarLink href="/components/dialog" label="Dialog" />
	<SidebarLink href="/components/drawer" label="Drawer" />
	<SidebarLink href="/components/field" label="Field" />
	<SidebarLink href="/components/input" label="Input" />
	<SidebarLink href="/components/link" label="Link" />
	<SidebarLink href="/components/radio" label="Radio" />
	<SidebarLink href="/components/select" label="Select" />
	<SidebarLink href="/components/switch" label="Switch" />
	<SidebarLink href="/components/textarea" label="Textarea" />

	<div class="mx-8 mt-8 mr-8 mb-32 flex justify-end">
		<Link
			href="https://github.com/clios"
			target="_blank"
			class="font-mono italic no-underline"
		>
			- Clios
		</Link>
	</div>
{/snippet}

<ModeWatcher defaultMode="system" />
<div class="relative h-screen overflow-y-auto dark:bg-zinc-950">
	<div class="w-ful relative container mx-auto">
		<aside
			class={twMerge(
				'fixed top-0 hidden flex-col gap-2 overflow-x-hidden overflow-y-auto lg:flex', // positioning and layout
				'h-screen w-64 border-r border-zinc-300 pl-4 dark:border-zinc-700' // box model
			)}
		>
			{@render sidebar()}
			<ScrollGradientFooter />
		</aside>
		<div class="relative px-4 pb-4 lg:ml-64">
			<div bind:this={elPage} id="page" class="pt-12 lg:pt-4"></div>
			<div
				class="fixed top-0 right-0 left-0 z-[999] border-b border-zinc-50 bg-white/50 px-4 backdrop-blur-sm lg:hidden dark:border-zinc-900 dark:bg-zinc-950/50"
			>
				<div class="container mx-auto px-4 py-1">
					<Button
						variant="ghost"
						size="icon"
						edge="sharp"
						onclick={() => (isOpen = true)}
					>
						<Icon icon="mdi:menu" />
					</Button>
				</div>
			</div>
			<Drawer
				class="flex w-screen flex-col gap-2 sm:w-[320px]"
				bind:isOpen
				position="left"
			>
				{@render sidebar()}
				<ScrollGradientFooter />
			</Drawer>
			{@render children()}
			<ScrollGradientFooter />
		</div>
	</div>
</div>
