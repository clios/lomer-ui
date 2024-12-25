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

<OnThisPage>
	<OnThisPageBtn id="1" title="Setup" />
	<OnThisPageSubBtn id="1.1" title="Dark Mode" />
	<OnThisPageSubBtn id="1.2" title="That's it!" />
</OnThisPage>

<div class="mx-auto flex flex-col gap-4 lg:pt-4 xl:pr-80 2xl:w-[1000px]">
	<PageHeader
		title="Installation"
		sub="Docs"
		info="Getting started with lomer-ui is simple!"
	/>

	<Alert class="mt-8 flex gap-2">
		<Icon icon="mdi:terminal-line" width={24} />
		<div class="w-full">
			<p class="mb-2 font-semibold">Using tailwindcss v3?</p>
			<p class="mb-2">Run this command to upgrade v3 to v4.</p>
			<Cli code={`npx @tailwindcss/upgrade@next`} />
			<p class="mt-2">
				See <Link
					class="underline"
					target="_blank"
					href="https://tailwindcss.com/docs/v4-beta#upgrading-from-v3"
				>
					Tailwind CSS Upgrading from v3
				</Link> for more details.
			</p>
		</div>
	</Alert>

	<Title id="1">Setup</Title>

	<SubTitle id="1.1">
		<span class="font-mono">1.</span> Dark Mode
	</SubTitle>
	<StepperPanel>
		<p class="mt-4">Use a selector-based strategy.</p>
		<Code code={`@variant dark (&:where(.dark, .dark *));`} language="less" />
		<p>
			See <Link
				class="underline"
				target="_blank"
				href="https://tailwindcss.com/docs/v4-beta#configuring-dark-mode"
			>
				Tailwind CSS v4 Dark Mode
			</Link> for more details.
		</p>
	</StepperPanel>

	<SubTitle id="1.2">
		<span class="font-mono">2.</span> That's it!
	</SubTitle>
	<StepperPanel final>
		<p>
			Start adding <Link class="underline" href="/components/accordion">
				components
			</Link>.
		</p>
		<Cli code="npx lomer-ui add" />
		<p class="mt-2">Or you can also specify a component.</p>
		<Cli code="npx lomer-ui add button" />
		<Code
			code={`import Button from '$lib/components/ui/button.svelte'`}
			language="javascript"
		/>
		<Code code={`<Button>Button</Button>`} language="xml" />
		<Preview>
			<Button>Button</Button>
		</Preview>
	</StepperPanel>

	<PageFooter
		prevLabel="Introduction"
		prevLink="/docs/introduction"
		nextLabel="Dark Mode"
		nextLink="/docs/dark-mode"
	/>
</div>
