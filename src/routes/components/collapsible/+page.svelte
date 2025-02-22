<script>
  import CollapsibleHorizontal from './collapsible-horizontal.svelte';
  import CollapsibleHorizontalRaw from './collapsible-horizontal.svelte?raw';
  import CollapsibleUsage from './collapsible-usage.svelte';
  import CollapsibleUsageRaw from './collapsible-usage.svelte?raw';
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
      label: 'Installation'
    },
    {
      id: '2',
      label: 'Usage'
    },
    {
      id: '2',
      label: 'Horizontal'
    }
  ];
</script>

<svelte:head>
  <title>Collapsible . lomer-ui</title>
</svelte:head>

<PageWrapper
  {tickler}
  title="Collapsible"
  sub="Component"
  info="Expand and collapse content with ease."
  prevLabel="Checkbox"
  prevLink="/components/checkbox"
  nextLabel="Dialog"
  nextLink="/components/dialog"
>
  <!-- INSTALLATION -->
  <PageSection id="1" title="Installation">
    <PageArticle title="Get the component">
      <CopyCLI code={`npx lomer-ui get collapsible`} />
      <Link
        href="https://github.com/clios/lomer-ui/blob/main/src/lib/components/base/collapsible.svelte"
        target="_blank"
      >
        Source code
      </Link>
    </PageArticle>
  </PageSection>

  <!-- USAGE -->
  <PageSection id="2" title="Usage">
    <PageArticle title="Preview">
      <Screen class="flex-col">
        <CollapsibleUsage />
      </Screen>
      <CopySvelteCode code={CollapsibleUsageRaw} />
    </PageArticle>
  </PageSection>

  <!-- HORIZONTAL -->
  <PageSection id="2" title="Horizontal">
    <PageArticle title="Preview">
      <Screen>
        <CollapsibleHorizontal />
      </Screen>
      <CopySvelteCode code={CollapsibleHorizontalRaw} />
    </PageArticle>
  </PageSection>
</PageWrapper>
