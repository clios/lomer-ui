<script lang="ts">
	import Checkbox from '$lib/checkbox.svelte';
	import Cli from '$site//cli.svelte';
	import Code from '$site//code.svelte';
	import ComponentCodeButton from '$site/component-code-button.svelte';
	import HeroSection from './hero-section.svelte';
	import OnThisPage from '$site/on-this-page.svelte';
	import OnThisPageBtn from '$site/on-this-page__btn.svelte';
	import OnThisPageSubBtn from '$site/on-this-page__sub-btn.svelte';
	import PageFooter from '$site/page-footer.svelte';
	import PageHeader from '$site//page-header.svelte';
	import Preview from '$site/preview.svelte';
	import Prop from '$site//prop.svelte';
	import SubTitle from '$site//sub-title.svelte';
	import Title from '$site//title.svelte';

	let value = $state(false);
</script>

<svelte:head>
	<title>Checkbox . lomer-ui</title>
</svelte:head>

<OnThisPage>
	<OnThisPageBtn id="1" title="Installation" />
	<OnThisPageBtn id="2" title="Usage" />
	<OnThisPageBtn id="3" title="Examples" />
	<OnThisPageSubBtn id="3.1" title="Content" />
	<OnThisPageSubBtn id="3.2" title="Loading" />
	<OnThisPageSubBtn id="3.3" title="Disabled" />
	<OnThisPageSubBtn id="3.4" title="Read only" />
</OnThisPage>

<div class="mx-auto flex flex-col gap-4 lg:pt-4 xl:pr-80 2xl:w-[1000px]">
	<PageHeader title="Check" sub="Component" info="Toggle options on or off." />
	<HeroSection />

	<!-- INSTALLATION -->
	<Title id="1">Installation</Title>
	<Cli code={`npx lomer-ui add checkbox`} />
	<ComponentCodeButton
		link="https://github.com/clios/lomer-ui/blob/main/src/lib/checkbox.svelte"
	/>

	<!-- USAGE -->
	<Title id="2">Usage</Title>
	<p>Bind <Prop>value</Prop> property to reflect checkbox's value.</p>
	<Code
		code={`import Checkbox from '$lib/components/ui/checkbox.svelte'` +
			`\nlet value = $state(false)`}
		language="javascript"
	/>
	<Code
		code={`<Checkbox bind:value>Hit me!</Checkbox>` + `\n<p>Value: {value}</p>`}
	/>
	<Preview class="flex-col items-center gap-4">
		<Checkbox bind:value>Hit me!</Checkbox>
		<p>Value: {value}</p>
	</Preview>

	<!-- EXAMPLES -->
	<Title id="3">Examples</Title>

	<!-- CONTENT -->
	<SubTitle id="3.1">Content</SubTitle>
	<Code
		code={`<Checkbox>` +
			`\n\t<p class="font-semibold">Terms & Conditions</p>` +
			`\n\t<p class="text-zinc-600 dark:text-zinc-400">` +
			`\n\t\tI Agree even without reading the terms and conditions.` +
			`\n\t</p>` +
			`\n</Checkbox>`}
		language="xml"
	/>
	<Preview>
		<Checkbox>
			<p class="font-semibold">Terms & Conditions</p>
			<p class="text-zinc-600 dark:text-zinc-400">
				I Agree even without reading the terms and conditions.
			</p>
		</Checkbox>
	</Preview>

	<!-- LOADING -->
	<SubTitle id="3.2">Loading</SubTitle>
	<p>Add <Prop>isLoading</Prop> property.</p>
	<Code code={`<Checkbox isLoading>` + `\n\t...` + `\n</Checkbox>`} />
	<Preview>
		<Checkbox isLoading>
			<p class="font-semibold">Terms & Conditions</p>
			<p class="text-zinc-600 dark:text-zinc-400">
				I Agree even without reading the terms and conditions.
			</p>
		</Checkbox>
	</Preview>

	<!-- DISABLED -->
	<SubTitle id="3.3">Disabled</SubTitle>
	<p>Add <Prop>isDisabled</Prop> property.</p>
	<Code code={`<Checkbox isDisabled>` + `\n\t...` + `\n</Checkbox>`} />
	<Preview>
		<Checkbox isDisabled>
			<p class="font-semibold">Terms & Conditions</p>
			<p class="text-zinc-600 dark:text-zinc-400">
				I Agree even without reading the terms and conditions.
			</p>
		</Checkbox>
		<Checkbox value={true} isDisabled>
			<p class="font-semibold">Terms & Conditions</p>
			<p class="text-zinc-600 dark:text-zinc-400">
				I Agree even without reading the terms and conditions.
			</p>
		</Checkbox>
	</Preview>

	<!-- READ ONLY -->
	<SubTitle id="3.4">Read only</SubTitle>
	<p>Add <Prop>isReadOnly</Prop> property.</p>
	<Code code={`<Checkbox isReadOnly>` + `\n\t...` + `\n</Checkbox>`} />
	<Preview>
		<Checkbox isReadOnly>
			<p class="font-semibold">Terms & Conditions</p>
			<p class="text-zinc-600 dark:text-zinc-400">
				I Agree even without reading the terms and conditions.
			</p>
		</Checkbox>
		<Checkbox value={true} isReadOnly>
			<p class="font-semibold">Terms & Conditions</p>
			<p class="text-zinc-600 dark:text-zinc-400">
				I Agree even without reading the terms and conditions.
			</p>
		</Checkbox>
	</Preview>

	<PageFooter
		prevLabel="Card Picker"
		prevLink="/components/card-picker"
		nextLabel="Dialog"
		nextLink="/components/dialog"
	/>
</div>
