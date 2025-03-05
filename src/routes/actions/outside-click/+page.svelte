<script lang="ts">
  import CopyCLI from '$lib/components/copy-c-l-i.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import Link from '$lib/components/base/link.svelte';
  import OutsideClickUsage from './outside-click-usage.svelte';
  import OutsideClickUsageRaw from './outside-click-usage.svelte?raw';
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
  <title>Outside Click . lomer-ui</title>
</svelte:head>

<PageWrapper
  {tickler}
  title="Outside Click"
  sub="Action"
  info="Detects clicks outside a specified element."
  prevLabel="Hotkey"
  prevLink="/actions/hotkey"
  nextLabel="Vertical Navigation"
  nextLink="/actions/vertical-navigation"
>
  <!-- INSTALLATION -->
  <PageSection id="1" title="Installation">
    <PageArticle title="Get the action">
      <CopyCLI code={`npx lomer-ui action outside-click`} />
      <Link
        href="https://github.com/clios/lomer-ui/blob/main/src/lib/actions/outside-click.svelte.ts"
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
      <Screen class="flex-col items-center justify-center gap-4">
        <OutsideClickUsage />
      </Screen>
      <CopySvelteCode code={OutsideClickUsageRaw} highlightedLines={[12]} />
    </PageArticle>

    <!-- PARAMETERS -->
    <PageArticle title="Parameters">
      <TableParameters
        data={[
          {
            parameter: 'callback',
            type: '(event: MouseEvent) => void',
            description:
              'A function that executes when a click outside node is detected.'
          }
        ]}
      />
    </PageArticle>
  </PageSection>
</PageWrapper>
