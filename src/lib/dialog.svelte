<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fade, scale } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';

	type Props = {
		children?: Snippet;
		class?: string;
		isOpen: boolean;
		title?: string;
	};

	let {
		children,
		class: className,
		isOpen = $bindable(false),
		title = ''
	}: Props = $props();
</script>

{#if isOpen}
	<!-- BACKDROP -->
	<div
		class={twMerge(
			// BASE
			'grid place-content-center', // layout
			'fixed top-0 right-0 bottom-0 left-0 z-[999]', // position

			// BACKGROUND
			'backdrop-blur-xs', // blue
			'bg-bg/80', // color
			'bg-[radial-gradient(#D4D4D8_1px,transparent_1px)]', // light dots
			'dark:bg-[radial-gradient(#27272a_1px,transparent_1px)]', // dark dots
			'[background-size:16px_16px]' // dot size
		)}
		in:fade={{ duration: 75 }}
		out:fade={{ duration: 75 }}
	>
		<!-- DIALOG CONTAINER -->
		<div
			in:scale={{ duration: 75, delay: 75, start: 0.9 }}
			out:scale={{ duration: 75, start: 0.9 }}
			class={twMerge(
				// BASE
				'relative z-10', // layout and positioning
				'w-screen sm:w-[500px]', // width
				'border-y p-6 sm:rounded-lg sm:border', // border
				'bg-bg', // background
				'shadow-md dark:shadow-none', // shadow
				'transition-all', // animation

				// STYLING
				className
			)}
		>
			<!-- CLOSE BUTTON -->
			<button
				type="button"
				class={twMerge(
					'absolute top-4 right-4 z-10 p-1', // layout and positioning
					'rounded-full bg-none', // bg and radius
					'outline-primary ring-offset-1 outline-offset-2 active:outline-2 active:outline-offset-0', // outline
					'cursor-pointer hover:outline focus:outline' // hover, focus, cursor
				)}
				onclick={() => (isOpen = false)}
			>
				{@render IconClose()}
			</button>

			<!-- HEADER -->
			{#if title}<p class="text-xl font-semibold">{title}</p>{/if}

			<!-- BODY -->
			{@render children?.()}
		</div>
	</div>
{/if}

{#snippet IconClose()}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="16"
		height="16"
		viewBox="0 0 24 24"
	>
		<rect width="24" height="24" fill="none" />
		<path
			fill="none"
			stroke="currentColor"
			stroke-dasharray="12"
			stroke-dashoffset="12"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M12 12l7 7M12 12l-7 -7M12 12l-7 7M12 12l7 -7"
		>
			<animate
				fill="freeze"
				attributeName="stroke-dashoffset"
				dur="0.3s"
				values="12;0"
			/>
		</path>
	</svg>
{/snippet}
