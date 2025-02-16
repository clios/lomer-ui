<script lang="ts">
  import AvatarUsage from './avatar-usage.svelte';
  import AvatarUsageRaw from './avatar-usage.svelte?raw';
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
    }
  ];
</script>

<svelte:head>
  <title>Avatar . lomer-ui</title>
</svelte:head>

<PageWrapper
  {tickler}
  title="Avatar"
  sub="Component"
  info="Display user profiles with a touch of personality."
  prevLabel="Alert"
  prevLink="/components/alert"
  nextLabel="Button"
  nextLink="/components/button"
>
  <!-- INSTALLATION -->
  <PageSection id="1" title="Installation">
    <PageArticle title="Get the component">
      <CopyCLI code={`npx lomer-ui get avatar`} />
      <Link
        href="https://github.com/clios/lomer-ui/blob/main/src/lib/components/base/avatar.svelte"
        target="_blank"
      >
        Source code
      </Link>
    </PageArticle>
  </PageSection>

  <!-- USAGE -->
  <PageSection id="2" title="Usage">
    <PageArticle title="Preview">
      <Screen><AvatarUsage /></Screen>
      <CopySvelteCode code={AvatarUsageRaw} />
    </PageArticle>
  </PageSection>
</PageWrapper>
