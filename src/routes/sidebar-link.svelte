<script lang="ts">
	import Link from '$lib/link.svelte';
	import { page } from '$app/stores';
	import { twMerge } from 'tailwind-merge';

	type Props = {
		label: string;
		href: string;
	};

	let { label, href }: Props = $props();
</script>

<Link
	{href}
	caret
	class={twMerge(
		'pl-8 no-underline',
		$page.url.pathname === href && 'bg-zinc-100 dark:bg-zinc-800'
	)}
>
	{label}
</Link>
