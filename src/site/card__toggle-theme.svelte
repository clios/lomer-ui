<script>
	import Button from '$lib/button.svelte';
	import Drawer from '$lib/drawer.svelte';
	import Icon from '@iconify/svelte';
	import { toggleMode, mode, setTheme, theme } from 'mode-watcher';

	let isOpen = false;
</script>

<div class="mt-4 ml-4">
	<p class="text-sm text-zinc-500 dark:text-zinc-400">Explore in</p>
	<div class="mt-1 flex items-center gap-2">
		<Button class="gap-2" size="small" onclick={toggleMode}>
			{#if $mode === 'light'}
				<Icon icon="line-md:moon-to-sunny-outline-loop-transition" />
				Light Mode
			{:else}
				<Icon icon="line-md:sunny-outline-to-moon-alt-loop-transition" />
				Dark Mode
			{/if}
		</Button>

		<Button
			class="text-primary"
			variant="ghost"
			size="icon"
			edge="circle"
			onclick={() => (isOpen = true)}
		>
			<Icon icon="mdi:gear" width="17" />
		</Button>

		<Drawer class="w-[320px]" title="Theme" position="left" bind:isOpen>
			<div class="flex gap-2">
				<Button
					size="small"
					onclick={() => setTheme('')}
					class="gap-2 outline-none"
					variant="ghost"
				>
					<div class="size-6 rounded-full bg-cyan-500 text-white">
						{#if $theme === ''}
							<Icon icon="mdi:check" width="24" />
						{/if}
					</div>
					Cyan
				</Button>
				<Button
					size="small"
					onclick={() => setTheme('rose')}
					class="gap-2 outline-none"
					variant="ghost"
				>
					<div class="size-6 rounded-full bg-rose-500 text-white">
						{#if $theme === 'rose'}
							<Icon icon="mdi:check" width="24" />
						{/if}
					</div>
					Rose
				</Button>
				<Button
					size="small"
					onclick={() => setTheme('teal')}
					class="gap-2 outline-none"
					variant="ghost"
				>
					<div class="size-6 rounded-full bg-teal-500 text-white">
						{#if $theme === 'teal'}
							<Icon icon="mdi:check" width="24" />
						{/if}
					</div>
					Teal
				</Button>
			</div>
		</Drawer>
	</div>
</div>
