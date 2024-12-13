<script lang="ts">
	import Button from '$lib/button.svelte';
	import Screen from '$site/screen.svelte';
	import { cn } from '$lib/utils.ts';
	import { scale } from 'svelte/transition';

	let isOpen = $state(true);
</script>

<Screen class="flex justify-center">
	<!-- DIALOG CONTAINER -->
	<div
		in:scale={{ duration: 200, delay: 200, start: 0.9 }}
		out:scale={{ duration: 200, start: 0.9 }}
		class={cn(
			// BASE
			'relative z-10', // layout and positioning
			'w-screen sm:w-[500px] ', // width
			'rounded-lg border border-zinc-200 p-6 dark:border-zinc-50', // border
			'bg-white dark:bg-zinc-950', // background
			'shadow-md dark:shadow-none', // shadow
			'transition-all' // animation
		)}
	>
		<!-- CLOSE BUTTON -->
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<button
			class={cn(
				'absolute right-4 top-4', // layout and positioning
				'text-zinc-950 dark:text-zinc-50', // text
				'rounded-full', // border
				'bg-zinc-50/0 dark:bg-zinc-950/0', // background
				'active:outline-2 active:outline-offset-0', // color
				'hover:outline hover:outline-1 hover:outline-offset-2 hover:outline-cyan-500 hover:ring-offset-1', // hovering
				'focus:outline focus:outline-1 focus:outline-offset-2 focus:outline-cyan-500 focus:ring-offset-1' // focusing
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
								begin="0.6s"
								dur="0.5s"
								values="0;1"
							/>
							<animate
								fill="freeze"
								attributeName="stroke-dashoffset"
								dur="0.6s"
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
								begin="1.1s"
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
		<p class="text-xl font-semibold">Sign Out</p>

		<!-- BODY -->
		<div>
			<p>Any unsaved changes you made wil be lost.</p>
			<div class="mt-8 flex justify-end gap-4">
				<Button variant="secondary">Cancel</Button>
				<Button>Yes, sign out</Button>
			</div>
		</div>
	</div>
</Screen>
