<script lang="ts">
	import Button from '$lib/components/ui/button.svelte';
	import Screen from '$lib/components/screen.svelte';
	import { twMerge } from 'tailwind-merge';
	import { fade, slide } from 'svelte/transition';
	import Icon from '@iconify/svelte';
	import Checkbox from '$lib/components/ui/checkbox.svelte';
	import { onMount } from 'svelte';
	import ScrollArea from '$lib/components/ui/scroll-area.svelte';

	let isOpen = $state(false);

	onMount(() => {
		isOpen = true;
	});
</script>

<Screen class="flex w-full p-0 sm:justify-center sm:p-8">
	<div
		class="relative grid h-[500px] w-full place-content-center overflow-hidden rounded-xl border border-zinc-950 bg-white shadow-lg dark:border-zinc-50 dark:bg-zinc-950"
	>
		<div
			class="absolute w-full bg-zinc-950 px-3 py-1 font-mono text-white dark:bg-white dark:text-zinc-950"
		>
			lomer-ui
		</div>
		<Button onclick={() => (isOpen = true)}>Open drawer</Button>

		{#if isOpen}
			<!-- BACKDROP -->
			<div
				class={twMerge(
					// BASE
					'absolute top-0 right-0 bottom-0 left-0 z-1', // position

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
					in:slide={{ axis: 'x', duration: 150, delay: 150 }}
					out:slide={{ axis: 'x', duration: 150, delay: 150 }}
					class={twMerge(
						// BASE
						'absolute right-0', // layout and positioning
						'h-screen border-zinc-300 dark:border-zinc-700', // box model
						'bg-white dark:bg-zinc-950', // background
						'shadow-md dark:shadow-none', // shadow
						'transition-all', // animation

						// POSITION: LEFT
						'border-l' // border
					)}
				>
					<!-- CLOSE BUTTON -->
					<!-- svelte-ignore a11y_consider_explicit_label -->
					<button
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
					<p
						in:fade={{ delay: 150 }}
						out:fade={{ duration: 150 }}
						class="p-6 text-xl leading-3 font-semibold shadow-xs dark:border-b dark:border-zinc-700 dark:shadow-none"
					>
						Notifications
					</p>

					<!-- BODY -->
					<div
						in:fade={{ delay: 150 }}
						out:fade={{ duration: 150 }}
						class={twMerge('h-[calc(500px-3.8rem)] overflow-y-auto')}
					>
						<div class="p-6 sm:w-[350px]">
							<p class="mb-4 text-zinc-500">You have 3 unread messages.</p>

							<div class="rounded-sm border p-4 dark:border-zinc-700">
								<Checkbox>
									<p class="font-semibold">Push Notifications</p>
									<p class="text-zinc-600 dark:text-zinc-400">
										Send notifications to device.
									</p>
								</Checkbox>
							</div>

							<div class="my-4 flex items-start">
								<Icon
									class="text-cyan-500"
									icon="icon-park-outline:dot"
									height="24"
								/>
								<div>
									<p class="font-semibold">Your call has been confirmed.</p>
									<div class="text-zinc-500">1 hour ago</div>
								</div>
							</div>
							<div class="my-4 flex items-start">
								<Icon
									class="text-cyan-500"
									icon="icon-park-outline:dot"
									height="24"
								/>
								<div>
									<p class="font-semibold">You have a new message!</p>
									<div class="text-zinc-500">1 hour ago</div>
								</div>
							</div>
							<div class="my-4 flex items-start">
								<Icon
									class="text-cyan-500"
									icon="icon-park-outline:dot"
									height="24"
								/>
								<div>
									<p class="font-semibold">
										Your subscription is expiring soon!
									</p>
									<div class="text-zinc-500">2 hours ago</div>
								</div>
							</div>

							<Button class="w-full justify-center">
								<Icon icon="material-symbols:check" width={24} height={24} /> Mark
								all as read
							</Button>
						</div>
					</div>
				</div>
			</div>
		{/if}
	</div>
</Screen>
