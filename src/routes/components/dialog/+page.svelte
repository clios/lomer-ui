<script lang="ts">
  import CopyCLI from '$lib/components/copy-c-l-i.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import DialogUsage from './dialog-usage.svelte';
  import DialogUsageRaw from './dialog-usage.svelte?raw';
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
      label: 'Custom icon',
      sub: true
    },
    {
      id: '3.2',
      label: 'Closable',
      sub: true
    },
    {
      id: '3.3',
      label: 'Destructive',
      sub: true
    }
  ];
</script>

<svelte:head>
  <title>Dialog . lomer-ui</title>
</svelte:head>

<PageWrapper
  {tickler}
  title="Dialog"
  sub="Component"
  info="Displays a focused interface for user interaction."
  prevLabel="Checkbox"
  prevLink="/components/checkbox"
  nextLabel="Drawer"
  nextLink="/components/drawer"
>
  <!-- INSTALLATION -->
  <PageSection id="1" title="Installation">
    <PageArticle title="Get the component">
      <CopyCLI code={`npx lomer-ui get dialog`} />
      <p>Or just <Link href="/docs/crafting">craft</Link> it already.</p>
      <CopyCLI code={`npx lomer-ui craft dialog`} />
    </PageArticle>
  </PageSection>

  <!-- USAGE -->
  <PageSection id="2" title="Usage">
    <PageArticle title="Preview">
      <Screen class="justify-center">
        <DialogUsage />
      </Screen>
      <CopySvelteCode code={DialogUsageRaw} />
    </PageArticle>
  </PageSection>
</PageWrapper>
