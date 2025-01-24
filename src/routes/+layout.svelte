<script lang="ts">
	import '../app.css';
	import Sidebar from './sidebar.svelte';
	import Topbar from './topbar.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import { afterNavigate } from '$app/navigation';

	let { children } = $props();
	let isOpen = $state(true);
	let elPage: HTMLDivElement;

	afterNavigate(() => {
		elPage.scrollIntoView({ behavior: 'instant' });
	});
</script>

<ModeWatcher defaultMode="system" />

<div class="h-screen w-screen overflow-x-hidden overflow-y-auto">
	<div bind:this={elPage} id="page"></div>
	<Topbar bind:isOpen />
	<div class="z-10 container mx-auto flex w-full sm:border-x">
		<Sidebar bind:isOpen />
		<div class="relative mb-8 flex w-full flex-col gap-16 p-4 2xl:mt-8">
			{@render children()}
		</div>
	</div>
</div>
