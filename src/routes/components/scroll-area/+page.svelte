<script lang="ts">
	import Cli from '$site//cli.svelte';
	import Code from '$site//code.svelte';
	import ComponentCodeButton from '$site/component-code-button.svelte';
	import HeroSection from './hero-section.svelte';
	import OnThisPage from '$site/on-this-page.svelte';
	import OnThisPageBtn from '$site/on-this-page__btn.svelte';
	import PageFooter from '$site/page-footer.svelte';
	import PageHeader from '$site//page-header.svelte';
	import Preview from '$site/preview.svelte';
	import ScrollArea from '$lib/scroll-area.svelte';
	import Title from '$site//title.svelte';
</script>

<svelte:head>
	<title>Scroll Area . lomer-ui</title>
</svelte:head>

<OnThisPage>
	<OnThisPageBtn id="1" title="Installation" />
	<OnThisPageBtn id="2" title="Usage" />
</OnThisPage>

<div class="mx-auto flex flex-col gap-4 lg:pt-4 xl:pr-80 2xl:w-[1000px]">
	<PageHeader
		title="Scroll Area"
		sub="Component"
		info="Navigate overflowing content smoothly."
	/>
	<HeroSection />

	<!-- INSTALLATION -->
	<Title id="1">Installation</Title>
	<Cli code={`npx lomer-ui add scroll-area`} />
	<ComponentCodeButton
		link="https://github.com/clios/lomer-ui/blob/main/src/lib/scroll-area.svelte"
	/>

	<Title id="2">Usage</Title>
	<Code
		code={`import ScrollArea from '$lib/components/ui/scroll-area.svelte'`}
		language="javascript"
	/>
	<Code
		code={`<ScrollArea class="h-80 w-72 rounded border dark:border-zinc-700">` +
			`\n\tContent here...` +
			`\n</ScrollArea>`}
	/>
	<Preview>
		<ScrollArea class="h-80 w-72 rounded border dark:border-zinc-700">
			<p class="my-2 pl-4">Start</p>
			{#each Array(40) as _, i}
				<p class="my-2 pl-4">Line {i}</p>
			{/each}
			<p class="my-2 pl-4">End</p>
		</ScrollArea>
	</Preview>

	<PageFooter
		prevLabel="Radio"
		prevLink="/components/radio"
		nextLabel="Select"
		nextLink="/components/select"
	/>
</div>
