<script lang="ts">
	import Input from '$lib/input.svelte';
	import Code from '$site//code.svelte';
	import Cli from '$site/cli.svelte';
	import ComponentCodeButton from '$site/component-code-button.svelte';
	import OnThisPage from '$site/on-this-page.svelte';
	import OnThisPageBtn from '$site/on-this-page__btn.svelte';
	import OnThisPageSubBtn from '$site/on-this-page__sub-btn.svelte';
	import PageHeader from '$site/page-header.svelte';
	import Preview from '$site/preview.svelte';
	import Prop from '$site/prop.svelte';
	import Title from '$site/title.svelte';
	import HeroSection from './hero-section.svelte';

	let value = $state('');
</script>

<OnThisPage>
	<OnThisPageBtn id="1" title="Installation" />
	<OnThisPageBtn id="2" title="Usage" />
	<OnThisPageBtn id="3" title="Examples" />
	<OnThisPageSubBtn id="3.1" title="Value" />
	<OnThisPageSubBtn id="3.2" title="Icon" />
	<OnThisPageSubBtn id="3.3" title="Disabled" />
	<OnThisPageSubBtn id="3.4" title="Loading" />
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
	<Code code={`<Input bind:value />`} language="xml" />
	<Preview><Input bind:value /></Preview>
</div>
