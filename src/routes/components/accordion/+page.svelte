<script lang="ts">
	import Accordion from '$lib/accordion.svelte';
	import Cli from '$site/cli.svelte';
	import Code from '$site/code.svelte';
	import ComponentCodeButton from '$site/component-code-button.svelte';
	import HeroSection from './hero-section.svelte';
	import OnThisPage from '$site/on-this-page.svelte';
	import OnThisPageBtn from '$site/on-this-page__btn.svelte';
	import OnThisPageSubBtn from '$site/on-this-page__sub-btn.svelte';
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
	<OnThisPageSubBtn id="3.1" title="Multiple" />
	<OnThisPageSubBtn id="3.2" title="Only one stays open" />
	<OnThisPageSubBtn id="3.3" title="Loading" />
	<OnThisPageSubBtn id="3.4" title="Disabled" />
</OnThisPage>

<div class="flex flex-col gap-2 xl:pr-80">
	<PageHeader
		title="Accordion"
		sub="Component"
		info="Expand and collapse content with ease."
	/>
	<HeroSection />

	<!-- INSTALLATION -->
	<Title id="1">Installation</Title>
	<Cli code={`npx lomer-ui add accordion`} />
	<ComponentCodeButton
		link="https://github.com/clios/lomer-ui/blob/main/src/lib/accordion.svelte"
	/>

	<!-- USAGE -->
	<Title id="2">Usage</Title>
	<Code
		code={`import Accordion from '$lib/components/ui/accordion.svelte'`}
		language="javascript"
	/>
	<Code code={`<Accordion title="Title">Content</Accordion>`} language="xml" />
	<Preview class="flex-col">
		<Accordion title="Title">Content</Accordion>
	</Preview>

	<!-- EXAMPLES -->
	<Title id="3">Examples</Title>

	<!-- MULTIPLE -->
	<SubTitle id="3.1">Multiple</SubTitle>
	<p>Just stack them, easy.</p>
	<Code
		code={`<Accordion title="Title 1">Content</Accordion>` +
			`\n<Accordion title="Title 2">Content</Accordion>` +
			`\n<Accordion title="Title 3">Content</Accordion>`}
		language="xml"
	/>
	<Preview>
		<div class="w-full">
			<Accordion title="Title 1">Content</Accordion>
			<Accordion title="Title 2">Content</Accordion>
			<Accordion title="Title 3">Content</Accordion>
		</div>
	</Preview>

	<!-- ONLY ONE STAYS OPEN -->
	<SubTitle id="3.2">Only one stays open</SubTitle>
	<p>
		Simply bind the <Prop>value</Prop> property, and add unique
		<Prop>name</Prop> to your accordion.
	</p>
	<Code code={`let value = $state('')`} language="javascript" />
	<Code
		code={`<Accordion title="Title 1" name="accordion-one" bind:value>Content</Accordion>` +
			`\n<Accordion title="Title 2" name="accordion-two" bind:value>Content</Accordion>` +
			`\n<Accordion title="Title 3" name="accordion-three" bind:value>Content</Accordion>`}
		language="xml"
	/>
	<Preview>
		<div class="w-full">
			<Accordion title="Title 1" name="accordion-one" bind:value>
				Content
			</Accordion>
			<Accordion title="Title 2" name="accordion-two" bind:value>
				Content
			</Accordion>
			<Accordion title="Title 3" name="accordion-three" bind:value>
				Content
			</Accordion>
		</div>
	</Preview>

	<!-- LOADING -->
	<SubTitle id="3.3">Loading</SubTitle>
	<p>Add <Prop>isLoading</Prop> property.</p>
	<Code
		code={`<Accordion title="Title here..." isLoading>\t\nContent\n</Accordion>`}
	/>
	<Preview>
		<div class="w-full">
			<Accordion title="Title here..." isLoading>Content</Accordion>
		</div>
	</Preview>

	<!-- DISABLED -->
	<SubTitle id="3.4">Disabled</SubTitle>
	<p>Add <Prop>isDisabled</Prop> property.</p>
	<Code
		code={`<Accordion title="Title here..." isDisabled>\t\nContent\n</Accordion>`}
	/>
	<Preview>
		<div class="w-full">
			<Accordion title="Title here..." isDisabled>Content</Accordion>
		</div>
	</Preview>
</div>
