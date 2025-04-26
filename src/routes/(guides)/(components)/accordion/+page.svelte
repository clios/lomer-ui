<script lang="ts">
  import AccordionRaw from '$lib/components/base/accordion.svelte?raw';
  import CardDemo from '$lib/components/card-demo.svelte';
  import CopySvelteCode from '$lib/components/copy-svelte-code.svelte';
  import Paragraph from '$lib/components/base/paragraph.svelte';
  import Preview from './preview.svelte';
  import PreviewRaw from './preview.svelte?raw';
  import Section from '$lib/components/base/section.svelte';
  import Title from '$lib/components/base/title.svelte';
</script>

<svelte:head>
  <title>Lomer UI - Accordion</title>
</svelte:head>

<Section>
  <p class="text-muted text-xs">Create Your Own Component</p>
  <Title>Accordion</Title>
  <Paragraph>Expand and collapse content with ease.</Paragraph>
  <CardDemo class="max-w-96 flex-col">
    <Preview />
  </CardDemo>
  <CopySvelteCode open code={PreviewRaw} />
</Section>

<Section>
  <Title>Guide</Title>
  <Paragraph>We only need one component.</Paragraph>
  <CopySvelteCode title="accordion.svelte" code={AccordionRaw} />
</Section>
