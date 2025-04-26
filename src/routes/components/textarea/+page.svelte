<script lang="ts">
  import CopyCLI from '$lib/components/copy-c-l-i.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import Link from '$lib/components/base/link.svelte';
  import PageArticle from '$lib/components/page-article.svelte';
  import PageSection from '$lib/components/page-section.svelte';
  import PageWrapper from '$lib/components/page-wrapper.svelte';
  import Screen from '$lib/components/screen.svelte';
  import TextareaForm from './textarea-form.svelte';
  import TextareaFormRaw from './textarea-form.svelte?raw';
  import TextareaUsage from './textarea-usage.svelte';
  import TextareaUsageRaw from './textarea-usage.svelte?raw';

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
  <title>Textarea . lomer-ui</title>
</svelte:head>

<PageWrapper
  {tickler}
  title="Textarea"
  sub="Component"
  info="Capture multi-line text with ease."
  prevLabel="Tabs"
  prevLink="/components/tabs"
  nextLabel="Escape Key"
  nextLink="/actions/escape-key"
>
  <!-- INSTALLATION -->
  <PageSection id="1" title="Installation">
    <PageArticle title="Get the component">
      <CopyCLI code={`npx lomer-ui get textarea`} />
      <Link href="https://github.com/clios/lomer-ui/blob/main/src/lib/components/base/textarea.svelte" target="_blank">
        Source code
      </Link>
    </PageArticle>
  </PageSection>

  <!-- USAGE -->
  <PageSection id="2" title="Usage">
    <PageArticle title="Preview">
      <Screen class="w-min flex-col gap-4">
        <TextareaUsage />
      </Screen>
      <CopySvelteCode code={TextareaUsageRaw} />
    </PageArticle>
  </PageSection>

  <!-- FORM -->
  <PageSection id="3" title="Form">
    <PageArticle title="Preview">
      <Screen class="w-min flex-col gap-4">
        <TextareaForm />
      </Screen>
      <CopySvelteCode code={TextareaFormRaw} />
    </PageArticle>
  </PageSection>
</PageWrapper>
