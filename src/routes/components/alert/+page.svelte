<script lang="ts">
	import Alert from '$lib/components/ui/alert.svelte';
	import Button from '$lib/components/ui/button.svelte';
	import Cli from '$site//cli.svelte';
	import Code from '$site//code.svelte';
	import ButtonComponentCode from '$lib/components/button-component-code.svelte';
	import HeroSection from './hero-section.svelte';
	import Icon from '@iconify/svelte';
	import OnThisPage from '$site/on-this-page.svelte';
	import OnThisPageBtn from '$site/on-this-page__btn.svelte';
	import OnThisPageSubBtn from '$site/on-this-page__sub-btn.svelte';
	import PageFooter from '$lib/components/templates/page-footer.svelte';
	import PageHeader from '$lib/components/templates/page-header.svelte';
	import Preview from '$site/preview.svelte';
	import Prop from '$site/prop.svelte';
	import Screen from '$lib/components/screen.svelte';
	import SubTitle from '$site//sub-title.svelte';
	import Syntax from '$site/syntax.svelte';
	import TabsPreviewCode from '$site/tabs__preview-code.svelte';
	import Title from '$site//title.svelte';

	let isClosableOpen = true;
</script>

<svelte:head>
	<title>Alert . lomer-ui</title>
</svelte:head>

<OnThisPage>
	<OnThisPageBtn id="1" title="Installation" />
	<OnThisPageBtn id="2" title="Usage" />
	<OnThisPageBtn id="3" title="Examples" />
	<OnThisPageSubBtn id="3.1" title="Title" />
	<OnThisPageSubBtn id="3.2" title="Custom icon" />
	<OnThisPageSubBtn id="3.3" title="Customize" />
	<OnThisPageSubBtn id="3.4" title="Closable" />
</OnThisPage>

<div class="mx-auto flex flex-col gap-4 lg:pt-4 xl:pr-80 2xl:w-[1000px]">
	<PageHeader
		title="Alert"
		sub="Component"
		info="Grabs attention and delivers important information."
	/>
	<HeroSection />

	<!-- INSTALLATION -->
	<Title id="1">Installation</Title>
	<Cli code={`npx lomer-ui add alert`} />
	<ButtonComponentCode
		link="https://github.com/clios/lomer-ui/blob/main/src/lib/alert.svelte"
	/>

	<!-- USAGE -->
	<Title id="2">Usage</Title>
	<TabsPreviewCode>
		{#snippet preview()}
			<Screen>
				<Alert>Your bill is due tomorrow.</Alert>
			</Screen>
		{/snippet}
		{#snippet code()}
			<Syntax
				canCopy
				code={`<script\>` +
					`\n\timport Alert from '$lib/components/ui/alert.svelte'` +
					`\n</script>` +
					`\n\n<Alert>Your bill is due tomorrow.</Alert>`}
			/>
		{/snippet}
	</TabsPreviewCode>

	<!-- EXAMPLES -->
	<Title id="3">Examples</Title>

	<!-- TITLE -->
	<SubTitle id="3.1">Title</SubTitle>
	<p>Add <Prop>title</Prop> property.</p>
	<TabsPreviewCode>
		{#snippet preview()}
			<Screen>
				<Alert title="Notice">Your bill is due tomorrow.</Alert>
			</Screen>
		{/snippet}
		{#snippet code()}
			<Syntax
				canCopy
				code={`<Alert title="Notice">Your bill is due tomorrow.</Alert>`}
			/>
		{/snippet}
	</TabsPreviewCode>

	<!-- CUSTOM ICON -->
	<SubTitle id="3.2">Custom icon</SubTitle>
	<p>Add <Prop>icon</Prop> snippet.</p>
	<TabsPreviewCode>
		{#snippet preview()}
			<Screen>
				<Alert>
					{#snippet icon()}
						<Icon icon="mdi:terminal-line" width="24" />
					{/snippet}
					Your bill is due today.
				</Alert>
			</Screen>
		{/snippet}
		{#snippet code()}
			<Syntax
				canCopy
				code={`<Alert>` +
					`\n\t{#snippet icon()}` +
					`\n\t\t<Icon icon="mdi:terminal-line" width="24" />` +
					`\n\t{/snippet}` +
					`\n\tYour bill is due today.` +
					`\n</Alert>`}
			/>
		{/snippet}
	</TabsPreviewCode>

	<!-- CUSTOMIZE -->
	<SubTitle id="3.3">Customize</SubTitle>
	<TabsPreviewCode>
		{#snippet preview()}
			<Screen>
				<div class="flex w-full flex-col gap-2">
					<Alert class="border-primary">Your bill is due today.</Alert>
					<Alert class="border-primary text-primary"
						>Your bill is due today.</Alert
					>
					<Alert class="border-primary bg-primary text-primary-fg">
						Your bill is due today.
					</Alert>
					<Alert class="border-destructive animate-pulse">
						Your bill is due today.
					</Alert>
					<Alert class="text-destructive">Your bill is due today.</Alert>
					<Alert class="bg-destructive border-destructive">
						Your bill is due today.
					</Alert>
				</div>
			</Screen>
		{/snippet}
		{#snippet code()}
			<Syntax
				canCopy
				code={`<Alert class="border-primary">Your bill is due today.</Alert>` +
					`\n<Alert class="border-primary text-primary">Your bill is due today.</Alert>` +
					`\n<Alert class="border-primary bg-primary text-primary-fg">` +
					`\n\tYour bill is due today.` +
					`\n</Alert>` +
					`\n<Alert class="border-destructive animate-pulse">` +
					`\n\tYour bill is due today.` +
					`\n</Alert>` +
					`\n<Alert class="text-destructive">Your bill is due today.</Alert>` +
					`\n<Alert class="bg-destructive border-destructive">` +
					`\n\tYour bill is due today.` +
					`\n</Alert>`}
			/>
		{/snippet}
	</TabsPreviewCode>

	<!-- CLOSABLE -->
	<SubTitle id="3.4">Closable</SubTitle>
	<p>Add <Prop>isClosable</Prop> property.</p>
	<Code code={`<Alert isClosable>Your bill is due tomorrow.</Alert>`} />
	<Preview class="flex justify-center">
		{#if isClosableOpen}
			<Alert class="w-full" isClosable bind:isOpen={isClosableOpen}>
				Your bill is due tomorrow.
			</Alert>
		{:else}
			<Button onclick={() => (isClosableOpen = true)}>Open alert</Button>
		{/if}
	</Preview>

	<PageFooter
		prevLabel="Accordion"
		prevLink="/components/accordion"
		nextLabel="Button"
		nextLink="/components/button"
	/>
</div>
