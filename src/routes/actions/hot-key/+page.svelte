<script lang="ts">
  import CopyCLI from '$lib/components/copy-c-l-i.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import HotKeyUsage from './hot-key-usage.svelte';
  import HotKeyUsageRaw from './hot-key-usage.svelte?raw';
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
  <title>Hot Key . lomer-ui</title>
</svelte:head>

<PageWrapper
  {tickler}
  title="Hot Key"
  sub="Action"
  info="Triggers actions with keyboard shortcuts."
  prevLabel="Focus Trap"
  prevLink="/actions/focus-trap"
  nextLabel="Outside Click"
  nextLink="/actions/outside-click"
>
  <!-- INSTALLATION -->
  <PageSection id="1" title="Installation">
    <PageArticle title="Get the action">
      <CopyCLI code={`npx lomer-ui action hot-key`} />
      <Link
        href="https://github.com/clios/lomer-ui/blob/main/src/lib/actions/hot-key.svelte.ts"
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
      <Screen class="flex-col justify-center gap-2">
        <HotKeyUsage />
      </Screen>
      <CopySvelteCode
        code={HotKeyUsageRaw}
        highlightedLines={[5, 13, 24, 25]}
      />
    </PageArticle>

    <!-- PARAMETERS -->
    <PageArticle title="Parameters">
      <TableParameters
        data={[
          {
            parameter: 'options.key',
            type: 'string',
            description:
              'The key that triggers the "onKeydown" function when pressed.'
          },
          {
            parameter: 'options.onKeydown',
            type: '(event: KeyboardEvent) => void',
            description:
              'A callback function that executes when the specified key is pressed.'
          },
          {
            parameter: 'options.ctrlKey',
            type: 'boolean',
            description:
              'Whether the Ctrl key must be held while pressing the key.'
          },
          {
            parameter: 'options.metaKey',
            type: 'boolean',
            description: 'Whether the Meta key (⌘ on macOS) must be held.'
          },
          {
            parameter: 'options.shiftKey',
            type: 'boolean',
            description: 'Whether the Shift key must be held.'
          },
          {
            parameter: 'options.altKey',
            type: 'boolean',
            description: 'Whether the Alt (Option on macOS) key must be held.'
          }
        ]}
      />
    </PageArticle>
  </PageSection>
</PageWrapper>
