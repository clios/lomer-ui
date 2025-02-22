<script lang="ts">
  import AlertUsage from './alert-usage.svelte';
  import AlertUsageRaw from './alert-usage.svelte?raw';
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
    }
  ];
</script>

<svelte:head>
  <title>Alert . lomer-ui</title>
</svelte:head>

<PageWrapper
  {tickler}
  title="Alert"
  sub="Component"
  info="Grabs attention and delivers important information."
  prevLabel="Accordion"
  prevLink="/components/accordion"
  nextLabel="Avatar"
  nextLink="/components/avatar"
>
  <!-- INSTALLATION -->
  <PageSection id="1" title="Installation">
    <PageArticle title="Get the component">
      <CopyCLI code={`npx lomer-ui get alert`} />
      <Link
        href="https://github.com/clios/lomer-ui/blob/main/src/lib/components/base/alert.svelte"
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
        <AlertUsage />
      </Screen>
      <CopySvelteCode code={AlertUsageRaw} />
    </PageArticle>
  </PageSection>
</PageWrapper>
