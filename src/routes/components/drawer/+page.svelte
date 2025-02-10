<script lang="ts">
  import CopyCLI from '$lib/components/copy-c-l-i.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import DrawerLeft from './drawer-left.svelte';
  import DrawerLeftRaw from './drawer-left.svelte?raw';
  import DrawerUsage from './drawer-usage.svelte';
  import DrawerUsageRaw from './drawer-usage.svelte?raw';
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
      label: 'Examples'
    },
    {
      id: '3.1',
      label: 'Left drawer',
      sub: true
    }
  ];
</script>

<svelte:head>
  <title>Drawer . lomer-ui</title>
</svelte:head>

<PageWrapper
  {tickler}
  title="Drawer"
  sub="Component"
  info="Slide-out panel for navigation or content."
  prevLabel="Dialog"
  prevLink="/components/dialog"
  nextLabel="Field"
  nextLink="/components/field"
>
  <!-- INSTALLATION -->
  <PageSection id="1" title="Installation">
    <PageArticle title="Get the component">
      <CopyCLI code={`npx lomer-ui get drawer`} />
      <p>Or just <Link href="/docs/crafting">craft</Link> it already.</p>
      <CopyCLI code={`npx lomer-ui craft drawer`} />
    </PageArticle>
  </PageSection>

  <!-- USAGE -->
  <PageSection id="2" title="Usage">
    <PageArticle title="Preview">
      <Screen class="justify-center">
        <DrawerUsage />
      </Screen>
      <CopySvelteCode code={DrawerUsageRaw} />
    </PageArticle>
  </PageSection>

  <!-- EXAMPLES -->
  <PageSection id="3" title="Examples">
    <!-- LEFT DRAWER -->
    <PageArticle id="3.1" title="Left drawer">
      <Screen class="justify-center">
        <DrawerLeft />
      </Screen>
      <CopySvelteCode highlightedLines={[8]} code={DrawerLeftRaw} />
    </PageArticle>
  </PageSection>
</PageWrapper>
