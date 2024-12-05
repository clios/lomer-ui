<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import ButtonToggleTheme from './button__toggle-theme.svelte';
	import Link from '$lib/link.svelte';
	import { afterNavigate } from '$app/navigation';
	import Icon from '@iconify/svelte';

	let elPage: HTMLDivElement;

	afterNavigate(() => {
		elPage.scrollIntoView();
	});
</script>

<ModeWatcher defaultMode="system" />
<div id="page" class="relative h-screen overflow-y-hidden dark:bg-zinc-950">
	<div
		class="fixed top-0 z-10 flex h-14 w-full items-center border-b bg-white/80 py-2 backdrop-blur-sm dark:border-zinc-700 dark:bg-zinc-800/0 dark:backdrop-blur-lg"
	>
		<div class="container mx-auto flex items-center justify-between px-4">
			<div class="relative flex items-center">
				<div class="relative mr-4">
					<img class="relative size-8 min-w-8" src="/favicon.png" alt="lomer" />
					<div class="absolute top-0 size-8 rotate-45 outline outline-1 -outline-offset-2"></div>
				</div>
				<Link href="/" class="mr-4 font-mono text-xl">lomer-ui</Link>
				<div class="flex gap-4">
					<Link href="/docs/installation">Docs</Link>
					<Link href="/components/alert">Components</Link>
				</div>
			</div>
			<ButtonToggleTheme />
		</div>
	</div>
	<div
		class="container relative mx-auto mt-[3.5rem] h-[calc(100vh-3.5rem)] w-full overflow-y-auto border-r dark:border-zinc-700"
	>
		<aside
			class="fixed top-0 flex h-screen w-64 flex-col gap-2 overflow-y-auto border-x pl-4 dark:border-zinc-700"
		>
			<p class="mt-20 pl-4 font-semibold">Getting Started</p>
			<Link href="/docs/installation" class="pl-8" variant="list-item">Installation</Link>
			<Link href="/docs/dark-mode" class="pl-8" variant="list-item">Dark Mode</Link>

			<p class="mt-4 pl-4 font-semibold">Components</p>
			<Link href="/components/accordion" class="pl-8" variant="list-item">Accordion</Link>
			<Link href="/components/alert" class="pl-8" variant="list-item">Alert</Link>
			<Link href="/components/button" class="pl-8" variant="list-item">Button</Link>
			<Link href="/components/card-picker" class="pl-8" variant="list-item">Card Picker</Link>
			<Link href="/components/check" class="pl-8" variant="list-item">Check</Link>
			<Link href="/components/dialog" class="pl-8" variant="list-item">Dialog</Link>
			<Link href="/components/drawer" class="pl-8" variant="list-item">Drawer</Link>
			<Link href="/components/field" class="pl-8" variant="list-item">Field</Link>
			<Link href="/components/input" class="pl-8" variant="list-item">Input</Link>
			<Link href="/components/link" class="pl-8" variant="list-item">Link</Link>
			<Link href="/components/radio" class="pl-8" variant="list-item">Radio</Link>
			<Link href="/components/select" class="pl-8" variant="list-item">Select</Link>
			<Link href="/components/switch" class="pl-8" variant="list-item">Switch</Link>
			<Link href="/components/textarea" class="pl-8" variant="list-item">Textarea</Link>

			<div class="absolute bottom-0 right-0 pb-8 pr-8">
				<Link href="https://github.com/clios" target="_blank" class="font-mono italic">
					- Lomer
				</Link>
			</div>
		</aside>
		<div class="relative ml-64 px-4 pb-4">
			<div bind:this={elPage} id="page" class="pt-4"></div>
			<slot />
		</div>
	</div>
</div>
