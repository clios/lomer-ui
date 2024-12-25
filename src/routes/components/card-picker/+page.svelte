<script lang="ts">
	import CardPicker from '$lib/card-picker.svelte';
	import Cli from '$site/cli.svelte';
	import Code from '$site/code.svelte';
	import ComponentCodeButton from '$site/component-code-button.svelte';
	import HeroSection from './hero-section.svelte';
	import OnThisPage from '$site/on-this-page.svelte';
	import OnThisPageBtn from '$site/on-this-page__btn.svelte';
	import OnThisPageSubBtn from '$site/on-this-page__sub-btn.svelte';
	import PageFooter from '$site/page-footer.svelte';
	import PageHeader from '$site/page-header.svelte';
	import Preview from '$site/preview.svelte';
	import Prop from '$site/prop.svelte';
	import SubTitle from '$site/sub-title.svelte';
	import Title from '$site/title.svelte';

	let value = $state('');
</script>

<OnThisPage>
	<OnThisPageBtn id="1" title="Installation" />
	<OnThisPageBtn id="2" title="Usage" />
	<OnThisPageBtn id="3" title="Examples" />
	<OnThisPageSubBtn id="3.1" title="Indicator" />
	<OnThisPageSubBtn id="3.2" title="Loading" />
	<OnThisPageSubBtn id="3.3" title="Disabled" />
	<OnThisPageSubBtn id="3.4" title="Read only" />
</OnThisPage>

<div class="mx-auto flex flex-col gap-4 lg:pt-4 xl:pr-80 2xl:w-[1000px]">
	<PageHeader
		title="Card Picker"
		sub="Component"
		info="Select items with a stylish card interface."
	/>
	<HeroSection />

	<!-- INSTALLATION -->
	<Title id="1">Installation</Title>
	<Cli code={`npx lomer-ui add card-picker`} />
	<ComponentCodeButton
		link="https://github.com/clios/lomer-ui/blob/main/src/lib/card-picker.svelte"
	/>

	<Title id="2">Usage</Title>
	<p>Bind <Prop>value</Prop> property to reflect card-picker's value.</p>
	<Code
		code={`import CardPicker from '$lib/components/ui/card-picker.svelte'` +
			`\nlet value = $state('');`}
		language="javascript"
	/>
	<Code
		code={`<div class="flex gap-4">` +
			`\n\t<CardPicker bind:value cardValue="card 1">` +
			`\n\t\t<p>Card 1</p>` +
			`\n\t</CardPicker>` +
			`\n\t<CardPicker bind:value cardValue="card 2">` +
			`\n\t\t<p>Card 2</p>` +
			`\n\t</CardPicker>` +
			`\n</div>` +
			`\n<p>Value: {value || 'N/A'}</p>`}
	/>
	<Preview class="flex-col items-center gap-4">
		<div class="flex gap-4">
			<CardPicker bind:value cardValue="card 1">
				<p>Card 1</p>
			</CardPicker>
			<CardPicker bind:value cardValue="card 2">
				<p>Card 2</p>
			</CardPicker>
		</div>
		<p>Value: {value || 'N/A'}</p>
	</Preview>

	<!-- EXAMPLES -->
	<Title id="3">Examples</Title>

	<!-- INDICATOR -->
	<SubTitle id="3.1">Indicator</SubTitle>
	<p>Add <Prop>indicator</Prop> property.</p>
	<p>Replace the svg in the component code to customize.</p>
	<Code
		code={`<CardPicker indicator>` + `\n\t<p>Card 1</p>` + `\n</CardPicker>`}
	/>
	<Preview>
		<CardPicker indicator>
			<p>Card 1</p>
		</CardPicker>
	</Preview>

	<!-- LOADING -->
	<SubTitle id="3.2">Loading</SubTitle>
	<p>Add <Prop>isLoading</Prop> property.</p>
	<Code
		code={`<CardPicker isLoading>` + `\n\t<p>Card 1</p>` + `\n</CardPicker>`}
	/>
	<Preview>
		<CardPicker isLoading>
			<p>Card 1</p>
		</CardPicker>
	</Preview>

	<!-- DISABLED -->
	<SubTitle id="3.3">Disabled</SubTitle>
	<p>Add <Prop>isDisabled</Prop> property.</p>
	<Code
		code={`<CardPicker isDisabled>` + `\n\t<p>Card 1</p>` + `\n</CardPicker>`}
	/>
	<Preview>
		<CardPicker isDisabled>
			<p>Card 1</p>
		</CardPicker>
	</Preview>

	<!-- READ ONLY -->
	<SubTitle id="3.4">Read only</SubTitle>
	<p>Add <Prop>isReadyOnly</Prop> property.</p>
	<Code
		code={`<CardPicker isReadOnly>` + `\n\t<p>Card 1</p>` + `\n</CardPicker>`}
	/>
	<Preview>
		<CardPicker isReadOnly>
			<p>Card 1</p>
		</CardPicker>
	</Preview>

	<PageFooter
		prevLabel="Button"
		prevLink="/components/button"
		nextLabel="Checkbox"
		nextLink="/components/checkbox"
	/>
</div>
