<script lang="ts">
  import Map from './map-usage.svelte';
  import MapRaw from './map-usage.svelte?raw';
  import CopyCLI from '$lib/components/copy-c-l-i.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import Link from '$lib/components/base/link.svelte';
  import PageArticle from '$lib/components/page-article.svelte';
  import PageSection from '$lib/components/page-section.svelte';
  import PageWrapper from '$lib/components/page-wrapper.svelte';
  import Screen from '$lib/components/screen.svelte';
  import HighlightText from '$lib/components/highlight-text.svelte';
  import CopyCSSCode from '$lib/components/copy-c-s-s-code.svelte';

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
  <title>Map . lomer-ui</title>
</svelte:head>

<PageWrapper
  {tickler}
  title="Mapbox"
  sub="Component"
  info="Interactive and customizable map visualization."
  prevLabel="Link Button"
  prevLink="/components/link-button"
  nextLabel="Radio"
  nextLink="/components/radio"
>
  <!-- INSTALLATION -->
  <PageSection id="1" title="Installation">
    <!-- INSTALL MAPBOX -->
    <PageArticle title="Install Mapbox">
      <CopyCLI code={`npm install --save mapbox-gl`} />
      <p>
        Reference: <Link
          href="https://docs.mapbox.com/mapbox-gl-js/guides/install/#import-or-install-mapbox-gl-js"
          target="_blank"
        >
          Import or Install Mapbox-GL-JS
        </Link>
      </p>
    </PageArticle>

    <!-- ADD MAPBOX TOKEN -->
    <PageArticle title="Add Mapbox access token">
      <p>
        Insert access token in your <HighlightText>.env</HighlightText> file.
      </p>
      <CopyCSSCode
        title=".env"
        code="PUBLIC_MAPBOX_TOKEN=[your_api_key_here]"
      />
    </PageArticle>

    <!-- GET THE COMPONENT -->
    <PageArticle title="Get the component">
      <CopyCLI code={`npx lomer-ui get mapbox`} />
      <p>
        Source code:
        <Link
          href="https://github.com/clios/lomer-ui/blob/main/src/lib/components/base/mapbox.svelte"
          target="_blank"
        >
          mapbox
        </Link>
      </p>
    </PageArticle>
  </PageSection>

  <!-- USAGE -->
  <PageSection id="2" title="Usage">
    <PageArticle title="Preview">
      <Screen class="flex-col gap-4">
        <Map />
      </Screen>
      <CopySvelteCode code={MapRaw} />
    </PageArticle>
  </PageSection>
</PageWrapper>
