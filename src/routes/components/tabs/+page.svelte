<script lang="ts">
  import TabsUsage from './tabs-usage.svelte';
  import TabsUsageRaw from './tabs-usage.svelte?raw';
  import TabsContent from './tabs-content.svelte';
  import TabsContentRaw from './tabs-content.svelte?raw';
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
      id: '3',
      label: 'Content'
    }
  ];
</script>

<svelte:head>
  <title>Tabs . lomer-ui</title>
</svelte:head>

<PageWrapper
  {tickler}
  title="Tabs"
  sub="Component"
  info="Switch between views with ease."
  prevLabel="Table"
  prevLink="/components/table"
  nextLabel="Textarea"
  nextLink="/components/textarea"
>
  <!-- INSTALLATION -->
  <PageSection id="1" title="Installation">
    <PageArticle title="Get the component">
      <CopyCLI code={`npx lomer-ui get tabs`} />
      <Link
        href="https://github.com/clios/lomer-ui/blob/main/src/lib/components/base/tabs.svelte"
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
        <TabsUsage />
      </Screen>
      <CopySvelteCode code={TabsUsageRaw} />
    </PageArticle>
  </PageSection>

  <!-- CONTENT -->
  <PageSection id="3" title="Content">
    <PageArticle title="Get the component">
      <CopyCLI code={`npx lomer-ui get tabs-content`} />
      <Link
        href="https://github.com/clios/lomer-ui/blob/main/src/lib/components/base/tabs-content.svelte"
        target="_blank"
      >
        Source code
      </Link>
    </PageArticle>
    <PageArticle title="Preview">
      <Screen class="flex-col">
        <TabsContent />
      </Screen>
      <CopySvelteCode code={TabsContentRaw} />
    </PageArticle>
  </PageSection>
</PageWrapper>
