<script>
	import Button from '$lib/components/ui/button.svelte';
	import ButtonToggleSidebar from './button-toggle-sidebar.svelte';
	import Icon from '@iconify/svelte';
	import Link from '$lib/components/ui/link.svelte';
	import Panel from '$lib/components/ui/panel.svelte';
	import PanelImageLomer from './panel-image-lomer.svelte';
	import { mode, toggleMode } from 'mode-watcher';

	let { isOpen = $bindable(false) } = $props();
</script>

<Panel class="bg-bg/50 sticky top-0 z-20 border-b backdrop-blur-sm">
	<div class="relative container mx-auto flex h-10 items-center gap-4 border-x">
		<div
			class="relative flex h-full w-full items-center gap-2 border-r px-2 sm:max-w-60 sm:min-w-60"
		>
			<PanelImageLomer />
			<Link href="/" class="font-mono no-underline outline-none">lomer-ui</Link>
			<ButtonToggleSidebar bind:isOpen />
		</div>

		<div class="hidden sm:flex sm:gap-4">
			<Link href="/docs/introduction" class="text-sm no-underline">Docs</Link>
			<Link href="/components/accordion" class="text-sm no-underline"
				>Components</Link
			>
		</div>

		<Button
			class="hover:bg-fg/5 active:bg-fg/15 absolute right-0 hidden h-full outline-none sm:flex"
			variant="ghost"
			edge="sharp"
			onclick={toggleMode}
		>
			{#if $mode === 'light'}
				<Icon icon="line-md:moon-to-sunny-outline-loop-transition" />
			{:else}
				<Icon icon="line-md:sunny-outline-to-moon-alt-loop-transition" />
			{/if}
		</Button>
	</div>
</Panel>
