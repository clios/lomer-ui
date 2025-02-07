<script lang="ts">
  import AccordionDisabled from './accordion-disabled.svelte';
  import AccordionDisabledRaw from './accordion-disabled.svelte?raw';
  import AccordionLoading from './accordion-loading.svelte';
  import AccordionLoadingRaw from './accordion-loading.svelte?raw';
  import AccordionMultiple from './accordion-multiple.svelte';
  import AccordionMultipleRaw from './accordion-multiple.svelte?raw';
  import AccordionRaw from '$lib/components/ui/accordion.svelte?raw';
  import AccordionSingleMode from './accordion-single-mode.svelte';
  import AccordionSingleModeRaw from './accordion-single-mode.svelte?raw';
  import AccordionUsage from './accordion-usage.svelte';
  import AccordionUsageRaw from './accordion-usage.svelte?raw';
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
    },
    {
      id: '4',
      label: 'Component Code'
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
    <PageArticle title="Get the component">
      <CopyCLI code={`npx lomer-ui get accordion`} />
      <p>Or just craft it quickly!</p>
      <CopyCLI code={`npx lomer-ui craft accordion`} />
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

  <!-- CRAFTING RECIPES -->
  <PageSection id="4" title="Crafting Recipes">
    <PageArticle>
      <CopyCLI code="npx lomer-ui craft accordion-usage [name]" />
      <CopyCLI code="npx lomer-ui craft accordion-single-mode [name]" />
    </PageArticle>
  </PageSection>

  <!-- COMPONENT CODE -->
  <PageSection id="5" title="Component Code">
    <CopySvelteCode code={AccordionRaw} highlightedLines={[44, 46, 67]} />
  </PageSection>
</PageWrapper>
