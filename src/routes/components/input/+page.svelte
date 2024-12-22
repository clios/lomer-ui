<script lang="ts">
	import Cli from '$site/cli.svelte';
	import Code from '$site//code.svelte';
	import ComponentCodeButton from '$site/component-code-button.svelte';
	import HeroSection from './hero-section.svelte';
	import Input from '$lib/input.svelte';
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
	<OnThisPageSubBtn id="3.1" title="Loading" />
	<OnThisPageSubBtn id="3.2" title="Disabled" />
	<OnThisPageSubBtn id="3.3" title="Read only" />
</OnThisPage>

<div class="flex flex-col gap-2 xl:pr-80">
	<PageHeader
		title="Input"
		sub="Component"
		info="A clear and simple way to collect user data."
	/>
	<HeroSection />

	<!-- INSTALLATION -->
	<Title id="1">Installation</Title>
	<Cli code={`npx lomer-ui add input`} />
	<ComponentCodeButton
		link="https://github.com/clios/lomer-ui/blob/main/src/lib/input.svelte"
	/>

	<!-- USAGE -->
	<Title id="2">Usage</Title>
	<p>Bind <Prop>value</Prop> property to reflect input's value.</p>
	<Code
		code={`import Input from '$lib/components/ui/input.svelte'` +
			`\nlet value = $state('')`}
		language="javascript"
	/>
	<Code
		code={`<div class="flex flex-col items-center gap-4">` +
			`\n\t<Input bind:value />` +
			`\n\t<p>Value: {value || 'N/A'}</p>` +
			`\n</div>`}
	/>
	<Preview>
		<div class="flex flex-col items-center gap-4">
			<Input bind:value />
			<p>Value: {value || 'N/A'}</p>
		</div>
	</Preview>

	<!-- EXAMPLES -->
	<Title id="3">Examples</Title>

	<!-- LOADING -->
	<SubTitle id="3.1">Loading</SubTitle>
	<p>Add <Prop>isLoading</Prop> property.</p>
	<Code code={`<Input isLoading value="lomer-ui" />`} />
	<Preview>
		<Input isLoading value="lomer-ui" />
	</Preview>

	<!-- DISABLED -->
	<SubTitle id="3.2">Disabled</SubTitle>
	<p>Add <Prop>isDisabled</Prop> property.</p>
	<Code code={`<Input isDisabled value="lomer-ui" />`} />
	<Preview>
		<Input isDisabled value="lomer-ui" />
	</Preview>

	<!-- READ ONLY -->
	<SubTitle id="3.3">Read only</SubTitle>
	<p>Add <Prop>isReadOnly</Prop> property.</p>
	<Code code={`<Input isReadOnly value="lomer-ui" />`} />
	<Preview>
		<Input isReadOnly value="lomer-ui" />
	</Preview>

	<PageFooter
		prevLabel="Field"
		prevLink="/components/field"
		nextLabel="Link"
		nextLink="/components/link"
	/>
</div>
