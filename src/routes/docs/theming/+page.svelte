<script>
	import Accordion from '$lib/accordion.svelte';
	import Icon from '@iconify/svelte';
	import Link from '$lib/link.svelte';
	import OnThisPage from '$site/on-this-page.svelte';
	import OnThisPageBtn from '$site/on-this-page__btn.svelte';
	import PageFooter from '$site/page-footer.svelte';
	import PageHeader from '$site/page-header.svelte';
	import Title from '$site/title.svelte';
	import { twMerge } from 'tailwind-merge';
	import Code from '$site/code.svelte';
	import Val from '$site/val.svelte';
	import Button from '$lib/button.svelte';
</script>

<svelte:head>
	<title>Theming . lomer-ui</title>
</svelte:head>

<OnThisPage>
	<OnThisPageBtn id="1" title="Convention" />
	<OnThisPageBtn id="2" title="CSS Variables" />
	<OnThisPageBtn id="3" title="Default" />
</OnThisPage>

<div class="mx-auto flex flex-col gap-4 lg:pt-4 xl:pr-80 2xl:w-[1000px]">
	<PageHeader
		title="Theming"
		sub="Docs"
		info="Customize styles to match your vibe."
	/>

	<Title id="1">Convention</Title>
	<p>
		The most common and straightforward approach is to use background and
		foreground for color variables. To keep our code concise and clean, we
		simplify these to <Val>bg</Val> and <Val>fg</Val>.
	</p>

	<div class="rounded-card border p-4">
		<Button>Yo</Button>
	</div>
</div>
