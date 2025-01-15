<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import Button from './button.svelte';
	import type { Snippet } from 'svelte';

	type Variant =
		| 'default'
		| 'inverted'
		| 'primary'
		| 'secondary'
		| 'destructive'
		| 'outline'
		| 'ghost';

	type Props = {
		children?: Snippet;
		isDisabled?: boolean;
		isLoading?: boolean;
		tabKey?: string;
		key?: string;
		size?: 'default' | 'icon' | 'small';
	};
	let {
		children,
		isDisabled = false,
		isLoading = false,
		tabKey = $bindable(''),
		size = 'default',
		key = '',
		...props
	}: Props = $props();

	function onclick() {
		tabKey = key;
	}
</script>

<Button
	class="grow justify-center outline-none sm:grow-0 sm:justify-start"
	variant={twMerge(tabKey === key ? 'inverted' : 'ghost') as Variant}
	{isDisabled}
	{isLoading}
	{size}
	{onclick}
	{...props}
>
	{@render children?.()}
</Button>
