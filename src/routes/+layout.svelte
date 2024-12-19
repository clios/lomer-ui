<script lang="ts">
	import '../app.css';
	import CardToggleTheme from '$site/card__toggle-theme.svelte';
	import Link from '$lib/link.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import { afterNavigate } from '$app/navigation';
	import { twMerge } from 'tailwind-merge';
	import SidebarLink from './sidebar-link.svelte';
	import { version } from '../../package.json';

	let elPage: HTMLDivElement;

	afterNavigate(() => {
		elPage.scrollIntoView();
	});
</script>

<ModeWatcher defaultMode="system" />
<div class="relative h-screen overflow-y-auto dark:bg-zinc-950">
	<div class="w-ful container relative mx-auto">
		<aside
			class={twMerge(
				'fixed top-0 hidden flex-col gap-2 overflow-y-auto overflow-x-hidden lg:flex', // positioning and layout
				'h-screen w-64 border-r pl-4 dark:border-zinc-700' // box model
			)}
		>
			<div class="ml-4 mt-8 flex items-center">
				<div class="relative mr-4">
					<img class="relative size-7 min-w-7" src="/favicon.png" alt="lomer" />
					<div
						class="absolute top-0 size-7 rotate-45 outline outline-1 -outline-offset-2"
					></div>
				</div>
				<div>
					<Link href="/" class="font-mono text-xl leading-3 no-underline">
						lomer-ui
					</Link>
					<p class="font-mono text-sm">v{version}</p>
				</div>
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

			<div class="absolute bottom-0 right-0 pb-8 pr-8">
				<Link
					href="https://github.com/clios"
					target="_blank"
					class="font-mono italic no-underline"
				>
					- Clios
				</Link>
			</div>
		</aside>
		<div class="relative px-4 pb-4 lg:ml-64">
			<div bind:this={elPage} id="page" class="pt-4"></div>
			<slot />
		</div>
	</div>
</div>
