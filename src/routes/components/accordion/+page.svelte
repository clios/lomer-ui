<script lang="ts">
	import Accordion from '$lib/accordion.svelte';
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
	import Icon from '@iconify/svelte';
	import Val from '$site/val.svelte';

	let value = $state('');
</script>

<svelte:head>
	<title>Accordion . lomer-ui</title>
</svelte:head>

<OnThisPage>
	<OnThisPageBtn id="1" title="Installation" />
	<OnThisPageBtn id="2" title="Usage" />
	<OnThisPageBtn id="3" title="Examples" />
	<OnThisPageSubBtn id="3.1" title="With icon" />
	<OnThisPageSubBtn id="3.2" title="Multiple" />
	<OnThisPageSubBtn id="3.3" title="Outline" />
	<OnThisPageSubBtn id="3.4" title="Enclosed" />
	<OnThisPageSubBtn id="3.5" title="Only one stays open" />
	<OnThisPageSubBtn id="3.6" title="Loading" />
	<OnThisPageSubBtn id="3.7" title="Disabled" />
</OnThisPage>

<div class="mx-auto flex flex-col gap-4 lg:pt-4 xl:pr-80 2xl:w-[1000px]">
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

	<!-- WITH ICON -->
	<SubTitle id="3.1">With Icon</SubTitle>
	<p>Add <Prop>icon</Prop> snippet.</p>
	<Code
		code={`<Accordion title="Title 1">` +
			`\n\t{#snippet icon()}` +
			`\n\t\t<Icon icon="fluent:shield-12-regular" width="24" />` +
			`\n\t{/snippet}` +
			`\n\tContent` +
			`\n</Accordion>`}
		language="xml"
	/>
	<Preview>
		<div class="w-full">
			<Accordion title="Title 1">
				{#snippet icon()}
					<Icon icon="fluent:shield-12-regular" width="24" />
				{/snippet}
				Content
			</Accordion>
		</div>
	</Preview>

	<!-- MULTIPLE -->
	<SubTitle id="3.2">Multiple</SubTitle>
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

	<!-- OUTLINE -->
	<SubTitle id="3.3">Outline</SubTitle>
	<p>Add <Val>border-b</Val> <Prop>class</Prop>.</p>
	<Code
		code={`<Accordion class="border-b" title="Title 1">Content</Accordion>`}
		language="xml"
	/>
	<Preview>
		<div class="w-full">
			<Accordion class="border-b" title="Title 1">Content</Accordion>
		</div>
	</Preview>

	<!-- ENCLOSED -->
	<SubTitle id="3.4">Enclosed</SubTitle>
	<Code
		code={`<div class="w-full border">` +
			`\n\t<Accordion class="border-b" title="Title 1">Content</Accordion>` +
			`\n\t<Accordion class="border-b" title="Title 2">Content</Accordion>` +
			`\n\t<Accordion title="Title 3">Content</Accordion>` +
			`\n</div>`}
		language="xml"
	/>
	<Preview>
		<div class="w-full border">
			<Accordion class="border-b" title="Title 1">Content</Accordion>
			<Accordion class="border-b" title="Title 2">Content</Accordion>
			<Accordion title="Title 3">Content</Accordion>
		</div>
	</Preview>

	<!-- ONLY ONE STAYS OPEN -->
	<SubTitle id="3.5">Only one stays open</SubTitle>
	<p>
		Simply bind the <Prop>value</Prop> property, and add unique
		<Prop>name</Prop> to your accordion.
	</p>
	<p>In this way you can also programatically open specific accordion.</p>
	<Code code={`let value = $state('')`} language="javascript" />
	<Code
		code={`<Accordion title="Title 1" name="accordion-one" bind:value>` +
			`\n\tContent` +
			`\n</Accordion>` +
			`\n<Accordion title="Title 2" name="accordion-two" bind:value>` +
			`\n\tContent` +
			`\n</Accordion>` +
			`\n<Accordion title="Title 3" name="accordion-three" bind:value>` +
			`\n\tContent` +
			`\n</Accordion>`}
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
	<SubTitle id="3.6">Loading</SubTitle>
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
	<SubTitle id="3.7">Disabled</SubTitle>
	<p>Add <Prop>isDisabled</Prop> property.</p>
	<Code
		code={`<Accordion title="Title here..." isDisabled>\t\nContent\n</Accordion>`}
	/>
	<Preview>
		<div class="w-full">
			<Accordion title="Title here..." isDisabled>Content</Accordion>
		</div>
	</Preview>

	<PageFooter
		prevLabel="CLI"
		prevLink="/docs/cli"
		nextLabel="Alert"
		nextLink="/components/alert"
	/>
</div>
