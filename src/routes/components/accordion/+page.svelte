<script lang="ts">
  import AccordionDisabled from './accordion-disabled.svelte';
  import AccordionDisabledRaw from './accordion-disabled.svelte?raw';
  import AccordionLoading from './accordion-loading.svelte';
  import AccordionLoadingRaw from './accordion-loading.svelte?raw';
  import AccordionMultiple from './accordion-multiple.svelte';
  import AccordionMultipleRaw from './accordion-multiple.svelte?raw';
  import AccordionSingleMode from '$lib/components/recipes/accordion-single-mode.svelte';
  import AccordionSingleModeRaw from '$lib/components/recipes/accordion-single-mode.svelte?raw';
  import AccordionUsage from '$lib/components/recipes/accordion-usage.svelte';
  import AccordionUsageRaw from '$lib/components/recipes/accordion-usage.svelte?raw';
  import ButtonComponentCode from '$lib/components/button-component-code.svelte';
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
      label: 'Multiple',
      sub: true
    },
    {
      id: '3.2',
      label: 'Single mode',
      sub: true
    },
    {
      id: '3.3',
      label: 'Loading',
      sub: true
    },
    {
      id: '3.4',
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
  <!-- INSTALLATION -->
  <PageSection id="1" title="Installation">
    <PageArticle>
      <CopyCLI code={`npx lomer-ui add accordion`} />
      <ButtonComponentCode
        link="https://github.com/clios/lomer-ui/blob/main/src/lib/accordion.svelte"
      />
    </PageArticle>
  </PageSection>

  <!-- USAGE -->
  <PageSection id="2" title="Usage">
    <PageArticle title="Preview">
      <Screen>
        <AccordionUsage />
      </Screen>
      <CopySvelteCode code={AccordionUsageRaw} />
    </PageArticle>
  </PageSection>

  <!-- EXAMPLES -->
  <PageSection id="3" title="Examples">
    <!-- MULTIPLE -->
    <PageArticle id="3.1" title="Multiple">
      <Screen class="flex-col">
        <AccordionMultiple />
      </Screen>
      <CopySvelteCode highlightedLines={[5, 6]} code={AccordionMultipleRaw} />
    </PageArticle>

    <!-- SINGLE MODE -->
    <PageArticle id="3.2" title="Single mode">
      <Screen class="flex-col">
        <AccordionSingleMode />
      </Screen>
      <CopySvelteCode
        highlightedLines={[2, 5, 6, 7]}
        code={AccordionSingleModeRaw}
      />
    </PageArticle>

    <!-- LOADING -->
    <PageArticle id="3.3" title="Loading">
      <Screen>
        <AccordionLoading />
      </Screen>
      <CopySvelteCode highlightedLines={[4]} code={AccordionLoadingRaw} />
    </PageArticle>

    <!-- DISABLED -->
    <PageArticle id="3.4" title="Disabled">
      <Screen>
        <AccordionDisabled />
      </Screen>
      <CopySvelteCode highlightedLines={[4]} code={AccordionDisabledRaw} />
    </PageArticle>
  </PageSection>
</PageWrapper>
