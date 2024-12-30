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

	import { setTheme, theme } from 'mode-watcher';
	import Button from '$lib/button.svelte';

	function cycleTheme() {
		if ($theme === 'cyan') {
			setTheme('orange');
		} else {
			setTheme('cyan');
		}
	}
</script>

<svelte:head>
	<title>Theming . lomer-ui</title>
</svelte:head>

<OnThisPage>
	<OnThisPageBtn id="1" title="Concept" />
	<OnThisPageBtn id="2" title="FAQ" />
</OnThisPage>

<div class="mx-auto flex flex-col gap-4 lg:pt-4 xl:pr-80 2xl:w-[1000px]">
	<PageHeader
		title="Theming"
		sub="Docs"
		info="Adding theme to your site using mode-watcher."
	/>

	<Button variant="primary" onclick={cycleTheme}>{$theme}'yow'</Button>
</div>
