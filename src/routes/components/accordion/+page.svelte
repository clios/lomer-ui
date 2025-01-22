<script lang="ts">
	import Accordion from '$lib/components/ui/accordion.svelte';
	import Cli from '$site/cli.svelte';
	import ComponentCodeButton from '$site/component-code-button.svelte';
	import HeroSection from './hero-section.svelte';
	import Icon from '@iconify/svelte';
	import OnThisPage from '$site/on-this-page.svelte';
	import OnThisPageBtn from '$site/on-this-page__btn.svelte';
	import OnThisPageSubBtn from '$site/on-this-page__sub-btn.svelte';
	import PageFooter from '$lib/components/templates/page-footer.svelte';
	import PageHeader from '$lib/components/templates/page-header.svelte';
	import Prop from '$site/prop.svelte';
	import Screen from '$lib/components/templates/screen.svelte';
	import SubTitle from '$site/sub-title.svelte';
	import Syntax from '$site/syntax.svelte';
	import TabsPreviewCode from '$site/tabs__preview-code.svelte';
	import Title from '$site/title.svelte';
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
	<TabsPreviewCode>
		{#snippet preview()}
			<Screen>
				<Accordion title="Title">Content</Accordion>
			</Screen>
		{/snippet}
		{#snippet code()}
			<Syntax
				canCopy
				code={`<script\>` +
					`\n\timport Accordion from '$lib/components/ui/accordion.svelte'` +
					`\n</script>` +
					`\n\n<Accordion title="Title">Content</Accordion>`}
			/>
		{/snippet}
	</TabsPreviewCode>

	<!-- EXAMPLES -->
	<Title id="3">Examples</Title>

	<!-- WITH ICON -->
	<SubTitle id="3.1">With Icon</SubTitle>
	<p>Add <Prop>icon</Prop> snippet.</p>
	<TabsPreviewCode>
		{#snippet preview()}
			<Screen>
				<Accordion title="Title 1">
					{#snippet icon()}
						<Icon icon="fluent:shield-12-regular" width="24" />
					{/snippet}
					Content
				</Accordion>
			</Screen>
		{/snippet}
		{#snippet code()}
			<Syntax
				canCopy
				code={`<Accordion title="Title 1">` +
					`\n\t{#snippet icon()}` +
					`\n\t\t<Icon icon="fluent:shield-12-regular" width="24" />` +
					`\n\t{/snippet}` +
					`\n\tContent` +
					`\n</Accordion>`}
			/>
		{/snippet}
	</TabsPreviewCode>

	<!-- MULTIPLE -->
	<SubTitle id="3.2">Multiple</SubTitle>
	<p>Just stack them, easy.</p>
	<TabsPreviewCode>
		{#snippet preview()}
			<Screen>
				<Accordion title="Title 1">Content</Accordion>
				<Accordion title="Title 2">Content</Accordion>
				<Accordion title="Title 3">Content</Accordion>
			</Screen>
		{/snippet}
		{#snippet code()}
			<Syntax
				canCopy
				code={`<Accordion title="Title 1">Content</Accordion>` +
					`\n<Accordion title="Title 2">Content</Accordion>` +
					`\n<Accordion title="Title 3">Content</Accordion>`}
			/>
		{/snippet}
	</TabsPreviewCode>

	<!-- OUTLINE -->
	<SubTitle id="3.3">Outline</SubTitle>
	<p>Add <Val>border-b</Val> <Prop>class</Prop>.</p>
	<TabsPreviewCode>
		{#snippet preview()}
			<Screen>
				<Accordion class="border-b" title="Title 1">Content</Accordion>
			</Screen>
		{/snippet}
		{#snippet code()}
			<Syntax
				canCopy
				code={`<Accordion class="border-b" title="Title 1">Content</Accordion>`}
			/>
		{/snippet}
	</TabsPreviewCode>

	<!-- ENCLOSED -->
	<SubTitle id="3.4">Enclosed</SubTitle>
	<TabsPreviewCode>
		{#snippet preview()}
			<Screen>
				<div class="w-full overflow-hidden rounded border">
					<Accordion class="border-b" title="Title 1">Content</Accordion>
					<Accordion class="border-b" title="Title 2">Content</Accordion>
					<Accordion title="Title 3">Content</Accordion>
				</div>
			</Screen>
		{/snippet}
		{#snippet code()}
			<Syntax
				canCopy
				code={`<div class="w-full overflow-hidden rounded border">` +
					`\n\t<Accordion class="border-b" title="Title 1">Content</Accordion>` +
					`\n\t<Accordion class="border-b" title="Title 2">Content</Accordion>` +
					`\n\t<Accordion title="Title 3">Content</Accordion>` +
					`\n</div>`}
			/>
		{/snippet}
	</TabsPreviewCode>

	<!-- ONLY ONE STAYS OPEN -->
	<SubTitle id="3.5">Only one stays open</SubTitle>
	<p>
		Simply bind the <Prop>value</Prop> property, and add unique
		<Prop>name</Prop> to your accordion.
	</p>
	<p>In this way you can also programatically open specific accordion.</p>
	<TabsPreviewCode>
		{#snippet preview()}
			<Screen>
				<Accordion title="Title 1" name="accordion-one" bind:value>
					Content
				</Accordion>
				<Accordion title="Title 2" name="accordion-two" bind:value>
					Content
				</Accordion>
				<Accordion title="Title 3" name="accordion-three" bind:value>
					Content
				</Accordion>
			</Screen>
		{/snippet}
		{#snippet code()}
			<Syntax
				canCopy
				code={`<script\>` +
					`\n\timport Accordion from '$lib/components/ui/accordion.svelte'` +
					`\n\tlet value = $state('')` +
					`\n</script>` +
					`\n\n<Accordion title="Title 1" name="accordion-one" bind:value>` +
					`\n\tContent` +
					`\n</Accordion>` +
					`\n<Accordion title="Title 2" name="accordion-two" bind:value>` +
					`\n\tContent` +
					`\n</Accordion>` +
					`\n<Accordion title="Title 3" name="accordion-three" bind:value>` +
					`\n\tContent` +
					`\n</Accordion>`}
			/>
		{/snippet}
	</TabsPreviewCode>

	<!-- LOADING -->
	<SubTitle id="3.6">Loading</SubTitle>
	<p>Add <Prop>isLoading</Prop> property.</p>
	<TabsPreviewCode>
		{#snippet preview()}
			<Screen>
				<Accordion title="Title 1" isLoading>Content</Accordion>
			</Screen>
		{/snippet}
		{#snippet code()}
			<Syntax
				canCopy
				code={`<Accordion title="Title 1" isLoading>\n\tContent\n</Accordion>`}
			/>
		{/snippet}
	</TabsPreviewCode>

	<!-- DISABLED -->
	<SubTitle id="3.7">Disabled</SubTitle>
	<p>Add <Prop>isDisabled</Prop> property.</p>
	<TabsPreviewCode>
		{#snippet preview()}
			<Screen>
				<Accordion title="Title 1" isDisabled>Content</Accordion>
			</Screen>
		{/snippet}
		{#snippet code()}
			<Syntax
				canCopy
				code={`<Accordion title="Title 1" isDisabled>\n\tContent\n</Accordion>`}
			/>
		{/snippet}
	</TabsPreviewCode>

	<PageFooter
		prevLabel="CLI"
		prevLink="/docs/cli"
		nextLabel="Alert"
		nextLink="/components/alert"
	/>
</div>
