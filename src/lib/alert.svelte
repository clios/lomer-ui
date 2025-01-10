<script lang="ts">
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	type Props = {
		children?: Snippet;
		class?: string;
		icon?: Snippet;
		isClosable?: boolean;
		isOpen?: boolean;
		title?: string;
		variant?: 'default' | 'destructive';
	};

	let {
		children,
		class: className,
		icon,
		isClosable = false,
		isOpen = $bindable(true),
		title,
		variant = 'default'
	}: Props = $props();
</script>

{#if isOpen}
	<div
		class={twMerge(
			'bg-bg border-fg relative flex w-full items-center gap-4 rounded border p-3', // base

			// HAS TITLE
			'items-start',

			// CLOSABLE
			isClosable && 'pr-16',

			// STYLE
			className
		)}
	>
		{#if !icon}
			<div>{@render IconDefault()}</div>
		{:else}
			<div>{@render icon?.()}</div>
		{/if}

		<div>
			{#if title}
				<p class="font-semibold">{title}</p>
			{/if}
			{@render children?.()}
		</div>

		{#if isClosable}
			<button
				type="button"
				onclick={() => (isOpen = false)}
				class={twMerge(
					'absolute top-3 right-3 p-1', // layout and positioning
					'rounded-full bg-none', // bg and radius
					'outline-primary ring-offset-1 outline-offset-2 active:outline-2 active:outline-offset-0', // outline
					'cursor-pointer hover:outline focus:outline' // hover, focus, cursor
				)}
			>
				{@render IconClose()}
			</button>
		{/if}
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

{#snippet IconDefault()}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 20 20"
	>
		<rect width="20" height="20" fill="none" />
		<path
			fill="currentColor"
			d="M12.432 0c1.34 0 2.01.912 2.01 1.957c0 1.305-1.164 2.512-2.679 2.512c-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0M8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141c-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467c1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271c.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20"
		/>
	</svg>
{/snippet}
