<script lang="ts">
  import CopyCLI from '$lib/components/copy-c-l-i.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import FieldUsage from './field-usage.svelte';
  import FieldUsageRaw from './field-usage.svelte?raw';
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
  <title>Field . lomer-ui</title>
</svelte:head>

<PageWrapper
  {tickler}
  title="Field"
  sub="Component"
  info="A versatile space for inputs."
  prevLabel="Dropdown"
  prevLink="/components/dropdown"
  nextLabel="Input"
  nextLink="/components/input"
>
  <!-- INSTALLATION -->
  <PageSection id="1" title="Installation">
    <PageArticle title="Get the component">
      <CopyCLI code={`npx lomer-ui get field`} />
      <Link
        href="https://github.com/clios/lomer-ui/blob/main/src/lib/components/base/field.svelte"
        target="_blank"
      >
        Source code
      </Link>
    </PageArticle>
  </PageSection>

  <!-- USAGE -->
  <PageSection id="2" title="Usage">
    <PageArticle title="Preview">
      <Screen class="flex-col gap-8">
        <FieldUsage />
      </Screen>
      <CopySvelteCode code={FieldUsageRaw} />
    </PageArticle>
  </PageSection>
</PageWrapper>
