<script lang="ts">
	import Button from '$lib/components/core/button.svelte';
	import Screen from '$lib/components/screen.svelte';
	import { twMerge } from 'tailwind-merge';
	import { scale } from 'svelte/transition';

	let isOpen = $state(true);
</script>

<Screen class="flex w-full p-0 sm:justify-center sm:p-8">
	<!-- DIALOG CONTAINER -->
	<div
		in:scale={{ duration: 75, delay: 75, start: 0.9 }}
		out:scale={{ duration: 75, start: 0.9 }}
		class={twMerge(
			// BASE
			'relative z-10', // layout and positioning
			'text-zinc-950 dark:text-zinc-50', // text
			'w-screen sm:w-[500px]', // width
			'border-y border-zinc-200 p-6 sm:rounded-lg sm:border dark:border-zinc-50', // border
			'bg-white dark:bg-zinc-950', // background
			'shadow-md dark:shadow-none', // shadow
			'transition-all' // animation
		)}
	>
		<!-- CLOSE BUTTON -->
		<button
			type="button"
			class={twMerge(
				'absolute top-4 right-4 p-1', // layout and positioning
				'rounded-full bg-none', // bg and radius
				'outline-primary ring-offset-1 outline-offset-2 active:outline-2 active:outline-offset-0', // outline
				'cursor-pointer hover:outline focus:outline' // hover, focus, cursor
			)}
			onclick={() => (isOpen = false)}
		>
			{@render IconClose()}
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
