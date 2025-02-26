<script lang="ts">
  import CopyCLI from '$lib/components/copy-c-l-i.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import EscapeKeyUsage from './escape-key-usage.svelte';
  import EscapeKeyUsageRaw from './escape-key-usage.svelte?raw';
  import Link from '$lib/components/base/link.svelte';
  import PageArticle from '$lib/components/page-article.svelte';
  import PageSection from '$lib/components/page-section.svelte';
  import PageWrapper from '$lib/components/page-wrapper.svelte';
  import Screen from '$lib/components/screen.svelte';
  import TableParameters from '$lib/components/table-parameters.svelte';

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
  <title>Escape Key . lomer-ui</title>
</svelte:head>

<PageWrapper
  {tickler}
  title="Escape Key"
  sub="Action"
  info="Detects and handles the Escape key press."
  prevLabel="Textarea"
  prevLink="/components/textarea"
  nextLabel="Focus Trap"
  nextLink="/actions/focus-trap"
>
  <!-- INSTALLATION -->
  <PageSection id="1" title="Installation">
    <PageArticle title="Get the action">
      <CopyCLI code={`npx lomer-ui action escape-key`} />
      <Link
        href="https://github.com/clios/lomer-ui/blob/main/src/lib/actions/escape-key.svelte.ts"
        target="_blank"
      >
        Source code
      </Link>
    </PageArticle>
  </PageSection>

  <!-- USAGE -->
  <PageSection id="2" title="Usage">
    <!-- PREVIEW -->
    <PageArticle title="Preview">
      <Screen class="justify-center">
        <EscapeKeyUsage />
      </Screen>
      <CopySvelteCode code={EscapeKeyUsageRaw} highlightedLines={[4]} />
    </PageArticle>

    <!-- PARAMETERS -->
    <PageArticle title="Parameters">
      <TableParameters
        data={[
          {
            parameter: 'callback',
            type: '(event: KeyboardEvent) => void',
            description:
              'Function triggered when Escape is pressed on the topmost element.'
          }
        ]}
      />
    </PageArticle>
  </PageSection>
</PageWrapper>
