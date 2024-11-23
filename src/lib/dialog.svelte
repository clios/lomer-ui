<script lang="ts">
	import clsx from 'clsx';
	import { fade, scale } from 'svelte/transition';
	import Icon from '@iconify/svelte';

	export let title: string;
	export let isOpen: boolean;
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
			'fixed bottom-0 left-0 right-0 top-0 z-50 grid place-content-center backdrop-blur-sm', // base
			'bg-zinc-200/80', // light
			'dark:bg-zinc-950/80', // dark
			'bg-[radial-gradient(#D4D4D8_1px,transparent_1px)]',
			'dark:bg-[radial-gradient(#27272a_1px,transparent_1px)]',
			'[background-size:16px_16px]'
		)}
		in:fade={{ duration: 200 }}
		out:fade={{ duration: 200 }}
		on:click|self={emphasizeContent}
	>
		<!-- DIALOG CONTENT -->
		<div
			in:scale={{ duration: 200, delay: 200, start: 0.9 }}
			out:scale={{ duration: 200, start: 0.9 }}
			class={clsx(
				'z-100 relative w-screen border border-zinc-950 shadow-md transition-all dark:border-zinc-50 dark:shadow-none sm:w-[500px]',
				emphasize ? 'scale-90' : ''
			)}
		>
			<!-- HEADER -->
			<div class="flex items-center justify-between bg-zinc-950 px-2 dark:bg-zinc-50">
				<p class="font-semibold text-zinc-50 dark:text-zinc-950">
					{title}
				</p>

				<button
					class={clsx(
						'relative -right-2 rounded-full p-1',
						'flex items-center gap-1 outline-offset-2', // base
						'focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-cyan-500', // focus
						'disabled:bg-zinc-500 disabled:hover:cursor-not-allowed disabled:hover:outline-none disabled:focus:outline-none disabled:active:scale-100',
						'transition hover:outline focus:outline-2 focus:ring-offset-1 active:scale-[0.9]', // animations
						'outline-cyan-500', // light
						'dark:outline-cyan-500' // dark
					)}
					on:click={() => (isOpen = false)}
				>
					<Icon
						class="text-zinc-50 dark:text-zinc-950"
						icon="line-md:close-circle-filled"
						width={24}
					/>
				</button>
			</div>
			<!-- BODY -->
			<div
				class={clsx(
					'overflow-auto bg-zinc-50 p-4 dark:bg-zinc-900',
					'', // height
					className
				)}
			>
				<slot />
			</div>
		</div>
	</div>
{/if}
