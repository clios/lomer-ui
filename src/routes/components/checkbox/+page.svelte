<script lang="ts">
  import CheckboxDisabled from './checkbox-disabled.svelte';
  import CheckboxDisabledRaw from './checkbox-disabled.svelte?raw';
  import CheckboxUsage from './checkbox-usage.svelte';
  import CheckboxUsageRaw from './checkbox-usage.svelte?raw';
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
      label: 'Disabled'
    }
  ];
</script>

<svelte:head>
  <title>Checkbox . lomer-ui</title>
</svelte:head>

<PageWrapper
  {tickler}
  title="Check"
  sub="Component"
  info="Toggle options on or off."
  prevLabel="Button"
  prevLink="/components/button"
  nextLabel="Dialog"
  nextLink="/components/dialog"
>
  <!-- INSTALLATION -->
  <PageSection id="1" title="Installation">
    <PageArticle title="Get the component">
      <CopyCLI code={`npx lomer-ui get checkbox`} />
      <Link
        href="https://github.com/clios/lomer-ui/blob/main/src/lib/components/base/checkbox.svelte"
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
        <CheckboxUsage />
      </Screen>
      <CopySvelteCode code={CheckboxUsageRaw} />
    </PageArticle>
  </PageSection>

  <!-- DISABLED -->
  <PageSection id="3" title="Disabled">
    <PageArticle title="Preview">
      <Screen class="flex-col gap-4">
        <CheckboxDisabled />
      </Screen>
      <CopySvelteCode code={CheckboxDisabledRaw} />
    </PageArticle>
  </PageSection>
</PageWrapper>
