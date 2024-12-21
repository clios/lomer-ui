<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fade, slide } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';

	type Props = {
		children?: Snippet;
		class?: string;
		isOpen: boolean;
		title: string;
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
			// BASE
			'fixed top-0 right-0 bottom-0 left-0 z-50', // position

			// BACKGROUND
			'backdrop-blur-xs', // blue
			'bg-zinc-200/80 dark:bg-zinc-950/80', // color
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
				'absolute z-10', // layout and positioning
				'dark:border-zinc-700', // box model
				'bg-white dark:bg-zinc-950', // background
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
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<button
				type="button"
				class={twMerge(
					'absolute top-4 right-4', // layout and positioning
					'text-zinc-950 dark:text-zinc-50', // text
					'rounded-full', // border
					'bg-zinc-50/0 dark:bg-zinc-950/0', // background
					'active:outline-2 active:outline-offset-0', // color
					'hover:ring-offset-1 hover:outline hover:outline-offset-2 hover:outline-cyan-500', // hovering
					'focus:ring-offset-1 focus:outline focus:outline-offset-2 focus:outline-cyan-500', // focusing
					'cursor-pointer' // cursor
				)}
				onclick={() => (isOpen = false)}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
				>
					<mask id="lineMdCloseCircleFilled0">
						<g
							fill="none"
							stroke="#fff"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
						>
							<path
								fill="#fff"
								fill-opacity="0"
								stroke-dasharray="64"
								stroke-dashoffset="64"
								d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"
							>
								<animate
									fill="freeze"
									attributeName="fill-opacity"
									begin="0.3s"
									dur="0.2s"
									values="0;1"
								/>
								<animate
									fill="freeze"
									attributeName="stroke-dashoffset"
									dur="0.3s"
									values="64;0"
								/>
							</path>
							<path
								stroke="#000"
								stroke-dasharray="8"
								stroke-dashoffset="8"
								d="M12 12l4 4M12 12l-4 -4M12 12l-4 4M12 12l4 -4"
							>
								<animate
									fill="freeze"
									attributeName="stroke-dashoffset"
									begin=".6s"
									dur="0.2s"
									values="8;0"
								/>
							</path>
						</g>
					</mask>
					<rect
						width="24"
						height="24"
						fill="currentColor"
						mask="url(#lineMdCloseCircleFilled0)"
					/>
				</svg>
			</button>

			<!-- HEADER -->
			<p
				in:fade={{ delay: 200 }}
				out:fade={{ duration: 150 }}
				class="p-6 text-xl leading-3 font-semibold shadow-xs dark:border-b dark:border-zinc-700 dark:shadow-none"
			>
				{title}
			</p>

			<!-- BODY -->
			<div
				in:fade={{ delay: 200 }}
				out:fade={{ duration: 150 }}
				class={twMerge(
					// BASE
					'relative',

					// POSITION: LEFT & RIGHT
					['left', 'right'].includes(position) &&
						'h-[calc(100vh-3.8rem)] overflow-y-auto p-6',

					// POSITION: TOP & BOTTOM
					['top', 'bottom'].includes(position) && 'overflow-y-auto p-6',

					// STYLING
					className
				)}
			>
				{@render children?.()}
			</div>
		</div>
	</div>
{/if}
