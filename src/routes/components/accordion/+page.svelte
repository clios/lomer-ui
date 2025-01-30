<script lang="ts">
	import Accordion from '$lib/components/ui/accordion.svelte';
	import AccordionMultiple from './accordion-multiple.svelte';
	import AccordionMultipleRaw from './accordion-multiple.svelte?raw';
	import AccordionUsage from './accordion-usage.svelte';
	import AccordionUsageRaw from './accordion-usage.svelte?raw';
	import AccordionWithIcon from './accordion-with-icon.svelte';
	import AccordionWithIconRaw from './accordion-with-icon.svelte?raw';
	import ButtonComponentCode from '$lib/components/button-component-code.svelte';
	import CopyCLI from '$lib/components/copy-c-l-i.svelte';
	import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
	import PageArticle from '$lib/components/page-article.svelte';
	import PageSection from '$lib/components/page-section.svelte';
	import PageWrapper from '$lib/components/page-wrapper.svelte';
	import Screen from '$lib/components/screen.svelte';

	import AccordionOutline from './accordion-outline.svelte';
	import AccordionOutlineRaw from './accordion-outline.svelte?raw';
	import AccordionEnclosed from './accordion-enclosed.svelte';
	import AccordionEnclosedRaw from './accordion-enclosed.svelte?raw';
	import AccordionSingleMode from './accordion-single-mode.svelte';
	import AccordionSingleModeRaw from './accordion-single-mode.svelte?raw';
	import AccordionLoading from './accordion-loading.svelte';
	import AccordionLoadingRaw from './accordion-loading.svelte?raw';
	import AccordionDisabled from './accordion-disabled.svelte';
	import AccordionDisabledRaw from './accordion-disabled.svelte?raw';

	const tickler = [
		{
			id: '1',
			label: 'Installation'
		},
		{
			id: '2',
			label: 'Usage'
		},
		{
			id: '3',
			label: 'Examples'
		},
		{
			id: '3.1',
			label: 'With icon',
			sub: true
		},
		{
			id: '3.2',
			label: 'Multiple',
			sub: true
		},
		{
			id: '3.3',
			label: 'Outline',
			sub: true
		},
		{
			id: '3.4',
			label: 'Enclosed',
			sub: true
		},
		{
			id: '3.5',
			label: 'Single mode',
			sub: true
		},
		{
			id: '3.6',
			label: 'Loading',
			sub: true
		},
		{
			id: '3.7',
			label: 'Disabled',
			sub: true
		}
	];
</script>

<svelte:head>
	<title>Accordion . lomer-ui</title>
</svelte:head>

<PageWrapper
	{tickler}
	title="Accordion"
	sub="Component"
	info="Expand and collapse content with ease."
	prevLabel="CLI"
	prevLink="/docs/cli"
	nextLabel="Alert"
	nextLink="/components/alert"
>
	<PageSection id="1" title="Installation">
		<PageArticle>
			<CopyCLI code={`npx lomer-ui add accordion`} />
			<ButtonComponentCode
				link="https://github.com/clios/lomer-ui/blob/main/src/lib/accordion.svelte"
			/>
		</PageArticle>
	</PageSection>
	<PageSection id="2" title="Usage">
		<PageArticle title="Preview">
			<Screen>
				<AccordionUsage />
			</Screen>
			<CopySvelteCode code={AccordionUsageRaw} />
		</PageArticle>
	</PageSection>
	<PageSection id="3" title="Examples">
		<PageArticle id="3.1" title="With icon">
			<Screen>
				<AccordionWithIcon />
			</Screen>
			<CopySvelteCode
				highlightedLines={[6, 7, 8]}
				code={AccordionWithIconRaw}
			/>
		</PageArticle>
		<PageArticle id="3.2" title="Multiple">
			<Screen class="flex-col">
				<AccordionMultiple />
			</Screen>
			<CopySvelteCode highlightedLines={[5, 6]} code={AccordionMultipleRaw} />
		</PageArticle>
		<PageArticle id="3.3" title="Outline">
			<Screen>
				<AccordionOutline />
			</Screen>
			<CopySvelteCode highlightedLines={[4]} code={AccordionOutlineRaw} />
		</PageArticle>
		<PageArticle id="3.4" title="Enclosed">
			<Screen>
				<AccordionEnclosed />
			</Screen>
			<CopySvelteCode highlightedLines={[4, 8]} code={AccordionEnclosedRaw} />
		</PageArticle>
		<PageArticle id="3.5" title="Single mode">
			<Screen class="flex-col">
				<AccordionSingleMode />
			</Screen>
			<CopySvelteCode
				highlightedLines={[2, 5, 6, 7]}
				code={AccordionSingleModeRaw}
			/>
		</PageArticle>
		<PageArticle id="3.6" title="Loading">
			<Screen>
				<AccordionLoading />
			</Screen>
			<CopySvelteCode highlightedLines={[4]} code={AccordionLoadingRaw} />
		</PageArticle>
		<PageArticle id="3.7" title="Disabled">
			<Screen>
				<AccordionDisabled />
			</Screen>
			<CopySvelteCode highlightedLines={[4]} code={AccordionDisabledRaw} />
		</PageArticle>
	</PageSection>
</PageWrapper>
