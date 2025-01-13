<script>
	import Button from '$lib/button.svelte';
	import Cli from '$site//cli.svelte';
	import Code from '$site//code.svelte';
	import Component from '$site/component.svelte';
	import File from '$site/file.svelte';
	import Icon from '@iconify/svelte';
	import Link from '$lib/link.svelte';
	import OnThisPage from '$site/on-this-page.svelte';
	import OnThisPageBtn from '$site/on-this-page__btn.svelte';
	import OnThisPageSubBtn from '$site/on-this-page__sub-btn.svelte';
	import PageFooter from '$site/page-footer.svelte';
	import PageHeader from '$site/page-header.svelte';
	import Preview from '$site/preview.svelte';
	import StepperPanel from '$site/stepper-panel.svelte';
	import SubTitle from '$site/sub-title.svelte';
	import Title from '$site/title.svelte';
	import { toggleMode, mode } from 'mode-watcher';
	import Syntax from '$site/syntax.svelte';
</script>

<svelte:head>
	<title>Dark Mode . lomer-ui</title>
</svelte:head>

<OnThisPage>
	<OnThisPageBtn id="1" title="Usage" />
	<OnThisPageSubBtn id="1.1" title="Install mode-watcher" />
	<OnThisPageSubBtn id="1.2" title="Add ModeWatcher component" />
	<OnThisPageSubBtn id="1.3" title="That's it!" />
</OnThisPage>

<div class="mx-auto flex flex-col gap-4 lg:pt-4 xl:pr-80 2xl:w-[1000px]">
	<PageHeader
		title="Dark Mode"
		sub="Docs"
		info="Adding dark mode to your site using mode-watcher."
	/>

	<Title id="1">Usage</Title>

	<SubTitle id="1.1">
		<span class="font-mono">1.</span> Install mode-watcher
	</SubTitle>
	<StepperPanel>
		<Cli code="npm install mode-watcher" />
		<p>
			See <Link
				class="underline"
				target="_blank"
				href="https://mode-watcher.svecosystem.com"
			>
				Mode Watcher
			</Link> for details.
		</p>
	</StepperPanel>

	<SubTitle id="1.2">
		<span class="font-mono">2.</span> Add ModeWatcher component
	</SubTitle>
	<StepperPanel>
		<p>
			Add the <Component code="<ModeWatcher />" />
			component to your root
			<File>+layout.svelte</File> file.
		</p>
		<Syntax
			canCopy
			highlightedLines={[1, 5]}
			code={`<script\>
	import { ModeWatcher } from "mode-watcher";
	let { children } = $props();
</script>

<ModeWatcher defaultMode="system" />
{@render children()}`}
		/>
	</StepperPanel>

	<SubTitle id="1.3">
		<span class="font-mono">3.</span> That's it!
	</SubTitle>
	<StepperPanel final>
		<p>Use the toggleMode function and $mode to toggle:</p>
		<Syntax
			canCopy
			code={`<script\>
	import Button from '$lib/components/ui/button.svelte';
	import { toggleMode, mode } from 'mode-watcher';
</script>

<Button size="icon" onclick={toggleMode}>
	{#if $mode === 'light'}
		<Icon icon="line-md:moon-to-sunny-outline-loop-transition" />
	{:else}
		<Icon icon="line-md:sunny-outline-to-moon-alt-loop-transition" />
	{/if}
</Button>`}
		/>

		<Preview>
			<Button size="icon" onclick={toggleMode}>
				{#if $mode === 'light'}
					<Icon icon="line-md:moon-to-sunny-outline-loop-transition" />
				{:else}
					<Icon icon="line-md:sunny-outline-to-moon-alt-loop-transition" />
				{/if}
			</Button>
		</Preview>
	</StepperPanel>

	<PageFooter
		prevLabel="Installation"
		prevLink="/docs/installation"
		nextLabel="Theming"
		nextLink="/docs/theming"
	/>
</div>
