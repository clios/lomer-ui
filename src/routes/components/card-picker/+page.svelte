<script lang="ts">
	import ButtonComponentCode from '$lib/components/button-component-code.svelte';
	import PageWrapper from '$lib/components/page-wrapper.svelte';
	import PageSection from '$lib/components/page-section.svelte';
	import CopyCLI from '$lib/components/copy-c-l-i.svelte';
	import PageArticle from '$lib/components/page-article.svelte';
	import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
	import Screen from '$lib/components/screen.svelte';
	import CardPickerUsage from './card-picker-usage.svelte';
	import CardPickerLoading from './card-picker-loading.svelte';
	import CardPickerDisabled from './card-picker-disabled.svelte';
	import CardPickerReadOnly from './card-picker-read-only.svelte';
	import CardPickerLoadingRaw from './card-picker-loading.svelte?raw';
	import CardPickerDisabledRaw from './card-picker-disabled.svelte?raw';
	import CardPickerReadOnlyRaw from './card-picker-read-only.svelte?raw';

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
		},
		{
			id: '3.3',
			label: 'Read only',
			sub: true
		}
	];
</script>

<svelte:head>
	<title>Card Picker . lomer-ui</title>
</svelte:head>

<PageWrapper
	{tickler}
	title="Card Picker"
	sub="Component"
	info="Select items with a stylish card interface."
	prevLabel="Button"
	prevLink="/components/button"
	nextLabel="Checkbox"
	nextLink="/components/checkbox"
>
	<PageSection id="1" title="Installation">
		<PageArticle>
			<CopyCLI code={`npx lomer-ui add card-picker`} />
			<ButtonComponentCode
				link="https://github.com/clios/lomer-ui/blob/main/src/lib/card-picker.svelte"
			/>
		</PageArticle>
	</PageSection>
	<PageSection id="2" title="Usage">
		<PageArticle title="Preview">
			<Screen class="flex-col">
				<CardPickerUsage />
			</Screen>
			<CopySvelteCode code="" />
		</PageArticle>
	</PageSection>
	<PageSection id="3" title="Examples">
		<PageArticle id="3.1" title="Loading">
			<Screen>
				<CardPickerLoading />
			</Screen>
			<CopySvelteCode code={CardPickerLoadingRaw} />
		</PageArticle>
		<PageArticle id="3.2" title="Disabled">
			<Screen>
				<CardPickerDisabled />
			</Screen>
			<CopySvelteCode code={CardPickerDisabledRaw} />
		</PageArticle>
		<PageArticle id="3.3" title="Read only">
			<Screen>
				<CardPickerReadOnly />
			</Screen>
			<CopySvelteCode code={CardPickerReadOnlyRaw} />
		</PageArticle>
	</PageSection>
</PageWrapper>
