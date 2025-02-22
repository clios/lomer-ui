<script lang="ts">
  import CopyCLI from '$lib/components/copy-c-l-i.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import Link from '$lib/components/base/link.svelte';
  import PageArticle from '$lib/components/page-article.svelte';
  import PageSection from '$lib/components/page-section.svelte';
  import PageWrapper from '$lib/components/page-wrapper.svelte';
  import Screen from '$lib/components/screen.svelte';
  import SwitchDisabled from './switch-disabled.svelte';
  import SwitchDisabledRaw from './switch-disabled.svelte?raw';
  import SwitchEdges from './switch-edges.svelte';
  import SwitchEdgesRaw from './switch-edges.svelte?raw';
  import SwitchLoading from './switch-loading.svelte';
  import SwitchLoadingRaw from './switch-loading.svelte?raw';
  import SwitchUsage from './switch-usage.svelte';
  import SwitchUsageRaw from './switch-usage.svelte?raw';

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
      label: 'Edges'
    },
    {
      id: '4',
      label: 'Disabled'
    },
    {
      id: '5',
      label: 'Loading'
    }
  ];
</script>

<svelte:head>
  <title>Switch . lomer-ui</title>
</svelte:head>

<PageWrapper
  {tickler}
  title="Switch"
  sub="Component"
  info="Toggle options on or off."
  prevLabel="Select"
  prevLink="/components/select"
  nextLabel="Table"
  nextLink="/components/table"
>
  <!-- INSTALLATION -->
  <PageSection id="1" title="Installation">
    <PageArticle title="Get the component">
      <CopyCLI code={`npx lomer-ui get switch`} />
      <Link
        href="https://github.com/clios/lomer-ui/blob/main/src/lib/components/base/switch.svelte"
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
        <SwitchUsage />
      </Screen>
      <CopySvelteCode code={SwitchUsageRaw} />
    </PageArticle>
  </PageSection>

  <!-- EDGES -->
  <PageSection id="3" title="Edges">
    <PageArticle title="Preview">
      <Screen class="flex-col gap-4">
        <SwitchEdges />
      </Screen>
      <CopySvelteCode code={SwitchEdgesRaw} />
    </PageArticle>
  </PageSection>

  <!-- DISABLED -->
  <PageSection id="4" title="Disabled">
    <PageArticle title="Preview">
      <Screen class="flex-col gap-4">
        <SwitchDisabled />
      </Screen>
      <CopySvelteCode code={SwitchDisabledRaw} />
    </PageArticle>
  </PageSection>

  <!-- LOADING -->
  <PageSection id="5" title="Loading">
    <PageArticle title="Preview">
      <Screen class="flex-col gap-4">
        <SwitchLoading />
      </Screen>
      <CopySvelteCode code={SwitchLoadingRaw} />
    </PageArticle>
  </PageSection>
</PageWrapper>
