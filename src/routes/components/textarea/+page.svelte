<script lang="ts">
	import Button from '$lib/button.svelte';
	import Cli from '$site//cli.svelte';
	import Code from '$site//code.svelte';
	import PageHeader from '$site//page-header.svelte';
	import Prop from '$site//prop.svelte';
	import SubTitle from '$site//sub-title.svelte';
	import Title from '$site//title.svelte';
	import { scrollToId } from '$site/helper.ts';
	import OnThisPage from '$site/on-this-page.svelte';
	import OnThisPageBtn from '$site/on-this-page__btn.svelte';
	import OnThisPageSubBtn from '$site/on-this-page__sub-btn.svelte';
	import Screen from '$site/screen.svelte';
	import Icon from '@iconify/svelte';
	import ComponentCodeButton from '$site/component-code-button.svelte';
	import Preview from '$site/preview.svelte';
	import Switch from '$lib/switch.svelte';
	import Textarea from '$lib/textarea.svelte';

	let value = false;
</script>

<OnThisPage>
	<OnThisPageBtn id="1" title="Installation" />
	<OnThisPageBtn id="2" title="Usage" />
	<OnThisPageBtn id="3" title="Examples" />
	<OnThisPageSubBtn id="3.1" title="Custom content" />
	<OnThisPageSubBtn id="3.2" title="Disabled" />
</OnThisPage>

<div class="flex flex-col gap-2 pr-80">
	<PageHeader
		title="Textarea"
		sub="Component"
		info="Turn me on like a light switch."
	/>

	<!-- INSTALLATION -->
	<Title id="1">Installation</Title>
	<Cli code={`npx lomer-ui add switch`} />
	<ComponentCodeButton
		link="https://github.com/clios/lomer-ui/blob/main/src/lib/switch.svelte"
	/>

	<!-- USAGE -->
	<Title id="2">Usage</Title>
	<p>Bind <Prop>value</Prop> property to reflect check's value.</p>
	<Code
		code={`import Switch from '$lib/components/ui/switch.svelte'` +
			`\nlet value = false`}
		language="javascript"
	/>
	<Code code={`<Switch label="Hit me!" bind:value />`} language="xml" />
	<Preview class="flex gap-4">
		<Textarea></Textarea>
	</Preview>

	<!-- EXAMPLES -->
	<Title id="3">Examples</Title>

	<!-- CUSTOM CONTENT -->
	<SubTitle id="3.1">Custom content</SubTitle>
	<Code
		code={`<Switch>` +
			`\n\t<p class="font-semibold">Terms & Conditions</p>` +
			`\n\t<p class="text-zinc-600 dark:text-zinc-400">` +
			`\n\t\tI Agree even without reading the terms and conditions.` +
			`\n\t</p>` +
			`\n</Switch>`}
		language="xml"
	/>
	<Preview></Preview>

	<SubTitle id="3.2">Disabled</SubTitle>
	<p>Add <Prop>isDisabled</Prop> property.</p>
	<Code code={`<Switch label="Disabled" isDisabled />`} language="xml" />
</div>
