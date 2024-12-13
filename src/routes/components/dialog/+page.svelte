<script lang="ts">
	import Button from '$lib/button.svelte';
	import Cli from '$site//cli.svelte';
	import Code from '$site//code.svelte';
	import ComponentCodeButton from '$site/component-code-button.svelte';
	import Dialog from '$lib/dialog.svelte';
	import HeroSection from './hero-section.svelte';
	import Icon from '@iconify/svelte';
	import OnThisPage from '$site/on-this-page.svelte';
	import OnThisPageBtn from '$site/on-this-page__btn.svelte';
	import PageHeader from '$site//page-header.svelte';
	import Preview from '$site/preview.svelte';
	import Prop from '$site//prop.svelte';
	import Title from '$site//title.svelte';

	let isOpen = $state(false);
</script>

<OnThisPage>
	<OnThisPageBtn id="1" title="Installation" />
	<OnThisPageBtn id="2" title="Usage" />
</OnThisPage>

<div class="flex flex-col gap-2 pr-80">
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
		code={`import Dialog from '$lib/components/ui/dialog.svelte'` +
			`\nlet isOpen = $state(false)` +
			`\nconst openDialog = () => (isOpen = true)`}
		language="javascript"
	/>
	<Code
		code={`<Button on:click={openDialog}>Open dialog</Button>` +
			`\n<Dialog title="Title here" bind:isOpen>` +
			`\n\tContent here...` +
			`\n</Dialog>`}
		language="xml"
	/>
	<Preview>
		<Button onclick={() => (isOpen = true)}
			><Icon icon="mdi:power" width={24} height={24} /> Sign out</Button
		>
		<Dialog bind:isOpen title="Sign Out">
			<p>Any unsaved changes you made wil be lost.</p>
			<div class="mt-8 flex justify-end gap-4">
				<Button variant="secondary">Cancel</Button>
				<Button>Yes, sign out</Button>
			</div>
		</Dialog>
	</Preview>
</div>
