<script lang="ts">
  import ButtonRaw from '$lib/components/base/button.svelte?raw';
  import CardDemo from '$lib/components/card-demo.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import Paragraph from '$lib/components/base/paragraph.svelte';
  import Preview from './preview.svelte';
  import PreviewRaw from './preview.svelte?raw';
  import Section from '$lib/components/base/section.svelte';
  import Title from '$lib/components/base/title.svelte';
</script>

<svelte:head>
  <title>Lomer UI - Button</title>
</svelte:head>

<Section>
  <p class="text-muted mb-2 text-xs">Component</p>
  <Title>Button</Title>
  <Paragraph>Click it and make actions happen.</Paragraph>
  <CardDemo class="flex-wrap gap-4">
    <Preview />
  </CardDemo>
  <CopySvelteCode open code={PreviewRaw} />
</Section>

<Section>
  <Title>Guide</Title>
  <Paragraph>We only need one component.</Paragraph>
  <CopySvelteCode title="button.svelte" code={ButtonRaw} />
</Section>
