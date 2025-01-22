<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	type Props = {
		caret?: boolean;
		children?: Snippet;
		class?: string;
		isLoading?: boolean;
	} & HTMLAnchorAttributes;

	let {
		caret = false,
		children,
		class: className,
		isLoading = false,
		...props
	}: Props = $props();
</script>

<a
	class={twMerge(
		// BASE
		'group', // group
		'relative', // positioning
		'underline', // text
		'focus:text-primary focus:outline-hidden', // focusing
		'hover:text-primary', // hovering
		'active:outline-2 active:outline-offset-0', // active

		className
	)}
	{...props}
>
	<span class="relative">
		{#if caret}
			{@render IconCaret()}
		{/if}
		{#if isLoading}
			{@render IconLoading()}
		{/if}
		{@render children?.()}
	</span>
</a>

<!-- ICON CARET -->
{#snippet IconCaret()}
	<svg
		class="absolute -left-6 hidden group-hover:block group-focus:block"
		xmlns="http://www.w3.org/2000/svg"
		width="16"
		height="18"
		viewBox="0 0 24 24"
	>
		<path fill="currentColor" d="m12 8l10 8l-10 8z" />
	</svg>
{/snippet}

<!-- ICON LOADING -->
{#snippet IconLoading()}
	<svg
		class="text-primary absolute right-1/2 -translate-y-4 translate-x-1/2"
		xmlns="http://www.w3.org/2000/svg"
		width="32"
		height="32"
		viewBox="0 0 24 24"
	>
		<circle cx="18" cy="12" r="0" fill="currentColor">
			<animate
				attributeName="r"
				begin=".67"
				calcMode="spline"
				dur="1s"
				keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
				repeatCount="indefinite"
				values="0;2;0;0"
			/>
		</circle>
		<circle cx="12" cy="12" r="0" fill="currentColor">
			<animate
				attributeName="r"
				begin=".33"
				calcMode="spline"
				dur="1s"
				keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
				repeatCount="indefinite"
				values="0;2;0;0"
			/>
		</circle>
		<circle cx="6" cy="12" r="0" fill="currentColor">
			<animate
				attributeName="r"
				begin="0"
				calcMode="spline"
				dur="1s"
				keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
				repeatCount="indefinite"
				values="0;2;0;0"
			/>
		</circle>
	</svg>
{/snippet}
