<script lang="ts">
  import CopyCLI from '$lib/components/copy-c-l-i.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import Link from '$lib/components/base/link.svelte';
  import PageArticle from '$lib/components/page-article.svelte';
  import PageSection from '$lib/components/page-section.svelte';
  import PageWrapper from '$lib/components/page-wrapper.svelte';
  import Screen from '$lib/components/screen.svelte';
  import TableClickable from './table-clickable.svelte';
  import TableClickableRaw from './table-clickable.svelte?raw';
  import TableOutline from './table-outline.svelte';
  import TableOutlineRaw from './table-outline.svelte?raw';
  import TableUsage from './table-usage.svelte';
  import TableUsageRaw from './table-usage.svelte?raw';
  import TableZebra from './table-zebra.svelte';
  import TableZebraRaw from './table-zebra.svelte?raw';

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
      label: 'Zebra'
    },
    {
      id: '4',
      label: 'Outline'
    },
    {
      id: '5',
      label: 'Clickable'
    }
  ];
</script>

<svelte:head>
  <title>Table . lomer-ui</title>
</svelte:head>

<PageWrapper
  {tickler}
  title="Table"
  sub="Component"
  info="Organize and display data in a structured grid."
  prevLabel="Switch"
  prevLink="/components/switch"
  nextLabel="Tabs"
  nextLink="/components/tabs"
>
  <!-- INSTALLATION -->
  <PageSection id="1" title="Installation">
    <PageArticle title="Get the component">
      <CopyCLI code={`npx lomer-ui get table`} />
      <Link
        href="https://github.com/clios/lomer-ui/blob/main/src/lib/components/base/table.svelte"
        target="_blank"
      >
        Source code
      </Link>
    </PageArticle>
  </PageSection>

  <!-- USAGE -->
  <PageSection id="2" title="Usage">
    <PageArticle title="Preview">
      <Screen>
        <TableUsage />
      </Screen>
      <CopySvelteCode code={TableUsageRaw} />
    </PageArticle>
  </PageSection>

  <!-- ZEBRA -->
  <PageSection id="3" title="Zebra">
    <PageArticle title="Preview">
      <Screen>
        <TableZebra />
      </Screen>
      <CopySvelteCode code={TableZebraRaw} highlightedLines={[27]} />
    </PageArticle>
  </PageSection>

  <!-- OUTLINE -->
  <PageSection id="4" title="Outline">
    <PageArticle title="Preview">
      <Screen>
        <TableOutline />
      </Screen>
      <CopySvelteCode code={TableOutlineRaw} highlightedLines={[27]} />
    </PageArticle>
  </PageSection>

  <!-- CLICKABLE -->
  <PageSection id="5" title="Clickable">
    <PageArticle title="Preview">
      <Screen>
        <TableClickable />
      </Screen>
      <CopySvelteCode code={TableClickableRaw} highlightedLines={[33]} />
    </PageArticle>
  </PageSection>
</PageWrapper>
