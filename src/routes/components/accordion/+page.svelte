<script lang="ts">
  import AccordionSingleMode from './accordion-single-mode.svelte';
  import AccordionSingleModeRaw from './accordion-single-mode.svelte?raw';
  import AccordionUsage from './accordion-usage.svelte';
  import AccordionUsageRaw from './accordion-usage.svelte?raw';
  import CopyCLI from '$lib/components/copy-c-l-i.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import Link from '$lib/components/ui/link.svelte';
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
      label: 'Single mode'
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
      <p>Or just <Link href="/docs/crafting">craft</Link> it already.</p>
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

  <!-- SINGLE MODE -->
  <PageSection id="3" title="Single mode">
    <PageArticle title="Preview">
      <Screen class="flex-col">
        <AccordionSingleMode />
      </Screen>
      <CopySvelteCode code={AccordionSingleModeRaw} />
    </PageArticle>
  </PageSection>
</PageWrapper>
