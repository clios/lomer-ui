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
			'bg-zinc-200/80 dark:bg-zinc-950/80', // color
			'bg-[radial-gradient(#D4D4D8_1px,transparent_1px)]', // light dots
			'dark:bg-[radial-gradient(#27272a_1px,transparent_1px)]', // dark dots
			'[background-size:16px_16px]' // dot size
		)}
		in:fade={{ duration: 200 }}
		out:fade={{ duration: 200 }}
	>
		<!-- DIALOG CONTAINER -->
		<div
			in:scale={{ duration: 200, delay: 200, start: 0.9 }}
			out:scale={{ duration: 200, start: 0.9 }}
			class={twMerge(
				// BASE
				'relative z-10', // layout and positioning
				'text-zinc-950 dark:text-zinc-50', // text
				'w-screen sm:w-[500px]', // width
				'border-y border-zinc-200 p-6 sm:rounded-lg sm:border dark:border-zinc-50', // border
				'bg-white dark:bg-zinc-950', // background
				'shadow-md dark:shadow-none', // shadow
				'transition-all', // animation

				// STYLING
				className
			)}
		>
			<!-- CLOSE BUTTON -->
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<button
				type="button"
				class={twMerge(
					'absolute top-4 right-4', // layout and positioning
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
			{#if title}<p class="text-xl font-semibold">{title}</p>{/if}

			<!-- BODY -->
			{@render children?.()}
		</div>
	</div>
{/if}
