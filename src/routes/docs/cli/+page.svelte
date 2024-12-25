<script lang="ts">
	import Alert from '$lib/alert.svelte';
	import Cli from '$site/cli.svelte';
	import Icon from '@iconify/svelte';
	import OnThisPage from '$site/on-this-page.svelte';
	import OnThisPageBtn from '$site/on-this-page__btn.svelte';
	import OnThisPageSubBtn from '$site/on-this-page__sub-btn.svelte';
	import PageFooter from '$site/page-footer.svelte';
	import PageHeader from '$site/page-header.svelte';
	import StepperPanel from '$site/stepper-panel.svelte';
	import SubTitle from '$site/sub-title.svelte';
	import Title from '$site/title.svelte';
</script>

<OnThisPage>
	<OnThisPageBtn id="1" title="Overview" />
	<OnThisPageBtn id="2" title="Usage" />
	<OnThisPageBtn id="3" title="Commands" />
	<OnThisPageSubBtn id="3.1" title="lomer-ui add" />
	<OnThisPageSubBtn id="3.1" title="lomer-ui reset" />
</OnThisPage>

<div class="mx-auto flex flex-col gap-4 lg:pt-4 xl:pr-80 2xl:w-[1000px]">
	<PageHeader title="CLI" sub="Docs" info="Quickly startup your components." />
	<Title id="1">Overview</Title>
	<p>
		The lomer-ui command-line interface (CLI) is a toolkit designed to make
		copy-pasting components effortless and straightforward.
	</p>
	<p class="flex items-start gap-2">
		<Icon class="text-green-500" icon="mdi:check" width="24" /> Automatically detects
		and installs Tailwind CSS using the SvelteKit CLI if it's not already set up.
	</p>
	<p class="flex items-start gap-2">
		<Icon class="text-green-500" icon="mdi:check" width="24" /> Automatically detects
		and installs Tailwind Merge using npm if required.
	</p>

	<Title id="2">Usage</Title>
	<p>The simplest way to run lomer-ui is using npx:</p>
	<Cli code="npx lomer-ui <command> <args>" />

	<Title id="3">Commands</Title>
	<SubTitle id="3.1">lomer-ui add</SubTitle>
	<StepperPanel final>
		<p>To quickly select and add multiple components, use:</p>
		<Cli code="npx lomer-ui add" />
		<p>To add a specific component, use:</p>
		<Cli code="npx lomer-ui add [component]" />
	</StepperPanel>

	<SubTitle id="3.2">lomer-ui reset</SubTitle>
	<StepperPanel final>
		<p>To reset all existing components, use:</p>
		<Cli code="npx lomer-ui reset" />
		<Alert class="flex gap-2">
			<Icon icon="mdi:terminal-line" width={24} />
			<div>
				<p class="font-semibold">Notice</p>
				<p>
					This action will replace all existing components in
					<code>./src/lib/components/ui</code>.
				</p>
			</div>
		</Alert>
		<p>You might wonder, "What about the changes I’ve made?"</p>
		<p>
			This project isn’t intended for you to use the components exactly as they
			are.
		</p>
		<p>Instead, it helps you kickstart building your own custom components.</p>
	</StepperPanel>

	<PageFooter
		prevLabel="Dark Mode"
		prevLink="/docs/dark-mode"
		nextLabel="Accordion"
		nextLink="/components/accordion"
	/>
</div>
