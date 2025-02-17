<script lang="ts">
  import PageWrapper from '$lib/components/page-wrapper.svelte';
  import CopyCLI from '$lib/components/copy-c-l-i.svelte';
  import PageArticle from '$lib/components/page-article.svelte';
  import PageSection from '$lib/components/page-section.svelte';
  import Link from '$lib/components/base/link.svelte';
  import Screen from '$lib/components/screen.svelte';
  import InputUsage from './input-usage.svelte';
  import InputUsageRaw from './input-usage.svelte?raw';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import InputForm from './input-form.svelte';
  import InputFormRaw from './input-form.svelte?raw';

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
  <title>Input . lomer-ui</title>
</svelte:head>

<PageWrapper
  {tickler}
  title="Input"
  sub="Component"
  info="A clear and simple way to collect user data."
  prevLabel="Field"
  prevLink="/components/field"
  nextLabel="Link"
  nextLink="/components/link"
>
  <!-- INSTALLATION -->
  <PageSection id="1" title="Installation">
    <PageArticle title="Get the component">
      <CopyCLI code={`npx lomer-ui get input`} />
      <Link
        href="https://github.com/clios/lomer-ui/blob/main/src/lib/components/base/input.svelte"
        target="_blank"
      >
        Source code
      </Link>
    </PageArticle>
  </PageSection>

  <!-- USAGE -->
  <PageSection id="2" title="Usage">
    <PageArticle title="Preview">
      <Screen class="w-min flex-col gap-4">
        <InputUsage />
      </Screen>
      <CopySvelteCode code={InputUsageRaw} />
    </PageArticle>
  </PageSection>

  <!-- FORM -->
  <PageSection id="3" title="Form">
    <PageArticle title="Preview">
      <Screen class="w-min flex-col gap-4">
        <InputForm />
      </Screen>
      <CopySvelteCode code={InputFormRaw} />
    </PageArticle>
  </PageSection>
</PageWrapper>
