<script>
	import Alert from '$lib/alert.svelte';
	import Button from '$lib/button.svelte';
	import Cli from '$site//cli.svelte';
	import Code from '$site//code.svelte';
	import Icon from '@iconify/svelte';
	import Link from '$lib/link.svelte';
	import OnThisPage from '$site/on-this-page.svelte';
	import OnThisPageBtn from '$site/on-this-page__btn.svelte';
	import OnThisPageSubBtn from '$site/on-this-page__sub-btn.svelte';
	import PageFooter from '$site/page-footer.svelte';
	import PageHeader from '$site//page-header.svelte';
	import Preview from '$site/preview.svelte';
	import StepperPanel from '$site/stepper-panel.svelte';
	import SubTitle from '$site/sub-title.svelte';
	import Title from '$site/title.svelte';
</script>

<svelte:head>
	<title>Installation . lomer-ui</title>
</svelte:head>

<OnThisPage>
	<OnThisPageBtn id="1" title="Setup" />
</OnThisPage>

<div class="mx-auto flex flex-col gap-4 lg:pt-4 xl:pr-80 2xl:w-[1000px]">
	<PageHeader
		title="Installation"
		sub="Docs"
		info="Getting started with lomer-ui is simple!"
	/>

	<Alert class="mt-8 flex gap-2 border" title="Using tailwindcss v3?">
		<p class="text-muted mb-2">Run this command to upgrade v3 to v4.</p>
		<Cli code={`npx @tailwindcss/upgrade@next`} />
		<p class="text-muted mt-2">
			See <Link
				class="underline"
				target="_blank"
				href="https://tailwindcss.com/docs/v4-beta#upgrading-from-v3"
			>
				Tailwind CSS Upgrading from v3
			</Link> for more details.
		</p>
	</Alert>

	<Title id="1">Setup</Title>

	<p class="mt-4">Simply run:</p>
	<Cli code="npx lomer-ui init" />
	<div class="text-muted">
		<p>This will check and install automatically dependencies needed.</p>
		<p>Only tailwind-merge will be installed as package dependency.</p>
	</div>

	<PageFooter
		prevLabel="Introduction"
		prevLink="/docs/introduction"
		nextLabel="Dark Mode"
		nextLink="/docs/dark-mode"
	/>
</div>
