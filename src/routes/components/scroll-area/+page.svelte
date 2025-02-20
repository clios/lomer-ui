<script lang="ts">
  import Link from '$lib/components/base/link.svelte';
  import CopyCLI from '$lib/components/copy-c-l-i.svelte';
  import PageArticle from '$lib/components/page-article.svelte';
  import PageSection from '$lib/components/page-section.svelte';
  import PageWrapper from '$lib/components/page-wrapper.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import Screen from '$lib/components/screen.svelte';
  import ScrollAreaUsage from './scroll-area-usage.svelte';
  import ScrollAreaUsageRaw from './scroll-area-usage.svelte?raw';
  import ScrollAreaHorizontal from './scroll-area-horizontal.svelte';
  import ScrollAreaHorizontalRaw from './scroll-area-horizontal.svelte?raw';

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
      label: 'Horizontal'
    }
  ];
</script>

<svelte:head>
  <title>Scroll Area . lomer-ui</title>
</svelte:head>

<PageWrapper
  {tickler}
  title="Scroll Area"
  sub="Component"
  info="Navigate overflowing content smoothly."
  prevLabel="Radio"
  prevLink="/components/radio"
  nextLabel="Select"
  nextLink="/components/select"
>
  <!-- INSTALLATION -->
  <PageSection id="1" title="Installation">
    <PageArticle title="Get the component">
      <CopyCLI code={`npx lomer-ui get scroll-area`} />
      <Link
        href="https://github.com/clios/lomer-ui/blob/main/src/lib/components/base/scroll-area.svelte"
        target="_blank"
      >
        Source code
      </Link>
    </PageArticle>
  </PageSection>

  <!-- USAGE -->
  <PageSection id="2" title="Usage">
    <PageArticle title="Preview">
      <Screen class="justify-center">
        <ScrollAreaUsage />
      </Screen>
      <CopySvelteCode code={ScrollAreaUsageRaw} />
    </PageArticle>
  </PageSection>

  <!-- HORIZONTAL -->
  <PageSection id="3" title="Horizontal">
    <PageArticle title="Preview">
      <Screen class="justify-center">
        <ScrollAreaHorizontal />
      </Screen>
      <CopySvelteCode code={ScrollAreaHorizontalRaw} />
    </PageArticle>
  </PageSection>
</PageWrapper>
