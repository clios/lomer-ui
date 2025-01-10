<script lang="ts">
	import Link from '$lib/link.svelte';
	import { page } from '$app/stores';
	import { twMerge } from 'tailwind-merge';

	type Props = {
		status?: 'new' | 'draft';
		label: string;
		href: string;
		onclick?: () => void;
	};

	let { label, href, status, onclick }: Props = $props();
</script>

<Link
	{href}
	{onclick}
	caret
	class={twMerge(
		'items-center pl-8 no-underline',
		$page.url.pathname === href && 'text-primary'
	)}
>
	{label}
	{#if status === 'new'}
		<span class="text-bg dark:text-fg rounded bg-green-600 px-1 text-xs">
			NEW
		</span>
	{/if}
</Link>
