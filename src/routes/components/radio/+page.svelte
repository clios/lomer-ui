<script lang="ts">
  import CopyCLI from '$lib/components/copy-c-l-i.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import Link from '$lib/components/base/link.svelte';
  import PageArticle from '$lib/components/page-article.svelte';
  import PageSection from '$lib/components/page-section.svelte';
  import PageWrapper from '$lib/components/page-wrapper.svelte';
  import RadioForm from './radio-form.svelte';
  import RadioFormRaw from './radio-form.svelte?raw';
  import RadioUsage from './radio-usage.svelte';
  import RadioUsageRaw from './radio-usage.svelte?raw';
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
      label: 'Form'
    }
  ];
</script>

<svelte:head>
  <title>Radio . lomer-ui</title>
</svelte:head>

<PageWrapper
  {tickler}
  title="Radio"
  sub="Component"
  info="Choose one option from a group with a click!"
  prevLabel="Link Button"
  prevLink="/components/link-button"
  nextLabel="Scroll Area"
  nextLink="/components/scroll-area"
>
  <!-- INSTALLATION -->
  <PageSection id="1" title="Installation">
    <PageArticle title="Get the component">
      <CopyCLI code={`npx lomer-ui get radio`} />
      <Link
        href="https://github.com/clios/lomer-ui/blob/main/src/lib/components/base/radio.svelte"
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
        <RadioUsage />
      </Screen>
      <CopySvelteCode code={RadioUsageRaw} />
    </PageArticle>
  </PageSection>

  <!-- FORM -->
  <PageSection id="3" title="Form">
    <PageArticle title="Preview">
      <Screen class="flex-col gap-4">
        <RadioForm />
      </Screen>
      <CopySvelteCode code={RadioFormRaw} />
    </PageArticle>
  </PageSection>
</PageWrapper>
