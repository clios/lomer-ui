<script lang="ts">
	import Button from '$lib/button.svelte';
	import Cli from '$site//cli.svelte';
	import Code from '$site//code.svelte';
	import ComponentCodeButton from '$site/component-code-button.svelte';
	import Drawer from '$lib/drawer.svelte';
	import HeroSection from './hero-section.svelte';
	import OnThisPage from '$site/on-this-page.svelte';
	import OnThisPageBtn from '$site/on-this-page__btn.svelte';
	import OnThisPageSubBtn from '$site/on-this-page__sub-btn.svelte';
	import PageFooter from '$site/page-footer.svelte';
	import PageHeader from '$site//page-header.svelte';
	import Preview from '$site/preview.svelte';
	import Prop from '$site//prop.svelte';
	import SubTitle from '$site//sub-title.svelte';
	import Title from '$site//title.svelte';
	import Val from '$site/val.svelte';
	import Dropdown from '$lib/dropdown.svelte';

	let isOpen = $state(false);
	let isLeftOpen = $state(false);
	let isRightOpen = $state(false);
	let isTopOpen = $state(false);
	let isBottomOpen = $state(false);
	let isFixedFooterOpen = $state(false);

	let isOpenDropdown = $state(false);
</script>

<svelte:head>
	<title>Drawer . lomer-ui</title>
</svelte:head>

<OnThisPage>
	<OnThisPageBtn id="1" title="Installation" />
	<OnThisPageBtn id="2" title="Usage" />
	<OnThisPageBtn id="3" title="Examples" />
	<OnThisPageSubBtn id="3.1" title="Positioning" />
	<OnThisPageSubBtn id="3.2" title="Fixed footer" />
</OnThisPage>

<div class="mx-auto flex flex-col gap-4 lg:pt-4 xl:pr-80 2xl:w-[1000px]">
	<PageHeader
		title="Drawer"
		sub="Component"
		info="Slide-out panel for navigation or content."
	/>
	<HeroSection />

	<!-- INSTALLATION -->
	<Title id="1">Installation</Title>
	<Cli code={`npx lomer-ui add drawer`} />
	<ComponentCodeButton
		link="https://github.com/clios/lomer-ui/blob/main/src/lib/drawer.svelte"
	/>

	<!-- USAGE -->
	<Title id="2">Usage</Title>
	<p>Specify width and height using tailwind.</p>
	<p>Bind <Prop>isOpen</Prop> property to reflect drawer's open state.</p>
	<Code
		code={`import Drawer from '$lib/components/ui/drawer.svelte'` +
			`\nlet isOpen = $state(false)` +
			`\nconst openDrawer = () => (isOpen = true)`}
		language="javascript"
	/>
	<Code
		code={`<Button onclick={openDrawer}>Open drawer</Button>` +
			`\n<Drawer class="w-[400px]" title="Title here" bind:isOpen>` +
			`\n\tContent here...` +
			`\n</Drawer>`}
		language="xml"
	/>
	<Preview>
		<Button onclick={() => (isOpen = true)}>Open drawer</Button>
		<Drawer class="w-[400px]" title="Title here" bind:isOpen>
			<div class="p-4">content</div>
		</Drawer>
	</Preview>

	<!-- EXAMPLES -->
	<Title id="3">Examples</Title>

	<!-- POSITIONING -->
	<SubTitle id="3.1">Positioning</SubTitle>
	<p>
		Add <Prop>position</Prop> property with <Val
			>left | right | top | bottom</Val
		> value.
	</p>
	<Code code={`<Drawer position="left">...</Drawer>`} language="xml" />
	<Preview class="flex-wrap gap-4">
		<Button onclick={() => (isLeftOpen = true)}>Left</Button>
		<Drawer class="w-56 p-6" position="left" bind:isOpen={isLeftOpen}>
			{#each Array(50) as _}
				<p>Content</p>
			{/each}
			<p>End of content</p>
		</Drawer>

		<Button onclick={() => (isRightOpen = true)}>Right</Button>
		<Drawer class="w-56 p-6" position="right" bind:isOpen={isRightOpen}>
			{#each Array(50) as _}
				<p>Content</p>
			{/each}
			<p>End of content</p>
		</Drawer>

		<Button onclick={() => (isTopOpen = true)}>Top</Button>
		<Drawer class="h-56 p-6" position="top" bind:isOpen={isTopOpen}>
			{#each Array(50) as _}
				<p>Content</p>
			{/each}
			<p>End of content</p>
		</Drawer>

		<Button onclick={() => (isBottomOpen = true)}>Bottom</Button>
		<Drawer class="h-56 p-6" position="bottom" bind:isOpen={isBottomOpen}>
			{#each Array(50) as _}
				<p>Content</p>
			{/each}
			<p>End of content</p>
		</Drawer>
	</Preview>

	<!-- FIXED FOOTER -->
	<SubTitle id="3.2">Fixed footer</SubTitle>
	<p>Add <Val>"sitcky bottom-0"</Val> style to element you want.</p>
	<Code
		code={`<Drawer>\n\t...\n\t<div class="sticky bottom-0">Footer</div>\n</Drawer>`}
		language="xml"
	/>
	<Preview>
		<Button onclick={() => (isFixedFooterOpen = true)}>Fixed footer</Button>
		<Drawer
			class="w-56 p-6"
			title="Fixed Footer"
			bind:isOpen={isFixedFooterOpen}
		>
			{#each Array(50) as _}
				<p>Content</p>
			{/each}
			<p>End of content</p>

			<div class="sticky bottom-0 w-full">Fixed footer</div>
		</Drawer>
	</Preview>

	<PageFooter
		prevLabel="Dialog"
		prevLink="/components/dialog"
		nextLabel="Field"
		nextLink="/components/field"
	/>
</div>
