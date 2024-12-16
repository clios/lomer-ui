<script lang="ts">
	import CardPicker from '$lib/card-picker.svelte';
	import Cli from '$site/cli.svelte';
	import Code from '$site/code.svelte';
	import ComponentCodeButton from '$site/component-code-button.svelte';
	import HeroSection from './hero-section.svelte';
	import Icon from '@iconify/svelte';
	import OnThisPage from '$site/on-this-page.svelte';
	import OnThisPageBtn from '$site/on-this-page__btn.svelte';
	import PageHeader from '$site/page-header.svelte';
	import Preview from '$site/preview.svelte';
	import Title from '$site/title.svelte';

	let groupValue: string = $state('');
</script>

<OnThisPage>
	<OnThisPageBtn id="1" title="Installation" />
	<OnThisPageBtn id="2" title="Usage" />
</OnThisPage>

<div class="flex flex-col gap-2 pr-80">
	<PageHeader
		title="Card Picker"
		sub="Component"
		info="Select items with a stylish card interface."
	/>
	<HeroSection />

	<!-- INSTALLATION -->
	<Title id="1">Installation</Title>
	<Cli code={`npx lomer-ui add card-picker`} />
	<ComponentCodeButton
		link="https://github.com/clios/lomer-ui/blob/main/src/lib/card-picker.svelte"
	/>

	<Title id="2">Usage</Title>
	<Code code={`let groupValue = $state('');`} language="javascript" />
	<Code
		code={`<CardPicker bind:groupValue cardValue="dragon">` +
			`\n\t<Icon icon="game-icons:spiked-dragon-head" width={100} height={100} />` +
			`\n\t<p>Dragon</p>` +
			`\n</CardPicker>` +
			`\n<CardPicker bind:groupValue cardValue="serpent">` +
			`\n\t<Icon icon="game-icons:snake-tongue" width={100} height={100} />` +
			`\n\t<p>Serpent</p>` +
			`\n</CardPicker>` +
			`\n<CardPicker bind:groupValue cardValue="wolf">` +
			`\n\t<Icon icon="game-icons:wolf-head" width={100} height={100} />` +
			`\n\t<p>Wolf</p>` +
			`\n</CardPicker>` +
			`\n<CardPicker bind:groupValue cardValue="lotus">` +
			`\n\t<Icon icon="game-icons:lotus" width={100} height={100} />` +
			`\n\t<p>Lotus</p>` +
			`\n</CardPicker>`}
		language="xml"
	/>
	<Preview class="gap-8">
		<CardPicker bind:groupValue cardValue="dragon">
			<Icon icon="game-icons:spiked-dragon-head" width={100} height={100} />
			<p>Dragon</p>
		</CardPicker>
		<CardPicker bind:groupValue cardValue="serpent">
			<Icon icon="game-icons:snake-tongue" width={100} height={100} />
			<p>Serpent</p>
		</CardPicker>
		<CardPicker bind:groupValue cardValue="wolf">
			<Icon icon="game-icons:wolf-head" width={100} height={100} />
			<p>Wolf</p>
		</CardPicker>
		<CardPicker bind:groupValue cardValue="lotus">
			<Icon icon="game-icons:lotus" width={100} height={100} />
			<p>Lotus</p>
		</CardPicker>
	</Preview>
</div>
