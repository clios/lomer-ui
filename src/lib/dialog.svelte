<script lang="ts">
	import clsx from 'clsx';
	import { fade, scale } from 'svelte/transition';
	import Icon from '@iconify/svelte';

	export let title: string;
	export let isOpen: boolean;
	export { className as class };

	let className = '';
</script>

{#if isOpen}
	<!-- BACKDROP -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class={clsx(
			'fixed bottom-0 left-0 right-0 top-0 z-50 grid place-content-center backdrop-blur-sm', // base
			'bg-zinc-200/80', // light
			'dark:bg-zinc-950/80', // dark
			'bg-[radial-gradient(#D4D4D8_1px,transparent_1px)]',
			'dark:bg-[radial-gradient(#27272a_1px,transparent_1px)]',
			'[background-size:16px_16px]'
		)}
		in:fade={{ duration: 200 }}
		out:fade={{ duration: 200 }}
	>
		<!-- DIALOG CONTENT -->
		<div
			in:scale={{ duration: 200, delay: 200, start: 0.9 }}
			out:scale={{ duration: 200, start: 0.9 }}
			class={clsx(
				'relative z-10 w-screen rounded border border-zinc-200 shadow-md transition-all dark:border-zinc-800 dark:shadow-none sm:w-[500px]'
			)}
		>
			<!-- HEADER -->
			<div class="flex items-center justify-between rounded-t bg-white pr-4 pt-4 dark:bg-zinc-950">
				<p class="px-4 text-xl font-semibold">
					{title}
				</p>

				<button
					class={clsx(
						'absolute right-4 top-4 rounded-full',
						'bg-zinc-50/0 text-zinc-950 dark:bg-zinc-950/0 dark:text-zinc-50', // color
						'border border-zinc-50/0 dark:border-zinc-50/0', // color
						'active:outline-2 active:outline-offset-0', // color
						'outline-cyan-500 hover:outline hover:outline-1', // hover
						'focus:outline focus:outline-1 focus:outline-offset-2', // focus
						'focus:outline-cyan-500 focus:ring-offset-1', // focus
						'disabled:focus:outline-none' // focus
					)}
					on:click={() => (isOpen = false)}
				>
					<Icon icon="line-md:close-circle-filled" width={24} height={24} />
				</button>
			</div>
			<!-- BODY -->
			<div class={clsx('overflow-auto rounded-b bg-white px-4 pb-4 dark:bg-zinc-950', className)}>
				<slot />
			</div>
		</div>
	</div>
{/if}
