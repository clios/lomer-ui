<script lang="ts">
  import ButtonEdges from './button-edges.svelte';
  import ButtonEdgesRaw from './button-edges.svelte?raw';
  import ButtonSizes from './button-sizes.svelte';
  import ButtonSizesRaw from './button-sizes.svelte?raw';
  import ButtonUsage from './button-usage.svelte';
  import ButtonUsageRaw from './button-usage.svelte?raw';
  import ButtonVariants from './button-variants.svelte';
  import ButtonVariantsRaw from './button-variants.svelte?raw';
  import ButtonWithIcon from './button-with-icon.svelte';
  import ButtonWithIconRaw from './button-with-icon.svelte?raw';
  import CopyCLI from '$lib/components/copy-c-l-i.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
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
      label: 'Variants'
    },
    {
      id: '4',
      label: 'With icon'
    },
    {
      id: '5',
      label: 'Sizes'
    },
    {
      id: '6',
      label: 'Edges'
    }
  ];
</script>

<svelte:head>
  <title>Button . lomer-ui</title>
</svelte:head>

<PageWrapper
  {tickler}
  title="Button"
  sub="Component"
  info="Click it and make actions happen."
  prevLabel="Alert"
  prevLink="/components/alert"
  nextLabel="Checkbox"
  nextLink="/components/checkbox"
>
  <!-- INSTALLATION -->
  <PageSection id="1" title="Installation">
    <PageArticle title="Get the component">
      <CopyCLI code={`npx lomer-ui get button`} />
      <Link
        href="https://github.com/clios/lomer-ui/blob/main/src/lib/components/base/button.svelte"
        target="_blank"
      >
        Source code
      </Link>
    </PageArticle>
  </PageSection>

  <!-- USAGE -->
  <PageSection id="2" title="Usage">
    <PageArticle title="Preview">
      <Screen class="justify-center gap-4"><ButtonUsage /></Screen>
      <CopySvelteCode code={ButtonUsageRaw} />
    </PageArticle>
  </PageSection>

  <!-- VARIANTS -->
  <PageSection id="3" title="Variants">
    <PageArticle title="Preview">
      <Screen class="flex-wrap justify-center gap-4"><ButtonVariants /></Screen>
      <CopySvelteCode code={ButtonVariantsRaw} />
    </PageArticle>
  </PageSection>

  <!-- WITH ICON -->
  <PageSection id="4" title="With icon">
    <PageArticle title="Preview">
      <Screen class="justify-center">
        <ButtonWithIcon />
      </Screen>
      <CopySvelteCode code={ButtonWithIconRaw} />
    </PageArticle>
  </PageSection>

  <!-- SIZES -->
  <PageSection id="5" title="Sizes">
    <PageArticle title="Preview">
      <Screen class="flex-wrap items-center justify-center gap-4">
        <ButtonSizes />
      </Screen>
      <CopySvelteCode code={ButtonSizesRaw} />
    </PageArticle>
  </PageSection>

  <!-- EDGES -->
  <PageSection id="6" title="Edges">
    <PageArticle title="Preview">
      <Screen class="flex-wrap items-center justify-center gap-4">
        <ButtonEdges />
      </Screen>
      <CopySvelteCode code={ButtonEdgesRaw} />
    </PageArticle>
  </PageSection>
</PageWrapper>
