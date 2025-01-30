<script lang="ts">
	import ButtonComponentCode from '$lib/components/button-component-code.svelte';
	import PageWrapper from '$lib/components/page-wrapper.svelte';
	import PageSection from '$lib/components/page-section.svelte';
	import CopyCLI from '$lib/components/copy-c-l-i.svelte';
	import PageArticle from '$lib/components/page-article.svelte';
	import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
	import Screen from '$lib/components/screen.svelte';
	import CheckboxUsage from './checkbox-usage.svelte';
	import CheckboxLoading from './checkbox-loading.svelte';
	import CheckboxDisabled from './checkbox-disabled.svelte';
	import CheckboxUsageRaw from './checkbox-usage.svelte?raw';
	import CheckboxLoadingRaw from './checkbox-loading.svelte?raw';
	import CheckboxDisabledRaw from './checkbox-disabled.svelte?raw';

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
			label: 'Loading',
			sub: true
		},
		{
			id: '3.2',
			label: 'Disabled',
			sub: true
		}
	];
</script>

<svelte:head>
	<title>Checkbox . lomer-ui</title>
</svelte:head>

<PageWrapper
	{tickler}
	title="Check"
	sub="Component"
	info="Toggle options on or off."
	prevLabel="Card Picker"
	prevLink="/components/card-picker"
	nextLabel="Dialog"
	nextLink="/components/dialog"
>
	<!-- INSTALLATION -->
	<PageSection id="1" title="Installation">
		<PageArticle>
			<CopyCLI code={`npx lomer-ui add checkbox`} />
			<ButtonComponentCode
				link="https://github.com/clios/lomer-ui/blob/main/src/lib/checkbox.svelte"
			/>
		</PageArticle>
	</PageSection>

	<!-- USAGE -->
	<PageSection id="2" title="Usage">
		<PageArticle title="Preview">
			<Screen class="flex-col">
				<CheckboxUsage />
			</Screen>
			<CopySvelteCode code={CheckboxUsageRaw} />
		</PageArticle>
	</PageSection>

	<!-- EXAMPLES -->
	<PageSection id="3" title="Examples">
		<!-- LOADING -->
		<PageArticle id="3.1" title="Loading">
			<Screen class="flex-col">
				<CheckboxLoading />
			</Screen>
			<CopySvelteCode code={CheckboxLoadingRaw} />
		</PageArticle>

		<!-- DISABLED -->
		<PageArticle id="3.2" title="Disabled">
			<Screen class="flex-col">
				<CheckboxDisabled />
			</Screen>
			<CopySvelteCode code={CheckboxDisabledRaw} />
		</PageArticle>
	</PageSection>
</PageWrapper>
