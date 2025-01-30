<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';
	import IconSpinner from './icon-spinner.svelte';
	import IconCheck from './icon-check.svelte';
	import IconCross from './icon-cross.svelte';

	type Props = {
		children?: Snippet;
		class?: string;
		loading?: boolean;
		disabled?: boolean;
		label?: string;
	} & HTMLInputAttributes;

	let {
		children,
		class: className,
		loading = false,
		disabled = false,
		checked = $bindable(false),
		label,
		...props
	}: Props = $props();
</script>

<div
	class={twMerge(
		'text-fg',
		loading && 'text-disabled cursor-not-allowed',
		disabled && 'text-disabled cursor-not-allowed'
	)}
>
	<label class={twMerge('flex cursor-pointer items-center')}>
		<!-- HIDE CHECKBOX -->
		<input
			type="checkbox"
			class="appearance-none"
			disabled={loading || disabled}
			bind:checked
			{...props}
		/>

		<!-- BOX -->
		<button
			class={twMerge(
				// BASE
				'grid min-h-6 min-w-6 place-content-center rounded border', // box model
				'outline-primary mr-2 cursor-pointer outline-offset-2', // visual
				'hover:outline focus:outline',
				loading && 'outline-none',
				disabled && 'outline-none'
			)}
			onclick={() => (checked = !checked)}
			disabled={loading || disabled}
		>
			<div class="pointer-events-none size-3">
				{#if loading}
					<IconSpinner />
				{:else if checked}
					<IconCheck class={disabled ? 'text-disabled' : 'text-primary'} />
				{:else}
					<IconCross />
				{/if}
			</div>
		</button>

		{label}
	</label>

	{#if children}
		<div class="ml-8">
			{@render children?.()}
		</div>
	{/if}
</div>
