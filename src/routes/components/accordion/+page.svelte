<script lang="ts">
  import AccordionRaw from '$lib/components/base/accordion.svelte?raw';
  import AccordionPreview from './accordion-preview.svelte';
  import AccordionPreviewRaw from './accordion-preview.svelte?raw';
  import CopyCLI from '$lib/components/copy-c-l-i.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import Link from '$lib/components/base/link.svelte';
  import PageArticle from '$lib/components/page-article.svelte';
  import PageSection from '$lib/components/page-section.svelte';
  import PageWrapper from '$lib/components/page-wrapper.svelte';
  import Screen from '$lib/components/screen.svelte';

  const tickler = [
    {
      id: '1',
      label: 'Source Code'
    },
    {
      id: '2',
      label: 'Usage'
    },
    {
      id: '3',
      label: 'Single mode'
    }
  ];
</script>

<svelte:head>
  <title>Accordion . lomer-ui</title>
</svelte:head>

<PageWrapper
  title="Accordion"
  sub="Component"
  info="Expand and collapse content with ease."
  prevLabel="CLI"
  prevLink="/docs/cli"
  nextLabel="Alert"
  nextLink="/components/alert"
>
  <!-- OVERVIEW -->
  <PageSection id="1" title="Overview">
    <PageArticle title="Preview">
      <Screen class="flex-col">
        <AccordionPreview />
      </Screen>
    </PageArticle>
    <PageArticle title="Usage">
      <CopySvelteCode code={AccordionPreviewRaw} />
    </PageArticle>
  </PageSection>

  <!-- GUIDE -->
  <PageSection id="1" title="Guide">
    <PageArticle title="Code the components">
      <CopySvelteCode title="accordion.svelte" code={AccordionRaw} />
      <CopySvelteCode title="accordion-title.svelte" code={`title`} />
      <CopyCLI code={`npx lomer-ui get accordion`} />
      <Link
        href="https://github.com/clios/lomer-ui/blob/main/src/lib/components/base/accordion.svelte"
        target="_blank"
      >
        Source code
      </Link>
    </PageArticle>
  </PageSection>

  <!-- SOURCE CODE -->
  <PageSection id="1" title="Source Code">
    <PageArticle title="Get the component">
      <CopyCLI code={`npx lomer-ui get accordion`} />
      <Link
        href="https://github.com/clios/lomer-ui/blob/main/src/lib/components/base/accordion.svelte"
        target="_blank"
      >
        Source code
      </Link>
    </PageArticle>
  </PageSection>
</PageWrapper>
