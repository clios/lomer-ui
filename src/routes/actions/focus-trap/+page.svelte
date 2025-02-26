<script lang="ts">
  import CopyCLI from '$lib/components/copy-c-l-i.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import FocusTrapUsage from './focus-trap-usage.svelte';
  import FocusTrapUsageRaw from './focus-trap-usage.svelte?raw';
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
  <title>Focus Trap . lomer-ui</title>
</svelte:head>

<PageWrapper
  {tickler}
  title="Focus Trap"
  sub="Action"
  info="Keeps focus within an element for accessibility."
  prevLabel="Escape Key"
  prevLink="/actions/escape-key"
  nextLabel="Hot Key"
  nextLink="/actions/hot-key"
>
  <!-- INSTALLATION -->
  <PageSection id="1" title="Installation">
    <PageArticle title="Get the action">
      <CopyCLI code={`npx lomer-ui action focus-trap`} />
      <Link
        href="https://github.com/clios/lomer-ui/blob/main/src/lib/actions/focus-trap.svelte.ts"
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
        <FocusTrapUsage />
      </Screen>
      <CopySvelteCode code={FocusTrapUsageRaw} highlightedLines={[8]} />
    </PageArticle>
  </PageSection>
</PageWrapper>
