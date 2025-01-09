<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import { fade, slide } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';

	type Props = {
		children?: Snippet;
		class?: string;
		isOpen: boolean;
		title?: string;
		position?: 'left' | 'right' | 'top' | 'bottom';
	};

	let {
		children,
		class: className,
		isOpen = $bindable(false),
		title = '',
		position = 'right'
	}: Props = $props();
</script>

{#if isOpen}
	<!-- BACKDROP -->
	<div
		class={twMerge(
			'fixed top-0 right-0 bottom-0 left-0 z-10', // base

			// BACKGROUND
			'backdrop-blur-xs', // blue
			'bg-bg/80', // color
			'bg-[radial-gradient(#D4D4D8_1px,transparent_1px)]', // light dots
			'dark:bg-[radial-gradient(#27272a_1px,transparent_1px)]', // dark dots
			'[background-size:16px_16px]' // dot size
		)}
		in:fade={{ duration: 150 }}
		out:fade={{ duration: 150 }}
	>
		<!-- DRAWER CONTAINER -->
		<div
			transition:slide={{
				axis: ['left', 'right'].includes(position) ? 'x' : 'y',
				duration: 150,
				delay: 150
			}}
			class={twMerge(
				// BASE
				'absolute', // layout and positioning
				'border', // box model
				'bg-bg', // background
				'shadow-md dark:shadow-none', // shadow
				'transition-all', // animation

				// POSITION: LEFT
				position === 'left' && 'left-0 h-screen border-r', // border

				// POSITION: RIGHT
				position === 'right' && 'right-0 h-screen border-l', // border

				// POSITION: TOP
				position === 'top' && 'top-0 w-screen border-b', // border

				// POSITION: BOTTOM
				position === 'bottom' && 'bottom-0 w-screen border-t' // border
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
			{#if title}
				<p
					in:fade={{ delay: 200 }}
					out:fade={{ duration: 150 }}
					class="pt-5 pr-12 pb-2 pl-4 text-xl leading-3 font-semibold"
				>
					{title}
				</p>
			{/if}

			<!-- BODY -->
			<div
				in:fade={{ delay: 200 }}
				out:fade={{ duration: 150 }}
				class={twMerge(
					// BASE
					'relative',

					// NO TITLE
					!title && 'pt-5 pr-10 pl-4',

					// POSITION: LEFT & RIGHT
					['left', 'right'].includes(position) && title
						? 'h-[calc(100vh-3.8rem)] overflow-y-auto'
						: 'h-screen overflow-y-auto',

					// POSITION: TOP & BOTTOM
					['top', 'bottom'].includes(position) && 'overflow-y-auto',

					title ? '' : '',

					// STYLING
					className
				)}
			>
				{@render children?.()}
			</div>
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
