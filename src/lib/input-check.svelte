<script lang="ts">
	import clsx from 'clsx';
	import { circInOut } from 'svelte/easing';
	import { draw } from 'svelte/transition';

	export let value: boolean | undefined | null = false;
	export let disabled = false;
	export { className as class };

	let className = '';

	function toggleValue() {
		value = !value;
	}
</script>

<div class={clsx('flex items-start text-left', className)}>
	<button
		type="button"
		{disabled}
		class={clsx(
			'relative flex w-full pl-8 text-left',
			'group rounded focus:outline-none',
			'disabled:cursor-not-allowed'
		)}
		on:click={toggleValue}
	>
		<div
			class={clsx(
				'absolute left-0 top-0 size-[24px] rounded  outline-cyan-500 ',
				'bg-zinc-50 dark:bg-zinc-950', // color
				'border dark:border-zinc-700', // border
				'shadow-sm dark:shadow-none', // shadow
				'group-focus:outline group-focus:outline-1 group-focus:outline-offset-2',
				'group-hover:outline group-hover:outline-1 group-hover:outline-offset-2',
				'group-disabled:border-zinc-500 group-disabled:outline-none'
			)}
		>
			{#if value}
				<svg
					class="relative left-1 top-1"
					width="14"
					height="14"
					viewBox="0 0 31 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						in:draw={{ duration: 300, easing: circInOut }}
						stroke-width="5"
						d="M1 16L8 23L30.5 0.5"
						stroke="#14B8A6"
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
						stroke="#EF4444"
					/>
					<path
						in:draw={{ delay: 150, duration: 150, easing: circInOut }}
						stroke-width="4"
						d="M23.5 1L0.5 24"
						stroke="#EF4444"
					/>
				</svg>
			{/if}
		</div>
		<div class="ml-1 group-disabled:text-zinc-500">
			<slot />
		</div>
	</button>
</div>
