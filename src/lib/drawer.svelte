<script lang="ts">
	import clsx from 'clsx';
	import Button from './button.svelte';
	import { fade, slide } from 'svelte/transition';
	import Icon from '@iconify/svelte';

	export let title: string;
	export let isOpen: boolean;
	export let noBackdrop: boolean = false;
	export { className as class };

	let className = '';

	let emphasize = false;

	function emphasizeContent() {
		if (emphasize === true) return;
		emphasize = true;
		setTimeout(() => {
			emphasize = false;
		}, 200);
	}
</script>

{#if isOpen}
	<!-- BACKDROP -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class={clsx(
			'fixed bottom-0 left-0 right-0 top-0 z-10 flex justify-end transition-all', // base
			noBackdrop ? 'backdrop-blur-none' : 'backdrop-blur-sm', // blur
			noBackdrop ? 'bg-zinc-200/0' : 'bg-zinc-200/80', // light
			noBackdrop ? 'dark:bg-zinc-950/0' : 'dark:bg-zinc-950/80', // dark
			noBackdrop && 'pointer-events-none', // dark
			!noBackdrop && 'bg-[radial-gradient(#D4D4D8_1px,transparent_1px)]',
			!noBackdrop && 'dark:bg-[radial-gradient(#27272a_1px,transparent_1px)]',
			!noBackdrop && '[background-size:16px_16px]'
		)}
		in:fade={{ duration: 200, delay: 200 }}
		out:fade={{ duration: 200, delay: 0 }}
		on:click|self={emphasizeContent}
	>
		<!-- DIALOG CONTENT -->
		<div
			class={clsx(
				'pointer-events-auto',
				'shadow-md dark:shadow-none',
				'z-100 relative border-l transition-all dark:border-zinc-800',
				'w-full sm:w-[600px]', // responsiveness
				'bg-white/80 dark:bg-zinc-950/50',
				noBackdrop && 'bg-white/95 backdrop-blur-sm dark:bg-zinc-950/90',
				emphasize ? 'translate-x-16' : '',
				className
			)}
			in:slide={{ axis: 'x', duration: 200, delay: 200 }}
			out:slide={{ axis: 'x', duration: 200, delay: 200 }}
		>
			<!-- HEADER -->
			<div
				class="flex items-center justify-between border-b border-dashed border-zinc-950 bg-zinc-50/50 px-4 pb-2 pr-2 dark:border-zinc-50 dark:bg-zinc-950/50 sm:pl-4 sm:pr-4"
				in:fade={{ delay: 400 }}
				out:fade={{ duration: 200 }}
			>
				<p class="px-4 py-4 text-2xl font-semibold text-zinc-950 dark:text-zinc-50">{title}</p>
				<Button variant="ghost" size="icon" edge="circle" on:click={() => (isOpen = false)}>
					<Icon icon="line-md:close-circle-filled" width={24} />
				</Button>
			</div>
			<div
				class="h-[calc(100vh-4rem)] overflow-auto bg-zinc-50/50 dark:bg-zinc-950/50"
				in:fade={{ delay: 400 }}
				out:fade={{ duration: 200 }}
			>
				<slot />
			</div>
		</div>
	</div>
{/if}
