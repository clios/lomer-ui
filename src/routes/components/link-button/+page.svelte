<script lang="ts">
  import CopyCLI from '$lib/components/copy-c-l-i.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import Link from '$lib/components/base/link.svelte';
  import LinkButtonUsage from './link-button-usage.svelte';
  import LinkButtonUsageRaw from './link-button-usage.svelte?raw';
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
  <title>Link Button . lomer-ui</title>
</svelte:head>

<PageWrapper
  {tickler}
  title="Link Button"
  sub="Component"
  info="Clickable text that navigates like a button."
  prevLabel="Link"
  prevLink="/components/link"
  nextLabel="Radio"
  nextLink="/components/radio"
>
  <!-- INSTALLATION -->
  <PageSection id="1" title="Installation">
    <PageArticle title="Get the component">
      <CopyCLI code={`npx lomer-ui get link-button`} />
      <Link
        href="https://github.com/clios/lomer-ui/blob/main/src/lib/components/base/link-button.svelte"
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
        <LinkButtonUsage />
      </Screen>
      <CopySvelteCode code={LinkButtonUsageRaw} />
    </PageArticle>
  </PageSection>
</PageWrapper>
