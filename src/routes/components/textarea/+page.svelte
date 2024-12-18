<script lang="ts">
	import Input from '$lib/input.svelte';
	import Textarea from '$lib/textarea.svelte';
	import Code from '$site//code.svelte';
	import Cli from '$site/cli.svelte';
	import ComponentCodeButton from '$site/component-code-button.svelte';
	import OnThisPage from '$site/on-this-page.svelte';
	import OnThisPageBtn from '$site/on-this-page__btn.svelte';
	import OnThisPageSubBtn from '$site/on-this-page__sub-btn.svelte';
	import PageHeader from '$site/page-header.svelte';
	import Preview from '$site/preview.svelte';
	import Prop from '$site/prop.svelte';
	import SubTitle from '$site/sub-title.svelte';
	import Title from '$site/title.svelte';
	import HeroSection from './hero-section.svelte';

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
		title="Textarea"
		sub="Component"
		info="Capture multi-line text with ease."
	/>
	<HeroSection />

	<!-- INSTALLATION -->
	<Title id="1">Installation</Title>
	<Cli code={`npx lomer-ui add textarea`} />
	<ComponentCodeButton
		link="https://github.com/clios/lomer-ui/blob/main/src/lib/textarea.svelte"
	/>

	<!-- USAGE -->
	<Title id="2">Usage</Title>
	<p>Bind <Prop>value</Prop> property to reflect textarea's value.</p>
	<Code
		code={`import Textarea from '$lib/components/ui/textarea.svelte'` +
			`\nlet value = $state('')`}
		language="javascript"
	/>
	<Code
		code={`<div class="flex flex-col items-center gap-4">` +
			`\n\t<Textarea bind:value />` +
			`\n\t<p>Value: {value || 'N/A'}</p>` +
			`\n</div>`}
	/>
	<Preview>
		<div class="flex flex-col items-center gap-4">
			<Textarea bind:value />
			<p>Value: {value || 'N/A'}</p>
		</div>
	</Preview>

	<!-- EXAMPLES -->
	<Title id="3">Examples</Title>

	<!-- LOADING -->
	<SubTitle id="3.1">Loading</SubTitle>
	<p>Add <Prop>isLoading</Prop> property.</p>
	<Code code={`<Textarea isLoading value="lomer-ui" />`} />
	<Preview>
		<Textarea isLoading value="lomer-ui" />
	</Preview>

	<!-- DISABLED -->
	<SubTitle id="3.2">Disabled</SubTitle>
	<p>Add <Prop>isDisabled</Prop> property.</p>
	<Code code={`<Textarea isDisabled value="lomer-ui" />`} />
	<Preview>
		<Textarea isDisabled value="lomer-ui" />
	</Preview>

	<!-- READ ONLY -->
	<SubTitle id="3.3">Read only</SubTitle>
	<p>Add <Prop>isReadOnly</Prop> property.</p>
	<Code code={`<Textarea isReadOnly value="lomer-ui" />`} />
	<Preview>
		<Textarea isReadOnly value="lomer-ui" />
	</Preview>
</div>
