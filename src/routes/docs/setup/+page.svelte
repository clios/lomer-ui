<script>
  import CopyCLI from '$lib/components/copy-c-l-i.svelte';
  import Link from '$lib/components/ui/link.svelte';
  import PageArticle from '$lib/components/page-article.svelte';
  import PageSection from '$lib/components/page-section.svelte';
  import PageWrapper from '$lib/components/page-wrapper.svelte';
</script>

<svelte:head>
  <title>Setup . lomer-ui</title>
</svelte:head>

<PageWrapper
  title="Setup"
  sub="Docs"
  info="What setup? This is a zero config UI library."
  prevLabel="Introduction"
  prevLink="/docs/introduction"
  nextLabel="Dark Mode"
  nextLink="/docs/dark-mode"
>
  <PageSection id="1" title="We don't do that here">
    <PageArticle id="1.1">
      <p>We just run a command, and it just works.</p>
      <CopyCLI code="npx lomer-ui get [component]" />
      <p>This will check and install automatically dependencies needed.</p>
    </PageArticle>
  </PageSection>
</PageWrapper>
