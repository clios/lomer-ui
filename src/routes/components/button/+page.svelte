<script lang="ts">
  import ButtonRaw from '$lib/components/ui/button.svelte?raw';
  import ButtonDisabled from './button-disabled.svelte';
  import ButtonDisabledRaw from './button-disabled.svelte?raw';
  import ButtonEdges from './button-edges.svelte';
  import ButtonEdgesRaw from './button-edges.svelte?raw';
  import ButtonLoading from './button-loading.svelte';
  import ButtonLoadingRaw from './button-loading.svelte?raw';
  import ButtonSizes from './button-sizes.svelte';
  import ButtonSizesRaw from './button-sizes.svelte?raw';
  import ButtonUsage from './button-usage.svelte';
  import ButtonUsageRaw from './button-usage.svelte?raw';
  import ButtonVariants from './button-variants.svelte';
  import ButtonVariantsRaw from './button-variants.svelte?raw';
  import ButtonWithIcon from './button-with-icon.svelte';
  import ButtonWithIconRaw from './button-with-icon.svelte?raw';
  import CopyCLI from '$lib/components/copy-c-l-i.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import PageArticle from '$lib/components/page-article.svelte';
  import PageSection from '$lib/components/page-section.svelte';
  import PageWrapper from '$lib/components/page-wrapper.svelte';
  import Screen from '$lib/components/screen.svelte';

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
      label: 'Variants',
      sub: true
    },
    {
      id: '3.2',
      label: 'With icon',
      sub: true
    },
    {
      id: '3.3',
      label: 'Sizes',
      sub: true
    },
    {
      id: '3.4',
      label: 'Edges',
      sub: true
    },
    {
      id: '3.5',
      label: 'Loading',
      sub: true
    },
    {
      id: '3.6',
      label: 'Disabled',
      sub: true
    },
    {
      id: '4',
      label: 'Component Code'
    }
  ];
</script>

<svelte:head>
  <title>Button . lomer-ui</title>
</svelte:head>

<PageWrapper
  {tickler}
  title="Button"
  sub="Component"
  info="Click it and make actions happen."
  prevLabel="Alert"
  prevLink="/components/alert"
  nextLabel="Card Picker"
  nextLink="/components/card-picker"
>
  <!-- INSTALLATION -->
  <PageSection id="1" title="Installation">
    <PageArticle title="Get the component">
      <CopyCLI code={`npx lomer-ui get button`} />
      <p>Or create component quickly!</p>
      <CopyCLI code={`npx lomer-ui craft button`} />
    </PageArticle>
  </PageSection>

  <!-- USAGE -->
  <PageSection id="2" title="Usage">
    <PageArticle title="Preview">
      <Screen class="justify-center"><ButtonUsage /></Screen>
      <CopySvelteCode code={ButtonUsageRaw} />
    </PageArticle>
  </PageSection>

  <!-- EXAMPLES -->
  <PageSection id="3" title="Examples">
    <!-- VARIANTS -->
    <PageArticle id="3.1" title="Variants">
      <Screen class="flex-wrap justify-center gap-4"><ButtonVariants /></Screen>
      <CopySvelteCode
        highlightedLines={[5, 6, 7, 8, 9, 10]}
        code={ButtonVariantsRaw}
      />
    </PageArticle>

    <!-- WITH ICON -->
    <PageArticle id="3.2" title="With icon">
      <Screen class="justify-center">
        <ButtonWithIcon />
      </Screen>
      <CopySvelteCode highlightedLines={[2, 6]} code={ButtonWithIconRaw} />
    </PageArticle>

    <!-- SIZES -->
    <PageArticle id="3.3" title="Sizes">
      <Screen class="flex-wrap items-center justify-center gap-4">
        <ButtonSizes />
      </Screen>
      <CopySvelteCode highlightedLines={[6, 9]} code={ButtonSizesRaw} />
    </PageArticle>

    <!-- EDGES -->
    <PageArticle id="3.4" title="Edges">
      <Screen class="flex-wrap items-center justify-center gap-4">
        <ButtonEdges />
      </Screen>
      <CopySvelteCode highlightedLines={[5, 6]} code={ButtonEdgesRaw} />
    </PageArticle>

    <!-- LOADING -->
    <PageArticle id="3.5" title="Loading">
      <Screen class="justify-center">
        <ButtonLoading />
      </Screen>
      <CopySvelteCode highlightedLines={[4]} code={ButtonLoadingRaw} />
    </PageArticle>

    <!-- DISABLED -->
    <PageArticle id="3.6" title="Disabled">
      <Screen class="justify-center">
        <ButtonDisabled />
      </Screen>
      <CopySvelteCode highlightedLines={[4]} code={ButtonDisabledRaw} />
    </PageArticle>
  </PageSection>

  <!-- COMPONENT CODE -->
  <PageSection id="4" title="Component Code">
    <CopySvelteCode
      title="alert.svelte"
      code={ButtonRaw}
      highlightedLines={[44, 55, 60, 65, 69]}
    />
  </PageSection>
</PageWrapper>
