<script lang="ts">
  import TextareaRaw from '$lib/components/base/textarea.svelte?raw';
  import CardDemo from '$lib/components/card-demo.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import Paragraph from '$lib/components/base/paragraph.svelte';
  import Preview from './preview.svelte';
  import PreviewRaw from './preview.svelte?raw';
  import Section from '$lib/components/base/section.svelte';
  import Title from '$lib/components/base/title.svelte';
</script>

<svelte:head>
  <title>Lomer UI - Textarea</title>
</svelte:head>

<Section>
  <p class="text-muted text-xs">Component</p>
  <Title>Textarea</Title>
  <Paragraph>Capture multi-line text with ease.</Paragraph>
  <CardDemo class="flex-col max-w-96">
    <Preview />
  </CardDemo>
  <CopySvelteCode open code={PreviewRaw} />
</Section>

<Section>
  <Title>Guide</Title>
  <Paragraph>We only need one component.</Paragraph>
  <CopySvelteCode title="textarea.svelte" code={TextareaRaw} />
</Section>
