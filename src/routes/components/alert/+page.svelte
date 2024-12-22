<script lang="ts">
	import Alert from '$lib/alert.svelte';
	import Button from '$lib/button.svelte';
	import Cli from '$site//cli.svelte';
	import Code from '$site//code.svelte';
	import ComponentCodeButton from '$site/component-code-button.svelte';
	import HeroSection from './hero-section.svelte';
	import Icon from '@iconify/svelte';
	import OnThisPage from '$site/on-this-page.svelte';
	import OnThisPageBtn from '$site/on-this-page__btn.svelte';
	import OnThisPageSubBtn from '$site/on-this-page__sub-btn.svelte';
	import PageFooter from '$site/page-footer.svelte';
	import PageHeader from '$site/page-header.svelte';
	import Preview from '$site/preview.svelte';
	import Prop from '$site/prop.svelte';
	import SubTitle from '$site//sub-title.svelte';
	import Title from '$site//title.svelte';
	import Val from '$site/val.svelte';

	let isClosableOpen = true;
</script>

<OnThisPage>
	<OnThisPageBtn id="1" title="Installation" />
	<OnThisPageBtn id="2" title="Usage" />
	<OnThisPageBtn id="3" title="Examples" />
	<OnThisPageSubBtn id="3.1" title="Destructive" />
	<OnThisPageSubBtn id="3.2" title="Closable" />
	<OnThisPageSubBtn id="3.3" title="Custom content" />
</OnThisPage>

<div class="flex flex-col gap-2 xl:pr-80">
	<PageHeader
		title="Alert"
		sub="Component"
		info="Grabs attention and delivers important information."
	/>
	<HeroSection />

	<!-- INSTALLATION -->
	<Title id="1">Installation</Title>
	<Cli code={`npx lomer-ui add alert`} />
	<ComponentCodeButton
		link="https://github.com/clios/lomer-ui/blob/main/src/lib/alert.svelte"
	/>

	<!-- USAGE -->
	<Title id="2">Usage</Title>
	<Code
		code={`import Alert from '$lib/components/ui/alert.svelte'`}
		language="javascript"
	/>
	<Code code={`<Alert>Your bill is due tomorrow.</Alert>`} language="xml" />
	<Preview>
		<Alert>Your bill is due tomorrow.</Alert>
	</Preview>

	<!-- EXAMPLES -->
	<Title id="3">Examples</Title>

	<!-- DESTRUCTIVE -->
	<SubTitle id="3.1">Destructive</SubTitle>
	<p>Add <Prop>variant</Prop> property with <Val>destructive</Val> value.</p>
	<Code
		code={`<Alert variant="destructive">Your bill is due today.</Alert>`}
		language="xml"
	/>
	<Preview>
		<Alert variant="destructive">Your bill is due today.</Alert>
	</Preview>

	<!-- CLOSABLE -->
	<SubTitle id="3.2">Closable</SubTitle>
	<p>Add <Prop>isClosable</Prop> property.</p>
	<Code
		code={`<Alert isClosable>Your bill is due tomorrow.</Alert>`}
		language="xml"
	/>
	<Preview class="flex justify-center">
		{#if isClosableOpen}
			<Alert class="w-full" isClosable bind:isOpen={isClosableOpen}>
				Your bill is due tomorrow.
			</Alert>
		{:else}
			<Button onclick={() => (isClosableOpen = true)}>Open alert</Button>
		{/if}
	</Preview>

	<!-- CUSTOM CONTENT -->
	<SubTitle id="3.3">Custom content</SubTitle>
	<Code
		code={`<Alert class="flex gap-2">` +
			`\n\t<Icon icon="mdi:terminal-line" width={24} />` +
			`\n\t<div>` +
			`\n\t\t<p class="font-semibold">Notice</p>` +
			`\n\t\t<p>Your bill is due tomorrow.</p>` +
			`\n\t</div>` +
			`\n</Alert>`}
		language="xml"
	/>
	<Preview>
		<Alert class="flex gap-2">
			<Icon icon="mdi:terminal-line" width={24} />
			<div>
				<p class="font-semibold">Notice</p>
				<p>Your bill is due tomorrow.</p>
			</div>
		</Alert>
	</Preview>

	<PageFooter
		prevLabel="Accordion"
		prevLink="/components/accordion"
		nextLabel="Button"
		nextLink="/components/button"
	/>
</div>
