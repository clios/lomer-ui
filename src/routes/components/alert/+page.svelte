<script lang="ts">
  import AlertClosable from '$lib/components/recipes/alert-closable.svelte';
  import AlertClosableRaw from '$lib/components/recipes/alert-closable.svelte?raw';
  import AlertCustomIcon from '$lib/components/recipes/alert-custom-icon.svelte';
  import AlertCustomIconRaw from '$lib/components/recipes/alert-custom-icon.svelte?raw';
  import AlertDestructive from '$lib/components/recipes/alert-destructive.svelte';
  import AlertDestructiveRaw from '$lib/components/recipes/alert-destructive.svelte?raw';
  import AlertRaw from '$lib/components/ui/alert.svelte?raw';
  import AlertUsage from '$lib/components/recipes/alert-usage.svelte';
  import AlertUsageRaw from '$lib/components/recipes/alert-usage.svelte?raw';
  import CopyCLI from '$lib/components/copy-c-l-i.svelte';
  import CopyCLICraftCode from '$lib/components/copy-c-l-i-craft-code.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
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
    },
    {
      id: '4',
      label: 'Crafting Recipes'
    },
    {
      id: '5',
      label: 'Component Code'
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
  nextLabel="Button"
  nextLink="/components/button"
>
  <!-- INSTALLATION -->
  <PageSection id="1" title="Installation">
    <PageArticle title="Get the root component">
      <CopyCLI code={`npx lomer-ui get alert`} />
    </PageArticle>
  </PageSection>

  <!-- CRAFTING RECIPES -->
  <PageSection id="1" title="Crafting Recipes">
    <PageArticle title="">
      <CopyCLI code={`npx lomer-ui craft alert-usage [name]`} />
      <CopyCLI code={`npx lomer-ui craft alert-custom-icon [name]`} />
      <CopyCLI code={`npx lomer-ui craft alert-closable [name]`} />
      <CopyCLI code={`npx lomer-ui craft alert-destructive [name]`} />
    </PageArticle>
  </PageSection>

  <!-- USAGE -->
  <PageSection id="2" title="Usage">
    <PageArticle title="Preview">
      <Screen>
        <AlertUsage />
      </Screen>
      <CopySvelteCode code={AlertUsageRaw} />
      <CopyCLICraftCode code="alert-usage" />
    </PageArticle>
  </PageSection>

  <!-- EXAMPLES -->
  <PageSection id="3" title="Examples">
    <!-- CUSTOM ICON -->
    <PageArticle id="3.1" title="Custom icon">
      <Screen>
        <AlertCustomIcon />
      </Screen>
      <CopySvelteCode
        highlightedLines={[2, 6, 7, 8]}
        code={AlertCustomIconRaw}
      />
    </PageArticle>

    <!-- CLOSABLE -->
    <PageArticle id="3.1" title="Closable">
      <Screen class="flex-col items-center gap-2">
        <AlertClosable />
      </Screen>
      <CopySvelteCode highlightedLines={[4]} code={AlertClosableRaw} />
    </PageArticle>

    <!-- DESTRUCTIVE -->
    <PageArticle id="3.3" title="Destructive">
      <Screen class="flex-col items-center gap-2">
        <AlertDestructive />
      </Screen>
      <CopySvelteCode highlightedLines={[4]} code={AlertDestructiveRaw} />
    </PageArticle>
  </PageSection>

  <!-- CRAFTING RECIPES -->
  <PageSection id="4" title="Crafting Recipes">
    <PageArticle>
      <CopyCLI code="npx lomer-ui craft alert-usage [name]" />
    </PageArticle>
    <PageArticle>
      <CopyCLI code="npx lomer-ui craft alert-custom-icon [name]" />
    </PageArticle>
  </PageSection>

  <!-- COMPONENT CODE -->
  <PageSection id="5" title="Component Code">
    <CopySvelteCode code={AlertRaw} highlightedLines={[27, 46, 68]} />
  </PageSection>
</PageWrapper>
