<script lang="ts">
	import Cli from '$site/cli.svelte';
	import Code from '$site//code.svelte';
	import ComponentCodeButton from '$site/component-code-button.svelte';
	import HeroSection from './hero-section.svelte';
	import OnThisPage from '$site/on-this-page.svelte';
	import OnThisPageBtn from '$site/on-this-page__btn.svelte';
	import OnThisPageSubBtn from '$site/on-this-page__sub-btn.svelte';
	import PageFooter from '$lib/components/templates/page-footer.svelte';
	import PageHeader from '$lib/components/templates/page-header.svelte';
	import Preview from '$site/preview.svelte';
	import Prop from '$site/prop.svelte';
	import Radio from '$lib/components/core/radio.svelte';
	import SubTitle from '$site/sub-title.svelte';
	import Title from '$site/title.svelte';

	let value = $state('free');
	let disabledValue = $state('x');
</script>

<svelte:head>
	<title>Radio . lomer-ui</title>
</svelte:head>

<OnThisPage>
	<OnThisPageBtn id="1" title="Installation" />
	<OnThisPageBtn id="2" title="Usage" />
	<OnThisPageBtn id="3" title="Examples" />
	<OnThisPageSubBtn id="3.1" title="Loading" />
	<OnThisPageSubBtn id="3.2" title="Disabled" />
	<OnThisPageSubBtn id="3.3" title="Read only" />
</OnThisPage>

<div class="mx-auto flex flex-col gap-4 lg:pt-4 xl:pr-80 2xl:w-[1000px]">
	<PageHeader
		title="Radio"
		sub="Component"
		info="Choose one option from a group with a click!"
	/>
	<HeroSection />

	<!-- INSTALLATION -->
	<Title id="1">Installation</Title>
	<Cli code={`npx lomer-ui add radio`} />
	<ComponentCodeButton
		link="https://github.com/clios/lomer-ui/blob/main/src/lib/radio.svelte"
	/>

	<!-- USAGE -->
	<Title id="2">Usage</Title>
	<p>Bind <Prop>value</Prop> property to reflect radio's value.</p>
	<Code
		code={`import Radio from '$lib/components/core/radio.svelte'` +
			`\nlet value = $state('');`}
		language="javascript"
	/>
	<Code
		code={`<div class="flex flex-col">` +
			`\n\t<Radio bind:value radioValue="free">Free</Radio>` +
			`\n\t<Radio bind:value radioValue="pro">Pro</Radio>` +
			`\n\t<Radio bind:value radioValue="enterprise">Enterprise</Radio>` +
			`\n</div>` +
			`\n<p>Value: {value || 'N/A'}</p>`}
	/>
	<Preview class="flex-col items-center gap-4">
		<div class="flex flex-col">
			<Radio bind:value radioValue="free">Free</Radio>
			<Radio bind:value radioValue="pro">Pro</Radio>
			<Radio bind:value radioValue="enterprise">Enterprise</Radio>
		</div>
		<p>Value: {value || 'N/A'}</p>
	</Preview>

	<!-- EXAMPLES -->
	<Title id="3">Examples</Title>

	<!-- LOADING -->
	<SubTitle id="3.1">Loading</SubTitle>
	<p>Add <Prop>isLoading</Prop> property.</p>
	<Code code={`<Radio isLoading>` + `\n\tRadio` + `\n</Radio>`} />
	<Preview>
		<Radio isLoading>Radio</Radio>
	</Preview>

	<!-- DISABLED -->
	<SubTitle id="3.2">Disabled</SubTitle>
	<p>Add <Prop>isDisabled</Prop> property.</p>
	<Code code={`<Radio isDisabled>` + `\n\tRadio` + `\n</Radio>`} />
	<Preview>
		<Radio isDisabled bind:value={disabledValue} radioValue="x">Radio</Radio>
		<Radio isDisabled bind:value={disabledValue} radioValue="y">Radio</Radio>
	</Preview>

	<!-- READ ONLY -->
	<SubTitle id="3.3">Read only</SubTitle>
	<p>Add <Prop>isReadyOnly</Prop> property.</p>
	<Code code={`<Radio isReadOnly>` + `\n\tRadio` + `\n</Radio>`} />
	<Preview>
		<Radio isReadOnly>Radio</Radio>
	</Preview>

	<PageFooter
		prevLabel="Link"
		prevLink="/components/link"
		nextLabel="Scroll Area"
		nextLink="/components/scroll-area"
	/>
</div>
