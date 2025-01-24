<script lang="ts">
	import Button from '$lib/components/core/button.svelte';
	import Cli from '$site//cli.svelte';
	import Code from '$site//code.svelte';
	import ComponentCodeButton from '$site/component-code-button.svelte';
	import Dialog from '$lib/components/core/dialog.svelte';
	import HeroSection from './hero-section.svelte';
	import Icon from '@iconify/svelte';
	import OnThisPage from '$site/on-this-page.svelte';
	import OnThisPageBtn from '$site/on-this-page__btn.svelte';
	import PageFooter from '$lib/components/templates/page-footer.svelte';
	import PageHeader from '$lib/components/templates/page-header.svelte';
	import Preview from '$site/preview.svelte';
	import Prop from '$site//prop.svelte';
	import Title from '$site//title.svelte';

	let isOpen = $state(false);
</script>

<svelte:head>
	<title>Dialog . lomer-ui</title>
</svelte:head>

<OnThisPage>
	<OnThisPageBtn id="1" title="Installation" />
	<OnThisPageBtn id="2" title="Usage" />
</OnThisPage>

<div class="mx-auto flex flex-col gap-4 lg:pt-4 xl:pr-80 2xl:w-[1000px]">
	<PageHeader
		title="Dialog"
		sub="Component"
		info="Displays a focused interface for user interaction."
	/>
	<HeroSection />

	<!-- INSTALLATION -->
	<Title id="1">Installation</Title>
	<Cli code={`npx lomer-ui add dialog`} />
	<ComponentCodeButton
		link="https://github.com/clios/lomer-ui/blob/main/src/lib/dialog.svelte"
	/>

	<Title id="2">Usage</Title>
	<p>Bind <Prop>isOpen</Prop> property to reflect dialog's open state.</p>
	<Code
		code={`import Dialog from '$lib/components/core/dialog.svelte'` +
			`\nlet isOpen = $state(false)` +
			`\nconst openDialog = () => (isOpen = true)`}
		language="javascript"
	/>
	<Code
		code={`<Button onclick={openDialog}>Open dialog</Button>` +
			`\n<Dialog title="Title here" bind:isOpen>` +
			`\n\tContent here...` +
			`\n</Dialog>`}
		language="xml"
	/>
	<Preview>
		<Button onclick={() => (isOpen = true)}>
			<Icon icon="mdi:power" width={24} height={24} /> Sign out
		</Button>
		<Dialog bind:isOpen title="Sign Out">
			<p>Any unsaved changes you made wil be lost.</p>
			<div class="mt-8 flex justify-end gap-4">
				<Button variant="secondary">Cancel</Button>
				<Button>Yes, sign out</Button>
			</div>
		</Dialog>
	</Preview>

	<PageFooter
		prevLabel="Checkbox"
		prevLink="/components/checkbox"
		nextLabel="Drawer"
		nextLink="/components/drawer"
	/>
</div>
