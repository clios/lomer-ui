<script lang="ts">
	import clsx from 'clsx';
	import { circInOut } from 'svelte/easing';
	import { draw } from 'svelte/transition';

	export let id: string;
	export let name: string;
	export let value: (string | boolean) | null = '';
	export let variant: 'default' | 'card-picker' = 'default';
	export let radioValue: string | boolean | null;
	export let disabled = false;

	export { className as class };

	let className = '';
</script>

<div
	class={clsx(
		variant === 'default' && 'relative flex items-center',
		variant === 'card-picker' && 'relative',
		className
	)}
>
	<input
		class={clsx(
			variant === 'default' && 'peer appearance-none',
			variant === 'card-picker' && 'peer hidden appearance-none'
		)}
		{id}
		{name}
		type="radio"
		value={radioValue}
		{disabled}
		bind:group={value}
	/>

	<!-- CIRCLE -->
	{#if value !== radioValue}
		<div
			class={clsx(
				variant === 'default' &&
					'pointer-events-none absolute left-1 top-1 size-4 rounded-full border border-zinc-500',
				variant === 'default' &&
					'peer-hover:outline peer-hover:outline-1 peer-hover:outline-offset-2 peer-hover:outline-cyan-500',
				variant === 'default' && 'border dark:border-zinc-700', // border
				variant === 'default' && 'shadow-sm dark:shadow-none', // shadow
				variant === 'card-picker' && 'pointer-events-none hidden'
			)}
		></div>
	{/if}

	<!-- CHECK MARK -->
	{#if value === radioValue}
		<svg
			class={clsx(
				variant === 'default' &&
					'pointer-events-none absolute left-1 top-1 hidden peer-checked:block',
				variant === 'card-picker' &&
					'pointer-events-none absolute right-1 top-1 hidden peer-checked:block'
			)}
			width="18"
			height="14"
			viewBox="0 0 31 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				in:draw={{ duration: 300, easing: circInOut }}
				stroke-width="3"
				d="M1 16L8 23L30.5 0.5"
				stroke="#14B8A6"
			/>
		</svg>
	{/if}

	<label
		class={clsx(
			variant === 'default' &&
				'flex w-full items-center gap-3 pl-8 pr-1 hover:cursor-pointer hover:text-cyan-500 peer-checked:text-cyan-500',
			variant === 'card-picker' && 'flex p-2 hover:cursor-pointer',
			variant === 'card-picker' &&
				'hover:cursor-pointer hover:outline hover:outline-1 hover:outline-offset-2 hover:outline-cyan-500', // hover
			variant === 'card-picker' && 'rounded border  dark:border-zinc-700 ',
			variant === 'card-picker' && 'peer-checked:border-teal-500 peer-checked:dark:border-teal-500',
			variant === 'card-picker' && 'border dark:border-zinc-700', // border
			variant === 'card-picker' && 'shadow-sm dark:shadow-none' // shadow
		)}
		for={id}
	>
		<slot />
	</label>
</div>
