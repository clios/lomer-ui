<script lang="ts">
  import PageWrapper from '$lib/components/page-wrapper.svelte';
  import CopyCLI from '$lib/components/copy-c-l-i.svelte';
  import PageArticle from '$lib/components/page-article.svelte';
  import PageSection from '$lib/components/page-section.svelte';
  import Link from '$lib/components/ui/link.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import Screen from '$lib/components/screen.svelte';
  import SelectUsage from './select-usage.svelte';
  import SelectUsageRaw from './select-usage.svelte?raw';
  import SelectForm from './select-form.svelte';
  import SelectFormRaw from './select-form.svelte?raw';

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
      label: 'Form'
    }
  ];
</script>

<svelte:head>
  <title>Select . lomer-ui</title>
</svelte:head>

<PageWrapper
  {tickler}
  title="Select"
  sub="Component"
  info="Pick an option from a dropdown menu."
  prevLabel="Scroll Area"
  prevLink="/components/scroll-area"
  nextLabel="Switch"
  nextLink="/components/switch"
>
  <!-- INSTALLATION -->
  <PageSection id="1" title="Installation">
    <PageArticle title="Get the component">
      <CopyCLI code={`npx lomer-ui get select`} />
      <p>Or just <Link href="/docs/crafting">craft</Link> it already.</p>
      <CopyCLI code={`npx lomer-ui craft select`} />
    </PageArticle>
  </PageSection>

  <!-- USAGE -->
  <PageSection id="2" title="Usage">
    <PageArticle title="Preview">
      <Screen class="flex-col gap-4">
        <SelectUsage />
      </Screen>
      <CopySvelteCode code={SelectUsageRaw} />
    </PageArticle>
  </PageSection>

  <!-- FORM -->
  <PageSection id="3" title="Form">
    <PageArticle title="Preview">
      <Screen class="flex-col gap-4">
        <SelectForm />
      </Screen>
      <CopySvelteCode code={SelectFormRaw} />
    </PageArticle>
  </PageSection>
</PageWrapper>
