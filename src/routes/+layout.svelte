<script lang="ts">
	import '../app.css';
	import CardToggleTheme from '$site/card__toggle-theme.svelte';
	import Link from '$lib/link.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import { afterNavigate } from '$app/navigation';
	import { twMerge } from 'tailwind-merge';

	let elPage: HTMLDivElement;

	afterNavigate(() => {
		elPage.scrollIntoView();
	});
</script>

<ModeWatcher defaultMode="system" />
<div class="relative h-screen overflow-y-auto">
	<div class="w-ful container relative mx-auto">
		<aside
			class={twMerge(
				'fixed top-0 hidden flex-col gap-2 overflow-y-auto overflow-x-hidden lg:flex', // positioning and layout
				'h-screen w-64 border-r pl-4 dark:border-zinc-700' // box model
			)}
		>
			<div class="ml-4 mt-8 flex items-center">
				<div class="relative mr-4">
					<img class="relative size-6 min-w-6" src="/favicon.png" alt="lomer" />
					<div
						class="absolute top-0 size-6 rotate-45 outline outline-1 -outline-offset-2"
					></div>
				</div>
				<Link href="/" class="font-mono text-xl leading-3 no-underline"
					>lomer-ui</Link
				>
			</div>

			<CardToggleTheme />

			<p class="mt-4 pl-4 font-semibold">Getting Started</p>
			<Link href="/docs/introduction" class="pl-8 no-underline" caret
				>Introduction</Link
			>
			<Link href="/docs/installation" class="pl-8 no-underline" caret
				>Installation</Link
			>
			<Link href="/docs/dark-mode" class="pl-8 no-underline" caret
				>Dark Mode</Link
			>
			<Link href="/docs/cli" class="pl-8 no-underline" caret>CLI</Link>

			<p class="mt-4 pl-4 font-semibold">Components</p>
			<Link href="/components/accordion" class="pl-8 no-underline" caret
				>Accordion</Link
			>
			<Link href="/components/alert" class="pl-8 no-underline" caret>Alert</Link
			>
			<Link href="/components/button" class="pl-8 no-underline" caret
				>Button</Link
			>
			<Link href="/components/card-picker" class="pl-8 no-underline" caret
				>Card Picker</Link
			>
			<Link href="/components/checkbox" class="pl-8 no-underline" caret
				>Checkbox</Link
			>
			<Link href="/components/dialog" class="pl-8 no-underline" caret
				>Dialog</Link
			>
			<Link href="/components/drawer" class="pl-8 no-underline" caret
				>Drawer</Link
			>
			<Link href="/components/field" class="pl-8 no-underline" caret>Field</Link
			>
			<Link href="/components/input" class="pl-8 no-underline" caret>Input</Link
			>
			<Link href="/components/link" class="pl-8 no-underline" caret>Link</Link>
			<Link href="/components/radio" class="pl-8 no-underline" caret>Radio</Link
			>
			<Link href="/components/select" class="pl-8 no-underline" caret
				>Select</Link
			>
			<Link href="/components/switch" class="pl-8 no-underline" caret
				>Switch</Link
			>
			<Link href="/components/textarea" class="pl-8 no-underline" caret
				>Textarea</Link
			>

			<div class="absolute bottom-0 right-0 pb-8 pr-8">
				<Link
					href="https://github.com/clios"
					target="_blank"
					class="font-mono italic no-underline"
				>
					- clios
				</Link>
			</div>
		</aside>
		<div class="relative px-4 pb-4 lg:ml-64">
			<div bind:this={elPage} id="page" class="pt-4"></div>
			<slot />
		</div>
	</div>
</div>
