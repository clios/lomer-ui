<script lang="ts">
  import CopyCLI from '$lib/components/copy-c-l-i.svelte';
  import PageArticle from '$lib/components/page-article.svelte';
  import PageSection from '$lib/components/page-section.svelte';
  import PageWrapper from '$lib/components/page-wrapper.svelte';
  import Link from '$lib/components/base/link.svelte';
  import Screen from '$lib/components/screen.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import LinkUsage from './link-usage.svelte';
  import LinkUsageRaw from './link-usage.svelte?raw';

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
  <title>Link . lomer-ui</title>
</svelte:head>

<PageWrapper
  {tickler}
  title="Link"
  sub="Component"
  info="Connects users to new destinations."
  prevLabel="Input"
  prevLink="/components/input"
  nextLabel="Radio"
  nextLink="/components/radio"
>
  <!-- INSTALLATION -->
  <PageSection id="1" title="Installation">
    <PageArticle title="Get the component">
      <CopyCLI code={`npx lomer-ui get link`} />
      <Link
        href="https://github.com/clios/lomer-ui/blob/main/src/lib/components/base/link.svelte"
        target="_blank"
      >
        Source code
      </Link>
    </PageArticle>
  </PageSection>

  <!-- USAGE -->
  <PageSection id="2" title="Usage">
    <PageArticle title="Preview">
      <Screen class="flex-col gap-4">
        <LinkUsage />
      </Screen>
      <CopySvelteCode code={LinkUsageRaw} />
    </PageArticle>
  </PageSection>
</PageWrapper>
