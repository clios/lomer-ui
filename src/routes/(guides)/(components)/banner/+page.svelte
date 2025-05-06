<script lang="ts">
  import BannerRaw from '$lib/components/base/banner.svelte?raw';
  import CardDemo from '$lib/components/card-demo.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import Paragraph from '$lib/components/base/paragraph.svelte';
  import Preview from './preview.svelte';
  import PreviewRaw from './preview.svelte?raw';
  import Section from '$lib/components/base/section.svelte';
  import Title from '$lib/components/base/title.svelte';
</script>

<svelte:head>
  <title>Lomer UI - Banner</title>
</svelte:head>

<Section>
  <p class="text-muted mb-2 text-xs">Component</p>
  <Title>Banner</Title>
  <Paragraph>Highlight key messages with bold visual emphasis.</Paragraph>
  <CardDemo>
    <Preview />
  </CardDemo>
  <CopySvelteCode open code={PreviewRaw} />
</Section>

<Section>
  <Title>Guide</Title>
  <Paragraph>We only need one component.</Paragraph>
  <CopySvelteCode title="banner.svelte" code={BannerRaw} />
</Section>
