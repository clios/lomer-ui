<script>
	import Button from '$lib/button.svelte';
	import Cli from '$site//cli.svelte';
	import Code from '$site//code.svelte';
	import Link from '$lib/link.svelte';
	import OnThisPage from '$site/on-this-page.svelte';
	import OnThisPageBtn from '$site/on-this-page__btn.svelte';
	import OnThisPageSubBtn from '$site/on-this-page__sub-btn.svelte';
	import PageHeader from '$site//page-header.svelte';
	import Preview from '$site/preview.svelte';
	import StepperPanel from '$site/stepper-panel.svelte';
	import SubTitle from '$site/sub-title.svelte';
	import Title from '$site/title.svelte';
</script>

<OnThisPage>
	<OnThisPageBtn id="1" title="Setup your project" />
	<OnThisPageSubBtn id="1.1" title="Initialize lomer-ui" />
	<OnThisPageSubBtn id="1.2" title="That's it!" />
	<OnThisPageBtn id="2" title="Tips" />
</OnThisPage>

<div class="flex flex-col gap-4 pr-80">
	<PageHeader
		title="Installation"
		sub="Docs"
		info="Just follow these simple steps."
	/>

	<Title id="1">Setup your project</Title>

	<SubTitle id="1.1">
		<span class="font-mono">1.</span> Initialize lomer-ui
	</SubTitle>
	<StepperPanel>
		<p>Just kidding, no setup required.</p>
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
</div>
