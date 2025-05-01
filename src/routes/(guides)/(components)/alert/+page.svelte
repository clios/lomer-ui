<script lang="ts">
  import AlertRaw from '$lib/components/base/alert.svelte?raw';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import Paragraph from '$lib/components/base/paragraph.svelte';
  import Preview from './preview.svelte';
  import PreviewRaw from './preview.svelte?raw';
  import Section from '$lib/components/base/section.svelte';
  import Title from '$lib/components/base/title.svelte';
  import CardDemo from '$lib/components/card-demo.svelte';
</script>

<svelte:head>
  <title>Lomer UI - Alert</title>
</svelte:head>

<Section>
  <p class="text-muted mb-2 text-xs">Component</p>
  <Title>Alert</Title>
  <Paragraph>Grabs attention and delivers important information.</Paragraph>
  <CardDemo>
    <Preview />
  </CardDemo>
  <CopySvelteCode open code={PreviewRaw} />
</Section>

<Section>
  <Title>Guide</Title>
  <Paragraph>We only need one component.</Paragraph>
  <CopySvelteCode title="alert.svelte" code={AlertRaw} />
</Section>
