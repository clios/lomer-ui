<script lang="ts">
  import CopyCLI from '$lib/components/copy-c-l-i.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import Link from '$lib/components/base/link.svelte';
  import PageArticle from '$lib/components/page-article.svelte';
  import PageSection from '$lib/components/page-section.svelte';
  import PageWrapper from '$lib/components/page-wrapper.svelte';
  import Screen from '$lib/components/screen.svelte';
  import VerticalNavigationUsage from './vertical-navigation-usage.svelte';
  import VerticalNavigationUsageRaw from './vertical-navigation-usage.svelte?raw';

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
  <title>Vertical Navigation . lomer-ui</title>
</svelte:head>

<PageWrapper
  {tickler}
  title="Vertical Navigation"
  sub="Action"
  info="Enables up/down arrow key navigation."
  prevLabel="Outside Click"
  prevLink="/actions/outside-click"
>
  <!-- INSTALLATION -->
  <PageSection id="1" title="Installation">
    <PageArticle title="Get the action">
      <CopyCLI code={`npx lomer-ui action vertical-navigation`} />
      <Link
        href="https://github.com/clios/lomer-ui/blob/main/src/lib/actions/vertical-navigation.svelte.ts"
        target="_blank"
      >
        Source code
      </Link>
    </PageArticle>
  </PageSection>

  <!-- USAGE -->
  <PageSection id="2" title="Usage">
    <!-- PREVIEW -->
    <PageArticle title="Preview">
      <Screen class="text-fg">
        <VerticalNavigationUsage />
      </Screen>
      <CopySvelteCode
        code={VerticalNavigationUsageRaw}
        highlightedLines={[8]}
      />
    </PageArticle>
  </PageSection>
</PageWrapper>
