<script lang="ts">
	import clsx from 'clsx';
	import { circInOut } from 'svelte/easing';
	import { draw } from 'svelte/transition';

	export let value: boolean | undefined | null = false;
	export { className as class };

	let className = '';

	function toggleValue() {
		value = !value;
	}
</script>

<div class={clsx('flex items-start gap-2 text-left', className)}>
	<button
		type="button"
		class={clsx(
			'relative h-[24px] w-[24px]',
			'rounded-md border bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900', // base
			'focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-cyan-500', // focus
			'transition hover:outline focus:outline-2 focus:ring-offset-1 active:scale-[0.9]', // animations
			'outline-cyan-500', // light
			'dark:outline-cyan-500' // dark
		)}
		on:click={toggleValue}
	>
		{#if value}
			<svg
				class="absolute -top-2 left-1"
				width="31"
				height="24"
				viewBox="0 0 31 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					in:draw={{ duration: 300, easing: circInOut }}
					stroke-width="2"
					d="M1 16L8 23L30.5 0.5"
					stroke="#06B6D4"
				/>
			</svg>
		{:else}
			<svg
				class="absolute left-1 top-1"
				width="14"
				height="14"
				viewBox="0 0 24 25"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					in:draw={{ duration: 150, easing: circInOut }}
					stroke-width="4"
					d="M0.5 1L23.5 24"
					stroke="#71717A"
				/>
				<path
					in:draw={{ delay: 150, duration: 150, easing: circInOut }}
					stroke-width="4"
					d="M23.5 1L0.5 24"
					stroke="#71717A"
				/>
			</svg>
		{/if}
	</button>
	<div>
		<slot />
	</div>
</div>
