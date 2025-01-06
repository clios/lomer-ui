<script lang="ts">
	import '../app.css';
	import Button from '$lib/button.svelte';
	import Drawer from '$lib/drawer.svelte';
	import Icon from '@iconify/svelte';
	import ScrollArea from '$lib/scroll-area.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import { afterNavigate } from '$app/navigation';
	import { twMerge } from 'tailwind-merge';
	import MainSidebar from '$site/main-sidebar.svelte';

	let { children } = $props();
	let elPage: HTMLDivElement;
	let isOpen = $state(false);

	afterNavigate(() => {
		elPage.scrollIntoView();
	});
</script>

<ModeWatcher defaultMode="system" />
<ScrollArea class="h-screen overflow-y-auto 2xl:px-8">
	<div class="w-ful relative container mx-auto">
		<ScrollArea
			class={twMerge(
				'fixed top-0 z-10 hidden flex-col gap-2 overflow-x-hidden overflow-y-auto lg:flex', // positioning and layout
				'h-screen w-64 border-r border-zinc-300 pl-4 dark:border-zinc-700' // box model
			)}
		>
			<MainSidebar bind:isOpen />
		</ScrollArea>
		<div class="relative px-4 pb-4 lg:ml-64">
			<div bind:this={elPage} id="page" class="pt-12 lg:pt-4"></div>

			<!-- NAVIGATION TOP -->
			<div
				class="fixed top-0 right-0 left-0 border-b border-zinc-50 bg-white/50 px-4 backdrop-blur-sm lg:hidden dark:border-zinc-900 dark:bg-zinc-950/50"
			>
				<div class="container mx-auto py-1">
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

			<!-- SIDEBAR FOR SMALL SCREEN -->
			<Drawer
				class="flex w-screen flex-col gap-2 sm:w-[320px]"
				position="left"
				bind:isOpen
			>
				<ScrollArea class="flex flex-col gap-2">
					<MainSidebar bind:isOpen />
				</ScrollArea>
			</Drawer>

			<!-- CONTENT -->
			{@render children()}
		</div>
	</div>
</ScrollArea>
